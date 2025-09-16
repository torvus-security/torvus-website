"use client";

import { useState } from "react";
import type { LucideProps } from "lucide-react";
import {
  ShieldCheck,
  TimerReset,
  ScrollText,
  KeySquare,
  IdCard,
  Link2,
} from "lucide-react";
import FeatureModal from "./feature-modal";

type IconType = React.ComponentType<LucideProps>;

type Feature = {
  key: string;
  title: string;
  desc: string;
  Icon: IconType;
  tint: string;      // ring/bg/text classes for the icon pill
  details: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    key: "rules",
    title: "Zero-knowledge encryption",
    desc: "Only you and your recipients can decrypt.",
    Icon: ShieldCheck,
    tint: "bg-rose-50 ring-rose-200 text-rose-600",
    details: (
      <>
        <p>Your files and notes are encrypted on your device before upload. We store ciphertext + minimal metadata. Decryption keys are only released when your conditions are met.</p>
      </>
    ),
  },
  {
    key: "conditional",
    title: "Conditional release",
    desc: "Only when the right signals appear.",
    Icon: TimerReset,
    tint: "bg-fuchsia-50 ring-fuchsia-200 text-fuchsia-600",
    details: (
      <>
        <p>Compose time-locks, missed check-in windows, guardian approvals and more. When all predicates pass, sealed keys are re-wrapped to recipients automatically.</p>
      </>
    ),
  },
  {
    key: "provenance",
    title: "Provenance receipts",
    desc: "Every access leaves a signed trail.",
    Icon: ScrollText,
    tint: "bg-violet-50 ring-violet-200 text-violet-600",
    details: (
      <>
        <p>Each release produces an integrity-checked record of who approved what, and when. It’s tamper-evident and exportable for your records.</p>
      </>
    ),
  },
  {
    key: "identity",
    title: "Strong identity",
    desc: "Passkeys by default; hardware-key friendly.",
    Icon: KeySquare,
    tint: "bg-cyan-50 ring-cyan-200 text-cyan-600",
    details: (
      <>
        <p>WebAuthn/FIDO2 support helps defeat phishing. Role and attribute-based permissions are enforced on every server action.</p>
      </>
    ),
  },
  {
    key: "verified",
    title: "Verified recipients",
    desc: "Bind identities to public keys.",
    Icon: IdCard,
    tint: "bg-emerald-50 ring-emerald-200 text-emerald-600",
    details: (
      <>
        <p>Recipients only see their sealed bundle after passing policy and any required KYC/IDV checks, with MFA-protected retrieval.</p>
      </>
    ),
  },
  {
    key: "links",
    title: "Safe delivery",
    desc: "Expiring, one-time links.",
    Icon: Link2,
    tint: "bg-amber-50 ring-amber-200 text-amber-600",
    details: (
      <>
        <p>Zero-knowledge-friendly links with short lifetimes, backed by device/IP signals and rate-limits to deter abuse.</p>
      </>
    ),
  },
];

export default function FeatureGrid() {
  const [active, setActive] = useState<Feature | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f)}
            className="hover-card pressable group w-full rounded-2xl border border-slate-200 bg-white p-5 text-left"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${f.tint}`}>
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
        title={active?.title ?? ""}
        onClose={() => setActive(null)}
        icon={
          active ? (
            <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${active.tint}`}>
              <active.Icon className="h-5 w-5" />
            </span>
          ) : null
        }
      >
        {active?.details}
        <p className="mt-4 text-sm text-slate-500">Learn more on the Security page.</p>
      </FeatureModal>
    </>
  );
}