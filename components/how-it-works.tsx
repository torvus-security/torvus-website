// components/how-it-works.tsx
import { CircleDashed, Settings2, Share2 } from "lucide-react";

const STEPS = [
  {
    n: "01",
    name: "Add materials",
    body:
      "Upload files or collect evidence directly. Everything is encrypted at rest and in transit.",
    tint: "bg-rose-50 text-rose-600 ring-rose-100",
    icon: CircleDashed,
  },
  {
    n: "02",
    name: "Set the rules",
    body:
      "Choose recipients, timing windows, and safeguards like single-use, watermarking, or revocation.",
    tint: "bg-sky-50 text-sky-600 ring-sky-100",
    icon: Settings2,
  },
  {
    n: "03",
    name: "Share & prove",
    body:
      "Send controlled access links and export tamper-evident proof for audits or disputes.",
    tint: "bg-emerald-50 text-emerald-600 ring-emerald-100",
    icon: Share2,
  },
];

export default function HowItWorks() {
  return (
    <section className="section space-y-8 md:space-y-10">
      {/* Single prominent heading – no duplicate eyebrow */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            How it works
          </span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {STEPS.map(({ n, name, body, tint, icon: Icon }) => (
          <div
            key={n}
            className="rounded-2xl border border-border/70 bg-card/60 shadow-sm p-6"
          >
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex size-10 items-center justify-center rounded-full ring-1 ${tint}`}
                aria-hidden
              >
                <Icon className="size-5" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {n}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{name}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
