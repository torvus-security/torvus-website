import { siteConfig } from "./site-config";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    sameAs: ["https://status.torvussecurity.com"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "support",
        email: "hello@torvussecurity.com",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
] as const;

export function getStructuredDataJson(): string {
  return JSON.stringify(structuredData);
}
