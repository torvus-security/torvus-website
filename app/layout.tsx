import { headers } from "next/headers";
import Script from "next/script";

import "./(site)/fonts.css";
import "./(site)/globals.css";
import "./(site)/motion.css";

import Footer from "@/components/footer";
import SiteHeader from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";

import type { Metadata } from "next";
import type { ReactNode } from "react";

const DEFAULT_POSTHOG_HOST = "https://us.i.posthog.com";

function getPosthogHost() {
  const rawHost = process.env.POSTHOG_INGESTION_HOST ?? DEFAULT_POSTHOG_HOST;

  try {
    const url = new URL(rawHost);
    const pathname = url.pathname.replace(/\/$/, "");
    return `${url.origin}${pathname}`;
  } catch {
    return DEFAULT_POSTHOG_HOST;
  }
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s | Torvus Security",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const headersList = headers();
  const nonce = headersList.get("x-torvus-csp-nonce") ?? undefined;
  const hostHeader = headersList.get("host") ?? "";
  const hostname = hostHeader.split(":")[0]?.toLowerCase() ?? "";
  const isTorvusDomain =
    hostname === "torvus.security" || hostname.endsWith(".torvus.security");
  const loadCookieConsent = isTorvusDomain;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const posthogKey = process.env.POSTHOG_PROJECT_API_KEY;
  const posthogHost = getPosthogHost();

  const claritySnippet = `
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "tchy0bk855");
`.trim();

  const gaInlineScript = gaId
    ? `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${JSON.stringify(gaId)});
`.trim()
    : null;

  const posthogInlineScript = posthogKey
    ? `
(function() {
  const apiKey = ${JSON.stringify(posthogKey)};
  const apiHost = ${JSON.stringify(posthogHost)};
  const scriptId = 'posthog-js';

  if (document.getElementById(scriptId)) {
    return;
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = apiHost + '/static/array.js';
  script.onload = function() {
    if (window.posthog) {
      window.posthog.init(apiKey, {
        api_host: apiHost,
        capture_pageview: true,
      });
    }
  };

  document.head.appendChild(script);
})();
`.trim()
    : null;

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/satoshi-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/satoshi-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/erode-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <StructuredData />
        {loadCookieConsent ? (
          <>
            <Script
              id="cookieyes"
              nonce={nonce}
              strategy="beforeInteractive"
              type="text/javascript"
              src="https://cdn-cookieyes.com/client_data/0bcbca25e25835d971a02335/script.js"
            />
            {gaId ? (
              <>
                <Script
                  id="ga4-src"
                  nonce={nonce}
                  strategy="afterInteractive"
                  type="text/plain"
                  data-cookiecategory="analytics"
                  src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                />
                <Script
                  id="ga4-inline"
                  nonce={nonce}
                  strategy="afterInteractive"
                  type="text/plain"
                  data-cookiecategory="analytics"
                >
                  {gaInlineScript}
                </Script>
              </>
            ) : null}
            <Script
              id="microsoft-clarity"
              nonce={nonce}
              strategy="afterInteractive"
              type="text/plain"
              data-cookiecategory="analytics"
            >
              {claritySnippet}
            </Script>
            {posthogInlineScript ? (
              <Script
                id="posthog-inline"
                nonce={nonce}
                strategy="afterInteractive"
                type="text/plain"
                data-cookiecategory="analytics"
              >
                {posthogInlineScript}
              </Script>
            ) : null}
          </>
        ) : null}
      </head>
      <body className="flex min-h-dvh flex-col bg-white font-body text-thunder antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
