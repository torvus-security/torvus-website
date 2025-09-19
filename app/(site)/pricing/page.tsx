import Link from "next/link";

import { FAQ } from "@/components/faq";
import { PricingTiers } from "@/components/pricing-tiers";
import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Compare Torvus Individual, Professional, and Enterprise tiers for Digital Legacy, including policy orchestration, KYC, and audit features.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-storm/10 bg-gradient-to-br from-white via-pastel-lagoon/35 to-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-pastel-lagoon/60 blur-[160px]"
          aria-hidden="true"
        />
        <div className="container relative space-y-6">
          <p className="text-[0.9rem] font-semibold uppercase tracking-[0.26em] text-lagoon">
            Pricing
          </p>
          <h1 className="text-display font-semibold text-storm">
            Torvus plans for Digital Legacy
          </h1>
          <p className="max-w-prose text-lead text-thunder">
            Select the tier that matches your estate workflow. Every plan keeps policies
            encrypted, auditable, and verifiable.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PrimarySubtleLink href="/waitlist" className="w-full sm:w-auto">
              Join the waitlist
            </PrimarySubtleLink>
            <Link
              href="https://platform.torvussecurity.com"
              className="text-[0.95rem] font-semibold text-lapis hover:underline"
            >
              Go to platform signup
            </Link>
          </div>
        </div>
      </section>

      <PricingTiers />

      <section
        id="enterprise-contact"
        className="bg-gradient-to-br from-white via-mist/60 to-white py-[calc(var(--section-pt)*0.7)]"
      >
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Contact sales"
            title="Enterprise support when Digital Legacy is mission critical"
            description="Tell us about your requirements—SSO/SAML, bespoke workflows, or compliance packages—and we’ll schedule a review."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-body text-thunder">
              <p>
                Email us at{" "}
                <a
                  className="font-semibold text-lapis hover:underline"
                  href="mailto:security@torvussecurity.com"
                >
                  security@torvussecurity.com
                </a>{" "}
                or share details below. We respond within two business days.
              </p>
              <p>
                Need early access instead? The{" "}
                <Link
                  href="/waitlist"
                  className="font-semibold text-lapis hover:underline"
                >
                  waitlist
                </Link>{" "}
                ensures you’re first in line for Professional previews.
              </p>
            </div>
            <form
              className="space-y-4 rounded-3xl border border-storm/12 bg-white/95 p-6 shadow-soft-1"
              method="post"
              action="mailto:security@torvussecurity.com"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-[0.9rem] font-semibold text-storm">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="rounded-xl border border-storm/15 px-3 py-2 text-[0.95rem] text-storm shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-[0.9rem] font-semibold text-storm">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="rounded-xl border border-storm/15 px-3 py-2 text-[0.95rem] text-storm shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="requirements"
                  className="text-[0.9rem] font-semibold text-storm"
                >
                  Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={4}
                  className="rounded-xl border border-storm/15 px-3 py-2 text-[0.95rem] text-storm shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon"
                  placeholder="Let us know about team size, jurisdictions, and compliance needs."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full border border-lagoon/45 bg-lagoon/10 px-5 py-2 text-[0.95rem] font-semibold text-lagoon transition hover:border-lagoon/60 hover:bg-lagoon/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Contact Torvus
              </button>
            </form>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
