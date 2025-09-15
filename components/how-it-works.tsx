// components/how-it-works.tsx
"use client";

import { useState } from "react";
import FeatureModal from "@/components/feature-modal";
import { BadgeCheck, Settings2, Share2 } from "lucide-react";

type Step = {
  key: string;
  n: string;
  title: string;
  blurb: string;
  Icon: any;
  tint: string;
};

const STEPS: Step[] = [
  {
    key: "add",
    n: "01",
    title: "Add materials",
    blurb:
      "Upload files or collect evidence directly. Everything is encrypted at rest and in transit.",
    Icon: BadgeCheck,
    tint: "bg-rose-50 text-rose-600 ring-rose-200",
  },
  {
    key: "rules",
    n: "02",
    title: "Set the rules",
    blurb:
      "Choose recipients, timing windows, and safeguards like single-use, watermarking, or revocation.",
    Icon: Settings2,
    tint: "bg-sky-50 text-sky-600 ring-sky-200",
  },
  {
    key: "share",
    n: "03",
    title: "Share & prove",
    blurb:
      "Send controlled access links and export tamper-evident proof for audits or disputes.",
    Icon: Share2,
    tint: "bg-emerald-50 text-emerald-600 ring-emerald-200",
  },
];

export default function HowItWorks() {
  const [open, setOpen] = useState<Step | null>(null);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-3">
        {STEPS.map((s) => (
          <button
            key={s.key}
            onClick={() => setOpen(s)}
            className="group rounded-2xl border border-border/70 bg-card p-5 text-left shadow-sm
                       transition hover:-translate-y-0.5 hover:shadow-lg focus:shadow-lg focus:-translate-y-0.5"
          >
            <div className="flex items-start gap-3">
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${s.tint}`}>
                <s.Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold text-muted-foreground">{s.n}</div>
                <h3 className="text-base font-semibold leading-6">{s.title}</h3>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{s.blurb}</p>
            <div className="mt-4 text-xs font-medium text-foreground/70 opacity-0 transition group-hover:opacity-100">
              Details →
            </div>
          </button>
        ))}
      </div>

      <FeatureModal
        open={!!open}
        onClose={() => setOpen(null)}
        title={open?.title ?? ""}
        icon={
          open ? (
            <span className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${open.tint}`}>
              <open.Icon className="h-5 w-5" />
            </span>
          ) : null
        }
      >
        <p className="mb-3">{open?.blurb}</p>
        <p className="mb-2">
          Torvus builds a verifiable trail as you go, giving you confidence in critical moments.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Automatic audit logs and immutable event history.</li>
          <li>Configurable release rules and safe rollbacks.</li>
          <li>Recipient experience that works without special software.</li>
        </ul>
      </FeatureModal>
    </>
  );
}
