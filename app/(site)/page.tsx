import { CircleCheck, ShieldAlert, TimerReset, Users } from "lucide-react";
import Link from "next/link";

import { SectionIntro } from "@/components/section-intro";
import { buttonClasses } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const dynamic = "force-static";

const featureHighlights = [
  {
    icon: TimerReset,
    title: "Dead-man switch policies",
    body: "Compose inactivity windows, approval quorums, and conditional checks. If you don’t respond in time, Torvus can orchestrate controlled release without exposing plaintext to operators.",
  },
  {
    icon: ShieldAlert,
    title: "Duress pause & safe fails",
    body: "Trigger a silent pause that freezes releases, serves decoy content, or alerts a trusted contact—without tipping off an observer. Every event is captured in tamper-evident logs.",
  },
  {
    icon: Users,
    title: "Recipient verification",
    body: "Bind recipients to verified identities and enforce passkeys or TOTP fallback. Zero-knowledge retrieval flows make sure only intended parties unwrap sealed data.",
  },
  {
    icon: CircleCheck,
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
      <section className="border-b border-storm/10 bg-white py-20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-8">
            <p className="text-small font-semibold uppercase tracking-[0.18em] text-lagoon">
              Policy-based vaulting
            </p>
            <h1 className="text-display font-semibold text-storm">
              Protect people by protecting their information.
            </h1>
            <p className="text-lead text-thunder/90">
              Torvus keeps sensitive disclosures sealed behind conditional policies, live
              duress controls, and provenance so you can plan for contingencies without
              compromising confidentiality today.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/waitlist"
                className={buttonClasses({ variant: "primary", size: "lg" })}
              >
                Join the waitlist
              </Link>
              <Link
                href="/features"
                className={buttonClasses({ variant: "secondary", size: "lg" })}
              >
                View the platform
              </Link>
            </div>
            <p className="text-small text-thunder/70">
              Built with zero-knowledge encryption, Australian Privacy Principles, and
              GDPR high-assurance workflows in mind.
            </p>
          </div>
          <div className="rounded-2xl border border-lapis/15 bg-lapis/5 p-8 text-storm shadow-soft">
            <SectionIntro
              eyebrow="Recipient Portal"
              title="Recipients stay verified before anything unlocks"
              description="Recipients authenticate with passkeys first, then complete lightweight proofing before Torvus unwraps any key material. Policy explains who, when, and why."
              align="left"
            >
              <ul className="mt-6 space-y-3 text-small text-thunder/80">
                <li>• Multi-factor retrieval with device fingerprinting</li>
                <li>• Automatic provenance certificate for every release</li>
                <li>• Optional checklist mode for estate executors and teams</li>
              </ul>
            </SectionIntro>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-12">
          <SectionIntro
            eyebrow="Why Torvus"
            title="Security architecture built around conditional trust"
            description="Every component—from encryption keys to approval oracles—is designed so no single actor can leak secrets. Policies are auditable, recoverable, and testable before they matter."
            align="center"
          />
          <div className="ab-alt grid gap-6 md:grid-cols-2">
            {featureHighlights.map((feature) => (
              <Card key={feature.title}>
                <CardHeader className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lapis/15 text-lapis">
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

      <section className="py-16">
        <div className="container space-y-6 text-center">
          <p className="text-small font-semibold uppercase tracking-[0.2em] text-lagoon">
            Trusted partners
          </p>
          <p className="text-h3 font-semibold text-storm">
            Working with journalists, NGOs, and professionals protecting critical
            missions.
          </p>
          <p className="mx-auto max-w-3xl text-body text-thunder/80">
            Torvus supports collaborative handover between teams, field operators,
            counsel, and investigative partners operating under pressure. Policy-driven
            approvals, duress controls, and provenance tie every release to the right
            story.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="rounded-3xl border border-storm/10 bg-storm text-white p-12 shadow-soft md:p-16">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-h2 font-semibold">
                Plan for red lines without compromising today.
              </h2>
              <p className="text-lead text-white/80">
                Torvus aligns security, legal, and operational leadership around one
                policy: when conditions are met, releases happen with proof; otherwise
                nothing leaves the vault.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/security"
                  className={buttonClasses({
                    variant: "tertiary",
                    size: "lg",
                    className: "bg-white text-storm hover:bg-white/90",
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
