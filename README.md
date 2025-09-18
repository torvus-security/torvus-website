# Torvus WWW Starter (Next.js 14 + Tailwind v3)

## Quickstart

```bash
pnpm install
pnpm dev
```

## Bring in your v0 export

1. Copy the CSS from your v0 export into `styles/v0.css`. If there are multiple CSS files, concatenate them here.
2. Move any images/fonts/scripts into `/public` keeping folder names, and update URLs in the CSS/markup if needed.
3. Replace the content of `app/page.tsx` with the markup from the v0 export (change `class` → `className`).

## Deploy

- Push to a new GitHub repo, import to Vercel (Framework Preset: **Next.js**).
- No special settings required.

## Analytics instrumentation

1. In GA4, generate an API secret for your property and mark the `generate_lead` event as a key event. Capture the `GA4_MEASUREMENT_ID` and `GA4_API_SECRET` values.
2. In PostHog, note the project API key and (optionally) a custom ingestion host.
3. Copy `.env.example` to `.env.local` and populate:
   - `NEXT_PUBLIC_GA_ID`
   - `GA4_MEASUREMENT_ID`
   - `GA4_API_SECRET`
   - `POSTHOG_PROJECT_API_KEY`
   - `POSTHOG_INGESTION_HOST` (defaults to `https://us.i.posthog.com`)
   - `FILLOUT_WEBHOOK_SECRET`
   - `RATE_LIMIT_SECRET`
4. Add the same environment variables to Vercel (Project Settings → Environment Variables).
5. Point the Fillout webhook to `https://<your-domain>/api/fillout?secret=<FILLOUT_WEBHOOK_SECRET>` and submit a test response. Use GA4 Realtime/DebugView to confirm the `generate_lead` event and PostHog Live Events to confirm `lead_submitted` appear within about a minute.

# torvus-website
