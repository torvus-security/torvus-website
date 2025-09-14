// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "../styles/v0.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Nice display/body font combo using next/font (no extra deps)
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Torvus Security",
  description:
    "Safeguard private materials, set release rules, and prove what happened.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-slate-50 text-slate-900 antialiased">
        {/* site chrome */}
        <Header />

        {/* radial page backdrop like v0 */}
        <div className="relative isolate">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[72rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,89,146,0.18),transparent_55%)] blur-2xl" />
            <div className="absolute right-[-24rem] top-[16rem] h-[28rem] w-[56rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_60%)] blur-3xl" />
          </div>

          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
