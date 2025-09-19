import Link from "next/link";

import { Hero } from "@/components/hero";
import { IconChip } from "@/components/icon-chip";
import { Key, Shield, Timer, Users } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { AudienceTiles, HowItWorksTiles } from "@/components/tiles";
import { buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const dynamic = "force-static";

const featureHighlights = [
  {
    icon: Timer,
    title: "Policy-driven release",
    body: "Compose inactivity thresholds, executor approvals, and context checks before anything unlocks. Estate mode runs only when your signals agree.",
  },
  {
    icon: Shield,
    title: "Duress pause & decoys",
    body: "Trigger a covert pause, serve sanitised decoys, or redirect executors to human review without tipping off a coercive actor.",
  },
  {
    icon: Users,
    title: "Recipient verification",
    body: "Passkeys first, TOTP fallback when necessary. Every recipient must prove identity before Torvus unwraps sealed data.",
  },
  {
    icon: Key,
    title: "Provenance everywhere",
    body: "Every step writes tamper-evident audit trails so beneficiaries and legal teams can prove what was released and when.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Digital Legacy that respects privacy and intent.",
  description:
    "Introduce Torvus Digital Legacy: a policy-driven vault that inventories assets, verifies executors, and orchestrates estate releases with audit-backed provenance.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="pb-24">
      <Hero />

      <HowItWorksTiles />

      <section className="pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div className="container space-y-12">
          <SectionIntro
            eyebrow="Why Torvus"
            title="Security architecture centred on conditional trust."
            description="Every component—from encryption keys to approval oracles—is designed so no single actor can leak secrets. Policies are auditable, recoverable, and testable before they matter."
            align="center"
          />
          <div data-card-list="ab" className="grid gap-6 md:grid-cols-2">
            {featureHighlights.map((feature) => (
              <Card key={feature.title} className="border-storm/12">
                <CardHeader className="flex flex-col gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pastel-cranberry/35 text-cranberry">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardDescription>{feature.body}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AudienceTiles />

      <section className="pt-[calc(var(--section-pt)*0.8)] pb-[calc(var(--section-pb)*0.8)]">
        <div className="container grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6">
            <p className="text-[0.9rem] font-semibold uppercase tracking-[0.26em] text-lagoon">
              Digital Legacy, powered by Torvus
            </p>
            <h2 className="text-h2 font-semibold text-storm">
              Estate releases, crypto keys, and provenance orchestrated together.
            </h2>
            <p className="max-w-[65ch] text-body text-thunder">
              Whether you are preparing a family archive or safeguarding investigative
              material, Torvus keeps your intent encrypted until policy conditions are
              satisfied, then guides executors through each approval.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/pricing"
                className={buttonClasses({
                  variant: "secondary",
                  size: "sm",
                  className: "border-lagoon/45 text-lagoon",
                })}
              >
                Compare plans
              </Link>
              <Link
                href="/digital-legacy"
                className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-lapis hover:underline"
              >
                Learn about Digital Legacy
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mt-6 grid gap-2 text-[0.95rem] text-thunder">
              <IconChip tone="lagoon" icon="users">
                Executors complete KYC and maintain ongoing check-ins.
              </IconChip>
              <IconChip tone="lapis" icon="check">
                Recipient provenance certificates confirm every disclosure.
              </IconChip>
              <IconChip tone="cranberry" icon="shield">
                Duress pause halts releases instantly without alerting observers.
              </IconChip>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-storm/12 bg-white/95 p-8 shadow-soft-1">
            <div
              className="pointer-events-none absolute inset-0 bg-grad-panel opacity-60"
              aria-hidden="true"
            />
            <div className="relative space-y-5">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.3em] text-lapis">
                Release policy snapshot
              </p>
              <h3 className="text-h3 font-semibold text-storm">
                Death verification <span className="text-lagoon">meets</span> executor
                quorum.
              </h3>
              <ul className="space-y-3 text-[0.96rem] text-thunder">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-[0.35rem] inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-lapis"
                    aria-hidden="true"
                  />
                  <span>
                    Minimum 14-day inactivity, probate confirmation, plus two executor
                    attestations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-[0.35rem] inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-lagoon"
                    aria-hidden="true"
                  />
                  <span>
                    Optional duress pause that alerts a trusted contact and suspends
                    timers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-[0.35rem] inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-cranberry"
                    aria-hidden="true"
                  />
                  <span>
                    Crypto key handover requires threshold signatures before shards
                    decrypt.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
