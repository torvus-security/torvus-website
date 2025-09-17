import { IconChip } from "@/components/icon-chip";
import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink } from "@/components/ui/button";
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
      <section className="heading-band band-pricing relative overflow-hidden border-b border-storm/10 bg-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-grad-divider opacity-30"
          aria-hidden="true"
        />
        <div className="container relative space-y-8">
          <SectionIntro
            eyebrow="Pricing"
            title="Private beta pricing is in motion"
            description="We’re onboarding teams who need conditional release today. Tell us about your use case and we’ll align you with the right tier as pricing firms up."
            className="[&>h2]:page-title-gradient"
          >
            <PrimarySubtleLink href="/waitlist" className="whitespace-nowrap">
              Request early access
            </PrimarySubtleLink>
          </SectionIntro>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.9)] pb-[calc(var(--section-pb)*0.9)]">
        <div className="container space-y-8">
          <div data-card-list="ab" className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <Card key={tier.name}>
                <div className="flex items-center justify-between">
                  <p className="text-[0.85rem] font-semibold uppercase tracking-[0.26em] text-cranberry">
                    {tier.name}
                  </p>
                  <span
                    className="inline-flex h-1.5 w-10 rounded-full bg-cranberry"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-[1.05rem] text-thunder">{tier.audience}</p>
                <div className="space-y-2 text-[1.02rem] text-thunder">
                  {tier.highlights.map((item, index) => (
                    <IconChip
                      key={item}
                      tone={index % 2 === 0 ? "lagoon" : "lapis"}
                      icon="check"
                      className="w-full justify-start"
                    >
                      {item}
                    </IconChip>
                  ))}
                </div>
                <p className="text-[0.95rem] text-thunder">
                  Pricing announced with GA launch.
                </p>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <PrimarySubtleLink href="/contact" className="whitespace-nowrap">
              Talk with Torvus about rollout
            </PrimarySubtleLink>
          </div>
        </div>
      </section>
    </div>
  );
}
