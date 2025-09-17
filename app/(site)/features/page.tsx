import Link from "next/link";

import { IconChip } from "@/components/icon-chip";
import {
  Check,
  Key as KeyIcon,
  Shield,
  Timer as TimerIcon,
  Users as UsersIcon,
} from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const revalidate = 86400;

const sections = [
  {
    id: "policy",
    icon: TimerIcon,
    name: "Policy engine & automation",
    lead: "Compose inactivity windows, quorum approvals, and contextual signals. Preview outcomes before they go live.",
    bullets: [
      "Compose predicates from time windows, inactivity grace, quorum approvals, and external signals like attested TEE oracles.",
      "Dry-run policies with simulated scenarios, showing pass/fail reasons for each predicate before deployment.",
      "Version-controlled policy history with rollbacks, approvals, and automated notifications to stakeholders.",
    ],
  },
  {
    id: "duress",
    icon: Shield,
    name: "Duress, pause, and safe fails",
    lead: "Freeze releases silently or hand over decoy packages while audit evidence continues to build.",
    bullets: [
      "Hardware and software duress triggers freeze releases in seconds while notifying designated responders.",
      "Safe-mode content lets teams replace sensitive data with controlled narratives when working under observation.",
      "Every duress state change is logged with provenance and can fan out to downstream security orchestration tools.",
    ],
  },
  {
    id: "recipients",
    icon: UsersIcon,
    name: "Recipient identity & verification",
    lead: "Bind recipients to verified identities. Require passkeys first with TOTP fallback only where policy demands.",
    bullets: [
      "Passkeys backed by device attestation provide phishing-resistant authentication with minimal friction.",
      "Policy-based release bundling ensures each recipient only sees the sealed material they are authorised to handle.",
      "Optional KYC and IDV gates for estate executors, counsel, or investigative teams working across jurisdictions.",
    ],
  },
  {
    id: "provenance",
    icon: Check,
    name: "Transparency, audit, and provenance",
    lead: "Every release records who requested, who approved, and which controls passed with tamper-evident receipts.",
    bullets: [
      "Integrity-checked audit trails stored in append-only logs replicated to customer-controlled destinations.",
      "Data lineage for uploaded assets, including hashing, classification, and optional out-of-band validation events.",
      "API-first reporting so governance teams can plug Torvus evidence directly into compliance workflows.",
    ],
  },
  {
    id: "developer",
    icon: KeyIcon,
    name: "Developer surface",
    lead: "APIs and webhooks let you orchestrate policies from CI/CD, ticketing, or custom runbooks without sacrificing control.",
    bullets: [
      "Declarative policy definitions versioned in Git with automated validation on pull requests.",
      "Event-driven webhooks for policy state changes, approvals, and release outcomes.",
      "Language SDKs for vault ingestion, sealed key distribution, and recipient provisioning.",
    ],
  },
  {
    id: "platform",
    icon: Shield,
    name: "Platform hardening",
    lead: "Infrastructure attested through HSM-backed splits, hardware-backed secrets, and aggressive anomaly detection.",
    bullets: [
      "Keys sealed inside HSM/TEE shards with quorum release and integrity monitoring.",
      "Continuous posture scanning with automated fix pathways and customer-visible status digests.",
      "Strict CSP, isolated runtime sandboxes, and environment-level guardrails across every deployment.",
    ],
  },
];

const overviewCards = sections.slice(0, 4);

export const metadata: Metadata = createMetadata({
  title: "Feature overview",
  description:
    "See how Torvus brings conditional release, duress controls, and provenance together so your vault only opens for the right people at the right time.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <div id="top" className="pb-24">
      <section className="heading-band band-home relative overflow-hidden border-b border-storm/10 bg-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-grad-divider opacity-30"
          aria-hidden="true"
        />
        <div className="container relative space-y-8">
          <SectionIntro
            eyebrow="Platform overview"
            title="Conditional-access vaulting across the lifecycle"
            description="Start with a quick summary, then dive into the areas that matter most to your team. Each section includes controls, signals, and outcomes Torvus manages for you."
          >
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className={buttonClasses({
                    variant: "tertiary",
                    size: "sm",
                    className:
                      "border border-lagoon/40 bg-white text-lagoon hover:border-lagoon hover:bg-lagoon/10",
                  })}
                >
                  {section.name}
                </Link>
              ))}
            </div>
          </SectionIntro>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.9)] pb-[calc(var(--section-pb)*0.9)]">
        <div className="container space-y-10">
          <div data-card-list="ab" className="grid gap-6 md:grid-cols-2">
            {overviewCards.map((feature) => (
              <Card key={feature.id}>
                <CardHeader className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-cranberry/15 text-cranberry">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-h4 font-semibold text-storm">
                      {feature.name}
                    </CardTitle>
                    <CardDescription className="text-thunder">
                      {feature.lead}
                    </CardDescription>
                  </div>
                </CardHeader>
                <Link
                  href={`#${feature.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-cranberry hover:underline"
                >
                  Explore details
                  <span aria-hidden="true">→</span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.75)] pb-[calc(var(--section-pb)*0.75)]">
        <div className="container space-y-20">
          {sections.map((section) => (
            <article key={section.id} id={section.id} className="scroll-mt-24 space-y-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cranberry/15 text-cranberry">
                    <section.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-h2 font-semibold text-storm">{section.name}</h2>
                  <p className="max-w-3xl text-lead text-thunder">{section.lead}</p>
                </div>
                <Link
                  href="#top"
                  className="text-[0.95rem] font-semibold text-cranberry hover:underline"
                >
                  Back to top
                </Link>
              </div>
              <ul className="grid gap-4 md:grid-cols-2">
                {section.bullets.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-storm/12 bg-white/85 p-5"
                  >
                    <IconChip
                      tone="lagoon"
                      icon={<Check className="h-3 w-3" />}
                      className="text-left text-thunder"
                    >
                      {item}
                    </IconChip>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
