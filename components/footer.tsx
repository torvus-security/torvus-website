import Link from "next/link";

import { PrimarySubtleLink } from "@/components/ui/button";
import { primaryNavigation, secondaryNavigation } from "@/lib/navigation";

const productPaths = new Set(["/features", "/security", "/digital-legacy"]);
const companyPaths = new Set(["/pricing", "/contact"]);
const statusPath = "/status";
const securityPath = "/security";

const productLinks = primaryNavigation
  .filter((link) => productPaths.has(link.href))
  .map(({ href, label }) => ({ href, label }));
const companyLinks = primaryNavigation
  .filter((link) => companyPaths.has(link.href))
  .map(({ href, label }) => ({ href, label }));
const legalLinks = secondaryNavigation.map(({ href, label }) => ({ href, label }));
const statusLink = secondaryNavigation.find((link) => link.href === statusPath);
const securityLink = primaryNavigation.find((link) => link.href === securityPath);

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white">
      <div className="mx-auto w-[min(1100px,92vw)] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-6 md:col-span-5">
            <div className="inline-flex items-center gap-2 font-semibold text-[#0B1220]">
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L22 12L12 22L2 12Z" fill="#D61F69" />
              </svg>
              <span>
                Torvus <span className="font-normal">Security</span>
              </span>
            </div>
            <p className="max-w-[40ch] text-[15px] leading-6 text-[#1F2937]">
              Secure digital vaulting and conditional release engineered for the moments
              that matter most.
            </p>
            <div className="space-y-3 rounded-lg border border-black/10 p-4">
              <div className="text-[12px] font-semibold tracking-[0.18em] text-[#1F2937]/80">
                JOIN THE WAITLIST
              </div>
              <p className="text-[15px] leading-6 text-[#1F2937]">
                We’ll keep you posted on launch milestones and private previews. No spam.
              </p>
              <PrimarySubtleLink href="/waitlist" className="mt-1 w-full sm:w-auto">
                Join now
              </PrimarySubtleLink>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-8 text-[15px] md:col-span-7 md:grid-cols-3">
            <FooterLinks title="PRODUCT" links={productLinks} />
            <FooterLinks title="COMPANY" links={companyLinks} />
            <FooterLinks title="LEGAL" links={legalLinks} />
          </nav>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-black/5 pt-6 text-[14px] text-[#1F2937]/80">
          <div>© {currentYear} Torvus Security.</div>
          <div className="flex gap-6">
            {statusLink ? (
              <Link href={statusLink.href} className="hover:underline">
                {statusLink.label}
              </Link>
            ) : null}
            {securityLink ? (
              <Link href={securityLink.href} className="hover:underline">
                Security posture
              </Link>
            ) : null}
            <a href="mailto:contact@torvussecurity.com.au" className="hover:underline">
              contact@torvussecurity.com.au
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
