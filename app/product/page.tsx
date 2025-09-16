import FeatureGrid from "@/components/feature-grid";

export const metadata = {
  title: "Product — Torvus Security",
  description:
    "Built for peace of mind. Plain language up top, deeper details below. Two-tone gradients only, brand palette.",
};

export default function ProductPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 text-center">
        <p className="mb-3 text-xs font-semibold tracking-widest text-slate-500">PRODUCT</p>
        <h1 className="heading-tight text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          Built for <span className="grad-text-brand">peace of mind</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Torvus keeps your instructions safe and only releases them when clearly defined conditions are satisfied.
          Simple on top, serious security underneath.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">What you get</h2>
        <FeatureGrid />
      </section>
    </main>
  );
}