import Link from "next/link";

import { IconChip } from "@/components/icon-chip";
import { Check, Key, Shield, Timer, Users } from "@/components/icons";
import { PhoneMock } from "@/components/phone-mock";
import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink, buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";

type Step = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  summary: string;
  bullets: string[];
};

type Audience = {
  title: string;
  body: string;
  cta: {
    href: string;
    label: string;
  };
  secondary?: {
    href: string;
    label: string;
  };
};

const digitalLegacySteps: Step[] = [
  {
    icon: Check,
    title: "Asset inventory & intent capture",
    summary:
      "Guided prompts help you catalogue vault items, messages, accounts, and redactions without exposing plaintext to Torvus.",
    bullets: [
      "Structured fields for documents, credentials, wallets, and personal notes",
      "Intent statements encrypted and versioned for later review",
    ],
  },
  {
    icon: Users,
    title: "Legacy agents with KYC",
    summary:
      "Designate executors and observers, require identity proofing, and run dry-runs so everyone understands the plan before it matters.",
    bullets: [
      "Passkey-first authentication with optional video or ID checks",
      "Dry-run mode with redacted artefacts for rehearsal",
    ],
  },
  {
    icon: Timer,
    title: "Death verification predicate",
    summary:
      "Compose inactivity timers, delegated confirmations, and probate evidence so no single signal can unlock sensitive disclosures.",
    bullets: [
      "Multiple grace windows before escalation",
      "Manual attestations from trusted contacts or integrated registries",
    ],
  },
  {
    icon: Shield,
    title: "Estate Mode orchestrator",
    summary:
      "Bundle recipients into staged checklists with provenance receipts for every task, pause releases with duress signals, and resume once risks clear.",
    bullets: [
      "Per-recipient task lists with accountability traces",
      "Silent duress pause that freezes releases without alerting observers",
    ],
  },
  {
    icon: Key,
    title: "Optional crypto key handover",
    summary:
      "Split wallets and passphrases using threshold schemes so no single agent can act alone, with sealed shares for professional custodians.",
    bullets: [
      "Shamir-style splits with hardware vault storage options",
      "Revocation workflows when custody needs to change",
    ],
  },
];

const safeguardHighlights = [
  {
    copy: "Duress pause & safe fails freeze releases instantly",
    tone: "cranberry" as const,
    icon: "shield" as const,
  },
  {
    copy: "Recipient verification pairs passkeys with human review",
    tone: "lapis" as const,
    icon: "users" as const,
  },
  {
    copy: "Audit & provenance trails sign every disclosure",
    tone: "lagoon" as const,
    icon: "check" as const,
  },
];

const audiences: Audience[] = [
  {
    title: "Individuals protecting their intent",
    body: "Prepare a resilient handover for family or trusted friends with encrypted instructions, without sacrificing privacy today.",
    cta: {
      href: "https://platform.torvussecurity.com/signup?plan=individual",
      label: "Start with Torvus Individual",
    },
    secondary: {
      href: "/pricing#individual",
      label: "View plan details",
    },
  },
  {
    title: "Journalists & NGOs under pressure",
    body: "Stage disclosures, credentials, and field contacts with conditional releases that can pause if coercion or compromise occurs.",
    cta: {
      href: "https://platform.torvussecurity.com/signup?plan=professional",
      label: "Access Professional preview",
    },
    secondary: {
      href: "/pricing#professional",
      label: "Compare features",
    },
  },
  {
    title: "Lawyers & estate planners",
    body: "Give executors a verifiable checklist, maintain privilege boundaries, and keep records ready for audits or discovery.",
    cta: {
      href: "https://platform.torvussecurity.com/contact",
      label: "Talk to Torvus Enterprise",
    },
    secondary: {
      href: "/pricing#enterprise",
      label: "See enterprise options",
    },
  },
];

export const metadata: Metadata = createMetadata({
  title: "Digital Legacy Kit for controlled estate disclosure",
  description:
    "Torvus Digital Legacy orchestrates asset inventory, executor KYC, death verification predicates, and estate-mode releases backed by audit trails.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-white/10 pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute -left-32 top-12 h-64 w-64 rounded-full bg-cranberry/20 blur-[140px]"
          aria-hidden="true"
        />
        <div className="container relative grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6">
            <p className="text-[0.95rem] font-semibold uppercase tracking-[0.26em] text-lapis">
              Digital Legacy Kit
            </p>
            <h1 className="text-gradient-hero max-w-[18ch] text-display font-semibold">
              Carry intent forward with verifiable, policy-driven handover.
            </h1>
            <p className="max-w-[65ch] text-lead text-thunder">
              Torvus orchestrates a dead-man’s-switch vault that respects privacy while
              you’re here and proves compliance when you’re not. Every disclosure is gated
              by policies, executor checks, and tamper-evident provenance.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimarySubtleLink href="/waitlist" className="whitespace-nowrap">
                Join the waitlist
              </PrimarySubtleLink>
              <Link
                href="/digital-legacy"
                className={buttonClasses({
                  variant: "tertiary",
                  size: "sm",
                  className: "border-lapis/45 text-lapis",
                })}
              >
                Explore Digital Legacy
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[0.95rem]">
              {safeguardHighlights.map(({ copy, tone, icon }) => (
                <IconChip key={copy} tone={tone} icon={icon}>
                  {copy}
                </IconChip>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative flex w-full max-w-[320px] justify-center rounded-xl border border-white/20 bg-white/10 p-6 shadow-soft-2 backdrop-blur">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(135deg,rgba(214,31,105,0.28),rgba(38,97,156,0.18))] opacity-80"
                aria-hidden="true"
              />
              <PhoneMock scheme="dark" accent="lapis" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.85)] pb-[calc(var(--section-pb)*0.85)]">
        <div className="container space-y-10">
          <SectionIntro
            eyebrow="How it works"
            title="Compose a legacy policy that only unlocks when signals align"
            description="Inventory assets, verify the humans involved, and orchestrate releases that can pause under duress and prove every action."
            align="center"
          />

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {digitalLegacySteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card
                  key={step.title}
                  className="flex h-full flex-col gap-4 border-storm/12 bg-white/95 p-6 shadow-[0_18px_40px_rgba(11,18,32,0.08)]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pastel-lapis text-lapis">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardHeader className="space-y-2 p-0">
                    <CardTitle className="text-h4 font-semibold text-storm">
                      {step.title}
                    </CardTitle>
                    <CardDescription>{step.summary}</CardDescription>
                  </CardHeader>
                  <ul className="mt-3 space-y-2 text-[0.95rem] text-thunder">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span
                          className="mt-[5px] inline-flex h-3 w-3 rounded-full bg-lagoon/70"
                          aria-hidden="true"
                        />
                        <span className="flex-1 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-pastel-lagoon/25 to-white py-[calc(var(--section-pt)*0.7)]">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Who it’s for"
            title="Designed for people and teams who can’t afford guesswork"
            description="Whether you’re planning a personal estate, protecting sources, or managing fiduciary duties, Torvus keeps policy, provenance, and controls aligned."
            align="center"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {audiences.map((audience) => (
              <Card
                key={audience.title}
                className="flex h-full flex-col justify-between border border-storm/12 bg-white/96 p-6 shadow-[0_16px_36px_rgba(11,18,32,0.06)]"
              >
                <div className="space-y-3">
                  <CardTitle className="text-h4 font-semibold text-storm">
                    {audience.title}
                  </CardTitle>
                  <CardDescription>{audience.body}</CardDescription>
                </div>
                <div className="mt-6 flex flex-col gap-2 text-[0.95rem]">
                  <Link
                    href={audience.cta.href}
                    className="inline-flex items-center justify-between rounded-full border border-lapis/40 px-4 py-2 font-semibold text-lapis transition hover:bg-pastel-lapis/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lapis focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {audience.cta.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                  {audience.secondary ? (
                    <Link
                      href={audience.secondary.href}
                      className="inline-flex items-center gap-1 text-[0.9rem] font-semibold text-storm/70 hover:text-storm focus-visible:text-storm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      {audience.secondary.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.7)] pb-[calc(var(--section-pb)*0.7)]">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Why Torvus"
            title="Security architecture that treats legacy as critical infrastructure"
            description="Policies, attestations, and disclosures remain auditable before, during, and after estate mode."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Policy-based release with layered verification",
                body: "Combine inactivity thresholds, executor quorums, trusted contacts, and notarised evidence before sensitive data leaves the vault.",
              },
              {
                title: "Independent provenance for every event",
                body: "Recipients, advisors, and auditors receive signed receipts proving who approved, who retrieved, and what conditions were met.",
              },
              {
                title: "Zero-knowledge ambition",
                body: "Encryption and custody stay customer-controlled. Torvus operators see policies—not the private artefacts behind them.",
              },
              {
                title: "Integrations with safeguards in mind",
                body: "Postpone public integrations until attestations, logging, and revocation flows meet the bar for high-stakes work.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="hover-card pressable border border-storm/12 bg-white/95 p-6"
              >
                <CardHeader className="space-y-2 p-0">
                  <CardTitle className="text-h4 font-semibold text-storm">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardDescription>{item.body}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.65)]">
        <div className="container">
          <div className="rounded-2xl border border-lapis/20 bg-gradient-to-r from-white via-pastel-lapis/40 to-white p-8 text-center shadow-[0_18px_42px_rgba(11,18,32,0.08)] md:p-12">
            <h2 className="text-gradient-hero text-h3 font-semibold text-storm">
              Ready to steward Digital Legacy securely?
            </h2>
            <p className="mx-auto mt-4 max-w-[60ch] text-[1rem] text-thunder">
              Join the waitlist to access Torvus Individual, or talk with us about
              Professional and Enterprise pilots. We’ll align controls with the stakes of
              your work.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <PrimarySubtleLink href="/waitlist">Join the waitlist</PrimarySubtleLink>
              <Link
                href="/pricing"
                className={buttonClasses({
                  variant: "secondary",
                  size: "sm",
                  className: "border-lapis/50 text-lapis",
                })}
              >
                View pricing & tiers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
