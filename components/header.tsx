// components/header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const nav = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium">
            {/* sharper diamond */}
            <span className="inline-block h-[14px] w-[14px] rotate-45 rounded-[1px] bg-rose-500 ring-[3px] ring-rose-500/20" />
            Torvus Security
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "text-sm text-foreground/70 transition-colors hover:text-foreground",
                    pathname === item.href && "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Hamburger always visible */}
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-white/80 text-foreground/80 hover:bg-white"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden">
            <nav className="border-t border-black/10 py-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-1.5 py-2 text-foreground/80 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
