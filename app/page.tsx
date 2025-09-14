// app/page.tsx
import PhoneMock from "@/components/phone-mock";
import FeatureGrid from "@/components/feature-grid";
import HowItWorks from "@/components/how-it-works";
import SecurityPillars from "@/components/security-pillars";
import LogosRow from "@/components/logos-row";

export default function Home() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16 grid gap-y-14 sm:gap-y-16 lg:gap-y-20">
      {/* HERO */}
      <section className="relative">
        <div className="panel-with-frame p-2">
          <div className="panel hero-sheen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 p-6 sm:p-8 lg:p-12 pb-12 sm:pb-16 lg:pb-20">
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
        </div>
      </section>



      {/* FEATURES */}
      <section className="relative">
        <header className="mb-3">
          <h2 className="section-heading">What you get with Torvus</h2>
          <p className="section-subtitle">
            A secure way to prepare, protect, share, and verify sensitive
            materials.
          </p>
        </header>
        <FeatureGrid />
      </section>

      {/* HOW IT WORKS */}
      <section className="relative">
        <header className="mb-3">
          <h2 className="section-heading">How it works</h2>
        </header>
        <HowItWorks />
      </section>

      {/* SECURITY PILLARS */}
      <section className="relative">
        <header className="mb-3">
          <h2 className="section-heading">Built for security from day one</h2>
        </header>
        <SecurityPillars />
      </section>
    </main>
  );
}
