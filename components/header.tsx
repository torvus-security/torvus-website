// components/header.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Esc / outside click
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.addEventListener("click", onClick);
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium">
            {/* Sharper diamond */}
            <span className="inline-block h-[14px] w-[14px] rotate-45 rounded-[1px] bg-rose-500 ring-[3px] ring-rose-500/20" />
            Torvus Security
          </Link>

          {/* Always hamburger (no inline nav at any width) */}
          <button
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-white/80 text-foreground/80 hover:bg-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          ref={panelRef}
          id="site-menu"
          className="absolute right-4 top-[3.25rem] w-[min(22rem,calc(100%-2rem))] rounded-xl border border-black/10 bg-white/95 p-2 shadow-lg backdrop-blur"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-black/[0.04] hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
