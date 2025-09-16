// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // keep your Tailwind + base styles
import "../styles/v0.css"; // if present – safe to keep; otherwise remove this line
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

// If you have app/fonts.ts, keep using it; otherwise the fallback fonts work fine.
// import { satoshi, erode } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Torvus Security",
  description:
    "Secure vault with conditional-release. Your instructions—only when it’s right.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="min-h-full text-slate-900 antialiased">
        <SiteHeader />
        <main className="min-h-[60vh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}