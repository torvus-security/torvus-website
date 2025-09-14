// app/page.tsx
import React from "react";
import PhoneMock from "@/components/phone-mock";
import FeatureGrid from "@/components/feature-grid";
import HowItWorks from "@/components/how-it-works";
import SecurityPillars from "@/components/security-pillars";
import SectionHeading, { Accent } from "@/components/section-heading";

export default function HomePage() {
  return (
    <main className="space-y-section">
      {/* Hero */}
      <section className="section-pad">
        <div className="container">
          <div className="framed-panel overflow-hidden bg-[radial-gradient(1200px_500px_at_0%_0%,rgba(244,114,182,0.12),transparent),radial-gradient(1200px_500px_at_100%_100%,rgba(56,189,248,0.12),transparent)]">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="py-8 sm:py-12">
                <span className="chip">Built for security</span>

                <h1 className="mt-6 text-5xl/tight sm:text-6xl/tight font-extrabold tracking-tight text-foreground">
                  Your materials. Your rules.{" "}
                  <span className="bg-gradient-to-r from-teal-400 via-emerald-500 to-sky-500 bg-clip-text text-transparent">
                    Your timeline.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-muted-foreground">
                  Safeguard private materials, set release rules, and prove what happened.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <a href="/demo" className="btn btn-primary">See the demo</a>
                  <a href="/contact" className="btn btn-outline">Talk to us</a>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[520px]">
                <div className="rounded-[28px] border border-white/70 bg-white shadow-2xl ring-1 ring-black/5">
                  <PhoneMock />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="What you get with Torvus"
            title={<>What you get with <Accent>Torvus</Accent></>}
            description="A secure way to prepare, protect, share, and verify sensitive materials."
          />
          <div className="mt-10">
            <FeatureGrid />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="How it works"
            title={<>How it <Accent>works</Accent></>}
            description="Add materials, set the rules, then share and prove using tamper-evident exports."
          />
          <div className="mt-10">
            <HowItWorks />
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="Built for security from day one"
            title={<>Built for <Accent>security</Accent> from day one</>}
            description="Defense-in-depth, modern authentication, and cryptographic auditability."
          />
          <div className="mt-10">
            <SecurityPillars />
          </div>
        </div>
      </section>
    </main>
  );
}
