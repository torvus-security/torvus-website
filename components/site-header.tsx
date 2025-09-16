// components/site-header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block px-4 py-2 text-[15px] font-medium text-slate-700 hover:text-slate-900"
  >
    {children}
  </Link>
);

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* Sharper diamond */}
          <span className="inline-grid h-4 w-4 rotate-45 place-items-center rounded-[2px] bg-rose-500 ring-1 ring-rose-400/50" />
          <span className="text-[15px] font-semibold tracking-tight text-slate-900">
            Torvus Security
          </span>
        </Link>

        {/* Always show hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300/70 bg-white px-3 py-1.5 text-[14px] font-medium text-slate-700 hover:bg-slate-50"
          aria-label="Open menu"
        >
          <span className="sr-only">Open menu</span>
          ☰
        </button>
      </div>

      {/* Overlay menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/70">
              <div className="flex items-center gap-2">
                <span className="inline-grid h-4 w-4 rotate-45 place-items-center rounded-[2px] bg-rose-500 ring-1 ring-rose-400/50" />
                <span className="text-[15px] font-semibold">Torvus Security</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-2 text-slate-500 hover:bg-slate-100"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="px-2 py-2">
              <NavLink href="/product">Product</NavLink>
              <NavLink href="/security">Security</NavLink>
              <NavLink href="/faqs">FAQs</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <div className="mt-1 border-t border-slate-200/70" />
              <NavLink href="/signup">Sign up</NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}