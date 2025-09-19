import Link from "next/link";

import { AnalyticsEvent } from "@/components/analytics-event";
import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink, buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const revalidate = 86400;

const capabilities = [
  {
    title: "Asset inventory & intent capture",
    body: "Catalogue accounts, archives, crypto wallets, and instructions. Attach context and successor notes that stay encrypted until release.",
  },
  {
    title: "Legacy agents & executor KYC",
    body: "Nominate trusted people or professionals. Torvus verifies their identity and keeps them in readiness mode with periodic check-ins.",
  },
  {
    title: "Death verification predicate",
    body: "Blend inactivity timers, human attestations, and probate evidence before estate mode begins. Manual review today, registry integrations tomorrow.",
  },
  {
    title: "Estate mode orchestrator",
    body: "Stage releases per recipient with checklists, provenance certificates, and redaction controls. Executors stay accountable across every step.",
  },
  {
    title: "Optional crypto key handover",
    body: "Distribute Shamir-style threshold splits. No single party ever holds the full secret without the quorum you define.",
  },
  {
    title: "Duress pause",
    body: "Freeze timers, alert trusted contacts, and optionally serve decoy material without tipping off a coercive actor.",
  },
  {
    title: "Recipient verification",
    body: "Recipients must pass passkey-first authentication or high-assurance fallbacks before any data decrypts.",
  },
  {
    title: "Audit & provenance",
    body: "Every action emits a tamper-evident certificate so families, lawyers, and auditors can prove what happened and when.",
  },
];

const tiers = [
  {
    id: "individual",
    name: "Torvus Individual",
    summary: "Free or low-cost core, ideal for personal estates and family archives.",
    features: [
      "Digital Legacy basics with guided inventory templates.",
      "Two executors with email and passkey verification.",
      "Standard audit history and provenance receipts.",
    ],
  },
  {
    id: "professional",
    name: "Torvus Professional",
    summary: "For journalists, NGOs, and estate planners who need advanced policies.",
    features: [
      "Advanced policy composer with multi-signal predicates.",
      "Executor and recipient KYC with redaction-ready dry runs.",
      "Extended audit exports and integration hooks.",
    ],
  },
  {
    id: "enterprise",
    name: "Torvus Enterprise",
    summary:
      "Custom programs for organisations with regulated or high-assurance requirements.",
    features: [
      "Custom estate-mode workflows, attestations, and reporting.",
      "SSO/SAML, delegated administration, and bespoke onboarding.",
      "Dedicated support with DPA/BAA options.",
    ],
  },
];

export const metadata: Metadata = createMetadata({
  title: "Digital Legacy",
  description:
    "Plan for digital estate handover with policy-backed encryption, verified executors, and orchestrated checklists that respect intent and privacy.",
  path: "/digital-legacy",
});

export default function DigitalLegacyPage() {
  return (
    <div className="pb-24">
      <AnalyticsEvent event="dl_page_view" pagePath="/digital-legacy" />
      <section className="relative overflow-hidden border-b border-storm/10 bg-gradient-to-br from-white via-pastel-lapis/40 to-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-pastel-lapis/50 blur-[160px]"
          aria-hidden="true"
        />
        <div className="container relative space-y-8">
          <p className="text-[0.9rem] font-semibold uppercase tracking-[0.26em] text-lapis">
            Digital Legacy
          </p>
          <h1 className="text-display font-semibold text-storm">
            Digital Legacy, by Torvus
          </h1>
          <p className="max-w-prose text-lead text-thunder">
            A privacy-first digital estate platform that inventories assets, verifies
            executors, and releases information only when your policy says it’s time.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PrimarySubtleLink href="/waitlist" className="w-full sm:w-auto">
              Join the waitlist
            </PrimarySubtleLink>
            <Link
              href="/pricing"
              className={buttonClasses({
                variant: "secondary",
                size: "sm",
                className: "border-lagoon/45 text-lagoon",
              })}
            >
              Compare tiers
            </Link>
          </div>
          <p className="max-w-prose text-[0.95rem] text-thunder">
            Executors and beneficiaries always receive provenance records. Torvus
            operators never see your plaintext.
          </p>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.9)] pb-[calc(var(--section-pb)*0.9)]">
        <div className="container space-y-8">
          <SectionIntro
            title="What Digital Legacy is"
            description="A verifiable, policy-driven estate release platform that protects your privacy today while preparing trusted handover for tomorrow."
            eyebrow="Overview"
          />
          <div className="space-y-4 text-body text-thunder">
            <p>
              Torvus Digital Legacy combines encrypted asset storage with policy
              orchestration. You decide who should receive each item, what verification
              they must pass, and how long Torvus should wait before initiating release.
            </p>
            <p>
              Executors receive checklists with provenance so they can evidence every step
              without exposing secrets. You can pause, revise, or revoke at any time
              before the policy is fulfilled.
            </p>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="bg-gradient-to-br from-white via-mist/60 to-white py-[calc(var(--section-pt)*0.8)]"
      >
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Key capabilities"
            title="The toolkit behind Digital Legacy"
            description="From intent capture to duress response, each component is built for high-assurance release orchestration."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <Card key={item.title} className="border-storm/12">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.85)] pb-[calc(var(--section-pb)*0.85)]">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Policy mechanics"
            title="How the release policy works"
            description="Policies combine inactivity thresholds, grace windows, and verification steps so no single signal can trigger estate mode."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Configure inactivity timers with reminders and escalation paths.",
              "Require executor attestations, probate confirmation, or third-party verification before release.",
              "Set grace windows to cancel or pause if circumstances change.",
              "Simulate the policy end-to-end with dry runs before going live.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-storm/12 bg-white/95 p-5 shadow-soft-1"
              >
                <span
                  className="mt-[0.3rem] inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-lagoon"
                  aria-hidden="true"
                />
                <span className="text-body text-thunder">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-pastel-cranberry/25 to-white py-[calc(var(--section-pt)*0.8)]">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Security & privacy"
            title="Engineered for zero-knowledge control"
            description="Encryption at rest with customer-specific keys, hardware-backed KMS on the roadmap, and a zero-knowledge design so Torvus never handles your plaintext."
          />
          <div className="grid gap-4 text-body text-thunder">
            <p>
              Every vault item is encrypted client-side before it reaches Torvus. We
              operate with strict separation between compute and key management, and
              roadmap customer-managed keys via Hardware Security Modules.
            </p>
            <p>
              Provenance logs are tamper-evident and exportable. External auditors can
              verify chain-of-custody without seeing sensitive content. Learn more on our{" "}
              <Link href="/security" className="font-semibold text-lapis hover:underline">
                Security page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.85)] pb-[calc(var(--section-pb)*0.85)]">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="Tiers"
            title="Choose the tier that meets your estate needs"
            description="Start personal, upgrade for professional oversight, or partner with Torvus for enterprise rollouts."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <Card key={tier.id} id={tier.id} className="h-full border-storm/12">
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.summary}</CardDescription>
                </CardHeader>
                <ul className="space-y-2 text-[0.95rem] text-thunder">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span
                        className="mt-[0.35rem] inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-lagoon"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
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

      <section className="bg-gradient-to-br from-white via-mist/60 to-white py-[calc(var(--section-pt)*0.8)]">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Get started"
            title="Ready to prepare your Digital Legacy?"
            description="Request access to the waitlist today. We’ll guide you through inventory, policy design, and executor onboarding."
          />
          <div className="flex flex-wrap items-center gap-4">
            <PrimarySubtleLink href="/waitlist" className="w-full sm:w-auto">
              Join the waitlist
            </PrimarySubtleLink>
            <Link
              href="https://platform.torvussecurity.com"
              className={buttonClasses({
                variant: "tertiary",
                size: "sm",
                className: "border-lagoon/45 text-lagoon",
              })}
            >
              Go to platform signup
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
