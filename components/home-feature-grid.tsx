// components/home-feature-grid.tsx
"use client";
import { useState, ElementType } from "react";
import FeatureModal from "./feature-modal";
import {
  ShieldCheck,    // zero-knowledge
  Timer,          // conditional release
  ScrollText,     // provenance
  Landmark,       // strong identity (iconography cue)
  Shield,         // verified recipients
  Link2,          // safe delivery
} from "lucide-react";

type Row = {
  title: string;
  body: string;
  Icon: ElementType;       // works with lucide-react components
  tint: string;
  modal: React.ReactNode;
};

const ROWS: Row[] = [
  {
    title: "Zero-knowledge encryption",
    body: "Encrypt on your device. We store ciphertext plus minimal metadata. Only you and intended recipients can decrypt.",
    Icon: ShieldCheck,
    tint: "bg-cyan-50 ring-cyan-200 text-cyan-600",
    modal: (
      <>
        <p>Your files and notes are encrypted on-device. Decryption keys are only re-wrapped when your conditions are met.</p>
        <p className="mt-3 text-sm text-slate-500">See more on the Security page.</p>
      </>
    ),
  },
  {
    title: "Conditional release",
    body: "Time-locks, missed check-ins, guardian approvals and more. Keys are re-wrapped to recipients when conditions pass.",
    Icon: Timer,
    tint: "bg-rose-50 ring-rose-200 text-rose-600",
    modal: (
      <>
        <p>Compose time windows, inactivity grace, and approvals. Dry-run policies with pass/fail reasons before you rely on them.</p>
        <p className="mt-3 text-sm text-slate-500">See conditional release details.</p>
      </>
    ),
  },
  {
    title: "Provenance receipts",
    body: "Every access leaves a signed trail that’s tamper-evident and exportable.",
    Icon: ScrollText,
    tint: "bg-violet-50 ring-violet-200 text-violet-600",
    modal: (
      <>
        <p>Each release produces an integrity-checked record of who approved what, and when.</p>
      </>
    ),
  },
  {
    title: "Strong identity",
    body: "Passkeys/WebAuthn first with hardware-key support. Least-privilege auth enforced on every action.",
    Icon: Landmark,
    tint: "bg-sky-50 ring-sky-200 text-sky-600",
    modal: (
      <>
        <p>Modern authentication with passkeys by default. TOTP fallback where required.</p>
      </>
    ),
  },
  {
    title: "Verified recipients",
    body: "Bind identities to public keys. Recipients only see their sealed bundle.",
    Icon: Shield,
    tint: "bg-emerald-50 ring-emerald-200 text-emerald-600",
    modal: (
      <>
        <p>Map recipients to items. Identities can be bound to keys and optional KYC/IDV gates.</p>
      </>
    ),
  },
  {
    title: "Safe delivery",
    body: "Expiring, one-time links with device/IP signals and rate-limits.",
    Icon: Link2,
    tint: "bg-amber-50 ring-amber-200 text-amber-600",
    modal: (
      <>
        <p>Zero-knowledge-friendly retrieval with short-lived, one-time links protected by MFA.</p>
      </>
    ),
  },
];

export default function HomeFeatureGrid() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const active = activeIdx === null ? null : ROWS[activeIdx];

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ROWS.map((r, i) => (
          <button
            key={r.title}
            onClick={() => setActiveIdx(i)}
            className="text-left card card-hover p-6"
          >
            <div className="flex items-center gap-3">
              <span className={`mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ${r.tint}`}>
                <r.Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg text-brand-ink">{r.title}</h3>
            </div>
            <p className="mt-3 text-slate-600">{r.body}</p>
          </button>
        ))}
      </div>

      <FeatureModal
        open={active !== null}
        title={active?.title ?? ""}
        icon={
          active ? (
            <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${active.tint}`}>
              <active.Icon className="h-5 w-5" />
            </span>
          ) : null
        }
        onClose={() => setActiveIdx(null)}
      >
        {active?.modal}
      </FeatureModal>
    </>
  );
}