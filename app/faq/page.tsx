import { IconChip } from "@/components/icon-chip";
import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

const faqs = [
  {
    question: "Who can decrypt Torvus vault contents?",
    answer:
      "Only policy-compliant recipients with valid approvals. Operators and Torvus staff never receive plaintext—keys remain sealed inside customer-controlled policies, HSM shares, and attested TEEs until release conditions are satisfied.",
  },
  {
    question: "How does Torvus verify duress triggers?",
    answer:
      "Duress triggers can come from dedicated hardware buttons, passphrase entry, or detection heuristics. Each trigger is authenticated with the operator’s keys and recorded in an immutable log so responders can prove when a pause occurred.",
  },
  {
    question: "What happens if a policy misfires?",
    answer:
      "Policy dry-runs show which predicates pass or fail before activation. Runtime guardrails permit emergency pause, while audit trails expose the exact signals that influenced a release so teams can adjust policies quickly.",
  },
  {
    question: "Can Torvus integrate with our compliance tooling?",
    answer:
      "Yes. Audit logs and provenance receipts are available via streaming APIs and scheduled exports. Governance teams can feed Torvus evidence into GRC, SIEM, or digital forensics pipelines.",
  },
  {
    question: "Where is customer data stored?",
    answer:
      "Primary regions are Australia and the EU with customer-controlled residency controls. Sensitive workloads can run in dedicated environments with attestation packages tied to each release.",
  },
  {
    question: "How can we join the private beta?",
    answer:
      "Sign up for updates and share operational context. We’ll align you with a cohort that matches your controls, data sensitivity, and oversight requirements.",
  },
];

const highlightChips = [
  "Zero knowledge releases",
  "Duress-aware workflows",
  "Comprehensive provenance",
];

export const metadata: Metadata = createMetadata({
  title: "Frequently asked questions",
  description:
    "Answers about Torvus rollout, duress controls, integrations, and how conditional release protects high-stakes disclosures.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-storm/10 bg-gradient-to-br from-white via-pastel-lagoon/20 to-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute inset-y-0 right-[-30%] w-1/2 rounded-full bg-grad-divider opacity-40 blur-3xl"
          aria-hidden="true"
        />
        <div className="container relative space-y-8">
          <SectionIntro
            eyebrow="FAQ"
            title="Answers for high-assurance teams"
            description="If you don’t see what you’re after, reach out—our security and product teams are happy to dig in."
            className="[&>h2]:text-gradient-hero"
          >
            <div className="flex flex-wrap items-center gap-3">
              <PrimarySubtleLink href="/waitlist" className="w-auto min-w-[200px]" />
              <a
                href="mailto:hello@torvussecurity.com"
                className="inline-flex items-center justify-center rounded-full border border-lapis/40 px-5 py-3 text-[0.95rem] font-semibold text-lapis transition hover:bg-pastel-lagoon/40"
              >
                Talk with the team
              </a>
            </div>
          </SectionIntro>

          <div className="flex flex-wrap items-center gap-2 text-[0.95rem] text-thunder">
            {highlightChips.map((item) => (
              <IconChip key={item} tone="lagoon" icon="check" className="justify-start">
                {item}
              </IconChip>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.85)] pb-[calc(var(--section-pb)*0.85)]">
        <div className="container grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="grid gap-4 sm:grid-cols-2">
            {faqs.map((faq) => (
              <Card
                key={faq.question}
                className="hover-card pressable border-storm/12 bg-white/95 p-6"
              >
                <h2 className="text-h4 font-semibold text-storm">{faq.question}</h2>
                <p className="mt-3 text-[1rem] text-thunder">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <aside className="space-y-5 rounded-3xl border border-storm/12 bg-gradient-to-br from-white via-pastel-lagoon/25 to-white p-6 shadow-[0_24px_60px_rgba(14,23,38,0.08)]">
            <h3 className="text-gradient-accent text-h4 font-semibold text-storm">
              Need a deeper dive?
            </h3>
            <p className="text-body text-thunder">
              Our team can walk through security documentation, duress controls, and
              estate workflows in more detail. Share your scenario and we’ll line up the
              right product specialists.
            </p>
            <div className="space-y-3 text-[0.95rem] text-thunder">
              <IconChip tone="cranberry" icon="shield" className="justify-start">
                Security@torvussecurity.com
              </IconChip>
              <IconChip tone="lagoon" icon="users" className="justify-start">
                Private briefings and roadmap sessions available
              </IconChip>
            </div>
            <PrimarySubtleLink
              href="mailto:hello@torvussecurity.com"
              className="w-auto min-w-[200px]"
            >
              Email the team
            </PrimarySubtleLink>
          </aside>
        </div>
      </section>
    </div>
  );
}
