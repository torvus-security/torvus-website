import Link from "next/link";

import { PrimarySubtleLink } from "@/components/ui/button";
import { footerNavigation } from "@/lib/navigation";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white">
      <div className="mx-auto w-[min(1100px,92vw)] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-6 md:col-span-5">
            <div className="inline-flex items-center gap-2 font-semibold text-[#0B1220]">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 1.5 22.5 12 12 22.5 1.5 12Z" fill="#D61F69" />
              </svg>
              <span>
                Torvus <span className="font-normal">Security</span>
              </span>
            </div>
            <p className="max-w-[42ch] text-[15px] leading-6 text-[#1F2937]">
              Safeguard disclosures with policy-based release, duress controls, and
              independently verifiable provenance.
            </p>
            <div className="space-y-3 rounded-lg border border-black/10 p-4">
              <div className="text-[12px] font-semibold tracking-[0.18em] text-[#1F2937]/80">
                STAY INFORMED
              </div>
              <p className="text-[15px] leading-6 text-[#1F2937]">
                Sign up for product updates, security notes, and private preview cohorts.
              </p>
              <PrimarySubtleLink href="/waitlist" className="mt-1 w-full sm:w-auto">
                Sign up for updates
              </PrimarySubtleLink>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-8 text-[15px] md:col-span-7 md:grid-cols-3">
            <FooterLinks title="PRODUCT" links={footerNavigation.product} />
            <FooterLinks title="TRUST" links={footerNavigation.trust} />
            <FooterLinks title="POLICIES" links={footerNavigation.policies} />
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-black/5 pt-6 text-[14px] text-[#1F2937]/80">
          <div>© {currentYear} Torvus Security.</div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/security" className="hover:underline">
              Security
            </Link>
            <Link href="/trust-center" className="hover:underline">
              Trust Center
            </Link>
            <Link href="/status" className="hover:underline">
              Status
            </Link>
            <Link href="/digital-legacy" className="hover:underline">
              Digital Legacy
            </Link>
            <a href="mailto:hello@torvussecurity.com" className="hover:underline">
              hello@torvussecurity.com
            </a>
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
      <div className="text-[12px] font-semibold tracking-[0.18em] text-[#1F2937]/80">
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
