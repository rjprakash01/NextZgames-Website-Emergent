# NextZGames — Official Website PRD

## Original Problem Statement
Official brand & marketing website for NextZGames (Poker + Predictions mobile app). No gameplay, no login, no admin panel, no CMS, no tournaments. Primary objective: brand awareness + app downloads. Brand colors: Deep Green #284525 (dominant), White #FFFFFF, Brand Gold #D4C942 (accent). Mobile-first, premium, Awwwards-level motion (framer-motion reveals, lenis smooth scroll, marquee, kinetic hero).

## Architecture
- Frontend: React (CRA/craco) + Tailwind + framer-motion + lenis + react-fast-marquee + qrcode.react + sonner. Multi-page via react-router-dom v7.
- Backend: FastAPI — POST /api/contact (validated, rate-limited 5/hr/IP, saved to MongoDB + email via Emergent managed Resend proxy), POST /api/track (analytics events → MongoDB).
- DB: MongoDB collections `contact_requests`, `analytics_events` (analytics/backup only — content is static in code).
- Logo: user-supplied, background-keyed to transparent PNG at /app/frontend/public/logo.png.

## User Personas
- New visitor from ads/social/search discovering the brand.
- Poker player evaluating the app experience.
- Predictions fan exploring how it works.
- Existing player needing support/legal info.

## Core Requirements (static)
Home (hero, brand statement, Poker, Predictions, Why, App Showcase, Promotions, How It Works, Trust, FAQ, Final CTA), Poker, Predictions, Promotions, How It Works, Download (smart device detect + QR), About, Responsible Gaming, FAQ, Contact (form → email), 4 legal pages. Download App is the primary conversion everywhere.

## Implemented (2026-08-14)
- All 15 routes with brand system (#284525 / #D4C942 / #FFFFFF), Plus Jakarta Sans + Inter.
- v2 (2026-08-14, user feedback): alternating light editorial sections (#F7F8F1 warm white) with white cards + dark-green ink text; dark gold (#9C8F22) used for accents on light backgrounds; deep green retained for hero, marquee, Poker, Why, Promotions, Trust, Final CTA and footer. Lenis tuned (lerp 0.08, smoothWheel).
- v3 (2026-08-14, user feedback "too big/dull"): compact type scale (h2 ~text-3xl, section padding py-16/24, cards p-6, container max-w-6xl), vibrant gold system — gradient gold buttons with glow, gold marquee band with green text, gold-filled icon chips, gold-gradient headline accents, chapter pills instead of plain labels, gold gradient bar atop footer.
- Kinetic hero with masked line-by-line reveal, parallax floating phone mockup, giant outlined NEXTZ backdrop.
- Slow editorial marquee; numbered manifesto chapters 01–11; Lenis momentum scrolling; scroll reveals throughout.
- CSS-crafted app screen mockups (home, poker lobby, table, predictions, wallet) in premium phone frames.
- Download page: device detection, Android/iOS "Coming Soon" cards, live QR code → /download.
- Contact form → MongoDB + Emergent managed Resend email (guardrail-gated template). Verified end-to-end with Resend test address.
- UTM capture + lightweight analytics events for download/CTA clicks.
- Legal pages (Terms, Privacy, Payment Policy, Promotion Terms) with review-pending placeholder copy.
- Mobile sticky bottom CTA; mobile menu with full nav.

## Credentials / Config
- No user accounts exist (by design). See test_credentials.md.
- SUPPORT_EMAIL in backend/.env is placeholder support@nextzgames.com — email delivery activates once a real inbox is provided (proxy rejects undeliverable addresses).

## Backlog
- P0: Real support email inbox for contact delivery; real app store/APK links at launch.
- P1: Real app screenshots replacing CSS mockups; final legal/compliance copy review; social profile URLs.
- P2: Deferred deep links (Android App Links / iOS Universal Links); /promotions/[slug] detail pages; sitemap.xml + robots.txt; cookie policy if needed.

## Next Tasks
1. Swap SUPPORT_EMAIL + EMAIL_REPLY_TO with real inbox, restart backend.
2. Replace "Coming Soon" download buttons with store links.
3. Drop real app screenshots into PhoneMockup screens.
4. Legal sign-off on legal pages + promotions.
