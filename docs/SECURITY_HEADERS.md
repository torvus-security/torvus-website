# Security Headers & CSP

All requests pass through `middleware.ts`, which attaches nonce-based CSP enforcement and supporting security headers.

Current headers:

- `Content-Security-Policy`: `default-src 'self'; script-src 'self' 'nonce-<dynamic>' sha256-13Mu0NUzfvJHyN7KVhqxHjBb9z4aNRJDjxeJ4sTXgD8= https://cdn-cookieyes.com https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://us.i.posthog.com; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://www.clarity.ms https://c.bing.com https://log.cookieyes.com https://us.i.posthog.com; frame-src 'self' https://*.fillout.com; frame-ancestors 'none'; base-uri 'none'; form-action 'self'`
- `Strict-Transport-Security`: `max-age=31536000; includeSubDomains; preload`
- `X-Content-Type-Options`: `nosniff`
- `Referrer-Policy`: `strict-origin-when-cross-origin`
- `Permissions-Policy`: `camera=(self "https://forms.fillout.com" "https://*.fillout.com"), microphone=(self "https://forms.fillout.com" "https://*.fillout.com"), geolocation=(self "https://forms.fillout.com" "https://*.fillout.com")`
- `X-Frame-Options`: `DENY`

The JSON-LD script rendered from `components/structured-data.tsx` is static. Its SHA-256 hash is `sha256-13Mu0NUzfvJHyN7KVhqxHjBb9z4aNRJDjxeJ4sTXgD8=`. When the structured data changes, recompute the hash before updating `middleware.ts`:

```bash
node - <<'NODE'
const crypto = require('node:crypto');
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Torvus Security",
    url: "https://platform.torvussecurity.com",
    logo: "https://platform.torvussecurity.com/icon.svg",
    sameAs: ["https://status.torvussecurity.com"],
    contactPoint: [{"@type":"ContactPoint","contactType":"support","email":"hello@torvussecurity.com"}]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Torvus Security",
    url: "https://platform.torvussecurity.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://platform.torvussecurity.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
];
const json = JSON.stringify(structuredData);
console.log('sha256-' + crypto.createHash('sha256').update(json).digest('base64'));
NODE
```

Ensure the script rendered by `StructuredData` matches this JSON exactly so the hash stays valid. If you add new inline scripts, prefer external files. When inline is unavoidable, either add the content hash to the CSP or load it behind the `x-torvus-csp-nonce` header managed by the middleware.
