"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import BrandLogo from "@/components/brand";
import { primaryNavigation, type NavigationLink } from "@/lib/navigation";
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
        <div className="container mx-auto flex flex-col gap-3 px-5">
          <div className="flex items-center gap-3 overflow-x-auto">
            {primaryNavigation.map((item) => (
              <LinkChip key={item.href} item={item} pathname={pathname} />
            ))}
          </div>
        </div>
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
