"use client";

import Link from "next/link";
import * as React from "react";

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  const Nav = () => (
    <nav className="flex flex-col gap-2">
      {[
        ["Product", "/product"],
        ["Security", "/security"],
        ["FAQs", "/faqs"],
        ["About", "/about"],
        ["Contact", "/contact"],
        ["Sign up", "/signup"],
      ].map(([label, href]) => (
        <Link
          key={href}
          href={href}
          onClick={() => setOpen(false)}
          className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100"
        >
          {label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rotate-45 rounded-[2px] bg-rose-500" />
            <span className="font-semibold">Torvus Security</span>
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 bg-white hover:bg-slate-50"
          >
            ☰
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 backdrop-strong" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white p-4 shadow-2xl ring-1 ring-black/5">
            <div className="mb-3 flex items-center justify-between">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rotate-45 rounded-[2px] bg-rose-500" />
                <span className="font-semibold">Torvus Security</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"
              >
                ×
              </button>
            </div>
            <Nav />
          </div>
        </div>
      )}
    </>
  );
}