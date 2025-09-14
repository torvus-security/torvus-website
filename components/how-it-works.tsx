// components/how-it-works.tsx
import { BadgeCheck, Cog, Share2 } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: BadgeCheck,
    tint: "bg-rose-400/15 text-rose-600",
    title: "Add materials",
    body: "Upload files or collect evidence directly. Everything is encrypted at rest and in transit.",
  },
  {
    n: "02",
    icon: Cog,
    tint: "bg-sky-400/15 text-sky-600",
    title: "Set the rules",
    body: "Choose recipients, timing windows, and safeguards like single-use, watermarking, or revocation.",
  },
  {
    n: "03",
    icon: Share2,
    tint: "bg-emerald-400/15 text-emerald-600",
    title: "Share & prove",
    body: "Send controlled access links and export tamper-evident proof for audits or disputes.",
  },
];

export default function HowItWorks() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {STEPS.map(({ n, icon: Icon, tint, title, body }) => (
        <div key={n} className="card card-hover p-6">
          <div className="flex items-center gap-3">
            <div className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${tint}`}>
              <Icon className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold text-foreground/70">{n}</span>
          </div>
          <h3 className="mt-3 text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{body}</p>
        </div>
      ))}
    </div>
  );
}
