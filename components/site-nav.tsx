"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const LINKS = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/faqs", label: "FAQs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/sign-up", label: "Sign up" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  // prevent background scroll when menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 font-semibold">
            <span className="inline-block h-3 w-3 rotate-45 rounded-[2px] bg-rose-500 shadow-sm" />
            <span className="sr-only">Torvus Security</span>
            <span className="font-[550] tracking-tight">Torvus Security</span>
          </Link>

          {/* Always show hamburger (requested) */}
          <button
            className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm hover:bg-black/5 pressable"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
            <span>Menu</span>
          </button>
        </nav>
      </header>

      {/* Overlay menu */}
      <div
        className={clsx(
          "fixed inset-0 z-50 transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div className="v0-modal-overlay absolute inset-0" onClick={() => setOpen(false)} />
        <div
          className={clsx(
            "absolute inset-x-0 top-0 mx-auto max-w-3xl rounded-b-2xl bg-white shadow-xl",
            "origin-top transition-all",
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          )}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-6 h-14 border-b border-black/5">
            <div className="inline-flex items-center gap-2">
              <span className="inline-block h-3 w-3 rotate-45 rounded-[2px] bg-rose-500" />
              <span className="font-semibold">Torvus Security</span>
            </div>
            <button
              className="rounded-md p-2 hover:bg-black/5 pressable"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="px-4 py-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-center text-[15px] hover:bg-black/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}