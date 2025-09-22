# AGENTS.md — Torvus Website

You are an automated coding agent working **only** in this repository (the public marketing site at https://www.torvussecurity.com). Follow these rules.

## Purpose
Marketing/brand site for Torvus Security. Drives waitlist and explains product value. Must reflect security branding and performance best practices.

## Tech Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS, shadcn/ui (light usage)
- Hosting: Vercel; DNS via Cloudflare; apex → www redirect
- Fonts/Brand: Satoshi (headings), Erode (body); palette: Storm, Thunder, Lapis (primary), Cranberry, Lagoon, Mist, White
- Embeds: Fillout (waitlist), with origin allowlisted in Permissions-Policy/CSP as needed
- Analytics: GA4 + PostHog (page + select events)

## Commands
- Install: `pnpm install`
- Dev: `pnpm dev`
- Build: `pnpm build`
- Lint/Format: `pnpm lint` / `pnpm format`

## Environment
`.env.local` with:
- `NEXT_PUBLIC_SITE_URL=https://www.torvussecurity.com`
- Analytics keys as needed
- If Fillout embed present, ensure CSP/Permissions-Policy allow its origin (camera/microphone/geolocation only if required by that flow)

## Structure (typical)
```
/app
/components
/lib
/styles
/public
```

## Brand & UX Guardrails
- Use the Torvus palette and typography consistently.
- Primary CTAs should not overpower brand mark; reduce Cranberry button dominance (size/weight) when it steals focus from logo/heading.
- Mobile hero mockup must include: diamond symbol + “Torvus Security”; consider icons for Vaults / Recipients / Policies / Check-ins within the mockup.
- Footer: consistent typography scale; tidy link groups.

## Headers & Security
- Keep strict CSP and Security Headers; selectively relax for required embeds (Fillout).
- If a Fillout “thank you” page is used (no redirect), no code change is strictly required; just ensure the embed origin is whitelisted.

## Workflow Preferences
- Whole-file replacements are acceptable for component rewrites.
- Use small, descriptive commits with a quick “why”.

## Definition of Done
- `pnpm build` clean; no console errors.
- Lighthouse reasonably high (perf/accessibility/SEO).
- CSP/headers validated; no mixed content.
- Visual QA: hero legibility, footer consistency, mobile mockup contents present.
