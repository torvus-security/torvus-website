import { Layers, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

import { IconChip } from "@/components/icon-chip";
import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink, buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Policy-driven control center",
    description:
      "Compose approvals, duress triggers, and contextual checks in one vault policy. Every change is versioned with approvals and ready-to-run simulations.",
  },
  {
    icon: Users,
    title: "Recipient verification",
    description:
      "Passkeys first, with optional TOTP fallback. Configure identity proofing gates, align provenance with each release, and revoke access without touching plaintext.",
  },
  {
    icon: Layers,
    title: "Split custody key orchestration",
    description:
      "Envelope keys are sealed across HSM clusters and attested TEEs. Releases require quorum-based unwrap tied to policy state, duress status, and runtime attestation.",
  },
];

const highlights = [
  "Attested infrastructure with continuous drift detection and guardrails.",
  "Immersive auditing—mirror immutable logs to your SIEM or evidence store.",
  "SDKs and APIs to ingest assets, enrol recipients, and automate playbooks.",
  "Duress pause and decoy packages that keep operators safe under pressure.",
];

export const metadata: Metadata = createMetadata({
  title: "Product overview",
  description:
    "See how Torvus combines policy orchestration, duress controls, and zero-knowledge release flows for sensitive disclosures.",
  path: "/product",
});

export default function ProductPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-storm/10 bg-gradient-to-br from-white via-pastel-lagoon/20 to-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute inset-y-0 right-[-20%] w-1/2 rounded-full bg-grad-divider opacity-50 blur-3xl"
          aria-hidden="true"
        />
        <div className="container relative space-y-8">
          <SectionIntro
            eyebrow="Product"
            title="Policy-controlled vaulting for high-stakes disclosures"
            description="Torvus coordinates the policies, approvals, and cryptography needed to release critical information without exposing plaintext to operators."
            className="[&>h2]:text-gradient-hero"
          >
            <div className="flex flex-wrap items-center gap-3">
              <PrimarySubtleLink href="/waitlist" />
              <a
                href="mailto:hello@torvussecurity.com"
                className={buttonClasses({
                  variant: "secondary",
                  size: "sm",
                  className: "hover:underline",
                })}
              >
                Request more info
              </a>
            </div>
          </SectionIntro>

          <div className="grid gap-3 text-[0.95rem] text-thunder sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Zero-knowledge release",
              "Duress signals built-in",
              "Attested infrastructure",
              "Audit-grade provenance",
            ].map((item) => (
              <IconChip key={item} tone="lagoon" icon="check" className="justify-start">
                {item}
              </IconChip>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.85)] pb-[calc(var(--section-pb)*0.85)]">
        <div className="container grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="hover-card pressable border-storm/10 bg-white/96"
            >
              <CardHeader className="flex flex-col gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cranberry/15 text-cranberry">
                  <pillar.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle>{pillar.title}</CardTitle>
              </CardHeader>
              <CardDescription>{pillar.description}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-[calc(var(--section-pt)*0.8)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-grad-divider opacity-50"
          aria-hidden="true"
        />
        <div className="container space-y-7">
          <h2 className="text-gradient-accent text-h3 font-semibold text-storm">
            Platform highlights
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="hover-card pressable rounded-3xl border border-storm/12 bg-white/95 p-5"
              >
                <IconChip tone="lagoon" icon="check" className="justify-start text-left">
                  {item}
                </IconChip>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-[calc(var(--section-pt)*0.75)]">
        <div className="container flex justify-center">
          <div className="w-full max-w-4xl rounded-3xl border border-storm/12 bg-gradient-to-br from-white via-pastel-lagoon/25 to-white p-8 shadow-[0_30px_60px_rgba(14,23,38,0.12)]">
            <h2 className="text-gradient-hero text-h3 font-semibold text-storm">
              Ready to explore your rollout?
            </h2>
            <p className="mt-3 max-w-3xl text-lead text-thunder">
              Share your use case, security controls, and launch timelines. We’ll match
              you to a cohort and align the right attestations, integrations, and
              migration support.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <PrimarySubtleLink href="/waitlist" />
              <a
                href="mailto:hello@torvussecurity.com"
                className={buttonClasses({
                  variant: "secondary",
                  size: "sm",
                  className: "hover:underline",
                })}
              >
                Request more info
              </a>
              <Link
                href="/security"
                className="inline-flex items-center justify-center rounded-full border border-lapis/40 px-5 py-3 text-[0.95rem] font-semibold text-lapis transition hover:bg-pastel-lagoon/40"
              >
                Review the security architecture
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
