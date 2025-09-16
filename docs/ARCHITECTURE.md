# Architecture Overview

This marketing site uses the Next.js App Router. Page routes live under `app/(site)` with grouped folders for top-level marketing content (`features`, `security`, `digital-legacy`, etc.), utility endpoints (`api/og`), and legal MDX pages resolved from `content/legal` via a small loader in `lib/mdx.ts`.

Shared layout concerns (fonts, tokens, header, footer) live in reusable components under `components`. Design tokens and typography scale are defined in `tailwind.config.ts` and global CSS in `app/(site)/globals.css`.

Forms (`/waitlist`, `/contact`) use server actions, Zod validation, sanitisation, and a stateless, cookie-backed rate limiter from `lib/rate-limit.ts`. Structured data, CSP, and security headers are enforced centrally in `middleware.ts`.

Static assets such as fonts are bundled from `/public/fonts`. SEO helpers live in `lib/metadata.ts`, and the OG image generator is implemented as an edge function in `app/api/og/route.tsx` using local fonts.
