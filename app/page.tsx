import Link from "next/link";

import { IconChip } from "@/components/icon-chip";
import { Key, Shield, Timer, Users } from "@/components/icons";
import { PhoneMock } from "@/components/phone-mock";
import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink, buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const dynamic = "force-static";

const featureHighlights = [
  {
    icon: Timer,
    title: "Dead-man switch policies",
    body: "Compose inactivity windows, approval quorums, and conditional checks. If you don’t respond in time, Torvus orchestrates release without exposing plaintext to operators.",
  },
  {
    icon: Shield,
    title: "Duress pause & safe fails",
    body: "Trigger a silent pause that freezes releases, serves decoy content, or alerts a trusted contact without tipping off an observer. Every event lands in tamper-evident logs.",
  },
  {
    icon: Users,
    title: "Recipient verification",
    body: "Bind recipients to verified identities and enforce passkeys or TOTP fallback. Zero-knowledge retrieval flows ensure only intended parties unwrap sealed data.",
  },
  {
    icon: Key,
    title: "Digital Legacy orchestration",
    body: "Inventory critical artefacts, capture intent, and automate estate handover with policy-backed key splits. Executors receive transparent, verifiable checklists.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Protect people by protecting their information.",
  description:
    "Torvus Security is a policy-driven vault with zero-trust encryption, duress controls, and auditable provenance so sensitive work only unlocks when it should.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-white/10 pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute -left-32 top-12 h-64 w-64 rounded-full bg-cranberry/25 blur-[140px]"
          aria-hidden="true"
        />
        <div className="container relative flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-center">
          <div className="order-1 space-y-7 rounded-xl border border-white/60 bg-white p-7 shadow-[0_20px_50px_rgba(11,18,32,0.12)] lg:max-w-xl">
            <p className="text-[0.95rem] font-semibold uppercase tracking-[0.26em] text-cranberry">
              Policy-based vaulting
            </p>
            <h1 className="text-gradient-hero max-w-[18ch] text-display font-semibold">
              Protect people by protecting their information.
            </h1>
            <p className="max-w-[65ch] text-lead text-thunder">
              Torvus seals sensitive disclosures behind conditional policies with live
              duress controls and independently verifiable provenance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimarySubtleLink href="/waitlist" className="whitespace-nowrap" />
              <Link
                href="/product"
                className={buttonClasses({
                  variant: "tertiary",
                  size: "sm",
                  className: "border-lagoon/45 text-lagoon",
                })}
              >
                Explore the product
              </Link>
            </div>
            <p className="max-w-[65ch] text-[0.95rem] text-thunder">
              Built with zero-knowledge encryption, Australian Privacy Principles, and
              GDPR high-assurance workflows in mind.
            </p>
            <div className="mt-6 grid gap-2 text-[0.95rem]">
              {[
                {
                  copy: "Policy-based release with timers, approvals, and contextual checks",
                  tone: "cranberry" as const,
                  icon: "timer" as const,
                },
                {
                  copy: "Duress pause and decoys that don’t tip off a coercive actor",
                  tone: "lagoon" as const,
                  icon: "shield" as const,
                },
                {
                  copy: "Verified recipients using passkeys first with TOTP fallback when required",
                  tone: "lapis" as const,
                  icon: "users" as const,
                },
                {
                  copy: "Provenance certificates captured for every unwrapping event",
                  tone: "lagoon" as const,
                  icon: "check" as const,
                },
              ].map(({ copy, tone, icon }) => (
                <IconChip key={copy} tone={tone} icon={icon}>
                  {copy}
                </IconChip>
              ))}
            </div>
          </div>
          <div className="order-2 flex flex-col items-center gap-8 text-white lg:items-center">
            <div className="relative flex w-full max-w-[320px] justify-center rounded-xl border border-white/20 bg-white/10 p-6 shadow-soft-2 backdrop-blur">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(135deg,rgba(214,31,105,0.32),rgba(38,97,156,0.22))] opacity-80"
                aria-hidden="true"
              />
              <PhoneMock scheme="dark" accent="cranberry" />
            </div>
            <div className="relative w-full max-w-[320px] space-y-4 rounded-xl border border-white/60 bg-white p-6 shadow-[0_20px_50px_rgba(11,18,32,0.1)]">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.3em] text-cranberry">
                Recipient portal
              </p>
              <h2 className="text-gradient-accent text-h3 font-semibold text-storm">
                Recipients stay verified before anything unlocks
              </h2>
              <p className="max-w-[65ch] text-[0.95rem] leading-relaxed text-[#1F2937]">
                Passkeys and proofing confirm identities before Torvus unwraps sealed
                keys. Every disclosure carries provenance your counterparts can trust.
              </p>
              <div className="space-y-2 text-[0.95rem] text-[#1F2937]">
                <IconChip tone="lagoon" icon="users">
                  Multi-factor retrieval with device fingerprinting
                </IconChip>
                <IconChip tone="lapis" icon="check">
                  Automatic provenance certificates for every release
                </IconChip>
                <IconChip tone="cranberry" icon="shield">
                  Checklist mode that keeps executors aligned and accountable
                </IconChip>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div className="container space-y-12">
          <SectionIntro
            eyebrow="Why Torvus"
            title="Security architecture built around conditional trust"
            description="Every component—from encryption keys to approval oracles—is designed so no single actor can leak secrets. Policies are auditable, recoverable, and testable before they matter."
            align="center"
          />
          <div data-card-list="ab" className="grid gap-6 md:grid-cols-2">
            {featureHighlights.map((feature) => (
              <Card
                key={feature.title}
                className="hover-card pressable border border-storm/10 bg-white/92"
              >
                <CardHeader className="flex flex-col gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cranberry/15 text-cranberry">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-h4 font-semibold text-storm">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardDescription>{feature.body}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-gradient-to-br from-white via-pastel-lapis/20 to-white py-[calc(var(--section-pt)*0.75)]">
        <div className="container grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6">
            <p className="text-[0.95rem] font-semibold uppercase tracking-[0.26em] text-lapis">
              Torvus Digital Legacy
            </p>
            <h2 className="text-gradient-accent text-h3 font-semibold text-storm">
              Protect intent today while preparing controlled disclosures for tomorrow
            </h2>
            <p className="max-w-[65ch] text-lead text-thunder">
              Digital Legacy uses Torvus policy orchestration to manage executors, staged
              releases, and provenance so sensitive archives only surface when preset
              conditions are satisfied.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <PrimarySubtleLink href="/digital-legacy">
                Explore Digital Legacy
              </PrimarySubtleLink>
              <Link
                href="/use-cases"
                className={buttonClasses({
                  variant: "tertiary",
                  size: "sm",
                  className: "border-lapis/45 text-lapis",
                })}
              >
                View use cases
              </Link>
            </div>
          </div>
          <div className="grid gap-4 text-[0.95rem] text-thunder">
            {[
              "Liveness checks and duress signals tuned for estate workflows",
              "Executor collaboration without exposing plaintext",
              "Laplace-blue theming aligns with Digital Legacy identity",
            ].map((item) => (
              <IconChip key={item} tone="lapis" icon="check" className="justify-start">
                {item}
              </IconChip>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pt-[calc(var(--section-pt)*0.8)] pb-[calc(var(--section-pb)*0.8)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-mist/40 shadow-[0_1px_0_rgba(0,0,0,0.04)_inset]"
          aria-hidden="true"
        />
        <div className="container">
          <p className="text-[0.95rem] font-semibold uppercase tracking-[0.24em] text-cranberry">
            Trusted partners
          </p>
          <p className="text-gradient-hero text-h3 font-semibold text-storm">
            Working with journalists, NGOs, and professionals protecting critical
            missions.
          </p>
          <div className="mt-6 grid gap-6 text-[0.95rem] text-thunder md:grid-cols-2">
            <Card className="hover-card pressable border border-white/60 bg-white/90 p-6">
              <CardHeader className="space-y-2">
                <CardTitle className="text-h4 font-semibold text-storm">
                  Field reporting teams
                </CardTitle>
              </CardHeader>
              <CardDescription>
                Coordinating disclosures across bureaus and stringers requires cooperative
                controls. Torvus keeps sensitive details sealed until checks complete,
                while provenance proves who saw what, when.
              </CardDescription>
            </Card>
            <Card className="hover-card pressable border border-white/60 bg-white/90 p-6">
              <CardHeader className="space-y-2">
                <CardTitle className="text-h4 font-semibold text-storm">
                  Humanitarian operators
                </CardTitle>
              </CardHeader>
              <CardDescription>
                Mission-critical context, safehouse logistics, and comms plans sit behind
                duress-aware policies. Release windows, executor quorums, and silent
                pauses keep teams safe even under pressure.
              </CardDescription>
            </Card>
            <Card className="hover-card pressable border border-white/60 bg-white/90 p-6">
              <CardHeader className="space-y-2">
                <CardTitle className="text-h4 font-semibold text-storm">
                  Strategic security teams
                </CardTitle>
              </CardHeader>
              <CardDescription>
                Blend zero-knowledge encryption with estate workflows, approvals, and
                auditability. Torvus lets security operations, legal, and leadership share
                sensitive intel without dead drops or uncontrolled hand-offs.
              </CardDescription>
            </Card>
            <Card className="hover-card pressable border border-white/60 bg-white/90 p-6">
              <CardHeader className="space-y-2">
                <CardTitle className="text-h4 font-semibold text-storm">
                  Estate and fiduciary partners
                </CardTitle>
              </CardHeader>
              <CardDescription>
                Executors receive checklists, provenance, and automated attestation logs.
                Sensitive artefacts stay encrypted until predicates complete—ensuring
                compliance without sacrificing privacy.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
