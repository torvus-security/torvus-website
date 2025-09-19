import { IconChip } from "@/components/icon-chip";
import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

const placeholders = [
  {
    title: "Journalist / NGO",
    summary:
      "Context about field teams coordinating disclosures under duress. Placeholder copy will be replaced.",
  },
  {
    title: "Lawyer",
    summary:
      "Outline of estate and legal workflows that depend on conditional releases. Placeholder copy will be replaced.",
  },
  {
    title: "Individual",
    summary:
      "Guidance for safeguarding personal archives and handovers. Placeholder copy will be replaced.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Use Cases",
  description:
    "How journalists, legal teams, and individuals apply Torvus to protect sensitive information.",
  path: "/use-cases",
});

export default function UseCasesPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-storm/10 bg-gradient-to-br from-white via-pastel-lagoon/30 to-white pt-[var(--section-pt)] pb-[calc(var(--section-pb)*0.8)]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(38,97,156,0.18),transparent_45%)]"
          aria-hidden="true"
        />
        <div className="container relative space-y-8">
          <SectionIntro
            eyebrow="Use Cases"
            title="Torvus adapts to high-stakes disclosure workflows"
            description="From frontline journalists to estate planners, Torvus keeps sensitive information sealed until the right signals arrive."
            className="[&>h2]:text-gradient-accent"
          >
            <div className="flex flex-wrap items-center gap-3">
              <PrimarySubtleLink href="/waitlist" />
              <a
                href="mailto:hello@torvussecurity.com"
                className="inline-flex items-center justify-center rounded-full border border-lapis/40 px-5 py-3 text-[0.95rem] font-semibold text-lapis transition hover:bg-pastel-lagoon/40"
              >
                Share your scenario
              </a>
            </div>
          </SectionIntro>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.85)] pb-[calc(var(--section-pb)*0.9)]">
        <div className="container grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {placeholders.map((item) => (
            <Card
              key={item.title}
              className="hover-card pressable border-storm/12 bg-white/95 p-6"
            >
              <CardHeader className="items-start gap-4">
                <IconChip tone="lapis" icon="users" className="justify-start">
                  Persona placeholder
                </IconChip>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardDescription>{item.summary}</CardDescription>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
