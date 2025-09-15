import "./globals.css";
import "../styles/v0.css"; // <-- ensure this line exists and remains AFTER globals
import type { Metadata } from "next";
import { satoshi, erode } from "./fonts"; // your fonts.ts

export const metadata: Metadata = {
  title: "Torvus Security",
  description: "Your instructions—only when it’s right.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${erode.variable}`}>
      <body className="font-sans text-[17px] text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}