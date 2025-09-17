import Link from "next/link";

import DevicePhoneV0 from "@/components/device-phone-v0";
import { IconChip } from "@/components/icon-chip";
import { Key, Shield, Timer, Users } from "@/components/icons";
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
    body: "Compose inactivity windows, approval quorums, and conditional checks. If you don’t respond in time, Torvus can orchestrate controlled release without exposing plaintext to operators.",
  },
  {
    icon: Shield,
    title: "Duress pause & safe fails",
    body: "Trigger a silent pause that freezes releases, serves decoy content, or alerts a trusted contact—without tipping off an observer. Every event is captured in tamper-evident logs.",
  },
  {
    icon: Users,
    title: "Recipient verification",
    body: "Bind recipients to verified identities and enforce passkeys or TOTP fallback. Zero-knowledge retrieval flows make sure only intended parties unwrap sealed data.",
  },
  {
    icon: Key,
    title: "Digital Legacy orchestration",
    body: "Inventory critical artifacts, capture intent, and automate estate handover with policy-backed key splits. Executors get transparent checklists with provenance certificates.",
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
      <section
        data-mood="storm"
        data-gridlines="storm"
        className="heading-band band-home relative overflow-hidden border-b border-white/10 pt-[var(--section-pt)] pb-[var(--section-pb)]"
      >
        <div
          className="pointer-events-none absolute -left-32 top-12 h-64 w-64 rounded-full bg-cranberry/25 blur-[140px]"
          aria-hidden="true"
        />
        <div className="container relative flex flex-col gap-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="order-2 space-y-7 rounded-xl border border-white/60 bg-white p-7 shadow-[0_20px_50px_rgba(11,18,32,0.12)] lg:order-1 lg:mr-14">
            <p className="text-[0.95rem] font-semibold uppercase tracking-[0.26em] text-cranberry/80">
              Policy-based vaulting
            </p>
            <h1 className="page-title-gradient max-w-[18ch] text-display font-semibold">
              Protect people by protecting their information.
            </h1>
            <p className="max-w-[65ch] text-lead text-thunder">
              Torvus seals sensitive disclosures behind conditional policies with live
              duress controls and independently verifiable provenance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimarySubtleLink href="/waitlist" className="whitespace-nowrap">
                Join the waitlist
              </PrimarySubtleLink>
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
          <div className="order-1 flex flex-col items-center gap-8 text-white lg:order-2 lg:items-end">
            <div className="relative flex w-full max-w-[320px] justify-center rounded-xl border border-white/20 bg-white/10 p-6 shadow-soft-2 backdrop-blur">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl bg-grad-hero opacity-80"
                aria-hidden="true"
              />
              <DevicePhoneV0 scheme="dark" accent="cranberry" />
            </div>
            <div className="relative w-full max-w-[320px] overflow-hidden rounded-lg border border-white/20 bg-white/10 p-6 shadow-soft-1 backdrop-blur">
              <div
                className="pointer-events-none absolute inset-0 bg-grad-panel opacity-55"
                aria-hidden="true"
              />
              <div className="relative space-y-4">
                <p className="text-[0.8rem] font-semibold uppercase tracking-[0.3em] text-cranberry">
                  Recipient portal
                </p>
                <h2 className="text-h3 font-semibold text-white">
                  Recipients stay verified before anything unlocks
                </h2>
                <p className="max-w-[65ch] text-[1rem] text-white">
                  Passkeys and lightweight proofing confirm identities before Torvus
                  unwraps sealed keys. Every disclosure carries provenance your
                  counterparts can trust.
                </p>
                <div className="space-y-2 text-[0.95rem] text-white">
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
              <Card key={feature.title}>
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

      <section className="relative overflow-hidden pt-[calc(var(--section-pt)*0.8)] pb-[calc(var(--section-pb)*0.8)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-mist/40 shadow-[0_1px_0_rgba(0,0,0,0.04)_inset]"
          aria-hidden="true"
        />
        <div className="container space-y-7 text-center">
          <p className="text-[0.95rem] font-semibold uppercase tracking-[0.24em] text-cranberry">
            Trusted partners
          </p>
          <p className="text-h3 font-semibold text-storm">
            Working with journalists, NGOs, and professionals protecting critical
            missions.
          </p>
          <p className="mx-auto max-w-[65ch] text-lead text-thunder">
            Torvus supports collaborative handover between teams, field operators,
            counsel, and investigative partners operating under pressure. Policy-driven
            approvals, duress controls, and provenance tie every release to the right
            story.
          </p>
          <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-3 text-[0.95rem] text-thunder">
            {[
              "Investigative journalism units",
              "Humanitarian response teams",
              "Critical infrastructure operators",
            ].map((item) => (
              <IconChip key={item} tone="lagoon" icon="users" className="px-4 py-1.5">
                {item}
              </IconChip>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.9)] pb-[calc(var(--section-pb)*0.9)]">
        <div className="container">
          <div className="rounded-xl border border-storm/15 bg-[#0B1220] text-white p-6 shadow-soft-2 md:p-8">
            <div className="max-w-[65ch] space-y-6 text-white/90">
              <h2 className="page-title-gradient text-h2 font-semibold text-white">
                Plan for red lines without compromising today.
              </h2>
              <p className="text-lead">
                Torvus aligns security, legal, and operational leadership around one
                policy: when conditions are met, releases happen with proof; otherwise
                nothing leaves the vault.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/security"
                  className={buttonClasses({
                    variant: "secondary",
                    size: "lg",
                    className:
                      "border-white/70 text-white hover:border-white hover:bg-white/10 focus-visible:ring-offset-storm",
                  })}
                >
                  Explore the security model
                </Link>
                <Link
                  href="/contact"
                  className={buttonClasses({
                    variant: "link",
                    size: "lg",
                    className: "text-white underline-offset-8",
                  })}
                >
                  Talk with our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
