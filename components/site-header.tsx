"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="inline-flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-block h-3 w-3 rotate-45 rounded-[3px] bg-rose-500" />
          Torvus Security
        </Link>

        {/* Always the same trigger on all widths */}
        <button
          onClick={() => setOpen(true)}
          className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-800"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Sheet */}
      {open && (
        <div className="fixed inset-0 z-50">
          <button className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" aria-label="Close" onClick={() => setOpen(false)} />
          <nav className="absolute right-0 top-0 h-full w-[88%] max-w-xs bg-white shadow-xl ring-1 ring-black/10">
            <div className="flex items-center justify-between px-4 py-3">
              <Link href="/" className="inline-flex items-center gap-2 font-semibold text-slate-900" onClick={() => setOpen(false)}>
                <span className="inline-block h-3 w-3 rotate-45 rounded-[3px] bg-rose-500" />
                Torvus Security
              </Link>
              <button className="rounded-md p-2 text-slate-600 hover:bg-slate-100" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="space-y-1 px-2 py-2">
              <li><Link href="/product"   className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>Product</Link></li>
              <li><Link href="/security"  className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>Security</Link></li>
              <li><Link href="/faqs"      className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>FAQs</Link></li>
              <li><Link href="/contact"   className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>Contact</Link></li>
              <li><Link href="/signup"    className="block rounded-md px-3 py-2 font-semibold text-rose-600 hover:bg-rose-50" onClick={() => setOpen(false)}>Sign up</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}