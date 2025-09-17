import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { primaryNavigation, secondaryNavigation } from "@/lib/navigation";

const currentYear = new Date().getFullYear();

const productLinks = primaryNavigation.filter((item) =>
  ["/features", "/digital-legacy", "/security"].includes(item.href),
);

const companyLinks = primaryNavigation.filter((item) =>
  ["/contact", "/pricing"].includes(item.href),
);

const legalLinks = secondaryNavigation.filter((item) => item.href.startsWith("/legal"));

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-storm/10 bg-white">
      <div className="container space-y-12 py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))]">
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
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
              <p className="max-w-sm text-small text-thunder">
                Secure digital vaulting and conditional release engineered for the moments
                that matter most.
              </p>
            </div>
            <div className="rounded-2xl border border-storm/10 bg-mist/60 p-5">
              <h2 className="text-small font-semibold uppercase tracking-[0.18em] text-storm">
                Join the waitlist
              </h2>
              <p className="mt-2 text-body text-thunder">
                We’ll keep you posted on launch milestones and private previews. No spam.
              </p>
              <Link
                href="/waitlist"
                className={buttonClasses({
                  variant: "primary",
                  size: "md",
                  className: "mt-4 w-full sm:w-auto",
                })}
              >
                Join now
              </Link>
            </div>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-storm/10 pt-6 text-small text-thunder sm:flex-row">
          <p>© {currentYear} Torvus Security. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/status" className="hover:text-storm">
              Status
            </Link>
            <Link href="/security" className="hover:text-storm">
              Security posture
            </Link>
            <Link href="mailto:hello@torvus.security" className="hover:text-storm">
              hello@torvus.security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: { href: string; label: string }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-small font-semibold uppercase tracking-[0.18em] text-storm">
        {title}
      </h3>
      <ul className="space-y-3 text-body text-thunder">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-storm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
