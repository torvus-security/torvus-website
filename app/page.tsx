// app/page.tsx
import PhoneMock from "@/components/phone-mock";
import FeatureGrid from "@/components/feature-grid";
import HowItWorks from "@/components/how-it-works";
import SecurityPillars from "@/components/security-pillars";
import LogosRow from "@/components/logos-row";

export default function Home() {
  return (
    <main className="section section-py space-y-12 sm:space-y-14 lg:space-y-16">
      {/* HERO */}
      <section className="panel-with-frame p-2">
        <div className="panel hero-sheen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 p-6 sm:p-8 lg:p-12">
            <div className="max-w-xl">
              <div className="pill mb-6">
                <span className="pill-dot" />
                Built for security
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
                Your materials. Your rules.{" "}
                <span className="text-teal-500">Your timeline.</span>
              </h1>

              <p className="mt-6 text-slate-600 leading-7">
                Safeguard private materials, set release rules, and prove what
                happened.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <a className="btn btn-primary" href="/demo">
                  See the demo
                </a>
                <a className="btn btn-outline" href="/contact">
                  Talk to us
                </a>
              </div>
            </div>

            <div className="relative">
              {/* subtle glow */}
              <div className="absolute -inset-6 -z-10 blur-3xl opacity-40 bg-gradient-to-br from-rose-300/30 via-teal-300/30 to-sky-300/30 rounded-3xl" />
              <PhoneMock />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT TAGS */}
      <section>
        <LogosRow />
      </section>

      {/* FEATURES */}
      <section className="space-y-3">
        <h2 className="section-heading">What you get with Torvus</h2>
        <p className="section-subtitle">
          A secure way to prepare, protect, share, and verify sensitive
          materials.
        </p>
        <FeatureGrid />
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-3">
        <h2 className="section-heading">How it works</h2>
        <HowItWorks />
      </section>

      {/* SECURITY PILLARS */}
      <section className="space-y-3">
        <h2 className="section-heading">Built for security from day one</h2>
        <SecurityPillars />
      </section>
    </main>
  );
}
