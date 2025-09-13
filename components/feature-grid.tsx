// components/feature-grid.tsx
import {
  ShieldCheck,
  FileClock,
  Link2,
  KeyRound,
  BadgeCheck,
  Stamp,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Rules-based release",
    desc:
      "Define exactly who can access materials, when, and under what conditions.",
  },
  {
    icon: Stamp,
    title: "Tamper-evident proof",
    desc:
      "Every action is hashed and signed so you can prove what happened and when.",
  },
  {
    icon: KeyRound,
    title: "Passkeys & WebAuthn",
    desc:
      "Phishing-resistant authentication for accounts and recipient access.",
  },
  {
    icon: FileClock,
    title: "Torvus Vault",
    desc: "Store sensitive files in an encrypted vault designed for zero-trust workflows.",
  },
  {
    icon: Link2,
    title: "Fine-grained links",
    desc:
      "Issue single-use or expiring links, watermark views, and revoke at any time.",
  },
  {
    icon: BadgeCheck,
    title: "Policy guardrails",
    desc: "Enforce org-wide controls and audit everything centrally.",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {items.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="rounded-2xl border border-border/70 bg-background p-4 shadow-[0_1px_2px_rgba(0,0,0,.06)]"
        >
          <div className="flex items-start gap-3">
            <span className="inline-grid size-9 place-items-center rounded-xl bg-rose-50 border border-rose-200/60 text-rose-600">
              <Icon className="size-5" />
            </span>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
