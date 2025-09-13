// app/page.tsx
import Link from "next/link";
import HeroPhone from "@/components/hero-phone";
import FramedPanel from "@/components/framed-panel";
import TrustLogos from "@/components/trust-logos";
import FeatureGrid from "@/components/feature-grid";
import HowItWorks from "@/components/how-it-works";
import SecurityHighlights from "@/components/security-highlights";
import HomeCta from "@/components/home-cta";

export default function HomePage() {
  return (
    // Spacing is governed by app/layout.tsx container; sections below add modest vertical rhythm
    <main className="relative isolate">
      {/* subtle page background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_left_20%_top_0%,rgba(20,184,166,.06),transparent_60%),radial-gradient(800px_400px_at_right_20%_20%,rgba(244,114,182,.08),transparent_60%)]" />

      {/* HERO (framed) */}
      <section>
        <FramedPanel>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-neutral-300">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                Built for security
              </div>

              <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
                Your materials. Your rules.{" "}
                <span className="bg-gradient-to-r from-teal-500 to-sky-600 bg-clip-text text-transparent">
                  Your timeline.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-neutral-600">
                Safeguard private materials, set release rules, and prove what
                happened.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/demo" className="btn btn-primary">
                  See the demo
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Talk to us
                </Link>
              </div>
            </div>

            {/* Right: phone mock */}
            <div className="relative flex justify-center">
              <HeroPhone />
            </div>
          </div>
        </FramedPanel>
      </section>

      {/* Logos */}
      <TrustLogos />

      {/* Feature grid */}
      <FeatureGrid />

      {/* How it works (framed) */}
      <HowItWorks />

      {/* Security highlights (framed) */}
      <SecurityHighlights />

      {/* CTA */}
      <HomeCta />
    </main>
  );
}
