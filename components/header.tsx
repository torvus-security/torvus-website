"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const NAV = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/faqs", label: "FAQs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/signup", label: "Sign up" }, // only “Sign up”, no “demo”
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        {/* Brand with SHARP diamond */}
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rotate-45 bg-rose-600 shadow-sm group-hover:opacity-90" />
          <span className="text-sm font-medium tracking-wide text-zinc-700 dark:text-zinc-300">
            Torvus Security
          </span>
        </Link>

        {/* Hamburger is always shown (no inline nav) */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 ring-inset transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:hover:bg-zinc-900 dark:focus:ring-zinc-600"
        >
          <span className="sr-only">Open navigation</span>
          <div className="flex flex-col gap-[5px]">
            <span className="block h-[2px] w-6 bg-zinc-600/80 dark:bg-zinc-300/80"></span>
            <span className="block h-[2px] w-6 bg-zinc-600/80 dark:bg-zinc-300/80"></span>
            <span className="block h-[2px] w-6 bg-zinc-600/80 dark:bg-zinc-300/80"></span>
          </div>
        </button>
      </div>

      {/* Slide-over menu (global) */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside
            className="absolute right-0 top-0 h-full w-[320px] max-w-[90vw] border-l border-zinc-200 bg-white shadow-xl dark:border-white/10 dark:bg-zinc-950"
            role="dialog"
            aria-label="Site navigation"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <div className="inline-flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rotate-45 bg-rose-600" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Torvus Security</span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-md p-2 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:hover:bg-zinc-900 dark:focus:ring-zinc-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="px-3 pb-6 pt-2">
              <ul className="space-y-1.5">
                {NAV.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={clsx(
                          "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-900",
                          active
                            ? "text-rose-600"
                            : "text-zinc-700 dark:text-zinc-300"
                        )}
                      >
                        {item.label}
                        {active && <span className="h-1.5 w-1.5 rotate-45 bg-rose-600" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
