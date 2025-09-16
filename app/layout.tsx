import "./globals.css";
import "../styles/v0.css";
import type { Metadata } from "next";
import { satoshi, erode } from "./fonts"; // keep whatever you already export here

export const metadata: Metadata = {
  title: "Torvus Security",
  description: "Your instructions — only when it’s right.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${erode.variable} ${satoshi.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased text-[17px] md:text-[18px]">
        {children}
      </body>
    </html>
  );
}