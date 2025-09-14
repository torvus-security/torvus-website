// components/feature-grid.tsx
import {
  ShieldCheck,
  FileCheck2,
  Link2,
  Safe,
  Landmark,
  ScrollText,
} from "lucide-react";

type Accent = {
  ring: string;
  bg: string;
  text: string;
};

const accents: Accent[] = [
  { ring: "ring-rose-200/70", bg: "bg-rose-50", text: "text-rose-600" },
  { ring: "ring-sky-200/70", bg: "bg-sky-50", text: "text-sky-600" },
  { ring: "ring-emerald-200/70", bg: "bg-emerald-50", text: "text-emerald-600" },
  { ring: "ring-amber-200/70", bg: "bg-amber-50", text: "text-amber-600" },
  { ring: "ring-violet-200/70", bg: "bg-violet-50", text: "text-violet-600" },
  { ring: "ring-pink-200/70", bg: "bg-pink-50", text: "text-pink-600" },
];

const items = [
  {
    title: "Rules-based release",
    body:
      "Define exactly who can access materials, when, and under what conditions.",
    icon: ShieldCheck,
  },
  {
    title: "Torvus Vault",
    body:
      "Store sensitive files in an encrypted vault designed for zero-trust workflows.",
    icon: Safe,
  },
  {
    title: "Tamper-evident proof",
    body:
      "Every action is hashed and signed so you can prove what happened and when.",
    icon: FileCheck2,
  },
  {
    title: "Passkeys & WebAuthn",
    body:
      "Phishing-resistant authentication for accounts and recipient access. TOTP supported.",
    icon: Landmark,
  },
  {
    title: "Fine-grained links",
    body: "Issue single-use or expiring links, watermark views, and revoke at any time.",
    icon: Link2,
  },
  {
    title: "Policy guardrails",
    body: "Enforce organization-wide controls and audit everything centrally.",
    icon: ScrollText,
  },
];

export default function FeatureGrid() {
  return (
    <section
      aria-labelledby="features-heading"
      className="mx-auto mt-16 w-full max-w-7xl px-4 sm:mt-20 sm:px-6 lg:mt-24 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-left">
        <h2
          id="features-heading"
          className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-[2.75rem]"
        >
          <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            What you get with Torvus
          </span>
        </h2>
        <p className="mt-4 max-w-prose text-slate-600">
          A secure way to prepare, protect, share, and verify sensitive materials.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
        {items.map((item, i) => {
          const A = accents[i % accents.length];
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_8px_24px_-12px_rgba(15,23,42,.2)] ring-1 ring-black/5"
            >
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full ${A.bg} ${A.text} ring-1 ${A.ring}`}
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
