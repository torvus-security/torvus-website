// components/home-feature-grid.tsx
import type { SVGProps } from "react";
import { ShieldCheck, Flame, ScrollText, Landmark, BadgeCheck, Link2 } from "lucide-react";

type IconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const ITEMS: { title: string; body: string; Icon: IconType }[] = [
  {
    title: "Zero-knowledge encryption",
    body:
      "Encrypt on your device. We store ciphertext plus minimal metadata. Only you and intended recipients can decrypt.",
    Icon: ShieldCheck,
  },
  {
    title: "Conditional release",
    body:
      "Time-locks, missed check-ins, guardian approvals and more. Keys are re-wrapped to recipients when conditions pass.",
    Icon: Flame,
  },
  {
    title: "Provenance receipts",
    body:
      "Every access produces an integrity-checked receipt of who approved what, and when. Exportable for your records.",
    Icon: ScrollText,
  },
  {
    title: "Strong identity",
    body:
      "Passkeys/WebAuthn first with hardware-key support. Least-privilege permissions enforced on every action.",
    Icon: Landmark,
  },
  {
    title: "Verified recipients",
    body:
      "Bind identities to public keys with optional KYC/IDV. Recipients only see their sealed bundle.",
    Icon: BadgeCheck,
  },
  {
    title: "Safe delivery",
    body:
      "Zero-knowledge-friendly, expiring one-time links with device/IP signals and rate-limits.",
    Icon: Link2,
  },
];

export default function HomeFeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        What you get
      </h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ title, body, Icon }) => (
          <div
            key={title}
            className="hover-card pressable rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-cyan-50 ring-1 ring-cyan-200">
                <Icon className="h-5 w-5 text-cyan-600" />
              </span>
              <h3 className="text-[15px] font-semibold text-slate-900">{title}</h3>
            </div>
            <p className="mt-3 text-[15px] leading-6 text-slate-600">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}