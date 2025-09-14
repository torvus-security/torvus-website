// components/hero-section.tsx
import PhoneMock from "@/components/phone-mock";

export default function HeroSection() {
  return (
    <section
      className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* framed canvas with soft glow */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_10px_30px_-10px_rgba(15,23,42,.25)] ring-1 ring-black/5">
        {/* backdrop gradient wash */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_20%,rgba(236,72,153,.15),transparent),radial-gradient(1200px_600px_at_10%_10%,rgba(56,189,248,.12),transparent)]" />

        <div className="relative grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:gap-8 lg:py-14">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-black/5 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
              Built for security
            </span>

            <h1
              id="hero-heading"
              className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Your materials. Your rules.{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Your timeline.
              </span>
            </h1>

            <p className="mt-6 max-w-prose text-slate-600">
              Safeguard private materials, set release rules, and prove what
              happened.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/demo"
                className="btn btn-primary rounded-xl px-4 py-2 text-sm font-semibold"
              >
                See the demo
              </a>
              <a
                href="/contact"
                className="btn btn-outline rounded-xl px-4 py-2 text-sm font-semibold"
              >
                Talk to us
              </a>
            </div>
          </div>

          {/* phone mock */}
          <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative">
              {/* soft drop + rim light */}
              <div className="absolute inset-x-8 bottom-6 top-8 rounded-[2.25rem] bg-black/10 blur-2xl" />
              <div className="relative">
                <PhoneMock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
