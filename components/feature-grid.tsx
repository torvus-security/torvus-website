"use client";

import { useState } from "react";
import FeatureModal from "./feature-modal";
import {
  FileCheck2,
  ShieldCheck,
  Link2,
  Landmark,
  ScrollText,
} from "lucide-react";

type Feature = {
  key: string;
  title: string;
  desc: string;
  Icon: (props: { className?: string }) => JSX.Element;
  tint: string;  // ring/bg tint class
  modal: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    key: "rules",
    title: "Rules-based release",
    desc: "Define exactly who can access materials, when, and under what conditions.",
    Icon: ShieldCheck,
    tint: "bg-rose-50 ring-rose-200 text-rose-600",
    modal: (
      <>
        <p>
          Combine time windows, missed-check-ins, guardian approvals, and
          verified-death predicates to control when release can happen.
        </p>
        <p className="mt-3">
          Keys stay sealed until all predicates pass; the platform can’t decrypt early.
        </p>
      </>
    ),
  },
  {
    key: "vault",
    title: "Torvus Vault",
    desc: "Zero-knowledge storage with per-object encryption and append-only audit.",
    Icon: FileCheck2,
    tint: "bg-sky-50 ring-sky-200 text-sky-600",
    modal: (
      <>
        <p>
          Objects are encrypted client-side (e.g., XChaCha20-Poly1305 or AES-GCM).
          We store ciphertext plus minimal metadata, never your plaintext.
        </p>
      </>
    ),
  },
  {
    key: "proof",
    title: "Tamper-evident proof",
    desc: "Every action is hashed and signed so you can prove what happened and when.",
    Icon: Landmark,
    tint: "bg-emerald-50 ring-emerald-200 text-emerald-600",
    modal: (
      <>
        <p>
          Policy changes, approvals, and release decisions are committed to a
          hash-chained log. Anyone you choose can verify integrity later.
        </p>
      </>
    ),
  },
  {
    key: "passkeys",
    title: "Passkeys & WebAuthn",
    desc: "Phishing-resistant, hardware-key friendly sign-in for you and recipients.",
    Icon: ScrollText,
    tint: "bg-amber-50 ring-amber-200 text-amber-600",
    modal: (
      <>
        <p>
          Passkeys first; password+TOTP only where required. Role/attribute-based authorization on every action.
        </p>
      </>
    ),
  },
  {
    key: "links",
    title: "Fine-grained links",
    desc: "Single-use/expiring links, watermark views, and revoke at any time.",
    Icon: Link2,
    tint: "bg-violet-50 ring-violet-200 text-violet-600",
    modal: (
      <>
        <p>
          Recipient Portal uses MFA and provenance receipts so every download carries a cryptographic who/when record.
        </p>
      </>
    ),
  },
];

export default function FeatureGrid() {
  const [active, setActive] = useState<Feature | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f)}
            className="hover-card pressable block rounded-2xl border border-black/10 bg-white p-5 text-left transition"
          >
            <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${f.tint}`}>
              <f.Icon className="h-5 w-5" />
            </div>
            <h3 className="text-[17px] font-semibold leading-6">{f.title}</h3>
            <p className="mt-1 text-[15.5px] leading-7 text-slate-600">{f.desc}</p>
          </button>
        ))}
      </div>

      <FeatureModal
        open={!!active}
        title={active?.title ?? ""}
        onClose={() => setActive(null)}
        icon={
          active ? (
            <span className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${active.tint}`}>
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