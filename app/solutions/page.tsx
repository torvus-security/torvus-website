import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, ScrollText, Landmark, Link2, FileCheck2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — Torvus Security",
  description: "Pick the path that matches how you’ll use Torvus.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[13px] text-slate-600">
      {children}
    </span>
  );
}

function Card({
  title,
  children,
  icon: Icon,
  cta,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ElementType;
  cta?: React.ReactNode;
}) {
  return (
    <div className="hover-card rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-50 text-rose-600 ring-1 ring-rose-200/70">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="font-semibold text-slate-800">{title}</h3>
      </div>
      <div className="mb-5 text-slate-600">{children}</div>
      {cta}
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 pb-10 pt-12 text-center">
        <p className="mb-3 text-xs font-medium tracking-widest text-slate-500">SOLUTIONS</p>
        <h1 className="heading-tight font-display text-4xl sm:text-5xl">
          Built for <span className="text-gradient">real work.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Pick the path that matches how you’ll use Torvus.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <Pill>Individuals</Pill>
          <Pill>Journalists</Pill>
          <Pill>Organizations</Pill>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-16 sm:grid-cols-2">
        <Card title="Personal estates & legacy" icon={ScrollText}
          cta={<Link href="/signup" className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white hover:opacity-90">Sign up for updates</Link>}>
          Store wills, instructions, and sensitive documents with release rules for the right moment.
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            <li>• Time-based and event-based releases</li>
            <li>• Watermarked views for untrusted recipients</li>
            <li>• Tamper-evident timeline</li>
          </ul>
        </Card>

        <Card title="Private archives" icon={FileCheck2}
          cta={<Link href="/contact" className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Get in touch</Link>}>
          Collect records, photos, and notes you want retained, but only revealed under clear conditions.
          <ul className="mt-3 space-y-1 text-sm text-slate-600">
            <li>• Encrypted vault</li>
            <li>• Revocation at any time</li>
            <li>• Access logs</li>
          </ul>
        </Card>
      </section>
    </main>
  );
}