// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "../styles/v0.css";

import { satoshi, erode } from "./fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Torvus Security",
  description: "Proof, release, and a tamper-evident trail — only when conditions are met.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${erode.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
