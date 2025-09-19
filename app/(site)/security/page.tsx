import { ShieldCheck, Waypoints, Zap } from "lucide-react";
import Link from "next/link";

import { IconChip } from "@/components/icon-chip";
import { SectionIntro } from "@/components/section-intro";
import { PrimarySubtleLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

import { ProvenanceDiagram } from "./provenance-diagram";

import type { Metadata } from "next";

export const revalidate = 86400;

const architecture = [
  {
    title: "Zero-trust segmentation",
    body: "Vault, orchestration, and audit planes run on isolated workloads with mutually-authenticated service mesh boundaries. Each request carries signed policy context to minimise implicit trust.",
  },
  {
    title: "Policy-governed access",
    body: "Policies live in attested storage. Release workflows must supply policy hashes and approvals before keys are re-wrapped. Operators can’t bypass policy even with elevated credentials.",
  },
  {
    title: "Attested runtime",
    body: "Critical services boot with measured start-up, HSM-backed environment sealing, and monitored integrity. Drift triggers alerts and can auto-revoke release privileges until re-attested.",
  },
];

const encryption = [
  {
    title: "Client-side encryption",
    body: "Torvus SDKs encrypt files and secrets in the browser or client before ingestion (XChaCha20-Poly1305 or AES-GCM). Plaintext never touches Torvus infrastructure.",
  },
  {
    title: "Key derivation & sealing",
    body: "Per-item data keys are wrapped with envelope keys. Policy metadata (conditions, recipients, approvals) is sealed and integrity-protected to prevent tampering.",
  },
  {
    title: "Split custody",
    body: "Envelope keys are split across HSM clusters and attested TEEs. Release orchestration requires quorum-based reassembly, tied to current policy state and approvals.",
  },
  {
    title: "Audit-grade logging",
    body: "Each unwrap logs the policy hash, approvals, duress state, and derived key material fingerprint. Customers can mirror logs in real time to their own SIEM or evidence store.",
  },
];

const digitalLegacyAssurances = [
  {
    title: "Digital Legacy Kit hardening",
    body: "Inventory prompts support redaction, rehearsal, and approval workflows so sensitive artefacts stay sealed while you test policies with executors.",
  },
  {
    title: "Executor verification & audit",
    body: "Professional and Enterprise tiers layer KYC, passkey enforcement, and duress-aware approvals so every action is attributable and reversible.",
  },
  {
    title: "Threshold custody & crypto handover",
    body: "Optional key splits keep wallets and passphrases in quorum custody. Shares live in HSM-backed vaults with automatic provenance when retrieved.",
  },
];

const identity = [
  {
    title: "Passkeys first",
    body: "WebAuthn/passkeys are required for administrators and recipients. FIDO2 security keys supported. Policies decide where TOTP fallback is allowed.",
  },
  {
    title: "Adaptive session controls",
    body: "Session binding uses device attestation, IP reputation, and optional geo-fencing. Abnormal patterns can require re-authentication or trigger duress pause automatically.",
  },
  {
    title: "Least-privilege platform roles",
    body: "Granular roles separate vault admins, policy authors, and operational approvers. Emergency paths are logged, time-bound, and require multi-party approvals.",
  },
];

const duress = [
  {
    title: "Silent pause",
    body: "Operators trigger a pause from the UI, hardware key, or API. Releases freeze instantly, assets stay sealed, and stakeholders receive discreet status without endangering the operator.",
  },
  {
    title: "Decoy responses",
    body: "Policies can serve redacted or pre-approved decoy content under duress to avoid tipping off adversaries while buying time for response teams.",
  },
  {
    title: "Liveness checks",
    body: "Scheduled liveness prompts plus optional biometrics ensure an operator is present and safe. Missed checks escalate via secondary channels before triggering release logic.",
  },
];

const transparency = [
  {
    title: "End-to-end provenance",
    body: "Every file, note, or secret is tagged with data lineage. Provenance certificates explain who ingested, who approved, and why releases were triggered.",
  },
  {
    title: "Immutable export",
    body: "Audit exports include cryptographic receipts so third parties can verify timelines independently. Customers can anchor receipts into their own transparency ledgers.",
  },
  {
    title: "Recipient accountability",
    body: "Recipients sign for retrieval with passkeys or attested devices. Optional selfie/KYC capture can attach to provenance to satisfy legal or estate requirements.",
  },
];

const compliance = [
  {
    title: "Australian Privacy Principles",
    body: "Data residency controls, structured consent, and breach notification workflows map to APP requirements. Regional segregation is available for sensitive programmes.",
  },
  {
    title: "GDPR alignment",
    body: "Data minimisation and purpose binding are built-in. Tamper-evident logs support Article 30 documentation and DSAR fulfilment with zero-knowledge export options.",
  },
  {
    title: "Risk & assurance",
    body: "Independent pen-tests, threat modelling, and secure SDLC practices are table stakes. Customers receive current summaries in the security portal, including SLA targets.",
  },
];

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
];

const resilienceStats = [
  { label: "Attested workloads", value: "100%" },
  { label: "Release guardrails", value: "37" },
  { label: "Real-time signals", value: "24x7" },
];

export const metadata: Metadata = createMetadata({
  title: "Security architecture",
  description:
    "Inside Torvus: zero-knowledge encryption, policy-governed key release, duress controls, and provenance designed for sensitive missions.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-storm/10 bg-gradient-to-br from-white via-pastel-lagoon/25 to-white pt-[var(--section-pt)] pb-[var(--section-pb)]">
        <div
          className="pointer-events-none absolute -left-32 top-12 h-64 w-64 rounded-full bg-cranberry/25 blur-[140px]"
          aria-hidden="true"
        />
        <div className="container relative space-y-10">
          <SectionIntro
            eyebrow="Security overview"
            title="Policy, encryption, and provenance that assume compromise"
            description="Every Torvus control is designed so no single actor—including us—can leak your most sensitive disclosures."
            className="[&>h2]:text-gradient-hero"
          >
            <div className="mt-4 grid gap-2 text-[0.95rem] text-thunder">
              <IconChip tone="cranberry" icon="shield">
                No operator access to plaintext—policies govern every unwrap
              </IconChip>
              <IconChip tone="lagoon" icon="timer">
                Client-side encryption before ingestion with optional hardware attestation
              </IconChip>
              <IconChip tone="lapis" icon="key">
                Digital Legacy Kit adds rehearsals and threshold key custody
              </IconChip>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <PrimarySubtleLink href="/waitlist" />
              <Link
                href="mailto:security@torvussecurity.com"
                className="inline-flex items-center justify-center rounded-full border border-lapis/40 px-5 py-3 text-[0.95rem] font-semibold text-lapis transition hover:bg-pastel-lagoon/40"
              >
                Request the security pack
              </Link>
            </div>
          </SectionIntro>

          <div className="grid gap-4 text-[0.95rem] text-thunder sm:grid-cols-3">
            {resilienceStats.map((stat) => (
              <Card
                key={stat.label}
                className="items-start border-storm/10 bg-white/90 p-5"
              >
                <span className="text-[2rem] font-semibold text-storm">{stat.value}</span>
                <span className="text-[0.95rem] text-thunder/80">{stat.label}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[calc(var(--section-pt)*0.85)]">
        <SectionGrid
          title="Architecture overview"
          items={architecture}
          background="from-white via-pastel-lagoon/15 to-white"
        />
      </section>

      <section className="relative overflow-hidden py-[calc(var(--section-pt)*0.85)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-grad-divider opacity-50"
          aria-hidden="true"
        />
        <div className="container space-y-10">
          <div className="space-y-4">
            <h2 className="text-gradient-accent text-h3 font-semibold text-storm">
              Encryption & key management
            </h2>
            <p className="max-w-3xl text-lead text-thunder">
              Torvus treats keys as policy-bound artefacts. Client devices derive data
              keys, seal them to policy, then store ciphertext. Release orchestration
              requires quorum validation and leaves an independently verifiable provenance
              trail.
            </p>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-storm/10 bg-white/95 p-6 shadow-[0_25px_55px_rgba(14,23,38,0.12)]">
            <ProvenanceDiagram />
          </div>
          <CardGrid items={encryption} columns={2} tone="info" />
        </div>
      </section>

      <section className="py-[calc(var(--section-pt)*0.8)] bg-gradient-to-br from-white via-pastel-lagoon/20 to-white">
        <SectionGrid
          title="Digital Legacy assurances"
          description="The Digital Legacy Kit inherits the core Torvus control plane and adds estate-specific safeguards for inventory, executors, and custody."
          items={digitalLegacyAssurances}
          iconCluster
        />
      </section>

      <section className="py-[calc(var(--section-pt)*0.85)] bg-gradient-to-br from-white via-pastel-lagoon/20 to-white">
        <SectionGrid
          title="Identity & access assurance"
          description="Authentication is phishing-resistant by default, with policy-tuned fallback paths only where necessary. Sessions are monitored for anomalies, and emergency access requires multi-party proof."
          items={identity}
          iconCluster
        />
      </section>

      <section className="py-[calc(var(--section-pt)*0.8)]">
        <SectionGrid
          title="Duress & liveness controls"
          description="Operators can act under pressure without leaking intent. Pauses, decoys, and liveness checks provide breathing room while preserving evidence."
          items={duress}
        />
      </section>

      <section className="py-[calc(var(--section-pt)*0.8)] bg-gradient-to-br from-white via-pastel-lagoon/15 to-white">
        <SectionGrid
          title="Transparency, audit & provenance"
          description="Releases produce evidence automatically. You choose where to mirror logs and who can verify them, ensuring partners and regulators see exactly what happened."
          items={transparency}
        />
      </section>

      <section className="py-[calc(var(--section-pt)*0.8)]">
        <SectionGrid
          title="Compliance stance"
          description="Torvus is designed to augment your compliance programme rather than replace it. Ask for our latest control mappings and vendor due diligence package."
          items={compliance}
        />
      </section>

      <section className="py-[calc(var(--section-pt)*0.75)]">
        <div className="container space-y-8">
          <h2 className="text-gradient-hero text-h3 font-semibold text-storm">FAQs</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <Card
                key={faq.question}
                className="hover-card pressable border-storm/12 bg-white/95 p-6"
              >
                <h3 className="text-h4 font-semibold text-storm">{faq.question}</h3>
                <p className="mt-3 text-body text-thunder">{faq.answer}</p>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <PrimarySubtleLink href="/waitlist" />
            <Link
              href="mailto:security@torvussecurity.com"
              className="inline-flex items-center justify-center rounded-full border border-lapis/40 px-5 py-3 text-[0.95rem] font-semibold text-lapis transition hover:bg-pastel-lagoon/40"
            >
              Contact security@torvussecurity.com
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

type SectionGridProps = {
  title: string;
  description?: string;
  items: { title: string; body: string }[];
  columns?: 2 | 3;
  iconCluster?: boolean;
  background?: string;
};

function SectionGrid({
  title,
  description,
  items,
  columns = 3,
  iconCluster,
  background = "",
}: SectionGridProps) {
  return (
    <div className="container space-y-10">
      <div
        className={cn(
          "rounded-3xl border border-storm/10 bg-white/95 p-8 shadow-[0_24px_60px_rgba(14,23,38,0.08)]",
          background && `bg-gradient-to-br ${background}`,
        )}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-gradient-accent text-h3 font-semibold text-storm">
              {title}
            </h2>
            {description ? (
              <p className="max-w-3xl text-lead text-thunder">{description}</p>
            ) : null}
          </div>
          {iconCluster ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {[ShieldCheck, Zap, Waypoints].map((Icon, index) => (
                <div
                  key={index}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-cranberry/15 text-cranberry"
                >
                  <Icon className="h-7 w-7" aria-hidden="true" strokeWidth={1.5} />
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <CardGrid items={items} columns={columns} />
      </div>
    </div>
  );
}

type CardGridProps = {
  items: { title: string; body: string }[];
  columns?: 2 | 3;
  tone?: "neutral" | "info" | "success" | "danger";
};

function CardGrid({ items, columns = 3, tone = "neutral" }: CardGridProps) {
  const columnClass = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <div data-card-list="ab" className={`mt-6 grid gap-6 ${columnClass}`}>
      {items.map((item) => (
        <Card
          key={item.title}
          tone={tone}
          className="hover-card pressable border-storm/12 bg-white/95"
        >
          <p className="text-[0.85rem] font-semibold uppercase tracking-[0.24em] text-cranberry/75">
            {item.title}
          </p>
          <p className="mt-3 text-body text-thunder">{item.body}</p>
        </Card>
      ))}
    </div>
  );
}
