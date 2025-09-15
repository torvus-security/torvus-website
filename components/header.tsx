"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/signup", label: "Get Early Access" }, // CTA keeps the same route
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close the mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-4 w-4 rotate-45 bg-rose-500" aria-hidden />
          <span className="text-sm font-semibold tracking-tight">Torvus Security</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm text-muted-foreground transition hover:text-foreground",
                pathname === item.href && "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          {/* CTA */}
          <Link
            href={NAV[5].href}
            className="rounded-xl border border-border bg-foreground px-3 py-1.5 text-sm font-semibold text-background shadow-sm transition hover:opacity-90"
          >
            {NAV[5].label}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg border border-border bg-background p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={clsx(
          "md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={clsx(
            "border-t border-border/60 bg-background/95 backdrop-blur transition-[max-height] duration-300",
            open ? "max-h-[420px]" : "max-h-0 overflow-hidden"
          )}
        >
          <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6 lg:px-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-lg px-3 py-2 text-sm transition hover:bg-muted",
                  pathname === item.href ? "font-semibold text-foreground" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
