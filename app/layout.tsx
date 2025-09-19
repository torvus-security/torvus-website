import Footer from "@/components/footer";
import Header from "@/components/header";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";

import { satoshi, erode } from "./fonts";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./(site)/globals.css";
import "../styles/v0.css";

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
    <html lang="en" className={`${satoshi.variable} ${erode.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="flex min-h-dvh flex-col bg-white font-sans text-[17px] text-thunder antialiased md:text-base">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
