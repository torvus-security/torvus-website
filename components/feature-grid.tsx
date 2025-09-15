"use client";

import { useState } from "react";
import {
  ShieldCheck,
  FileCheck2,
  Landmark,
  Link2,
  ScrollText,
  KeyRound,
  type LucideIcon,
} from "lucide-react";
import FeatureModal from "./feature-modal";

type Feature = {
  key: string;
  title: string;
  desc: string;
  Icon: LucideIcon; // <-- icon type matches lucide-react
  tint: string;
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
        <p className="mb-3">
          Combine time windows, inactivity check-ins, guardian approvals, and
          other predicates. Releases only occur when conditions are met.
        </p>
        <p>
          Policies can be dry-run to verify outcomes before you rely on them in
          production.
        </p>
      </>
    ),
  },
  {
    key: "vault",
    title: "Torvus Vault",
    desc: "Store sensitive files in an encrypted vault designed for zero-trust workflows.",
    Icon: FileCheck2,
    tint: "bg-sky-50 ring-sky-200 text-sky-600",
    modal: (
      <>
        <p className="mb-3">
          Client-side encryption by default. Each object gets its own data key,
          wrapped by KMS-managed keys with rotation and usage logs.
        </p>
        <p>Plaintext never leaves your device.</p>
      </>
    ),
  },
  {
    key: "tamper",
    title: "Tamper-evident proof",
    desc: "Every action is hashed and signed so you can prove what happened and when.",
    Icon: Landmark,
    tint: "bg-emerald-50 ring-emerald-200 text-emerald-600",
    modal: (
      <>
        <p className="mb-3">
          An append-only, hash-chained audit trail records policy updates,
          approvals, and release decisions.
        </p>
        <p>Export proofs to satisfy audits and disputes.</p>
      </>
    ),
  },
  {
    key: "passkeys",
    title: "Passkeys & WebAuthn",
    desc: "Phishing-resistant sign-in for accounts and recipient access. TOTP supported.",
    Icon: KeyRound,
    tint: "bg-amber-50 ring-amber-200 text-amber-600",
    modal: (
      <>
        <p className="mb-3">
          Passkeys (FIDO2/WebAuthn) by default. Hardware-key friendly and
          resistant to credential phishing.
        </p>
        <p>Fallbacks are available where needed.</p>
      </>
    ),
  },
  {
    key: "links",
    title: "Fine-grained links",
    desc: "Issue single-use or expiring links, watermark views, and revoke at any time.",
    Icon: Link2,
    tint: "bg-violet-50 ring-violet-200 text-violet-600",
    modal: (
      <>
        <p className="mb-3">
          Control distribution with expirations, recipient binding, and one-time
          retrieval.
        </p>
        <p>Watermarking helps deter misuse and establish provenance.</p>
      </>
    ),
  },
  {
    key: "policy",
    title: "Policy guardrails",
    desc: "Enforce organization-wide controls and audit everything centrally.",
    Icon: ScrollText,
    tint: "bg-pink-50 ring-pink-200 text-pink-600",
    modal: (
      <>
        <p className="mb-3">
          Centralize defaults like minimum MFA, required approvals, and logging
          destinations. Exceptions are explicit and auditable.
        </p>
      </>
    ),
  },
];

export default function FeatureGrid() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const active = FEATURES.find((f) => f.key === activeKey) ?? null;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveKey(f.key)}
            className="group hover-card pressable w-full rounded-2xl border border-black/5 bg-white p-6 text-left ring-1 ring-black/5 transition"
            aria-label={`${f.title} — learn more`}
          >
            <span
              className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ${f.tint}`}
            >
              <f.Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mb-1 text-lg font-semibold leading-6 text-slate-900">
              {f.title}
            </h3>
            <p className="text-slate-600">{f.desc}</p>
            <span className="mt-4 inline-block text-sm font-medium text-slate-700 opacity-0 transition group-hover:opacity-100">
              Learn more →
            </span>
          </button>
        ))}
      </div>

      {/* Modal (no icon prop to keep compatibility) */}
      {active && (
        <FeatureModal
          open={!!active}
          title={active.title}
          onClose={() => setActiveKey(null)}
        >
          <div className="mb-4">
            <span
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ${active.tint}`}
            >
              <active.Icon className="h-5 w-5" aria-hidden />
            </span>
          </div>
          {active.modal}
        </FeatureModal>
      )}
    </>
  );
}