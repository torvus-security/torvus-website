// app/page.tsx
import SectionHeading from "@/components/section-heading";
import FeatureGrid from "@/components/feature-grid";
import HowItWorks from "@/components/how-it-works";
import SecurityPillars from "@/components/security-pillars";
import PhoneMock from "@/components/phone-mock";

export default function HomePage() {
  return (
    <main className="space-y-[clamp(3rem,6vw,5rem)]">
      {/* Hero (framed panel with gradient + phone mock) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-rose-50 via-fuchsia-50/60 to-indigo-50/40 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 ring-1 ring-black/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,.25)]">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left copy */}
            <div className="px-6 pb-10 pt-12 sm:px-10 sm:pt-14 lg:pb-16">
              <p className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                <span className="inline-block size-2 rounded-full bg-rose-400" />
                Built for security
              </p>

              <h1 className="mt-6 text-[clamp(2rem,7vw,4.2rem)] font-extrabold leading-[1.02] tracking-tight">
                <span className="block text-foreground">Your materials.</span>
                <span className="block text-foreground">Your rules.</span>
                <span className="block bg-gradient-to-r from-teal-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                  Your timeline.
                </span>
              </h1>

              <p className="mt-6 max-w-prose text-base/7 text-muted-foreground">
                Safeguard private materials, set release rules, and prove what
                happened.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="#demo"
                  className="btn btn-primary rounded-xl px-4 py-2 text-sm"
                >
                  See the demo
                </a>
                <a
                  href="/contact"
                  className="btn btn-outline rounded-xl px-4 py-2 text-sm"
                >
                  Talk to us
                </a>
              </div>
            </div>

            {/* Right phone mock */}
            <div className="relative mx-auto max-w-md px-6 pb-12 pt-4 sm:px-10 lg:pb-16">
              {/* faint outer frame for depth */}
              <div className="pointer-events-none absolute -inset-x-6 -inset-y-8 rounded-[28px] bg-gradient-to-br from-emerald-300/25 via-cyan-300/20 to-fuchsia-300/25 blur-2xl" />
              <PhoneMock />
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="What you get with Torvus"
          title="What you get with Torvus"
          highlight="Torvus"
          subtext="A secure way to prepare, protect, share, and verify sensitive materials."
        />
        <div className="mt-10">
          <FeatureGrid />
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="How it works"
          title="How it works"
          highlight="works"
          subtext="Add materials, set the rules, then share and prove using tamper-evident exports."
        />
        <div className="mt-10">
          <HowItWorks />
        </div>
      </section>

      {/* Security pillars */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Built for security from day one"
          title="Built for security from day one"
          highlight="security"
          subtext="Defense-in-depth, modern authentication, and cryptographic auditability."
        />
        <div className="mt-10">
          <SecurityPillars />
        </div>
      </section>
    </main>
  );
}
