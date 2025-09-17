"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import GlobalMenuOverlay from "@/components/global-menu-overlay";
import { buttonClasses } from "@/components/ui/button";
import { primaryNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = primaryNavigation;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-shadow duration-200",
        "bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/75",
        scrolled ? "shadow-[0_1px_0_rgba(11,18,32,0.12)]" : "shadow-none",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Torvus Security home"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lapis/90 text-white">
            <span className="text-lg font-semibold">T</span>
          </span>
          <span className="text-h4 font-semibold tracking-tight text-storm">
            Torvus Security
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative inline-flex flex-col text-[1.08rem] font-semibold transition-colors",
                  isActive ? "text-cranberry" : "text-thunder hover:text-cranberry",
                )}
              >
                <span className="inline-flex items-center gap-2">{link.label}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-x-0 -bottom-2 h-0.5 rounded-full bg-cranberry transition-opacity",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <GlobalMenuOverlay />
          <Link
            href="/waitlist"
            className="text-[1.05rem] font-semibold text-cranberry hover:text-[#c11d5f] lg:hidden"
          >
            Waitlist
          </Link>
          <Link
            href="/waitlist"
            className={buttonClasses({
              variant: "primary",
              size: "md",
              className: "hidden whitespace-nowrap lg:inline-flex",
            })}
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
