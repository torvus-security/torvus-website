"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Brand } from "@/components/brand";
import GlobalMenuOverlay from "@/components/global-menu-overlay";
import { PrimarySoftLink } from "@/components/ui/button";
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
      <div className="container flex h-14 items-center justify-between gap-4 sm:h-16">
        <Brand />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative inline-flex items-center text-[15px] font-semibold tracking-[0.005em] transition-colors",
                  isActive ? "text-cranberry" : "text-thunder hover:text-cranberry",
                )}
              >
                <span>{link.label}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute left-0 right-0 bottom-[-6px] h-[2px] bg-cranberry transition-opacity",
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
            className="text-[15px] font-semibold tracking-[0.005em] text-cranberry hover:text-[#c11d5f] lg:hidden"
          >
            Waitlist
          </Link>
          <PrimarySoftLink href="/waitlist" className="hidden lg:inline-flex">
            Join the waitlist
          </PrimarySoftLink>
        </div>
      </div>
    </header>
  );
}
