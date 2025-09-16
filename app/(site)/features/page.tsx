import {
  Binary,
  ClipboardCheck,
  Fingerprint,
  ShieldCheck,
  Timer,
  Workflow,
} from "lucide-react";
import Link from "next/link";

import { SectionIntro } from "@/components/section-intro";
import { buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const revalidate = 86400;

const sections = [
  {
    id: "policy",
    icon: Timer,
    name: "Policy engine & automation",
    lead: "Design rules that combine inactivity timers, approvals, and contextual signals. Preview outcomes before they go live.",
    bullets: [
      "Compose predicates from time windows, inactivity grace, quorum approvals, and external signals like attested TEE oracles.",
      "Dry-run policies with simulated scenarios, showing pass/fail reasons for each predicate before deployment.",
      "Version-controlled policy history with rollbacks, approvals, and automated notifications to stakeholders.",
    ],
  },
  {
    id: "duress",
    icon: ShieldCheck,
    name: "Duress, pause, and safe fails",
    lead: "Give operators a discreet way to halt releases, surface decoy data, or escalate without alerting a coercive actor.",
    bullets: [
      "Hardware and software duress triggers freeze releases in seconds while notifying designated responders.",
      "Safe-mode content lets teams replace sensitive data with controlled narratives when working under observation.",
      "Every duress state change is logged with provenance and can fan out to downstream security orchestration tools.",
    ],
  },
  {
    id: "recipients",
    icon: Fingerprint,
    name: "Recipient identity & verification",
    lead: "Bind keys to verified recipients with passkeys first, TOTP fallback where policy demands, and optional KYC workflows.",
    bullets: [
      "Passkeys backed by device attestation provide phishing-resistant authentication with minimal friction.",
      "Policy-based release bundling ensures each recipient only sees the sealed material they are authorised to handle.",
      "Optional KYC and IDV gates for estate executors, counsel, or investigative teams working across jurisdictions.",
    ],
  },
  {
    id: "provenance",
    icon: ClipboardCheck,
    name: "Transparency, audit, and provenance",
    lead: "Every release generates a tamper-evident certificate showing who requested, who approved, and which controls passed.",
    bullets: [
      "Integrity-checked audit trails stored in append-only logs replicated to customer-controlled destinations.",
      "Data lineage for uploaded assets, including hashing, classification, and optional out-of-band validation events.",
      "API-first reporting so governance teams can plug Torvus evidence directly into compliance workflows.",
    ],
  },
  {
    id: "developer",
    icon: Workflow,
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
    icon: Binary,
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
      <section className="border-b border-storm/10 bg-white py-20">
        <div className="container space-y-8">
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
                  className={buttonClasses({ variant: "secondary", size: "sm" })}
                >
                  {section.name}
                </Link>
              ))}
            </div>
          </SectionIntro>
        </div>
      </section>

      <section className="py-16">
        <div className="container space-y-10">
          <div className="ab-alt grid gap-6 md:grid-cols-2">
            {overviewCards.map((feature) => (
              <Card key={feature.id}>
                <CardHeader className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lapis/12 text-lapis">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle>{feature.name}</CardTitle>
                </CardHeader>
                <CardDescription>{feature.lead}</CardDescription>
                <Link
                  href={`#${feature.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-small font-semibold text-lapis"
                >
                  Explore details
                  <span aria-hidden="true">→</span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container space-y-20">
          {sections.map((section) => (
            <article key={section.id} id={section.id} className="scroll-mt-24 space-y-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lagoon/15 text-lagoon">
                    <section.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-h2 font-semibold text-storm">{section.name}</h2>
                  <p className="max-w-3xl text-lead text-thunder/90">{section.lead}</p>
                </div>
                <Link
                  href="#top"
                  className="text-small font-semibold text-lapis hover:underline"
                >
                  Back to top
                </Link>
              </div>
              <ul className="grid gap-4 md:grid-cols-2">
                {section.bullets.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-storm/10 bg-mist/50 p-5 text-body text-thunder/90"
                  >
                    {item}
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
