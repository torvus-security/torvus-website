// app/page.tsx
import Section from "@/components/section";
import { PhoneMock } from "@/components/phone-mock";
import FeatureGrid from "@/components/feature-grid";
import Steps from "@/components/steps";
import SecurityPills from "@/components/security-pills";

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <Section variant="panel" eyebrow="Built for security" className="overflow-hidden">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* left copy */}
          <div>
            <h1 className="section-title">
              <span>Your materials. Your rules. </span>
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">
                Your timeline.
              </span>
            </h1>
            <p className="section-kicker mt-4 max-w-2xl">
              Safeguard private materials, set release rules, and prove what
              happened.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a className="btn btn-primary" href="/demo">
                See the demo
              </a>
              <a className="btn btn-outline" href="/contact">
                Talk to us
              </a>
            </div>
          </div>

          {/* right mock in its own framed inset */}
          <div className="relative">
            <div className="mx-auto w-full max-w-[380px] rounded-[2rem] border border-slate-200 bg-white p-3 shadow-v0">
              <PhoneMock />
            </div>
          </div>
        </div>
      </Section>

      {/* Product “tracks” chips (optional small bar) */}
      <Section tight variant="plain" className="bg-transparent p-0">
        <div className="framed flex flex-wrap items-center justify-center gap-3 p-3 text-xs text-slate-600">
          {["Aegis", "Monarch", "Northwind", "Contour", "Helios"].map((name) => (
            <span
              key={name}
              className="rounded-xl border border-slate-200 bg-white px-4 py-1 shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section
        variant="plain"
        eyebrow="What you get with Torvus"
        title="Controls that adapt to the way you share."
        description="Mix and match recipient rules, verification, and audit so every release has the right safeguards."
      >
        <FeatureGrid />
      </Section>

      {/* How it works */}
      <Section
        variant="panel"
        eyebrow="How it works"
        title="From upload to proof in three steps."
      >
        <Steps />
      </Section>

      {/* Security */}
      <Section
        variant="panel"
        eyebrow="Built for security from day one"
        title="Zero-trust foundations."
      >
        <SecurityPills />
      </Section>
    </main>
  );
}
