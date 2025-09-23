# Torvus Security — Repository Audit & Enhancement Report

- **Repository:** torvus-website
- **Date:** 2025-09-23 (AEST)
- **Reviewer:** Codex (Senior Full-Stack Engineer & Security Reviewer)

## 1. Repo Snapshot

### Tech Stack & Tooling
- Next.js 14.2.16
- React 18.3.1
- TypeScript 5.9.2
- Tailwind CSS 3.4.14
- Analytics/testing deps: PostHog, Google Analytics 4, Vitest, Playwright

### Build & Development Commands
- `pnpm dev`
- `pnpm build`
- `pnpm start`
- `pnpm lint`
- `pnpm test`
- `pnpm typecheck`

### Top-Level Structure (Depth ≤ 2)
- `app/`
- `components/` (`forms/`, `ui/`, `__tests__/`)
- `content/`
- `docs/`
- `lib/`
- `public/`
- `styles/`
- `tests/`
- Key config files: `middleware.ts`, `tailwind.config.ts`, `next.config.mjs`, etc.

## 2. Findings by Severity

### [High] Pricing enterprise contact form blocked by CSP
- **Files:** `app/(site)/pricing/page.tsx:60-139`, `middleware.ts:69-79`
- **Description:** Pricing page form uses `mailto:` action, but CSP restricts `form-action 'self'`, blocking submissions.
- **Evidence:** Incompatible CSP and `mailto:` configuration.
- **Impact:** Enterprise leads cannot submit, causing silent conversion loss.
- **Recommendation:** Replace with same-origin submission path or adjust CSP after implementing handler.

### [High] Contact form submissions discarded
- **Files:** `app/(site)/contact/actions.ts:66-79`
- **Description:** Server action builds payload then discards it (`void payload;`).
- **Evidence:** TODO confirms integration pending.
- **Impact:** Submissions appear successful but reach nobody.
- **Recommendation:** Integrate with queue/CRM/email service and add monitoring.

### [Medium] Canonical metadata uses `www` instead of platform base
- **Files:** `lib/site-config.ts:1-33`, `app/robots.ts:1-12`, `lib/structured-data.ts:3-29`
- **Description:** `siteConfig.url` points to `https://www.torvussecurity.com`; expected `https://platform.torvussecurity.com`.
- **Impact:** SEO duplication and incorrect trust materials.
- **Recommendation:** Update canonical URL and dependent assets.

### [Medium] Structured data references nonexistent `/search` endpoint
- **Files:** `lib/structured-data.ts:24-27`
- **Description:** `SearchAction` references `/search`, which is absent.
- **Impact:** Schema warnings/errors in search engines.
- **Recommendation:** Implement `/search` or remove `SearchAction`.

### [Medium] Status page lacks uptime & incident content
- **Files:** `app/(site)/status/page.tsx:17-34`
- **Description:** Status page only links to external site; expected inline content per plan.
- **Impact:** Reduced transparency/trust.
- **Recommendation:** Add uptime badges, incident placeholders, maintenance schedule.

### [Low] Use Cases page contains placeholder text
- **Files:** `app/use-cases/page.tsx:9-76`
- **Description:** Persona cards still marked as placeholder copy.
- **Impact:** Diminished professionalism and clarity.
- **Recommendation:** Replace with finalized narratives.

## 3. Security Review

- **Headers:** Middleware provides nonce-based CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options; CSP conflicts with `mailto:` form.
- **Authentication & Authorization:** No auth areas; contact server action validated and rate-limited, but submission sink missing.
- **Upload Pipeline:** Not present.
- **Secrets & Configs:** `.env.example` documents GA4, PostHog, Fillout, rate-limit secrets; production requires `RATE_LIMIT_SECRET`.
- **Dependency Audit:** No automated audit/scanning configured; consider Renovate, Dependabot, or `pnpm audit`.
- **Build/CI/CD:** Only package scripts present; ensure Vercel parity externally.
- **Logging & Auditing:** Marketing endpoints lack logging; dropped contact submissions leave no trail.
- **Third-Party Embeds:** Fillout iframe sandboxed with proper CSP/Permissions-Policy allowances.
- **RLS Policies:** Not applicable (no Supabase usage).
- **Rate Limiting & Anti-Abuse:** Cookie HMAC limiter protects contact action; pricing form bypasses it via `mailto:`.
- **Cryptography:** None beyond standard HTTPS expectations.

## 4. Expected Features Cross-Check

### Implemented
- Home page highlights dead-man's switch, duress, provenance, Digital Legacy features.
- Digital Legacy page includes capability matrix, tiering, analytics instrumentation.
- Waitlist page embeds Fillout form with GA4/PostHog instrumentation and sandboxing.
- Trust Center landing page links to security, privacy, terms, status resources.
- Analytics taxonomy v1 implemented via `AnalyticsEvent` component and documented events.

### Missing
- Status page lacks inline uptime badges, incident placeholders, SLA summaries.

### Partial
- Contact flows validate and rate-limit but do not deliver payloads.
- Use Cases page exists but contains placeholder descriptions.

## 5. Quick Wins (≤ 1 day)

### Adopt canonical platform URL in metadata
```diff
--- a/lib/site-config.ts
+++ b/lib/site-config.ts
@@
-  url: "https://www.torvussecurity.com",
+  url: "https://platform.torvussecurity.com",
```
Update downstream references (robots, sitemap, OG images) accordingly.

### Replace pricing `mailto:` form with shared contact workflow
```diff
--- a/app/(site)/pricing/page.tsx
+++ b/app/(site)/pricing/page.tsx
@@
-              <form
-                className="space-y-4 rounded-3xl border border-storm/12 bg-white/95 p-6 shadow-soft-1"
-                method="post"
-                action="mailto:security@torvussecurity.com"
-              >
-                …fields…
-              </form>
+              <ContactForm />
```
Add `import { ContactForm } from "@/components/forms/contact-form";` at the top.

### Remove unused `SearchAction` from structured data
```diff
--- a/lib/structured-data.ts
+++ b/lib/structured-data.ts
@@
-  {
-    "@context": "https://schema.org",
-    "@type": "WebSite",
-    name: siteConfig.name,
-    url: siteConfig.url,
-    potentialAction: {
-      "@type": "SearchAction",
-      target: `${siteConfig.url}/search?q={search_term_string}`,
-      "query-input": "required name=search_term_string",
-    },
-  },
+  {
+    "@context": "https://schema.org",
+    "@type": "WebSite",
+    name: siteConfig.name,
+    url: siteConfig.url,
+  },
```

## 6. Remediation Plan (1 Week)

### Day 1–2: Restore Lead Capture Reliability
- Implement delivery path for `submitContactAction` (Supabase function, transactional email, etc.).
- Replace pricing `mailto` form with shared contact workflow; adjust CSP if necessary.
- **Milestone:** Submissions generate stored record/notification; forms pass manual QA.

### Day 2–3: Correct Metadata & Structured Data
- Update `siteConfig.url`, robots, sitemap, OG assets, structured data to canonical domain.
- Remove/replace `SearchAction`; validate via Google Rich Results test.
- **Milestone:** Metadata tools show canonical host without schema warnings.

### Day 3–4: Enhance Status Experience
- Add onsite uptime badges, incident placeholders, maintenance schedule, external links per plan.
- **Milestone:** Status page matches Status Page Content Plan requirements.

### Day 4–5: Finalize Content
- Replace Use Cases placeholder copy with finalized narratives aligned to personas.
- Align Trust Center content with Customer Assurance Pack references.
- **Milestone:** Content review passes marketing sign-off.

### Day 5–6: QA & Instrumentation
- Regression test forms, ensure analytics events fire per taxonomy.
- Run lint/tests; review CSP after changes.
- **Milestone:** All automated checks pass; CSP validated via browser console.

