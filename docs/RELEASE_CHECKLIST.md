# Release Checklist

Before deploying to production ensure:

1. `pnpm lint` passes with no warnings.
2. Type-check the project (`pnpm exec tsc --noEmit`).
3. Run component/unit tests once added (`pnpm test`).
4. Run Playwright E2E scenarios (nav, waitlist, contact) in CI or locally.
5. Generate a Lighthouse report (desktop ≥95, mobile ≥90) against a preview build.
6. Confirm JSON-LD hash and CSP configuration in `middleware.ts`.
7. Verify waitlist and contact submissions reach the intended sink (currently console stub).
8. Update `/docs/CHANGELOG.md` (or repo CHANGELOG) with notable changes.
