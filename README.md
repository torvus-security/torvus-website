# Torvus Website (Next.js 14 + Tailwind CSS)

## Quickstart

```bash
pnpm install
pnpm dev
```

- Marketing entrypoint lives at `app/page.tsx` (marketing pages live alongside it in `app/(site)/**`).
- Shared gradients/hover helpers live in `styles/v0.css` (pure CSS utilities).
- Global typography/palette is defined in `app/(site)/globals.css`; fonts load through `next/font/local` in `app/fonts.ts`.

## Customising content

1. Update hero + sections in `app/page.tsx` and supporting pages in `app/(site)/**`.
2. Use the helpers in `styles/v0.css` (`.text-gradient-hero`, `.hover-card`, `.pressable`) to keep gradients two-tone and interactions consistent.
3. Add new navigation links via `lib/navigation.ts` and update footer copy in `components/footer.tsx`.

## Deploy

- Push to a GitHub repository and import into Vercel (Framework Preset: **Next.js**).
- Ensure environment variables are configured in Vercel before running the first build (see below).

## Analytics & webhooks

1. GA4: mark `generate_lead` as a key event and capture `GA4_MEASUREMENT_ID` + `GA4_API_SECRET`.
2. PostHog: capture the project API key and ingestion host (defaults to `https://us.i.posthog.com`).
3. Copy `.env.example` to `.env.local` and populate:
   - `NEXT_PUBLIC_GA_ID`
   - `GA4_MEASUREMENT_ID`
   - `GA4_API_SECRET`
   - `POSTHOG_PROJECT_API_KEY`
   - `POSTHOG_INGESTION_HOST`
   - `FILLOUT_WEBHOOK_SECRET`
   - `RATE_LIMIT_SECRET`
4. Mirror the same variables in Vercel Project Settings → Environment Variables.
5. Point the Fillout webhook to `https://<your-domain>/api/fillout?secret=<FILLOUT_WEBHOOK_SECRET>` and submit a test response. GA4 Realtime and PostHog Live Events should receive `generate_lead` / `lead_submitted` within a minute.

## Health & diagnostics

- `/api/health` responds with `{ status: "ok" }` for uptime checks.
- Security headers are documented in `docs/SECURITY_HEADERS.md`; update the JSON-LD hash if structured data changes.
