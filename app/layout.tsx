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
        <Script
          id="cookieyes"
          type="text/javascript"
          strategy="afterInteractive"
          src="https://cdn-cookieyes.com/client_data/0bcbca25e25835d971a02335/script.js"
        />
        <Script id="microsoft-clarity" strategy="afterInteractive" type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "tchy0bk855");`}
        </Script>
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
