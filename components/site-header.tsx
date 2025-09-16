"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/security", label: "Security" },
  { href: "/digital-legacy", label: "Digital Legacy" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.setProperty("overflow", mobileOpen ? "hidden" : "");
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const container = mobileMenuRef.current;
    if (!container) return;

    const focusableSelectors =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>(focusableSelectors),
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
      } else if (document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const navLinks = NAV_LINKS;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-shadow duration-200",
        "bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/75",
        scrolled ? "shadow-[0_1px_0_rgba(11,18,32,0.08)]" : "shadow-none",
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-small font-semibold text-storm/80 transition-colors hover:text-storm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/waitlist"
            className={buttonClasses({ variant: "primary", size: "md" })}
          >
            Join the waitlist
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/waitlist"
            className="hidden text-small font-semibold text-lapis sm:inline-flex"
          >
            Waitlist
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-storm/15 bg-white text-storm shadow-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis focus-visible:ring-offset-2"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Open navigation</span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-storm/45 backdrop-blur-sm transition-opacity",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
        <div
          ref={mobileMenuRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          className={cn(
            "ml-auto flex h-full w-full max-w-sm flex-col border-l border-storm/10 bg-white px-6 py-6 shadow-2xl transition-transform duration-200",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lapis/90 text-white">
                <span className="text-lg font-semibold">T</span>
              </span>
              <span className="text-h4 font-semibold tracking-tight text-storm">
                Torvus
              </span>
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-storm/15 bg-white text-storm shadow-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis focus-visible:ring-offset-2"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Close navigation</span>
            </button>
          </div>

          <nav className="mt-8 space-y-2" aria-label="Mobile primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl border border-storm/10 px-4 py-3 text-base font-semibold text-storm transition-colors hover:border-storm/20 hover:bg-mist/40"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 pt-10">
            <Link
              href="/waitlist"
              onClick={() => setMobileOpen(false)}
              className={buttonClasses({
                variant: "primary",
                size: "lg",
                className: "w-full",
              })}
            >
              Join the waitlist
            </Link>
            <Link
              href="/security"
              onClick={() => setMobileOpen(false)}
              className="block text-center text-small font-semibold text-lapis"
            >
              See how Torvus protects data
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
