import type { Metadata } from "next";
import PricingPlans from "./_components/pricing-plans";

export const metadata: Metadata = {
  title: "Pricing — Torvus Security",
  description:
    "Simple, transparent pricing for individuals, teams, and organizations that need tamper-evident proof and secure releases.",
};

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <header className="text-center">
        <p className="text-xs font-medium tracking-widest text-rose-600">
          PRICING
        </p>
        <h1 className="mt-3 bg-gradient-to-r from-foreground to-rose-600/80 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
          Simple, transparent, and scalable
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
          Start free and grow with advanced security, evidence, and release
          controls when you need them. Cancel anytime.
        </p>
      </header>

      {/* Interactive plans */}
      <PricingPlans />

      {/* FAQ nudge */}
      <section className="mt-12 rounded-xl border bg-gradient-to-b from-background to-muted/40 p-6 sm:p-8">
        <h2 className="text-lg font-semibold tracking-tight">Need something bespoke?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We work with high-risk teams and enterprises on custom deployments and audits.
        </p>
        <div className="mt-4">
          <a
            href="/contact"
            className="inline-flex items-center rounded-lg border bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            Talk to sales
          </a>
        </div>
      </section>
    </main>
  );
}
