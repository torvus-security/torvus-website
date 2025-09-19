import Link from "next/link";

import { FAQAccordion } from "@/components/faq";
import { IconChip } from "@/components/icon-chip";
import { PricingTiers } from "@/components/pricing-tiers";
import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink, buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

const tiers = [
  {
    id: "individual",
    name: "Torvus Individual",
    headline: "Free / low-cost",
    summary:
      "For individuals preparing their own Digital Legacy with guided inventory and two trusted agents.",
    priceNote: "Private beta is free while we iterate with early adopters.",
    features: [
      "Encrypted asset inventory & intent capture",
      "Two legacy agents with passkey enforcement",
      "Baseline inactivity timers and manual attestations",
      "Standard provenance receipts",
    ],
    primaryCta: {
      href: "https://platform.torvussecurity.com/signup?plan=individual",
      label: "Start Torvus Individual",
    },
    secondaryCta: {
      href: "/digital-legacy",
      label: "Learn about the kit",
    },
  },
  {
    id: "professional",
    name: "Torvus Professional",
    headline: "Pilot pricing",
    summary:
      "For journalists, NGOs, and estate planners who need rehearsal, duress pause, and richer audit trails.",
    features: [
      "Executor KYC with redacted dry-run mode",
      "Estate Mode orchestrator & duress pause",
      "Recipient portal with staged checklists",
      "Enhanced provenance exports & webhook previews",
    ],
    primaryCta: {
      href: "https://platform.torvussecurity.com/signup?plan=professional",
      label: "Join Professional preview",
    },
    secondaryCta: {
      href: "/pricing#individual",
      label: "Compare with Individual",
    },
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Torvus Enterprise",
    headline: "Custom",
    summary:
      "For organisations that need SSO/SAML, bespoke estate templates, contractual assurances, and dedicated support.",
    features: [
      "Custom estate-mode workflows & delegated admin",
      "SSO/SAML, SCIM, and role-based access",
      "Bring-your-own KMS / HSM integration roadmap",
      "Dedicated support with DPA / BAA options",
    ],
    primaryCta: {
      href: "https://platform.torvussecurity.com/contact",
      label: "Talk to Torvus Enterprise",
    },
    secondaryCta: {
      href: "/digital-legacy",
      label: "Review Digital Legacy",
    },
    footnote: "Volume pricing, support SLAs, and attestations available on request.",
  },
];

const faqItems = [
  {
    question: "How will Torvus bill for each tier?",
    answer:
      "Torvus Individual remains free while we co-design with early adopters. Professional pilots are billed monthly per workspace, and Enterprise programmes are scoped contractually with implementation support.",
  },
  {
    question: "How is data secured and where is it stored?",
    answer:
      "Vault material stays encrypted client-side and is stored in Australian and EU regions. Enterprise customers can request regional pinning and review the key management roadmap in the Trust Center.",
  },
  {
    question: "What happens if a policy misfires or I need to pause a release?",
    answer:
      "Every tier includes duress pause. Professional and Enterprise add staged rehearsals, redactions, and the ability to roll back or amend policies with signed provenance.",
  },
  {
    question: "What uptime and support commitments does Torvus offer?",
    answer:
      "We publish real-time uptime at /status. Professional includes best-effort support during business hours; Enterprise adds on-call escalation, incident briefings, and bespoke runbooks.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Torvus pricing & tiers",
  description:
    "Compare Torvus Individual, Professional, and Enterprise to see which Digital Legacy capabilities fit your estate or organisation.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-storm/10 bg-gradient-to-r from-white via-pastel-lagoon/20 to-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute inset-y-0 -right-1/4 w-1/2 rounded-full bg-pastel-lapis/40 blur-[160px]"
          aria-hidden="true"
        />
        <div className="container relative space-y-8">
          <SectionIntro
            eyebrow="Pricing"
            title="Three tiers to launch and scale your Digital Legacy"
            description="Start with Torvus Individual, graduate into Professional pilots, or scope a bespoke Enterprise rollout with contractual assurances."
            align="start"
          />
          <div className="flex flex-wrap items-center gap-2 text-[0.95rem]">
            <IconChip tone="lagoon" icon="timer">
              Policy rehearsal & duress pause included from Professional
            </IconChip>
            <IconChip tone="lapis" icon="users">
              Executor KYC + recipient portal in Professional & Enterprise
            </IconChip>
            <IconChip tone="cranberry" icon="check">
              Enterprise adds SSO, attestations, and DPA/BAA options
            </IconChip>
          </div>
        </div>
      </section>

      <section className="py-[calc(var(--section-pt)*0.75)]">
        <div className="container space-y-10">
          <PricingTiers tiers={tiers} />
        </div>
      </section>

      <section className="py-[calc(var(--section-pt)*0.75)]">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Questions"
            title="Frequently asked"
            description="Need a security review or data residency detail? Start with these answers, then reach out."
            align="start"
          />
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.6)]">
        <div className="container">
          <Card className="border-lagoon/30 bg-white/96 p-8 shadow-[0_18px_40px_rgba(11,18,32,0.08)] md:px-12 md:py-12">
            <CardHeader className="space-y-3 p-0 text-center md:text-left">
              <CardTitle className="text-h3 font-semibold text-storm">
                Need Enterprise assurances or custom pilots?
              </CardTitle>
              <CardDescription>
                Share your requirements—security certifications, data residency,
                integration plans—and the Torvus team will shape a scoped rollout.
              </CardDescription>
            </CardHeader>
            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
              <a
                href="mailto:security@torvussecurity.com"
                className={buttonClasses({
                  variant: "secondary",
                  size: "sm",
                  className: "border-lapis/45 text-lapis",
                })}
              >
                Email security@torvussecurity.com
              </a>
              <PrimarySubtleLink href="/waitlist" className="md:ml-3">
                Join the waitlist
              </PrimarySubtleLink>
              <Link
                href="https://platform.torvussecurity.com/contact"
                className={buttonClasses({
                  variant: "link",
                  size: "sm",
                  className: "text-lapis",
                })}
              >
                Book a call
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
