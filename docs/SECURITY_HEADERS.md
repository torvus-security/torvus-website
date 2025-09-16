# Security Headers & CSP

All requests pass through `middleware.ts`, which attaches nonce-based CSP enforcement and security headers.

Current headers:

- `Content-Security-Policy`: `default-src 'self'; script-src 'self' 'nonce-<dynamic>' sha256-13Mu0NUzfvJHyN7KVhqxHjBb9z4aNRJDjxeJ4sTXgD8=; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'`
- `Strict-Transport-Security`: `max-age=31536000; includeSubDomains; preload`
- `X-Content-Type-Options`: `nosniff`
- `Referrer-Policy`: `strict-origin-when-cross-origin`
- `Permissions-Policy`: `camera=(), microphone=(), geolocation=()`
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
    url: "https://www.torvus.security",
    logo: "https://www.torvus.security/icon.svg",
    sameAs: ["https://status.torvus.security"],
    contactPoint: [{"@type":"ContactPoint","contactType":"support","email":"hello@torvus.security"}]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Torvus Security",
    url: "https://www.torvus.security",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.torvus.security/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
];
const json = JSON.stringify(structuredData);
console.log('sha256-' + crypto.createHash('sha256').update(json).digest('base64'));
NODE
```

Ensure the script rendered by `StructuredData` matches this JSON exactly so the hash stays valid.
