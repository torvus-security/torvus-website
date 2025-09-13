// components/header.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

const NAV = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-neutral-900/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="group inline-flex items-center gap-2">
          {/* diamond */}
          <span
            aria-hidden
            className="inline-block h-3.5 w-3.5 rotate-45 rounded-[4px] bg-rose-500 ring-1 ring-rose-600/30 shadow-[0_0_0_2px_rgba(255,255,255,0.9)] transition-transform group-hover:scale-110"
          />
          <span className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">
            Torvus Security
          </span>
        </Link>

        {/* Hamburger */}
        <div className="relative">
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={clsx(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl",
              "border border-black/10 bg-white/70 shadow-sm ring-1 ring-black/5 backdrop-blur",
              "hover:bg-white/90 active:scale-[0.98]",
              // 👇 make the lines lighter by setting the current text color w/ opacity
              "text-neutral-600/70 hover:text-neutral-700/80",
              "dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15 dark:text-neutral-300/75 dark:hover:text-neutral-200/90"
            )}
          >
            {/* icon uses bg-current so it follows the text color above */}
            <span className="relative block h-4 w-5">
              <span
                className={clsx(
                  "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform",
                  open ? "translate-y-2 rotate-45" : ""
                )}
              />
              <span
                className={clsx(
                  "absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-opacity",
                  open ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={clsx(
                  "absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition-transform",
                  open ? "-translate-y-2 -rotate-45" : ""
                )}
              />
            </span>
          </button>

          {/* Backdrop */}
          {open && (
            <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]" aria-hidden />
          )}

          {/* Panel */}
          {open && (
            <div
              ref={panelRef}
              role="menu"
              aria-label="Main"
              className="absolute right-0 top-12 z-50 w-64 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-2 shadow-xl ring-1 ring-black/5 backdrop-blur dark:border-white/10 dark:bg-neutral-900/95"
            >
              <nav className="grid gap-1">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-2 grid grid-cols-1 gap-2 border-t border-black/10 pt-2 dark:border-white/10">
                <Link
                  href="/demo"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full justify-center"
                >
                  See the demo
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-secondary w-full justify-center"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
