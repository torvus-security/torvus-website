# Contributing

Thanks for helping improve Torvus' marketing site.

## Prerequisites

- Node 20+
- pnpm 8+

## Commands

```bash
pnpm install
pnpm dev          # local development
pnpm lint         # ESLint with Tailwind + TypeScript rules
pnpm format       # Prettier formatting
pnpm build        # Next production build
```

Use `pnpm lint` before submitting changes; the CI pipeline will also run linting, type checks, unit tests (Vitest), Playwright E2E, and Lighthouse budgets once those suites land.

## Code style

- Use the utilities in `lib/metadata.ts` and `lib/rate-limit.ts` instead of rolling your own.
- Tailwind class names should favour design tokens defined in `tailwind.config.ts`.
- Keep accessibility in mind (visible focus, aria-live regions, reduced motion).

## Merge process

Open a PR with a clear summary of what changed, link to relevant tickets, and note any testing performed. Reviewers will request Lighthouse reports for substantial UI shifts.
