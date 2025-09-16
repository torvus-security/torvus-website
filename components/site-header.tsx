"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const LINKS = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/faqs", label: "FAQs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/signup", label: "Sign up" }, // replaces demo/pricing
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <span className="inline-block h-3 w-3 rotate-45 rounded-[2px] bg-rose-500" />
          Torvus Security
        </Link>

        {/* Hamburger is always visible */}
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="rounded-md p-2 text-slate-700 hover:bg-black/5"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Overlay drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-50 transition",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
        <aside className="absolute right-0 top-0 h-full w-[min(92vw,380px)] bg-white shadow-xl">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rotate-45 rounded-[2px] bg-rose-500" />
              <span className="font-medium">Torvus Security</span>
            </Link>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-md p-2">
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="grid gap-1 p-3">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-[15px] text-slate-700 hover:bg-black/5"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
}