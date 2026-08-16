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
- v4 (2026-08-14, user feedback): primary accent shifted from #D4C942 to lighter #E8DC6A (buttons, links, icons, highlights, ticker, gradients, glows; readable light-bg variant #9C8F22 kept for text on white). Section numbering removed from homepage chapter pills (inner pages keep step numbers).
- v5 (2026-08-14, user feedback): further density pass — sections py-8/12, FinalCTA py-10/14, PageHero pt-20/24 pb-8/10, hero pt-20/24 pb-8, mt-10/9/8 → mt-7/6, gap-10 → gap-8, footer py-9/12.
- v6 (2026-08-14): removed hero badge + footer coming-soon pills (visual editor requests); perf fix — removed fixed grain overlay, Lenis lerp 0.16, lighter header blur.
- v7 (2026-08-14, user feedback "dull"): brightness pass — greens lifted (#284525→#31602C, #1f361d→#274A22, #182b17→#1E3C1A, #30512d→#3A6335), gold #E8DC6A→#EFE35F, light sections #F7F8F1→#FBFCF4, stronger gold glows.
- v8 (2026-08-14): real app creatives integrated — user-supplied Poker lobby and Predictions screens (/public/creative-poker.jpg, creative-predictions.jpg) now used in hero, home Poker/Predictions sections, two-up App Showcase, Poker page lobby, Predictions page experience, Download page. CSS PhoneMockup retained only for Poker page "The Table" section.
- v9 (2026-08-16, user feedback): greens darkened — #31602C→#23401F (hero/main), #274A22→#1B3318 (dark sections), #1E3C1A→#142711 (footer), #3A6335→#2C4A27 (cards). Gold #EFE35F unchanged.
- v10 (2026-08-16, user feedback): uniform brand green — ALL green backgrounds set to original PRD hex #284525 (header, hero, all dark sections, footer); all yellow radial glow patches removed sitewide; cards keep a slightly lighter derived shade #30512D for structure. Palette now: #284525 + #EFE35F gold family + white/light #FBFCF4.
- v11 (2026-08-16, user feedback): content intelligence pass — all descriptive copy rewritten richer and more specific (features, steps, why, trust, FAQs, page intros); de-boxed layouts — Poker features, Predictions steps and How-It-Works steps are now editorial border-top flows, Why NextZGames is an icon+text list instead of cards.
- v12 (2026-08-16, user feedback "not a gaming website"): gaming atmosphere pass — floating card-suit icons with drift animation in hero/final CTA, mouse-tilt 3D on hero app creative, suit icons in ticker separators, giant suit watermarks (Spade in Poker section, Target in Predictions), suits row under hero CTAs, pulsing live dot in final CTA badge.
- v13 (2026-08-16, user feedback): REVERTED v12 gaming effects (suits, tilt, watermarks, pulse dot) for a clean professional look; brand green changed to #254F1F sitewide (replaces #284525 everywhere).
- v14 (2026-08-16, user feedback): de-yellowed light areas — light sections now pure #FFFFFF, dark-gold text on white (#A3941F) replaced with green #254F1F, gold rims around app creatives changed to neutral white/15, brand-statement accent line now green. Gold remains only on dark-green areas (buttons, ticker, links, icon tiles).
- v15 (2026-08-16, user feedback): FULL THEME INVERSION — all green backgrounds (#254F1F) replaced with gold #EFE35F sitewide; green is now the foreground color (text, buttons, outlines, icon tiles, pills). Buttons = green with gold text; ticker = green band with gold text; logo sits on a green chip (artwork needs dark backing); light sections stay pure white; cards on gold sections are white with green text. PhoneMockup app screens excluded (they depict the app UI).
- v16 (2026-08-16, user feedback): REVERTED v15 — dark green #254F1F is again the base background across the entire website; white text + gold accents (#EFE35F buttons, pills, links, icon chips, gradient headline words) on green sections; white sections alternate with green text; ticker is a green band with gold text; logo chip removed (logo sits directly on green).
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
