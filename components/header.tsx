"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FocusEvent,
} from "react";

import BrandLogo from "@/components/brand";
import { primaryNavigation, productNavigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const CTA = {
  href: "/waitlist",
  label: "Join the waitlist",
};

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/65">
      <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-5 sm:h-[68px]">
        <BrandLogo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <ProductsMenu pathname={pathname} />
          {primaryNavigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative inline-flex items-center whitespace-nowrap border-b-2 border-transparent px-1 pb-1 text-[0.95rem] font-semibold transition-colors",
                  isActive
                    ? "border-cranberry text-cranberry"
                    : "text-storm/70 hover:border-lagoon/60 hover:text-storm",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href={CTA.href}
          className="inline-flex items-center justify-center rounded-full border border-cranberry/30 px-4 py-2 text-[0.95rem] font-semibold text-cranberry transition hover:bg-pastel-cranberry/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cranberry/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          {CTA.label}
        </Link>
      </div>

      <nav
        className="border-t border-black/5 bg-white/90 py-3 lg:hidden"
        aria-label="Primary"
      >
        <div className="container mx-auto space-y-4 px-5">
          <div>
            <p className="mb-2 text-[12px] font-semibold tracking-[0.2em] text-storm/60">
              PRODUCTS
            </p>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {productNavigation.map((item) => {
                const isActive = pathname.startsWith(item.href.split("#")[0]);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "inline-flex min-w-[180px] flex-col rounded-xl border px-3 py-2 text-left text-[0.9rem] font-semibold transition",
                      isActive
                        ? "border-cranberry bg-pastel-cranberry/40 text-cranberry"
                        : "border-storm/10 bg-white text-storm/80 hover:border-lagoon/40 hover:text-storm",
                    )}
                  >
                    <span>{item.label}</span>
                    {item.description ? (
                      <span className="mt-1 text-[0.75rem] font-normal text-storm/60">
                        {item.description}
                      </span>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-2 text-[12px] font-semibold tracking-[0.2em] text-storm/60">
              EXPLORE
            </p>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {primaryNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "inline-flex items-center whitespace-nowrap rounded-full border px-3 py-1.5 text-[0.9rem] font-semibold transition",
                      isActive
                        ? "border-cranberry bg-pastel-cranberry/40 text-cranberry"
                        : "border-storm/10 bg-white text-storm/70 hover:border-lagoon/40 hover:text-storm",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function ProductsMenu({ pathname }: { pathname: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const isActive = useMemo(
    () => productNavigation.some((item) => pathname.startsWith(item.href.split("#")[0])),
    [pathname],
  );

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleBlur = useCallback((event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpen(false);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center"
      onBlur={handleBlur}
      onFocusCapture={() => setOpen(true)}
    >
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 whitespace-nowrap border-b-2 border-transparent px-1 pb-1 text-[0.95rem] font-semibold transition-colors",
          open || isActive
            ? "border-cranberry text-cranberry"
            : "text-storm/70 hover:border-lagoon/60 hover:text-storm",
        )}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="products-menu-panel"
        onClick={() => setOpen((prev) => !prev)}
      >
        Products
        <svg
          className={cn(
            "h-4 w-4 text-current transition-transform",
            open ? "rotate-180" : "rotate-0",
          )}
          aria-hidden="true"
          viewBox="0 0 12 12"
        >
          <path
            d="M2 4l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        id="products-menu-panel"
        role="menu"
        aria-hidden={!open}
        className={cn(
          "absolute left-1/2 top-full mt-3 w-[320px] -translate-x-1/2 rounded-xl border border-storm/10 bg-white p-4 shadow-[0_16px_40px_rgba(11,18,32,0.12)]",
          open ? "visible opacity-100" : "invisible opacity-0",
          "transition-opacity duration-150 ease-out",
        )}
      >
        <div className="flex flex-col gap-2" data-menu-list>
          {productNavigation.map((item) => (
            <Link
              key={item.href}
              role="menuitem"
              href={item.href}
              className="rounded-lg px-3 py-2 text-left transition hover:bg-mist/50 focus-visible:bg-mist/70 focus-visible:outline-none"
            >
              <span className="block text-[0.95rem] font-semibold text-storm">
                {item.label}
              </span>
              {item.description ? (
                <span className="mt-1 block text-[0.8rem] text-storm/65">
                  {item.description}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
