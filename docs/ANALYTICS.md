# Analytics Stub

Analytics now use Google Analytics 4 and PostHog with minimal event capture. Scripts load with the middleware-provided nonce so CSP remains intact.

Current events:

- `dl_page_view` fires on the Digital Legacy page and mirrors a pageview call.
- `pricing_cta_click` captures tier + CTA label from the pricing cards.
- `waitlist_submit` triggers when the Fillout embed surfaces a thank-you state (message listener fallback).

Scripts honour the CSP `nonce` header (`x-torvus-csp-nonce`). Configure the following public environment variables when deploying:

- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`
