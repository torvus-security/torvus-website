import {
  CalendarClock,
  ClipboardList,
  KeyRound,
  Layers3,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import { IconChip } from "@/components/icon-chip";
import { PhoneMock } from "@/components/phone-mock";
import { PrimarySubtleLink, buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const revalidate = 86400;

const scope = [
  {
    icon: ClipboardList,
    title: "Asset inventory & intent capture",
    body: "Map passwords, documents, media, crypto keys, and messages. Define who should receive each asset and under what circumstances.",
  },
  {
    icon: UsersRound,
    title: "Legacy agents",
    body: "Assign trusted agents or executors. Early access focuses on human verification; KYC/IDV integrations arrive in the roadmap.",
  },
  {
    icon: CalendarClock,
    title: "Death verification predicate",
    body: "Combine inactivity windows, notarised certificates, and third-party attestations before any estate release proceeds.",
  },
  {
    icon: Layers3,
    title: "Estate mode orchestrator",
    body: "Bundle assets by recipient, generate checklists, and stage releases over time so sensitive data arrives when it’s actionable.",
  },
  {
    icon: KeyRound,
    title: "Optional crypto key handover",
    body: "Support threshold handover for wallets and seed phrases. Split keys between recipients and professional custodians.",
  },
];

const roadmap = [
  "Executor and beneficiary workspaces with collaborative approvals.",
  "Structured KYC and biometrics for high-assurance estate transfers.",
  "Notary and legal firm integrations for witness signatures.",
  "API webhooks to sync estate state with trust & estate platforms.",
  "Regional data residency controls beyond Australia and the EU.",
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
      <section className="relative overflow-hidden border-b border-storm/10 bg-gradient-to-br from-white via-pastel-lapis/30 to-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute -right-20 top-6 h-56 w-56 rounded-full bg-lapis/25 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container relative flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-center">
          <div className="relative order-2 w-full max-w-xl space-y-8 rounded-xl bg-white/92 p-6 shadow-soft-1 lg:order-1 lg:mr-12">
            <div className="flex flex-col gap-4">
              <p className="text-[0.95rem] font-semibold uppercase tracking-[0.26em] text-lapis">
                Digital Legacy
              </p>
              <h1 className="text-gradient-lapis max-w-[20ch] text-display font-semibold text-storm">
                Handover what matters with proof, empathy, and control
              </h1>
              <p className="max-w-[65ch] text-lead text-thunder">
                Torvus Digital Legacy orchestrates estate logistics when you’re
                gone—without sacrificing the privacy your work requires today. Executors
                receive clarity, while intent and audit trails stay intact.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimarySubtleLink
                href="/waitlist"
                className="min-w-[180px] sm:whitespace-nowrap"
              />
              <Link
                href="/contact"
                className={buttonClasses({
                  variant: "secondary",
                  size: "lg",
                  className:
                    "whitespace-nowrap border-lapis/45 text-lapis hover:bg-pastel-lapis/35",
                })}
              >
                Talk with our team
              </Link>
            </div>
            <p className="max-w-[65ch] text-[0.95rem] text-thunder">
              Co-designing with estate planners, fiduciaries, and digital security teams.
            </p>
            <div className="mt-6 grid gap-2 text-[0.95rem] text-thunder">
              {[
                {
                  copy: "Asset inventory and intent capture",
                  icon: "key" as const,
                },
                {
                  copy: "Executor collaboration with checklists",
                  icon: "users" as const,
                },
                {
                  copy: "Death-verification predicates and estate mode orchestration",
                  icon: "timer" as const,
                },
                {
                  copy: "Optional threshold key handover",
                  icon: "shield" as const,
                },
              ].map(({ copy, icon }) => (
                <IconChip key={copy} tone="lapis" icon={icon}>
                  {copy}
                </IconChip>
              ))}
            </div>
          </div>
          <div className="order-1 flex flex-col items-center gap-8 lg:order-1 lg:items-center">
            <div className="relative flex w-full max-w-[320px] justify-center rounded-xl border border-lapis/35 bg-white/85 p-6 shadow-soft-2">
              <div
                className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(145deg,rgba(38,97,156,0.18),rgba(14,32,68,0.16))] opacity-80"
                aria-hidden="true"
              />
              <PhoneMock scheme="light" accent="lapis" />
            </div>
            <div className="relative w-full max-w-[320px] overflow-hidden rounded-lg border border-lapis/35 bg-white/92 p-6 shadow-soft-1">
              <div
                className="pointer-events-none absolute inset-0 bg-grad-panel opacity-60"
                aria-hidden="true"
              />
              <div className="relative space-y-3">
                <p className="text-[0.8rem] font-semibold uppercase tracking-[0.3em] text-lapis">
                  Estate orchestrator
                </p>
                <h2 className="text-gradient-lapis text-h4 font-semibold text-storm">
                  Bundle recipients into traceable, policy-backed checklists.
                </h2>
                <div className="grid gap-2 text-[1.02rem] text-thunder">
                  {[
                    "Executors verify identity before any release stage proceeds.",
                    "Notary audits, attestations, and quorum approvals stay attached to each task.",
                    "Executors and beneficiaries see provenance without exposing plaintext.",
                  ].map((item, index) => (
                    <IconChip
                      key={item}
                      tone={index === 0 ? "lapis" : index === 1 ? "lagoon" : "cranberry"}
                      icon="check"
                      className="text-left"
                    >
                      {item}
                    </IconChip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.9)] pb-[calc(var(--section-pb)*0.9)]">
        <div className="container space-y-10">
          <h2 className="text-h3 font-semibold text-storm">v1 scope</h2>
          <div data-card-list="ab" className="grid gap-6 md:grid-cols-2">
            {scope.map((item) => (
              <Card
                key={item.title}
                className="hover-card pressable border border-lapis/25 bg-white/92"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lapis/15 text-lapis">
                  <item.icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.5} />
                </div>
                <h3 className="text-h4 font-semibold text-storm">{item.title}</h3>
                <p className="text-body text-thunder">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.85)] pb-[calc(var(--section-pb)*0.85)]">
        <div className="container space-y-8">
          <div className="relative overflow-hidden rounded-xl border border-storm/10 bg-white p-8 shadow-soft-1">
            <div
              className="pointer-events-none absolute inset-0 bg-grad-panel opacity-60"
              aria-hidden="true"
            />
            <h2 className="text-gradient-hero text-h3 font-semibold text-storm">
              Future roadmap
            </h2>
            <p className="mt-4 max-w-3xl text-lead text-thunder">
              Digital Legacy continues to evolve with estate professionals and
              fiduciaries. Here’s what is currently in flight.
            </p>
            <ul className="mt-6 space-y-3 text-[1.02rem] text-thunder">
              {roadmap.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cranberry/70"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.95rem] text-thunder">
              Want to influence the roadmap? Email legacy@torvussecurity.com with context
              about your estate planning workflows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
