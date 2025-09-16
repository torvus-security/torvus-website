import type { Metadata } from "next";
import ProductClient from "./product-client";

export const metadata: Metadata = {
  title: "Product — Torvus Security",
  description:
    "From simple setup to strong guarantees. Torvus in plain language first, with deeper details below.",
};

export default function ProductPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-4 pb-6 pt-14 text-center">
        <p className="mb-4 text-xs font-medium tracking-widest text-slate-500">PRODUCT</p>
        <h1 className="heading-tight font-display text-4xl sm:text-5xl">
          Built for <span className="text-gradient">peace of mind</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Torvus keeps your instructions safe and only releases them when clearly defined conditions are satisfied.
          Simple on top, serious security underneath.
        </p>
      </section>

      {/* Your interactive sections/cards live here */}
      <ProductClient />
    </main>
  );
}