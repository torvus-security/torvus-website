"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function GlobalMenuOverlay() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      triggerRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusables?.[0];
    const last = focusables?.[focusables.length - 1];

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !focusables || !first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    first?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Open menu"
        aria-controls="global-menu"
        aria-expanded={open}
        ref={triggerRef}
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 backdrop-blur transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d61f69] focus-visible:ring-offset-2"
      >
        <span className="sr-only">Open menu</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="text-storm"
        >
          <path fill="currentColor" d="M4 7h16v2H4zm0 4h16v2H4zm0 4h16v2H4z" />
        </svg>
      </button>

      {open ? (
        <div
          id="global-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Global navigation"
          className="fixed inset-0 z-50 bg-[rgba(11,18,32,0.65)] backdrop-blur-md"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <div
            ref={dialogRef}
            className="mx-auto mt-16 w-[min(680px,92vw)] rounded-xl bg-white p-6 shadow-2xl outline-none"
          >
            <nav className="grid gap-3 text-[16px] font-semibold text-thunder">
              <OverlayLink href="/" label="Home" onNavigate={() => setOpen(false)} />
              <OverlayLink
                href="/features"
                label="Features"
                onNavigate={() => setOpen(false)}
              />
              <OverlayLink
                href="/security"
                label="Security"
                onNavigate={() => setOpen(false)}
              />
              <OverlayLink
                href="/digital-legacy"
                label="Digital Legacy"
                onNavigate={() => setOpen(false)}
              />
              <OverlayLink
                href="/pricing"
                label="Pricing"
                onNavigate={() => setOpen(false)}
              />
              <OverlayLink
                href="/contact"
                label="Contact"
                onNavigate={() => setOpen(false)}
              />
            </nav>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/waitlist"
                onClick={() => setOpen(false)}
                className="min-w-[180px] whitespace-nowrap rounded-full bg-[#d61f69] px-6 py-3 text-center text-white shadow-soft-2 transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d61f69] focus-visible:ring-offset-2"
              >
                Join the waitlist
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="min-w-[160px] whitespace-nowrap rounded-full border border-lapis/55 px-6 py-3 text-center text-lapis transition hover:bg-pastel-lapis focus:outline-none focus-visible:ring-2 focus-visible:ring-lapis focus-visible:ring-offset-2"
              >
                Talk with Torvus
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-mist px-6 py-3 text-thunder transition hover:bg-pastel-lagoon focus:outline-none focus-visible:ring-2 focus-visible:ring-lagoon focus-visible:ring-offset-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function OverlayLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="rounded-xl px-3 py-2 transition-colors hover:bg-pastel-cranberry"
    >
      {label}
    </Link>
  );
}
