// components/feature-grid.tsx
import {
  ShieldCheck,
  Timer,
  FileClock,
  ScanEye,
  KeyRound,
  Landmark,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Rules-based release",
    body:
      "Define exactly who can access materials, when, and under what conditions.",
  },
  {
    icon: FileClock,
    title: "Torvus Vault",
    body:
      "Store sensitive files in an encrypted vault designed for zero-trust workflows.",
  },
  {
    icon: Landmark,
    title: "Tamper-evident proof",
    body:
      "Every action is signed so you can prove what happened and when.",
  },
  {
    icon: KeyRound,
    title: "Passkeys & WebAuthn",
    body:
      "Phishing-resistant authentication for accounts and recipient access.",
  },
  {
    icon: Timer,
    title: "Fine-grained links",
    body:
      "Issue single-use or expiring links, watermark views, and revoke at any time.",
  },
  {
    icon: ScanEye,
    title: "Policy guardrails",
    body:
      "Organization-wide controls with full auditability.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, body }) => (
        <div key={title} className="card">
          <div className="icon-pill">
            <Icon size={18} strokeWidth={2} />
          </div>
          <h3 className="mt-3 text-base font-semibold text-slate-900">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
        </div>
      ))}
    </div>
  );
}
