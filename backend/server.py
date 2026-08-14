import os
import re
import ipaddress
import logging
import time
from pathlib import Path
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
from collections import defaultdict, deque

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter, HTTPException, Request
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
SUPPORT_EMAIL = os.environ["SUPPORT_EMAIL"]
EMAIL_REPLY_TO = os.environ.get("EMAIL_REPLY_TO")

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str, reply_to: Optional[str] = None) -> Optional[str]:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to or EMAIL_REPLY_TO:
        payload["contact_email"] = reply_to or EMAIL_REPLY_TO
    try:
        async with httpx.AsyncClient(timeout=30) as http:
            resp = await http.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json().get("id")
    except httpx.HTTPStatusError as e:
        logger.error(f"Email send failed: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="Failed to send email")
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send email")


ALLOWED_CATEGORIES = {"general", "poker", "predictions", "account", "payments", "app", "responsible-gaming", "other"}


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    email: EmailStr
    mobile: str = Field(min_length=8, max_length=20)
    category: str
    subject: str = Field(min_length=3, max_length=120)
    message: str = Field(min_length=10, max_length=2000)


_rate: dict = defaultdict(deque)


def _rate_limit(ip: str, limit: int = 5, window: int = 3600):
    now = time.time()
    q = _rate[ip]
    while q and now - q[0] > window:
        q.popleft()
    if len(q) >= limit:
        raise HTTPException(status_code=429, detail="Too many requests. Please try again later.")
    q.append(now)


@api_router.get("/")
async def root():
    return {"status": "ok", "brand": "NextZGames"}


@api_router.post("/contact")
async def submit_contact(payload: ContactRequest, request: Request):
    if payload.category not in ALLOWED_CATEGORIES:
        raise HTTPException(status_code=422, detail="Invalid category")
    _rate_limit(request.client.host if request.client else "unknown")

    doc = payload.model_dump()
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    await db.contact_requests.insert_one(doc)

    def row(label, value):
        return (f'<tr><td style="padding:8px 16px;color:#9fb39a;font-size:12px;'
                f'text-transform:uppercase;letter-spacing:1px;vertical-align:top">{label}</td>'
                f'<td style="padding:8px 16px;color:#ffffff;font-size:14px">{escape(value)}</td></tr>')

    html = (
        '<table role="presentation" width="100%" style="background:#1f361d;padding:32px 0">'
        '<tr><td align="center"><table role="presentation" width="560" style="background:#284525;'
        'border:1px solid rgba(212,201,66,0.3);border-radius:12px;font-family:Arial,sans-serif">'
        '<tr><td style="padding:24px 24px 8px;color:#D4C942;font-size:18px;font-weight:bold">'
        f'New Support Request — {escape(EMAIL_FROM_NAME)}</td></tr>'
        '<tr><td style="padding:0 8px 16px"><table role="presentation" width="100%">'
        + row("Name", payload.name)
        + row("Email", payload.email)
        + row("Mobile", payload.mobile)
        + row("Category", payload.category)
        + row("Subject", payload.subject)
        + row("Message", payload.message)
        + '</table></td></tr>'
        f'<tr><td style="padding:16px 24px;color:#9fb39a;font-size:11px">Sent by the {escape(EMAIL_FROM_NAME)} '
        'website contact form. We never ask for passwords or card details by email.</td></tr>'
        '</table></td></tr></table>'
    )
    email_id = await send_email(
        to=SUPPORT_EMAIL,
        subject=f"[NextZGames Support] {payload.category}: {payload.subject}",
        html=html,
    )
    return {"status": "success", "email_id": email_id}


class TrackEvent(BaseModel):
    event: str = Field(min_length=2, max_length=60)
    page: Optional[str] = Field(default=None, max_length=200)
    meta: Optional[dict] = None


@api_router.post("/track")
async def track_event(payload: TrackEvent):
    doc = payload.model_dump()
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    await db.analytics_events.insert_one(doc)
    return {"status": "ok"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
