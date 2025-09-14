// app/page.tsx
import Link from "next/link";
import PhoneMock from "@/components/phone-mock";
import FeatureGrid from "@/components/feature-grid";
import HowItWorks from "@/components/how-it-works";
import SecurityPillars from "@/components/security-pillars";

export default function Page() {
  return (
    <main className="container mx-auto px-4">
      {/* HERO */}
      <section className="section-space">
        <div className="framed-panel overflow-hidden px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-foreground/70 backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
                Built for security
              </div>

              <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Your materials.
                <br />
                Your rules.{" "}
                <span className="gradient-word">Your timeline.</span>
              </h1>
              <p className="mt-5 text-base text-muted-foreground md:text-lg">
                Safeguard private materials, set release rules, and prove what
                happened.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/demo" className="btn btn-primary">
                  See the demo
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Talk to us
                </Link>
              </div>
            </div>

            <div className="relative">
              <PhoneMock />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section-space">
        <h2 className="section-headline text-center">
          What you get with <span className="gradient-word">Torvus</span>
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          A secure way to prepare, protect, share, and verify sensitive
          materials.
        </p>
        <div className="mt-10">
          <FeatureGrid />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-space">
        <h2 className="section-headline text-center">
          How it <span className="gradient-word">works</span>
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Add materials, set the rules, then share and prove using tamper-evident
          exports.
        </p>
        <div className="mt-10">
          <HowItWorks />
        </div>
      </section>

      {/* SECURITY PILLARS */}
      <section className="section-space">
        <h2 className="section-headline text-center">
          Built for <span className="gradient-word">security</span> from day one
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Defense-in-depth, modern authentication, and cryptographic
          auditability.
        </p>
        <div className="mt-10">
          <SecurityPillars />
        </div>
      </section>
    </main>
  );
}
