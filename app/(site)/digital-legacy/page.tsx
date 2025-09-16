import {
  CalendarClock,
  ClipboardList,
  KeyRound,
  Layers3,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import { SectionIntro } from "@/components/section-intro";
import { buttonClasses } from "@/components/ui/button";
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
      <section className="border-b border-storm/10 bg-white py-20">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Digital Legacy"
            title="Handover what matters with proof, empathy, and control"
            description="Torvus Digital Legacy orchestrates estate logistics when you’re gone—without sacrificing the privacy your work requires today."
          >
            <Link
              href="/waitlist"
              className={buttonClasses({ variant: "primary", size: "lg" })}
            >
              Request early access
            </Link>
          </SectionIntro>
        </div>
      </section>

      <section className="py-16">
        <div className="container space-y-10">
          <h2 className="text-h3 font-semibold text-storm">v1 scope</h2>
          <div className="ab-alt grid gap-6 md:grid-cols-2">
            {scope.map((item) => (
              <Card key={item.title} className="gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lapis/12 text-lapis">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-small font-semibold uppercase tracking-[0.18em] text-storm/70">
                  {item.title}
                </p>
                <p className="text-body text-thunder/90">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container space-y-8">
          <div className="rounded-3xl border border-lagoon/25 bg-lagoon/5 p-10 shadow-soft">
            <h2 className="text-h3 font-semibold text-storm">Future roadmap</h2>
            <p className="mt-4 max-w-3xl text-body text-thunder/80">
              Digital Legacy continues to evolve with estate professionals and
              fiduciaries. Here’s what is currently in flight.
            </p>
            <ul className="mt-6 space-y-3 text-body text-thunder/90">
              {roadmap.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-6 text-small text-thunder/70">
              Want to influence the roadmap? Email legacy@torvus.security with context
              about your estate planning workflows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
