import type { Metadata } from "next";
import FeatureGrid from "@/components/feature-grid";

export const metadata: Metadata = {
  title: "Product — Torvus Security",
  description: "From simple setup to strong guarantees — plain language first, then deeper details.",
};

export default function ProductPage() {
  return (
    <main>
      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 pb-6 pt-16 text-center">
        <p className="mb-3 text-xs font-medium tracking-widest text-slate-500">PRODUCT</p>
        <h1 className="heading-tight font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
          Built for <span className="text-gradient-brand">peace of mind</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Torvus keeps your instructions safe and only releases them when clearly defined conditions are satisfied.
          Simple on top, serious security underneath.
        </p>
      </section>

      {/* What you get */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-semibold text-slate-900">What you get</h2>
        <FeatureGrid />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-slate-900">Want early access?</h3>
          <p className="mt-2 text-slate-600">Join the waitlist and we’ll let you know when Torvus is ready for you.</p>
          <a href="/signup" className="mt-4 inline-flex items-center rounded-lg bg-rose-600 px-4 py-2 font-medium text-white hover:bg-rose-500">Sign up for updates</a>
        </div>
      </section>
    </main>
  );
}