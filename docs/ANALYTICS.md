# Analytics Stub

Third-party analytics are intentionally omitted. The plan is to introduce a self-hosted or privacy-preserving module that can be toggled per environment.

Current state:

- No tracking requests are sent from the marketing site.
- Middleware provides a hook (`x-torvus-csp-nonce`) to safely inject future first-party scripts.
- When analytics are required we will prefer self-hosted solutions (e.g., PostHog, Plausible) or bespoke measurement via server-side logging.

Open questions:

- Which Preview/Prod environments should receive metrics?
- Do we want to store session data in Torvus infrastructure or a separate lake?
- How does analytics reconcile with CSP and privacy commitments?
