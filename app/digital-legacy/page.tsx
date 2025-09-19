import Link from "next/link";

import { FeatureSection } from "@/components/feature-section";
import { IconChip } from "@/components/icon-chip";
import { Check, Key, Shield, Timer, Users } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink, buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

const overviewItems = [
  {
    title: "Privacy-first",
    description:
      "Vault content stays encrypted client-side. Torvus sees policies and metadata, not the artefacts you’re protecting.",
    icon: <Shield className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Verifiable",
    description:
      "Every approval, retrieval, and attestation writes an immutable provenance record so executors can prove what happened.",
    icon: <Check className="h-6 w-6" aria-hidden="true" />,
  },
  {
    title: "Controlled release",
    description:
      "Policies compose inactivity timers, human verification, and probation windows before sensitive data unlocks.",
    icon: <Timer className="h-6 w-6" aria-hidden="true" />,
  },
];

const coreCapabilities = [
  {
    title: "Asset inventory & intent capture",
    description:
      "Structured prompts collect documents, accounts, wallets, and personal instructions without leaking plaintext to operators.",
    icon: <Check className="h-6 w-6" aria-hidden="true" />,
    bullets: [
      "Per-asset sensitivity tags with optional redaction",
      "Version history to track refinements over time",
    ],
  },
  {
    title: "Legacy agents & KYC",
    description:
      "Nominate executors, observers, and contingency reviewers. Require passkeys, video checks, or identity proofing before they can act.",
    icon: <Users className="h-6 w-6" aria-hidden="true" />,
    bullets: [
      "Dry-run mode with partial redactions for rehearsal",
      "Activity digest so agents know what changed",
    ],
  },
  {
    title: "Death verification predicate",
    description:
      "Blend inactivity thresholds with attestations from trusted contacts, legal proof, or registrar integrations before release proceeds.",
    icon: <Timer className="h-6 w-6" aria-hidden="true" />,
    bullets: [
      "Configurable grace windows and escalation paths",
      "Support for notarised documents and third-party APIs",
    ],
  },
  {
    title: "Estate Mode orchestrator",
    description:
      "Bundle recipients into checklists with staged tasks, receipt signing, and the ability to pause everything silently if the situation changes.",
    icon: <Shield className="h-6 w-6" aria-hidden="true" />,
    bullets: [
      "Recipient-specific task lists with provenance",
      "Duress pause and safe fails without tipping off observers",
    ],
  },
  {
    title: "Optional crypto key handover",
    description:
      "Split wallets, seed phrases, and custody instructions using threshold cryptography so no single party can move funds alone.",
    icon: <Key className="h-6 w-6" aria-hidden="true" />,
    bullets: [
      "Shamir-style shares with hardware vault storage",
      "Rotation workflows when custodians change",
    ],
  },
  {
    title: "Recipient verification",
    description:
      "Recipients prove possession of trusted devices before disclosures unlock, with fallbacks for high-assurance manual review.",
    icon: <Users className="h-6 w-6" aria-hidden="true" />,
    bullets: [
      "Passkey-first authentication with TOTP or WebRTC review",
      "Detailed audit events for compliance teams",
    ],
  },
  {
    title: "Audit & provenance",
    description:
      "Independent receipts guarantee which policies fired, who consented, and what was delivered—without revealing sealed artefacts.",
    icon: <Check className="h-6 w-6" aria-hidden="true" />,
    bullets: [
      "Cryptographically signed release journals",
      "Export options for compliance and discovery",
    ],
  },
];

const policyPhases = [
  {
    title: "Signal capture",
    description:
      "Automated inactivity monitors, executor check-ins, and manual reports create a blended confidence signal.",
  },
  {
    title: "Grace & verification",
    description:
      "Grace windows give owners a chance to respond. Executors complete KYC, and trusted contacts submit proof-of-life attestations.",
  },
  {
    title: "Estate Mode activation",
    description:
      "When predicates are satisfied, Estate Mode launches with staged task checklists, sealed artefacts, and provenance logging.",
  },
  {
    title: "Release & auditing",
    description:
      "Each disclosure requires explicit acknowledgement. Receipts and cryptographic states are archived for auditors and beneficiaries.",
  },
];

const assurances = [
  {
    title: "Encryption end-to-end",
    description:
      "Client-side encryption keeps artefacts opaque to Torvus. At rest, vault blobs remain sealed with customer-controlled keys.",
  },
  {
    title: "KMS roadmap",
    description:
      "Bring your own HSM or cloud KMS is on the near-term roadmap. Early adopters can review the key management design pack.",
  },
  {
    title: "Zero-knowledge ambition",
    description:
      "Operational tooling shows policy metadata only. Support, engineering, and operators cannot read private disclosures.",
  },
  {
    title: "Transparent governance",
    description:
      "Independent audits and threat modelling updates feed the Torvus Trust Center for ongoing transparency.",
  },
];

const tiers = [
  {
    id: "individual",
    name: "Torvus Individual",
    description:
      "Core vaulting plus the Digital Legacy Kit foundation for personal estates and solo operators.",
    bulletPoints: [
      "Encrypted asset inventory & intent capture",
      "Two legacy agents with passkey enforcement",
      "Baseline inactivity timers and manual attestations",
    ],
    primaryCta: {
      href: "https://platform.torvussecurity.com/signup?plan=individual",
      label: "Start Torvus Individual",
    },
    secondaryCta: {
      href: "/pricing#individual",
      label: "See full plan",
    },
  },
  {
    id: "professional",
    name: "Torvus Professional",
    description:
      "Advanced policies for journalists, NGOs, and estate advisors who need rehearsal, redaction, and richer audit logs.",
    bulletPoints: [
      "Executor KYC and redacted dry-run mode",
      "Estate Mode orchestrator with duress pause",
      "Enhanced provenance exports and webhook previews",
    ],
    primaryCta: {
      href: "https://platform.torvussecurity.com/signup?plan=professional",
      label: "Join Professional preview",
    },
    secondaryCta: {
      href: "/pricing#professional",
      label: "Compare with Individual",
    },
  },
  {
    id: "enterprise",
    name: "Torvus Enterprise",
    description:
      "Custom estate workflows, delegated administration, and contractual assurances for regulated organisations.",
    bulletPoints: [
      "SSO/SAML and delegated administration",
      "Custom KMS integration and estate-mode templates",
      "Dedicated support with DPA/BAA options",
    ],
    primaryCta: {
      href: "https://platform.torvussecurity.com/contact",
      label: "Talk to Torvus Enterprise",
    },
    secondaryCta: {
      href: "/pricing#enterprise",
      label: "Review enterprise scope",
    },
  },
];

export const metadata: Metadata = createMetadata({
  title: "Digital Legacy by Torvus",
  description:
    "Understand how Torvus Digital Legacy manages asset inventory, executor KYC, death verification, estate-mode orchestration, and crypto key handover with full provenance.",
  path: "/digital-legacy",
});

export default function DigitalLegacyPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-storm/10 bg-gradient-to-br from-white via-pastel-lapis/30 to-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-lapis/20 blur-[150px]"
          aria-hidden="true"
        />
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6">
            <h1 className="text-gradient-lapis max-w-[18ch] text-display font-semibold text-storm">
              Digital Legacy, by Torvus
            </h1>
            <p className="max-w-[68ch] text-lead text-thunder">
              Plan controlled, verifiable estate releases that respect privacy today and
              provide clarity tomorrow. Policies coordinate with executors, family
              members, and advisors without revealing sealed instructions ahead of time.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimarySubtleLink href="/waitlist" className="min-w-[200px]">
                Join the waitlist
              </PrimarySubtleLink>
              <Link
                href="/pricing"
                className={buttonClasses({
                  variant: "tertiary",
                  size: "sm",
                  className: "border-lapis/45 text-lapis",
                })}
              >
                View pricing & tiers
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[0.95rem]">
              <IconChip tone="lapis" icon="users">
                Executors stay verified before release
              </IconChip>
              <IconChip tone="cranberry" icon="shield">
                Duress pause freezes estate mode instantly
              </IconChip>
              <IconChip tone="lagoon" icon="check">
                Receipts capture provenance for every action
              </IconChip>
            </div>
          </div>

          <Card className="border-lapis/20 bg-white/95 p-6 shadow-[0_20px_50px_rgba(14,32,68,0.12)]">
            <CardHeader className="space-y-3 p-0">
              <CardTitle className="text-h4 font-semibold text-storm">
                What the Digital Legacy Kit provides
              </CardTitle>
              <CardDescription>
                Policies you can rehearse, control, and prove—without handing over
                everything today.
              </CardDescription>
            </CardHeader>
            <ul className="mt-4 space-y-3 text-[0.95rem] text-thunder">
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[6px] inline-flex h-2.5 w-2.5 rounded-full bg-lagoon/70"
                />
                <span>
                  Guided inventory, executor onboarding, and release rehearsal flows
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[6px] inline-flex h-2.5 w-2.5 rounded-full bg-lagoon/70"
                />
                <span>
                  Death verification predicates that blend automation with human checks
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[6px] inline-flex h-2.5 w-2.5 rounded-full bg-lagoon/70"
                />
                <span>
                  Estate Mode orchestration, duress pause, and provenance receipts
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <FeatureSection
        eyebrow="What Digital Legacy is"
        title="Privacy-first, verifiable, policy-driven release"
        description="The kit combines asset inventory, executor controls, and provenance so legacy planning feels prepared—not improvised."
        align="center"
        columns={3}
        className="bg-white"
        items={overviewItems}
      />

      <FeatureSection
        eyebrow="Key capabilities"
        title="Build a legacy workflow that matches the stakes of your information"
        description="Each capability is designed to be rehearsed ahead of time and provable when the policy executes."
        align="start"
        columns={3}
        className="bg-gradient-to-br from-white via-pastel-lapis/15 to-white"
        items={coreCapabilities}
      />

      <section className="py-[calc(var(--section-pt)*0.75)]">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Release sequence"
            title="How the Digital Legacy release policy executes"
            description="Signals build confidence, humans verify intent, and estate mode orchestrates delivery with receipts."
            align="start"
          />
          <ol className="grid gap-6 md:grid-cols-2">
            {policyPhases.map((phase, index) => (
              <li key={phase.title} className="h-full">
                <Card className="flex h-full flex-col gap-3 border-storm/12 bg-white/96 p-6">
                  <span className="text-gradient-lapis text-[0.85rem] font-semibold uppercase tracking-[0.22em]">
                    Step {index + 1}
                  </span>
                  <CardTitle className="text-h4 font-semibold text-storm">
                    {phase.title}
                  </CardTitle>
                  <CardDescription>{phase.description}</CardDescription>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FeatureSection
        eyebrow="Security & privacy assurances"
        title="Built for teams that need verifiable control"
        description="Review the full security model, attestations, and roadmap in the Torvus Trust Center."
        align="start"
        columns={2}
        items={assurances.map((assurance) => ({
          ...assurance,
          icon: <Shield className="h-6 w-6" aria-hidden="true" />,
        }))}
      />

      <section className="bg-gradient-to-br from-white via-pastel-lagoon/20 to-white py-[calc(var(--section-pt)*0.75)]">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Tiers"
            title="Choose the tier that fits your Digital Legacy rollout"
            description="Start with Torvus Individual or move into Professional and Enterprise pilots as your governance matures."
            align="start"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <Card
                key={tier.id}
                id={tier.id}
                className="flex h-full flex-col justify-between border-lagoon/30 bg-white/96 p-6 shadow-[0_18px_40px_rgba(11,18,32,0.08)]"
              >
                <div className="space-y-3">
                  <CardTitle className="text-h4 font-semibold text-storm">
                    {tier.name}
                  </CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <ul className="mt-4 space-y-2 text-[0.95rem] text-storm/80">
                    {tier.bulletPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-[6px] inline-flex h-2.5 w-2.5 rounded-full bg-lapis/70"
                        />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-col gap-2 text-[0.95rem]">
                  <Link
                    href={tier.primaryCta.href}
                    className="inline-flex items-center justify-between rounded-full border border-lapis/40 px-4 py-2 font-semibold text-lapis transition hover:bg-pastel-lapis/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {tier.primaryCta.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link
                    href={tier.secondaryCta.href}
                    className="inline-flex items-center gap-1 text-[0.9rem] font-semibold text-storm/70 hover:text-storm focus-visible:text-storm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {tier.secondaryCta.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.6)]">
        <div className="container">
          <div className="rounded-2xl border border-lapis/25 bg-white p-8 text-center shadow-[0_18px_40px_rgba(11,18,32,0.08)] md:px-12 md:py-14">
            <h2 className="text-gradient-lapis text-h3 font-semibold text-storm">
              Start planning with the Digital Legacy Kit
            </h2>
            <p className="mx-auto mt-4 max-w-[60ch] text-[1rem] text-thunder">
              Join the waitlist for Torvus Individual or contact us for Professional and
              Enterprise pilots. We’ll help you map the right controls for your estate or
              organisation.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <PrimarySubtleLink href="/waitlist">Join the waitlist</PrimarySubtleLink>
              <Link
                href="https://platform.torvussecurity.com/contact"
                className={buttonClasses({
                  variant: "secondary",
                  size: "sm",
                  className: "border-lapis/45 text-lapis",
                })}
              >
                Contact Torvus
              </Link>
              <Link
                href="/pricing"
                className={buttonClasses({
                  variant: "link",
                  size: "sm",
                  className: "text-lapis",
                })}
              >
                Compare plan tiers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
