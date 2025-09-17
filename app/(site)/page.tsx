import Link from "next/link";

import DevicePhone from "@/components/device-phone";
import { IconChip } from "@/components/icon-chip";
import { Check, Key, Shield, Timer, Users } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { buttonClasses } from "@/components/ui/button";
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
        className="heading-band band-home relative overflow-hidden border-b border-white/10 pt-[var(--section-pt)] pb-[var(--section-pb)] text-white"
      >
        <div
          className="pointer-events-none absolute -left-32 top-12 h-64 w-64 rounded-full bg-cranberry/25 blur-[140px]"
          aria-hidden="true"
        />
        <div className="container relative flex flex-col gap-16 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center">
          <div className="order-2 space-y-8 lg:order-1 relative scrim-light">
            <p className="text-[0.95rem] font-semibold uppercase tracking-[0.26em] text-cranberry/80">
              Policy-based vaulting
            </p>
            <h1 className="max-w-[18ch] text-display font-semibold text-white">
              Protect people by protecting their information.
            </h1>
            <p className="max-w-[60ch] text-lead text-white">
              Torvus seals sensitive disclosures behind conditional policies with live
              duress controls and independently verifiable provenance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/waitlist"
                className={buttonClasses({
                  variant: "primary",
                  size: "lg",
                  className: "whitespace-nowrap",
                })}
              >
                Join the waitlist
              </Link>
              <Link
                href="/features"
                className={buttonClasses({
                  variant: "secondary",
                  size: "lg",
                  className:
                    "whitespace-nowrap focus-visible:ring-offset-storm hover:underline",
                })}
              >
                View the platform
              </Link>
            </div>
            <p className="text-[0.95rem] text-white">
              Built with zero-knowledge encryption, Australian Privacy Principles, and
              GDPR high-assurance workflows in mind.
            </p>
            <div className="mt-6 grid gap-2 text-[0.95rem]">
              {[
                {
                  copy: "Policy-based release with timers, approvals, and contextual checks.",
                  tone: "cranberry" as const,
                },
                {
                  copy: "Duress pause and decoys that don’t tip off a coercive actor.",
                  tone: "lagoon" as const,
                },
                {
                  copy: "Verified recipients using passkeys first with TOTP fallback when required.",
                  tone: "lapis" as const,
                },
                {
                  copy: "Provenance certificates captured for every unwrapping event.",
                  tone: "lagoon" as const,
                },
              ].map(({ copy, tone }) => (
                <IconChip key={copy} tone={tone} icon={<Check className="h-3 w-3" />}>
                  {copy}
                </IconChip>
              ))}
            </div>
          </div>
          <div className="order-1 flex flex-col items-center gap-8 lg:order-2 lg:items-end">
            <div className="relative flex w-full max-w-[360px] justify-center rounded-[2.9rem] border border-white/15 bg-white/5 p-8 shadow-soft-2 backdrop-blur">
              <div
                className="pointer-events-none absolute inset-0 rounded-[2.9rem] bg-grad-hero opacity-85"
                aria-hidden="true"
              />
              <DevicePhone scheme="dark" accent="cranberry" float />
            </div>
            <div className="relative w-full max-w-[360px] overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-8 shadow-soft-1 backdrop-blur">
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
                <p className="text-[1rem] text-white">
                  Passkeys and lightweight proofing confirm identities before Torvus
                  unwraps sealed keys. Every disclosure carries provenance your
                  counterparts can trust.
                </p>
                <ul className="space-y-2 text-[1rem] text-white">
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-lagoon"
                      aria-hidden="true"
                    />
                    Multi-factor retrieval with device fingerprinting
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-lagoon"
                      aria-hidden="true"
                    />
                    Automatic provenance certificate for every release
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-lagoon"
                      aria-hidden="true"
                    />
                    Checklist mode for estate executors and teams
                  </li>
                </ul>
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
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-grad-divider opacity-60"
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
          <p className="mx-auto max-w-3xl text-lead text-thunder">
            Torvus supports collaborative handover between teams, field operators,
            counsel, and investigative partners operating under pressure. Policy-driven
            approvals, duress controls, and provenance tie every release to the right
            story.
          </p>
          <ul className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-4 text-[0.95rem] text-thunder">
            {[
              "Investigative journalism units",
              "Humanitarian response teams",
              "Critical infrastructure operators",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-cranberry"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.9)] pb-[calc(var(--section-pb)*0.9)]">
        <div className="container">
          <div className="rounded-3xl border border-storm/10 bg-storm text-white p-12 shadow-soft-2 md:p-16">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-h2 font-semibold">
                Plan for red lines without compromising today.
              </h2>
              <p className="text-lead text-white">
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
