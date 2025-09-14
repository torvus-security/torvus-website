"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  // New pages
  { href: "/pricing", label: "Pricing" },
  { href: "/solutions", label: "Solutions" },
  { href: "/faq", label: "FAQ" },
  { href: "/transparency", label: "Transparency" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // Close on outside click / ESC
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="inline-flex items-center gap-2">
          {/* Sharper pink diamond */}
          <span className="inline-block h-3.5 w-3.5 rotate-45 rounded-[1px] bg-rose-500 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]" />
          <span className="text-sm font-semibold tracking-tight">
            Torvus Security
          </span>
        </Link>

        {/* Hamburger only (desktop + mobile) */}
        <div className="relative">
          <button
            ref={btnRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={clsx(
              "grid h-9 w-9 place-items-center rounded-md border transition",
              "bg-white/70 hover:bg-white",
              open ? "border-foreground/20" : "border-foreground/10"
            )}
          >
            {open ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>

          {open && (
            <div
              ref={panelRef}
              role="menu"
              className="absolute right-0 mt-2 w-72 origin-top-right rounded-xl border bg-white/90 p-2 shadow-xl backdrop-blur"
            >
              <div className="grid gap-1">
                {NAV.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition",
                        "hover:bg-muted",
                        active && "bg-muted font-medium"
                      )}
                    >
                      <span>{item.label}</span>
                      <span
                        className={clsx(
                          "h-1.5 w-1.5 rounded-full",
                          active ? "bg-emerald-500" : "bg-foreground/20"
                        )}
                      />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-2 border-t pt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-lg border bg-foreground px-3 py-2 text-sm font-medium text-background hover:opacity-90"
                >
                  Request a demo
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
