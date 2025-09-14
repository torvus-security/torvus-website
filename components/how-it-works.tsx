// components/how-it-works.tsx
import { Gauge, SlidersHorizontal, Share2 } from "lucide-react";

const steps = [
  {
    icon: Gauge,
    label: "01",
    title: "Add materials",
    desc:
      "Upload files or collect evidence directly. Everything is encrypted at rest and in transit.",
    tint: "from-rose-400/20 to-rose-500/10 text-rose-600",
  },
  {
    icon: SlidersHorizontal,
    label: "02",
    title: "Set the rules",
    desc:
      "Choose recipients, timing windows, and safeguards like single-use, watermarking, or revocation.",
    tint: "from-sky-400/20 to-sky-500/10 text-sky-600",
  },
  {
    icon: Share2,
    label: "03",
    title: "Share & prove",
    desc:
      "Send controlled access links and export tamper-evident proof for audits or disputes.",
    tint: "from-emerald-400/20 to-emerald-500/10 text-emerald-600",
  },
];

export default function HowItWorks() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:px-6">
      {steps.map(({ icon: Icon, label, title, desc, tint }) => (
        <div
          key={label}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition"
        >
          <div className="mb-4 flex items-center gap-3">
            <div
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b ${tint}`}
            >
              <Icon className="h-4 w-4 opacity-80" />
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              {label}
            </span>
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        </div>
      ))}
    </div>
  );
}
