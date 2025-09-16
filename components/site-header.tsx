// components/site-header.tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const NAV = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/faqs", label: "FAQs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/signup", label: "Sign up" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 header-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rotate-45 rounded-[2px] bg-rose-500" />
          <span className="font-display text-lg text-brand-ink">Torvus Security</span>
        </Link>

        <button
          aria-label="Open menu"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-3 py-2 text-slate-700 hover:bg-slate-50"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <>
          <div className="modal-backdrop" onClick={() => setOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-4 sm:px-6 h-16">
              <Link onClick={() => setOpen(false)} href="/" className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rotate-45 rounded-[2px] bg-rose-500" />
                <span className="font-display text-lg text-brand-ink">Torvus Security</span>
              </Link>
              <button
                aria-label="Close menu"
                className="rounded-lg border border-slate-300 p-2 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="px-4 sm:px-6 py-4 space-y-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-slate-800 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}