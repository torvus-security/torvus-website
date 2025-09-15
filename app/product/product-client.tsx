"use client";

import { useState } from "react";
import {
  ShieldCheck,
  FileCheck2,
  Timer,
  Landmark,
  ScrollText,
  Link2,
} from "lucide-react";
import FeatureModal from "@/components/feature-modal";

type Feature = {
  key: string;
  title: string;
  icon: React.ElementType;
  color: string;
  blurb: string;
  details: string;
};

const FEATURES: Feature[] = [
  {
    key: "zk",
    title: "Zero-knowledge encryption",
    icon: ShieldCheck,
    color: "text-rose-500",
    blurb: "Only you and your recipients can decrypt.",
    details:
      "Your files and notes are encrypted on your device before upload. We store ciphertext + minimal metadata. Decryption keys are released only when your conditions are met.",
  },
  {
    key: "release",
    title: "Conditional release",
    icon: Timer,
    color: "text-fuchsia-500",
    blurb: "Only when the right signals appear.",
    details:
      "Compose time-locks, missed check-in windows, guardian approvals and more. When all predicates pass, sealed keys are re-wrapped to recipients automatically.",
  },
  {
    key: "provenance",
    title: "Provenance receipts",
    icon: ScrollText,
    color: "text-purple-500",
    blurb: "Every access leaves a signed trail.",
    details:
      "Each release produces an integrity-checked record of who approved what, and when. It’s tamper-evident and exportable for your records.",
  },
  {
    key: "identity",
    title: "Strong identity",
    icon: Landmark,
    color: "text-cyan-500",
    blurb: "Passkeys by default; hardware-key friendly.",
    details:
      "WebAuthn/FIDO2 support helps defeat phishing. Role and attribute-based permissions are enforced on every server action.",
  },
  {
    key: "verification",
    title: "Verified recipients",
    icon: FileCheck2,
    color: "text-emerald-500",
    blurb: "Bind identities to public keys.",
    details:
      "Recipients only see their sealed bundle after passing policy and any required KYC/IDV checks, with MFA-protected retrieval.",
  },
  {
    key: "links",
    title: "Safe delivery",
    icon: Link2,
    color: "text-amber-500",
    blurb: "Expiring, one-time links.",
    details:
      "Zero-knowledge-friendly links with short lifetimes, backed by device/IP signals and rate-limits to deter abuse.",
  },
];

export default function ProductClient() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const open = FEATURES.find((f) => f.key === openKey);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      {/* Hero */}
      <section className="hero relative mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-display heading-tight sm:text-5xl md:text-6xl">
          Built for <span className="text-gradient-hero">peace of mind</span>
        </h1>
        <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
          Torvus keeps your instructions safe and only releases them when clearly
          defined conditions are satisfied. Simple up top, serious security underneath.
        </p>
      </section>

      {/* Feature grid */}
      <section className="mt-12">
        <h2 className="section-title mb-6 text-2xl font-display">What you get</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ key, title, icon: Icon, color, blurb, details }) => (
            <button
              key={key}
              onClick={() => setOpenKey(key)}
              className="group hover-card pressable rounded-2xl border border-zinc-200/70 bg-white p-5 text-left shadow-sm transition dark:border-white/10 dark:bg-zinc-900"
            >
              <div className="mb-3 inline-flex items-center gap-3">
                <span className={color}>
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-semibold">{title}</span>
              </div>
              <p className="text-zinc-600 group-hover:text-zinc-800 dark:text-zinc-400 dark:group-hover:text-zinc-200">
                {blurb}
              </p>
              <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                {details}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14">
        <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900">
          <h3 className="mb-2 text-xl font-display">Want early access?</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Join the waitlist and we’ll let you know when Torvus is ready for you.
          </p>
          <div className="mt-4">
            <a
              href="/signup"
              className="pressable inline-flex items-center justify-center rounded-xl bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Sign up for updates
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <FeatureModal
        open={!!open}
        onClose={() => setOpenKey(null)}
        title={open?.title ?? ""}
      >
        {open ? (
          <div className="space-y-3">
            <p>{open.details}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Learn more on the{" "}
              <a
                className="underline decoration-rose-400 underline-offset-4 hover:opacity-90"
                href="/security"
              >
                Security
              </a>{" "}
              page.
            </p>
          </div>
        ) : null}
      </FeatureModal>
    </main>
  );
}
