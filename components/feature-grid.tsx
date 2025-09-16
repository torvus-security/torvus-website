"use client";

import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { Lock, Timer, ScrollText, Fingerprint, BadgeCheck, Link2 } from "lucide-react";
import FeatureModal from "./feature-modal";
import Link from "next/link";

type Feature = {
  key: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
  tint: string;         // pastel ring + text color combo
  modal: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    key: "zk",
    title: "Zero-knowledge encryption",
    desc: "Only you and your recipients can decrypt.",
    Icon: Lock,
    tint: "bg-cyan-50 ring-cyan-200 text-cyan-600",
    modal: (
      <>
        <p>Your files and notes are encrypted on your device before upload. We store ciphertext plus minimal metadata.</p>
        <p className="mt-3">Decryption keys are only released when your conditions are met.</p>
        <p className="mt-4 text-sm"><Link href="/security" className="underline">Learn more on the Security page.</Link></p>
      </>
    ),
  },
  {
    key: "conditional",
    title: "Conditional release",
    desc: "Only when the right signals appear.",
    Icon: Timer,
    tint: "bg-rose-50 ring-rose-200 text-rose-600",
    modal: (
      <>
        <p>Compose time-locks, missed check-in windows, guardian approvals and more.</p>
        <p className="mt-3">When all predicates pass, sealed keys are re-wrapped to recipients automatically.</p>
        <p className="mt-4 text-sm"><Link href="/security" className="underline">See conditional release details.</Link></p>
      </>
    ),
  },
  {
    key: "provenance",
    title: "Provenance receipts",
    desc: "Every access leaves a signed trail.",
    Icon: ScrollText,
    tint: "bg-violet-50 ring-violet-200 text-violet-600",
    modal: (
      <>
        <p>Each release produces an integrity-checked record of who approved what, and when.</p>
        <p className="mt-3">It’s tamper-evident and exportable for your records.</p>
        <p className="mt-4 text-sm"><Link href="/security" className="underline">Learn more on the Security page.</Link></p>
      </>
    ),
  },
  {
    key: "identity",
    title: "Strong identity",
    desc: "Passkeys by default; hardware-key friendly.",
    Icon: Fingerprint,
    tint: "bg-sky-50 ring-sky-200 text-sky-600",
    modal: (
      <>
        <p>WebAuthn/FIDO2 support helps defeat phishing.</p>
        <p className="mt-3">Role and attribute-based permissions are enforced on every server action.</p>
      </>
    ),
  },
  {
    key: "verified",
    title: "Verified recipients",
    desc: "Bind identities to public keys.",
    Icon: BadgeCheck,
    tint: "bg-emerald-50 ring-emerald-200 text-emerald-600",
    modal: (
      <>
        <p>Recipients only see their sealed bundle after passing policy (and any required KYC/IDV) checks, with MFA-protected retrieval.</p>
      </>
    ),
  },
  {
    key: "delivery",
    title: "Safe delivery",
    desc: "Expiring, one-time links.",
    Icon: Link2,
    tint: "bg-amber-50 ring-amber-200 text-amber-600",
    modal: (
      <>
        <p>Zero-knowledge-friendly links with short lifetimes, backed by device/IP signals and rate-limits to deter abuse.</p>
      </>
    ),
  },
];

export default function FeatureGrid() {
  const [active, setActive] = React.useState<Feature | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f)}
            className="group text-left rounded-2xl border border-slate-200 bg-white p-5 hover-card pressable"
          >
            <div className="mb-3 inline-flex items-center gap-3">
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ${f.tint}`}>
                <f.Icon className="h-5 w-5" />
              </span>
              <span className="font-semibold text-slate-900">{f.title}</span>
            </div>
            <p className="text-slate-600">{f.desc}</p>
          </button>
        ))}
      </div>

      <FeatureModal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title ?? ""}
        icon={
          active ? (
            <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${active.tint}`}>
              <active.Icon className="h-5 w-5" />
            </span>
          ) : null
        }
      >
        {active?.modal}
      </FeatureModal>
    </>
  );
}