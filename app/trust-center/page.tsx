import Link from "next/link";

import { IconChip } from "@/components/icon-chip";
import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

import type { Metadata } from "next";

const resources = [
  {
    title: "Security",
    description:
      "Deep dive into Torvus architecture, encryption, duress controls, and provenance design goals.",
    href: "/security",
    chip: {
      tone: "cranberry" as const,
      label: "Architecture & controls",
    },
  },
  {
    title: "Privacy",
    description:
      "How we handle personal information, residency, consent, and Digital Legacy-specific processing.",
    href: "/legal/privacy",
    chip: {
      tone: "lagoon" as const,
      label: "APP & GDPR alignment",
    },
  },
  {
    title: "Terms",
    description:
      "Service commitments, acceptable use, and contractual obligations for Torvus products.",
    href: "/legal/terms",
    chip: {
      tone: "lapis" as const,
      label: "Usage guidelines",
    },
  },
  {
    title: "Status",
    description:
      "Live uptime, incident history, maintenance windows, and ongoing transparency updates.",
    href: "/status",
    chip: {
      tone: "lagoon" as const,
      label: "Uptime & incidents",
    },
  },
];

export const metadata: Metadata = createMetadata({
  title: "Torvus Trust Center",
  description:
    "Security, privacy, compliance, and uptime resources for Torvus customers adopting Digital Legacy and policy-based vaulting.",
  path: "/trust-center",
});

export default function TrustCenterPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-storm/10 bg-gradient-to-br from-white via-pastel-lagoon/25 to-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-lagoon/25 blur-[150px]"
          aria-hidden="true"
        />
        <div className="container relative space-y-8">
          <SectionIntro
            eyebrow="Trust Center"
            title="Transparency across security, privacy, and uptime"
            description="Review our policies, status updates, and legal commitments. Reach out for bespoke assessments or documentation."
            align="start"
          />
          <div className="flex flex-wrap items-center gap-2 text-[0.95rem]">
            <IconChip tone="lagoon" icon="timer">
              Digital Legacy roadmap updates ship quarterly
            </IconChip>
            <IconChip tone="cranberry" icon="shield">
              Security pack available under NDA for Enterprise pilots
            </IconChip>
          </div>
        </div>
      </section>

      <section className="py-[calc(var(--section-pt)*0.75)]">
        <div className="container grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <Card
              key={resource.title}
              className="flex h-full flex-col gap-3 border-lagoon/25 bg-white/96 p-6 shadow-[0_16px_36px_rgba(11,18,32,0.06)]"
            >
              <CardHeader className="space-y-2 p-0">
                <CardTitle className="text-h4 font-semibold text-storm">
                  {resource.title}
                </CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <div className="flex flex-col gap-3 text-[0.95rem] text-thunder">
                <IconChip tone={resource.chip.tone} icon="check">
                  {resource.chip.label}
                </IconChip>
                <Link
                  href={resource.href}
                  className="inline-flex items-center gap-1 text-[0.95rem] font-semibold text-lapis hover:text-lapis/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lagoon focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  View {resource.title}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="pt-[calc(var(--section-pt)*0.6)]">
        <div className="container">
          <Card className="border-lagoon/25 bg-white/96 p-8 text-center shadow-[0_18px_40px_rgba(11,18,32,0.08)] md:px-12 md:py-12">
            <CardHeader className="space-y-3 p-0">
              <CardTitle className="text-h3 font-semibold text-storm">
                Need something not listed here?
              </CardTitle>
              <CardDescription>
                Enterprise pilots can access independent assessments, key management
                design packs, and compliance questionnaires.
              </CardDescription>
            </CardHeader>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="mailto:trust@torvussecurity.com"
                className="inline-flex items-center justify-center rounded-full border border-lapis/40 px-5 py-2 text-[0.95rem] font-semibold text-lapis transition hover:bg-pastel-lagoon/50"
              >
                Email trust@torvussecurity.com
              </a>
              <PrimarySubtleLink href="/waitlist">Join the waitlist</PrimarySubtleLink>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
