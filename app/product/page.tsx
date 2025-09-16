// app/product/page.tsx
export const metadata = {
  title: "Product — Torvus Security",
  description:
    "From simple setup to strong guarantees — Torvus in plain language first, then deeper details.",
};

import HomeFeatureGrid from "@/components/home-feature-grid";

export default function ProductPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <p className="uppercase tracking-[0.16em] text-sm text-slate-500">Product</p>
      <h1 className="mt-3 font-display text-5xl leading-tight text-brand-ink">
        Built for <span className="text-gradient-brand">peace of mind</span>
      </h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Torvus keeps your instructions safe and only releases them when clearly defined conditions
        are satisfied. Simple on top, serious security underneath.
      </p>

      <section aria-labelledby="whatYouGet" className="mt-10">
        <h2 id="whatYouGet" className="sr-only">What you get</h2>
        <HomeFeatureGrid />
      </section>
    </div>
  );
}