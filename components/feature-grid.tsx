// components/feature-grid.tsx
import {
  ShieldCheck,
  Timer,
  FileClock,
  Fingerprint,
  Link2,
  ScrollText,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Rules-based release",
    body:
      "Define exactly who can access materials, when, and under what conditions.",
  },
  {
    icon: ScrollText,
    title: "Tamper-evident proof",
    body:
      "Every action is hashed and signed so you can prove what happened and when.",
  },
  {
    icon: Fingerprint,
    title: "Passkeys & WebAuthn",
    body:
      "Phishing-resistant sign-in for accounts and recipient access. TOTP supported.",
  },
  {
    icon: Link2,
    title: "Fine-grained links",
    body:
      "Issue single-use or expiring links, watermark views, and revoke at any time.",
  },
  {
    icon: FileClock,
    title: "Torvus Vault",
    body:
      "Store sensitive files in an encrypted vault designed for zero-trust workflows.",
  },
  {
    icon: Timer,
    title: "Policy guardrails",
    body:
      "Enforce organization-wide controls and audit everything centrally.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, body }) => (
        <article key={title} className="card">
          <div className="icon-pill mb-3">
            <Icon className="h-4 w-4" aria-hidden />
          </div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm text-slate-600 leading-6">{body}</p>
        </article>
      ))}
    </div>
  );
}
