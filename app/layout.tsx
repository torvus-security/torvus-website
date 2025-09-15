import type { Metadata } from "next";
import "./globals.css";
import "../styles/v0.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { satoshi, erode } from "./fonts";

export const metadata: Metadata = {
  title: "Torvus Security",
  description:
    "Safeguard private materials, set release rules, and prove what happened — with zero-knowledge encryption and tamper-evident audit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${erode.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
