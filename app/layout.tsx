// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import "../styles/v0.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Torvus Security",
  description: "Safeguard private materials, set release rules, and prove what happened.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <Header />
        {/* The container below controls BOTH horizontal and vertical spacing for all pages */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
