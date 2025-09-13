// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { FeatureGrid } from "@/components/feature-grid";
import { Steps } from "@/components/steps";
import { SecurityPillars } from "@/components/security-pillars";
import { PhoneMock } from "@/components/phone-mock";

export const metadata: Metadata = {
  title: "Torvus Security — Your materials. Your rules. Your timeline.",
  description:
    "Safeguard private materials, set release rules, and prove what happened.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
      {/* HERO */}
      <section
        aria-labelledby="hero-heading"
        className="mt-8 sm:mt-10 rounded-3xl border border-border/70 bg-gradient-to-br from-[hsl(210,50%,98%)] via-[hsl(0,0%,100%)] to-[hsl(340,80%,98%)] shadow-[0_2px_0_hsl(0_0%_100%),0_1px_2px_rgba(0,0,0,.06),0_12px_40px_-8px_rgba(203,0,97,.18)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700">
              <span className="size-1.5 rounded-full bg-rose-500" />
              Built for security
            </span>

            <h1
              id="hero-heading"
              className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight"
            >
              Your materials. Your rules.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">
                Your timeline.
              </span>
            </h1>

            <p className="mt-5 max-w-prose text-[16px] leading-7 text-muted-foreground">
              Safeguard private materials, set release rules, and prove what
              happened.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <Link
                href="/demo"
                className="btn btn-primary px-4 py-2 rounded-lg"
              >
                See the demo
              </Link>
              <Link
                href="/contact"
                className="btn btn-secondary px-4 py-2 rounded-lg"
              >
                Talk to us
              </Link>
            </div>
          </div>

          {/* Framed phone mock, with subtle outer frame */}
          <div className="relative">
            <div className="rounded-[28px] border border-border/70 bg-background shadow-[0_2px_0_hsl(0_0%_100%),0_1px_2px_rgba(0,0,0,.06),0_24px_60px_-24px_rgba(16,24,40,.25)] p-3 sm:p-4">
              <PhoneMock />
            </div>

            {/* soft aura */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] blur-2xl opacity-40 bg-[radial-gradient(120px_120px_at_85%_15%,#f0a,#0000),radial-gradient(140px_140px_at_15%_85%,#22d3ee,#0000)]" />
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section aria-labelledby="features-heading" className="space-y-6">
        <h2 id="features-heading" className="text-xl font-semibold">
          What you get with Torvus
        </h2>
        <FeatureGrid />
      </section>

      {/* HOW IT WORKS */}
      <section aria-labelledby="how-heading" className="space-y-6">
        <h2 id="how-heading" className="text-xl font-semibold">
          How it works
        </h2>
        <Steps />
      </section>

      {/* SECURITY (only once) */}
      <section aria-labelledby="security-heading" className="space-y-6">
        <h2 id="security-heading" className="text-xl font-semibold">
          Built for security from day one
        </h2>
        <SecurityPillars />
      </section>
    </main>
  );
}
