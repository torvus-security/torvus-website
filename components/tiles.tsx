import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const howItWorks = [
  {
    title: "Inventory & intent capture",
    description:
      "Catalogue passwords, documents, and media while tagging the people who should receive them and the context they need.",
    bullets: [
      "Guided templates for accounts, crypto wallets, and instructions.",
      "Intent notes stay encrypted until your policy grants access.",
    ],
  },
  {
    title: "Legacy agents with KYC",
    description:
      "Appoint executors and professional custodians. Torvus verifies their identities before they can act on your estate.",
    bullets: [
      "Executor onboarding with identity checks and optional MFA.",
      "Dry-run simulations and redaction previews before launch.",
    ],
  },
  {
    title: "Death verification predicate",
    description:
      "Blend inactivity windows with human attestations. Manual probate review today, integrations with registries tomorrow.",
    bullets: [
      "Multiple signals must agree before estate mode activates.",
      "Grace periods and escalation paths avoid premature release.",
    ],
  },
  {
    title: "Estate mode orchestrator",
    description:
      "Once verified, Torvus stages releases per recipient with transparent provenance, approvals, and audit certificates.",
    bullets: [
      "Checklist workflows tuned for executors and legal teams.",
      "Per-recipient bundles with delivery windows you control.",
    ],
  },
  {
    title: "Optional crypto key handover",
    description:
      "Use Shamir-style threshold splits so no single party ever holds your entire key. Executors collaborate to reconstruct it.",
    bullets: [
      "Configurable thresholds and recovery guardians.",
      "Hardware wallet attestations recorded for every reveal.",
    ],
  },
];

const audiences = [
  {
    title: "Individuals",
    description:
      "Protect family access to critical records without surrendering privacy while you’re alive.",
    link: { href: "/pricing#individual", label: "See Individual tier" },
  },
  {
    title: "Journalists & NGOs",
    description:
      "Share source material, crisis plans, and escrowed evidence safely across borders.",
    link: { href: "/digital-legacy#capabilities", label: "Explore capabilities" },
  },
  {
    title: "Lawyers & estate planners",
    description: "Deliver digital estate readiness to clients with auditable workflows.",
    link: { href: "/pricing#professional", label: "Review Professional" },
  },
];

export function HowItWorksTiles() {
  return (
    <section className="pt-[calc(var(--section-pt)*0.85)] pb-[calc(var(--section-pb)*0.85)]">
      <div className="container space-y-12">
        <div className="space-y-3 text-center">
          <p className="text-[0.9rem] font-semibold uppercase tracking-[0.26em] text-lagoon">
            How it works
          </p>
          <h2 className="text-h2 font-semibold text-storm">
            Estate resilience without compromising operational security.
          </h2>
          <p className="mx-auto max-w-prose text-body text-thunder">
            Each component keeps your digital legacy verifiable, revocable, and private.
            Executors and recipients only see what they’re cleared to handle—and every
            step is logged.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {howItWorks.map((item) => (
            <Card key={item.title} className="h-full border-storm/12">
              <CardHeader className="gap-3">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <ul className="mt-1 space-y-2 text-[0.95rem] text-thunder">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span
                      className="mt-[0.45rem] inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-lagoon"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AudienceTiles() {
  return (
    <section className="bg-gradient-to-br from-white via-mist/60 to-white py-[calc(var(--section-pt)*0.7)]">
      <div className="container space-y-10">
        <div className="space-y-2 text-center">
          <p className="text-[0.9rem] font-semibold uppercase tracking-[0.26em] text-lapis">
            Who it’s for
          </p>
          <h2 className="text-h2 font-semibold text-storm">
            Built for the people who cannot afford missteps.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <Card key={audience.title} className="h-full border-storm/12">
              <CardHeader>
                <CardTitle>{audience.title}</CardTitle>
                <CardDescription>{audience.description}</CardDescription>
              </CardHeader>
              <Link
                href={audience.link.href}
                className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-lapis hover:underline"
              >
                {audience.link.label}
                <span aria-hidden="true">→</span>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
