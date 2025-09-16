import Link from "next/link";

import { SectionIntro } from "@/components/section-intro";
import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

export const revalidate = 86400;

const tiers = [
  {
    name: "Focused teams",
    audience: "Journalists, NGOs, incident responders",
    highlights: [
      "Conditional release policies",
      "Recipient portal with passkeys",
      "Duress pause and decoy content",
    ],
  },
  {
    name: "Trusted estates",
    audience: "Digital legacy creators, legal teams",
    highlights: [
      "Estate mode orchestrator",
      "Executor collaboration",
      "Threshold key handover",
    ],
  },
  {
    name: "Enterprise",
    audience: "Regulated organisations, critical infrastructure",
    highlights: [
      "Custom attestation packages",
      "Dedicated HSM tenancy",
      "Advanced integrations & SLAs",
    ],
  },
];

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Torvus is in private beta. Explore the tiers we’re mapping out and join the waitlist to shape launch pricing.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-storm/10 bg-white py-20">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Pricing"
            title="Private beta pricing is in motion"
            description="We’re onboarding teams who need conditional release today. Tell us about your use case and we’ll align you with the right tier as pricing firms up."
          >
            <Link
              href="/waitlist"
              className={buttonClasses({ variant: "primary", size: "lg" })}
            >
              Join the waitlist
            </Link>
          </SectionIntro>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className="gap-4">
              <p className="text-small font-semibold uppercase tracking-[0.18em] text-storm/70">
                {tier.name}
              </p>
              <p className="text-body text-thunder/80">{tier.audience}</p>
              <ul className="space-y-2 text-body text-thunder/90">
                {tier.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="text-small text-thunder/60">
                Pricing announced with GA launch.
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
