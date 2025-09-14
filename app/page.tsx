// app/page.tsx
import PhoneMock from "@/components/phone-mock";
import SectionHeading from "@/components/section-heading";
import FeatureGrid from "@/components/feature-grid";
import HowItWorks from "@/components/how-it-works";
import SecurityPillars from "@/components/security-pillars";

export default function Home() {
  return (
    <main className="pb-section">
      {/* HERO */}
      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="rounded-[28px] border border-border bg-gradient-to-br from-rose-50 via-white to-fuchsia-50/70 p-6 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.18)] md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground shadow-sm">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                Built for security
              </div>
              <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl">
                Your materials.
                <br />
                Your rules.{" "}
                <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Your timeline.
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Safeguard private materials, set release rules, and prove what
                happened.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="/demo"
                  className="btn btn-primary px-4 py-2"
                >
                  See the demo
                </a>
                <a
                  href="/contact"
                  className="btn btn-outline px-4 py-2"
                >
                  Talk to us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-gradient-to-br from-emerald-200/30 via-cyan-200/30 to-fuchsia-200/30 blur-2xl" />
              <div className="relative">
                <PhoneMock />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-section">
        <SectionHeading
          eyebrow="What you get with Torvus"
          title="What you get with Torvus"
          highlight="Torvus"
          summary="A secure way to prepare, protect, share, and verify sensitive materials."
        />
        <div className="mt-8">
          <FeatureGrid />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-section">
        <SectionHeading
          eyebrow="How it works"
          title="How it works"
          highlight="works"
          summary="Add materials, set the rules, then share and prove using tamper-evident exports."
        />
        <div className="mt-8">
          <HowItWorks />
        </div>
      </section>

      {/* SECURITY PILLARS */}
      <section className="mt-section">
        <SectionHeading
          eyebrow="Built for security from day one"
          title="Built for security from day one"
          highlight="security"
          summary="Defense-in-depth, modern authentication, and cryptographic auditability."
        />
        <div className="mt-8">
          <SecurityPillars />
        </div>
      </section>
    </main>
  );
}
