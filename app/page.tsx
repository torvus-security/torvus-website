// app/page.tsx
import PhoneMock from "@/components/phone-mock";
import FeatureGrid from "@/components/feature-grid";
import SecurityPillars from "@/components/security-pillars";

export const metadata = {
  title: "Torvus — Conditional Release, Built Securely",
  description:
    "Torvus protects what matters and releases it only when your conditions are met — with zero-knowledge encryption and a tamper-evident audit trail.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6">
      {/* Hero */}
      <section className="hero mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 py-10 md:grid-cols-2 md:py-12">
        <div>
          <h1 className="mb-4 text-4xl font-display heading-tight sm:text-5xl md:text-6xl">
            Your<span className="block">instructions,</span>{" "}
            <span className="text-gradient-hero">only when it’s right</span>
          </h1>
          <p className="max-w-prose text-zinc-600 dark:text-zinc-400">
            Torvus is a secure vault with a conditional-release engine. Encrypt locally,
            set your conditions, and know that only the right people get the right things at the right time.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="/signup"
              className="pressable inline-flex items-center justify-center rounded-xl bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Sign up for updates
            </a>
            <a
              href="/security"
              className="pressable inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200"
            >
              See how it’s secured
            </a>
          </div>
        </div>
        <div className="justify-self-center">
          <PhoneMock src="/phone-hero.png" alt="Torvus app preview" />
        </div>
      </section>

      {/* What you get */}
      <section className="py-10 md:py-12">
        <h2 className="section-title mb-6 text-2xl font-display">What you get with Torvus</h2>
        <FeatureGrid />
      </section>

      {/* Security pillars */}
      <section className="py-10 md:py-12">
        <h2 className="section-title mb-6 text-2xl font-display">How Torvus keeps you safe</h2>
        <SecurityPillars />
      </section>

      {/* Simple CTA */}
      <section className="py-10 md:py-12">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900">
          <h3 className="mb-2 text-xl font-display">Want early access?</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Join the waitlist and we’ll let you know when Torvus is ready for you.
          </p>
          <div className="mt-4">
            <a
              href="/signup"
              className="pressable inline-flex items-center justify-center rounded-xl bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Sign up for updates
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
