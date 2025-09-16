import { ShieldCheck, Waypoints, Zap } from "lucide-react";

import { SectionIntro } from "@/components/section-intro";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/metadata";

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
    body: "Granular roles separate vault admins, policy authors, and operational approvers. Emergency break-glass paths are logged, time-bound, and require multi-party approvals.",
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
      "Only the policy-compliant recipients with valid approvals. Operators and Torvus staff never receive plaintext—keys remain sealed inside customer-controlled policies, HSM shares, and attested TEEs until release conditions are satisfied.",
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

export const metadata: Metadata = createMetadata({
  title: "Security architecture",
  description:
    "Inside Torvus: zero-knowledge encryption, policy-governed key release, duress controls, and provenance designed for sensitive missions.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <div className="pb-24">
      <section className="border-b border-storm/10 bg-white py-20">
        <div className="container space-y-8">
          <SectionIntro
            eyebrow="Security overview"
            title="Policy, encryption, and provenance that assume compromise"
            description="Torvus is engineered so no single actor—including us—can leak your data. Encryption happens before ingestion, policies govern every unwrap, and audit evidence is built-in."
          >
            <p className="text-small text-thunder/70">
              Contact security@torvus.security for detailed control matrices, SIGs, and
              attestation packages.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="py-16">
        <div className="container space-y-10">
          <h2 className="text-h3 font-semibold text-storm">Architecture overview</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {architecture.map((item) => (
              <Card key={item.title} className="gap-4" data-card-surface="auto">
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
        <div className="container space-y-10">
          <div className="space-y-4">
            <h2 className="text-h3 font-semibold text-storm">
              Encryption & key management
            </h2>
            <p className="max-w-3xl text-body text-thunder/80">
              Torvus treats keys as policy-bound artefacts. Client devices derive data
              keys, seal them to policy, then store ciphertext. Release orchestration
              requires quorum validation and leaves a provenance trail you can
              independently verify.
            </p>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-storm/10 bg-white p-6">
            <ProvenanceDiagram />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {encryption.map((item) => (
              <Card key={item.title} className="gap-3">
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
        <div className="container space-y-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-h3 font-semibold text-storm">
                Identity & access assurance
              </h2>
              <p className="max-w-3xl text-body text-thunder/80">
                Authentication is phishing-resistant by default, with policy-tuned
                fallback paths only where necessary. Sessions are monitored for anomalies,
                and emergency access requires multi-party proof.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[ShieldCheck, Zap, Waypoints].map((Icon, index) => (
                <div
                  key={index}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-lagoon/15 text-lagoon"
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {identity.map((item) => (
              <Card key={item.title} className="gap-3">
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
        <div className="container space-y-10">
          <div className="space-y-3">
            <h2 className="text-h3 font-semibold text-storm">
              Duress & liveness controls
            </h2>
            <p className="max-w-3xl text-body text-thunder/80">
              Operators can act under pressure without leaking intent. Pauses, decoys, and
              liveness checks provide breathing room while preserving evidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {duress.map((item) => (
              <Card key={item.title} className="gap-3" data-card-surface="b">
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
        <div className="container space-y-10">
          <div className="space-y-3">
            <h2 className="text-h3 font-semibold text-storm">
              Transparency, audit & provenance
            </h2>
            <p className="max-w-3xl text-body text-thunder/80">
              Releases produce evidence automatically. You choose where to mirror logs and
              who can verify them, ensuring partners and regulators see exactly what
              happened.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {transparency.map((item) => (
              <Card key={item.title} className="gap-3">
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
        <div className="container space-y-10">
          <div className="space-y-3">
            <h2 className="text-h3 font-semibold text-storm">Compliance stance</h2>
            <p className="max-w-3xl text-body text-thunder/80">
              Torvus is designed to augment your compliance programme rather than replace
              it. Ask for our latest control mappings and vendor due diligence package.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {compliance.map((item) => (
              <Card key={item.title} className="gap-3">
                <p className="text-small font-semibold uppercase tracking-[0.18em] text-storm/70">
                  {item.title}
                </p>
                <p className="text-body text-thunder/90">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container space-y-8">
          <h2 className="text-h3 font-semibold text-storm">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-storm/10 bg-mist/40 p-5 transition-colors"
              >
                <summary className="cursor-pointer list-none text-small font-semibold text-storm">
                  {faq.question}
                </summary>
                <p className="mt-3 text-body text-thunder/90">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
