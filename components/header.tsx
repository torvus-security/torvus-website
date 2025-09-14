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
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between border-b border-border/50">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium">
            {/* Sharper diamond */}
            <span className="inline-block h-[14px] w-[14px] rotate-45 rounded-[1px] bg-rose-500 ring-[3px] ring-rose-500/20" />
            Torvus Security
          </Link>

          <button
            aria-label="Menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="h-5 w-5 text-foreground/80" />
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-sm text-foreground/70 hover:text-foreground transition-colors",
                  pathname === item.href && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div className="md:hidden border-b border-border/50">
            <nav className="flex flex-col gap-2 py-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-1.5 py-2 text-foreground/80 hover:text-foreground"
                  onClick={() => setOpen(false)}
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
