// components/how-it-works.tsx
"use client";

import { GaugeCircle, SlidersHorizontal, Share2 } from "lucide-react";

type Step = {
  k: string;
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badgeClass: string;
};

const STEPS: Step[] = [
  {
    k: "01",
    title: "Add materials",
    desc:
      "Upload files or collect evidence directly. Everything is encrypted at rest and in transit.",
    icon: GaugeCircle,
    badgeClass: "bg-rose-50 text-rose-500 ring-1 ring-rose-200",
  },
  {
    k: "02",
    title: "Set the rules",
    desc:
      "Choose recipients, timing windows, and safeguards like single-use, watermarking, or revocation.",
    icon: SlidersHorizontal,
    badgeClass: "bg-sky-50 text-sky-500 ring-1 ring-sky-200",
  },
  {
    k: "03",
    title: "Share & prove",
    desc:
      "Send controlled access links and export tamper-evident proof for audits or disputes.",
    icon: Share2,
    badgeClass: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200",
  },
];

export default function HowItWorks() {
  // ⬅️ No section heading here (the page supplies it)
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {STEPS.map(({ k, title, desc, icon: Icon, badgeClass }) => (
        <div key={k} className="card p-6">
          <div className="flex items-start gap-4">
            <span
              className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${badgeClass}`}
            >
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <div className="text-sm font-medium text-muted-foreground">
                {k}
              </div>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
