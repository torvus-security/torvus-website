import Link from "next/link";

import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const dynamic = "force-static";

const trustLinks = [
  {
    title: "Security",
    description:
      "Zero-knowledge architecture, duress controls, and Digital Legacy safeguards.",
    href: "/security",
  },
  {
    title: "Privacy",
    description: "How Torvus handles personal information and encrypted artefacts.",
    href: "/legal/privacy",
  },
  {
    title: "Terms",
    description: "Service terms, acceptable use, and contractual posture.",
    href: "/legal/terms",
  },
  {
    title: "Status",
    description: "Live uptime dashboard with incidents and maintenance notices.",
    href: "/status",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Trust Center",
  description:
    "Centralise how Torvus approaches security, privacy, compliance, and availability for Digital Legacy and the broader platform.",
  path: "/trust",
});

export default function TrustPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-storm/10 bg-gradient-to-br from-white via-pastel-lapis/25 to-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute right-[-12%] top-16 h-72 w-72 rounded-full bg-pastel-lagoon/50 blur-[150px]"
          aria-hidden="true"
        />
        <div className="container relative space-y-8">
          <p className="text-[0.9rem] font-semibold uppercase tracking-[0.26em] text-lapis">
            Trust Center
          </p>
          <h1 className="text-display font-semibold text-storm">
            Transparency for Digital Legacy and beyond
          </h1>
          <p className="max-w-prose text-lead text-thunder">
            Trust is built on clarity. Explore our security controls, privacy posture,
            policies, and live status so you can validate Torvus for sensitive estate
            orchestration.
          </p>
          <PrimarySubtleLink href="/waitlist" className="w-full sm:w-auto">
            Join the waitlist
          </PrimarySubtleLink>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.9)] pb-[calc(var(--section-pb)*0.9)]">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Resources"
            title="Navigate our trust artefacts"
            description="Find the right reference quickly—security deep dives, policy documents, and live uptime insights."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {trustLinks.map((link) => (
              <Card key={link.href} className="border-storm/12 p-6">
                <h2 className="text-h3 font-semibold text-storm">{link.title}</h2>
                <p className="mt-2 text-body text-thunder">{link.description}</p>
                <Link
                  href={link.href}
                  className="mt-4 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-lapis hover:underline"
                >
                  Visit {link.title}
                  <span aria-hidden="true">→</span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
