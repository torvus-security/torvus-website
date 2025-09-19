"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MutableRefObject } from "react";

import BrandLogo from "@/components/brand";
import {
  primaryNavigation,
  productNavigation,
  type NavigationLink,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";

const CTA = {
  href: "/waitlist",
  label: "Join the waitlist",
};

type ProductMenuState = {
  open: boolean;
  focusIndex: number;
};

export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<ProductMenuState>({ open: false, focusIndex: 0 });
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const desktopButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!menu.open) return;
      if (menuRef.current?.contains(event.target as Node)) return;
      if (desktopButtonRef.current?.contains(event.target as Node)) return;
      setMenu({ open: false, focusIndex: 0 });
    }

    function handleKey(event: KeyboardEvent) {
      if (!menu.open) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setMenu({ open: false, focusIndex: 0 });
        desktopButtonRef.current?.focus();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setMenu((prev) => {
          const nextIndex = (prev.focusIndex + 1) % productNavigation.length;
          itemRefs.current[nextIndex]?.focus();
          return { open: true, focusIndex: nextIndex };
        });
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setMenu((prev) => {
          const nextIndex =
            (prev.focusIndex - 1 + productNavigation.length) % productNavigation.length;
          itemRefs.current[nextIndex]?.focus();
          return { open: true, focusIndex: nextIndex };
        });
      }
    }

    window.addEventListener("mousedown", handleClick);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("keydown", handleKey);
    };
  }, [menu.open]);

  useEffect(() => {
    setMenu({ open: false, focusIndex: 0 });
    setMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menu.open) {
      const index = menu.focusIndex ?? 0;
      const target = itemRefs.current[index];
      target?.focus();
    } else {
      itemRefs.current = [];
    }
  }, [menu.open, menu.focusIndex]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/65">
      <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-5 sm:h-[68px]">
        <BrandLogo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <ProductMenu
            menu={menu}
            onToggle={() =>
              setMenu((prev) => ({
                open: !prev.open,
                focusIndex: prev.open ? prev.focusIndex : 0,
              }))
            }
            onClose={() => setMenu({ open: false, focusIndex: 0 })}
            buttonRef={desktopButtonRef}
            menuRef={menuRef}
            itemRefs={itemRefs}
            pathname={pathname}
          />
          {primaryNavigation.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        <Link
          href={CTA.href}
          className="inline-flex items-center justify-center rounded-full border border-cranberry/30 bg-white/80 px-4 py-2 text-[0.95rem] font-semibold text-cranberry shadow-sm transition hover:border-cranberry/60 hover:text-cranberry/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cranberry/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          {CTA.label}
        </Link>
      </div>

      <nav
        className="border-t border-black/5 bg-white/90 py-3 lg:hidden"
        aria-label="Primary"
      >
        <div className="container mx-auto flex items-center gap-3 overflow-x-auto px-5">
          <button
            ref={mobileButtonRef}
            type="button"
            aria-haspopup="true"
            aria-expanded={mobileProductsOpen}
            aria-controls="mobile-products"
            className="inline-flex items-center whitespace-nowrap rounded-full border border-storm/15 bg-white px-3 py-1.5 text-[0.9rem] font-semibold text-storm/80 transition hover:border-lagoon/40 hover:text-storm"
            onClick={() => setMobileProductsOpen((prev) => !prev)}
          >
            Products
            <span className="ml-2 inline-flex h-4 w-4 items-center justify-center">
              <svg
                aria-hidden="true"
                className={cn(
                  "h-4 w-4 transition-transform",
                  mobileProductsOpen ? "rotate-180" : "rotate-0",
                )}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </button>
          {primaryNavigation.map((item) => (
            <LinkChip key={item.href} item={item} pathname={pathname} />
          ))}
        </div>
        {mobileProductsOpen ? (
          <div
            id="mobile-products"
            className="container mx-auto mt-3 flex flex-wrap gap-3 px-5"
          >
            {productNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex flex-1 min-w-[140px] items-center justify-center whitespace-nowrap rounded-xl border border-storm/10 bg-white px-3 py-2 text-[0.9rem] font-semibold text-storm/80 transition hover:border-lagoon/40 hover:text-storm"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}

type NavLinkProps = {
  item: NavigationLink;
  pathname: string;
};

function NavLink({ item, pathname }: NavLinkProps) {
  const isActive = pathname === item.href;
  return (
    <Link
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
}

type ProductMenuProps = {
  menu: ProductMenuState;
  onToggle: () => void;
  onClose: () => void;
  buttonRef: MutableRefObject<HTMLButtonElement | null>;
  menuRef: MutableRefObject<HTMLDivElement | null>;
  itemRefs: MutableRefObject<(HTMLAnchorElement | null)[]>;
  pathname: string;
};

function ProductMenu({
  menu,
  onToggle,
  onClose,
  buttonRef,
  menuRef,
  itemRefs,
  pathname,
}: ProductMenuProps) {
  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-storm/15 bg-white/80 px-3 py-1.5 text-[0.95rem] font-semibold text-storm/80 transition hover:border-lagoon/40 hover:text-storm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-haspopup="true"
        aria-expanded={menu.open}
        aria-controls="desktop-product-menu"
        onClick={() => onToggle()}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && !menu.open) {
            event.preventDefault();
            onToggle();
          }
        }}
      >
        Products
        <svg
          aria-hidden="true"
          className={cn(
            "h-4 w-4 transition-transform",
            menu.open ? "rotate-180" : "rotate-0",
          )}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      {menu.open ? (
        <div
          ref={menuRef}
          id="desktop-product-menu"
          role="menu"
          aria-label="Products"
          className="absolute left-0 top-full z-50 mt-3 w-[320px] rounded-2xl border border-storm/10 bg-white p-3 shadow-[0_22px_60px_rgba(11,18,32,0.14)]"
        >
          <ul className="space-y-1">
            {productNavigation.map((item, index) => {
              const itemPath = getPathname(item.href);
              const isActive = pathname === itemPath;
              return (
                <li key={item.href}>
                  <Link
                    ref={(node) => {
                      itemRefs.current[index] = node;
                    }}
                    href={item.href}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex flex-col gap-1 rounded-xl px-3 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                      isActive
                        ? "bg-pastel-lagoon/60 text-storm"
                        : "hover:bg-mist/60 text-storm/80 hover:text-storm",
                    )}
                    onClick={() => {
                      onClose();
                    }}
                  >
                    <span className="text-[0.95rem] font-semibold">{item.label}</span>
                    {item.description ? (
                      <span className="text-[0.8rem] text-thunder/75">
                        {item.description}
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

type LinkChipProps = {
  item: NavigationLink;
  pathname: string;
};

function LinkChip({ item, pathname }: LinkChipProps) {
  const itemPath = getPathname(item.href);
  const isActive = pathname === itemPath;
  return (
    <Link
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
}

function getPathname(href: string) {
  try {
    const url = new URL(href, "https://torvussecurity.com");
    return url.pathname;
  } catch {
    return href;
  }
}
