// app/product/page.tsx
import dynamic from "next/dynamic";

export const metadata = {
  title: "Product — Torvus Security",
  description:
    "From simple setup to strong guarantees. What you get with Torvus.",
};

const ProductClient = dynamic(() => import("./product-client"), { ssr: false });

export default function ProductPage() {
  return (
    <main className="px-6 pb-16 pt-10 sm:pt-14 lg:px-8">
      <header className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Product
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
          Built for <span className="text-gradient-brand">peace of mind</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-7 text-slate-600">
          Torvus keeps your instructions safe and only releases them when
          clearly defined conditions are satisfied. Simple on top, serious
          security underneath.
        </p>
      </header>

      <ProductClient />
    </main>
  );
}