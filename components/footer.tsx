import Link from "next/link";

import { PrimarySubtleLink } from "@/components/ui/button";
import { companyNavigation, productNavigation, trustNavigation } from "@/lib/navigation";

const productLinks = [
  { href: "/product", label: "Platform overview" },
  { href: "/digital-legacy", label: "Digital Legacy" },
  { href: "/pricing", label: "Pricing" },
  ...productNavigation.map(({ href, label }) => ({ href, label })),
];

const trustLinks = [{ href: "/trust", label: "Trust Center" }, ...trustNavigation];

const resourcesLinks = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  ...companyNavigation.filter((link) => link.href === "/contact"),
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white">
      <div className="mx-auto w-[min(1100px,92vw)] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-6 md:col-span-5">
            <div className="inline-flex items-center gap-2 font-semibold text-storm">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1.5 22.5 12 12 22.5 1.5 12Z" fill="#D61F69" />
              </svg>
              <span>
                Torvus <span className="font-normal">Security</span>
              </span>
            </div>
            <p className="max-w-[42ch] text-[15px] leading-6 text-thunder">
              Safeguard disclosures with policy-based release, duress controls, and
              independently verifiable provenance.
            </p>
            <div className="space-y-3 rounded-2xl border border-black/10 p-4 shadow-soft-1">
              <div className="text-[12px] font-semibold tracking-[0.18em] text-thunder/70">
                STAY INFORMED
              </div>
              <p className="text-[15px] leading-6 text-thunder">
                Join the waitlist to hear about Digital Legacy previews, security updates,
                and rollout windows.
              </p>
              <PrimarySubtleLink href="/waitlist" className="mt-1 w-full sm:w-auto">
                Join the waitlist
              </PrimarySubtleLink>
            </div>
          </div>

          <nav
            className="grid grid-cols-2 gap-8 text-[15px] md:col-span-7 md:grid-cols-3"
            aria-label="Footer"
          >
            <FooterLinks title="PRODUCTS" links={productLinks} />
            <FooterLinks title="TRUST" links={trustLinks} />
            <FooterLinks title="RESOURCES" links={resourcesLinks} />
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-black/5 pt-6 text-[14px] text-thunder/80">
          <div>© {currentYear} Torvus Security. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/security" className="hover:underline">
              Security
            </Link>
            <Link href="/trust" className="hover:underline">
              Trust Center
            </Link>
            <Link href="/status" className="hover:underline">
              Status
            </Link>
            <Link href="/legal/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/legal/terms" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLinksProps = {
  title: string;
  links: { href: string; label: string }[];
};

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <div className="text-[12px] font-semibold tracking-[0.18em] text-thunder/70">
        {title}
      </div>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="hover:underline" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
