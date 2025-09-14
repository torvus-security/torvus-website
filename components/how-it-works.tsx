// components/how-it-works.tsx
type Step = { title: string; body: string };

const steps: Step[] = [
  {
    title: "Add materials",
    body:
      "Upload files or collect evidence directly. Everything is encrypted at rest and in transit.",
  },
  {
    title: "Set the rules",
    body:
      "Choose recipients, timing windows, and safeguards like single-use, watermarking, or revocation.",
  },
  {
    title: "Share & prove",
    body:
      "Send controlled access links and export tamper-evident proof for audits or disputes.",
  },
];

const dots = [
  "bg-rose-500",
  "bg-sky-500",
  "bg-emerald-500",
] as const;

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      className="mx-auto mt-16 w-full max-w-7xl px-4 sm:mt-20 sm:px-6 lg:mt-24 lg:px-8"
    >
      <h2
        id="how-heading"
        className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-[2.75rem]"
      >
        <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          How it works
        </span>
      </h2>

      <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_8px_24px_-12px_rgba(15,23,42,.2)] ring-1 ring-black/5"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${dots[i]} text-white`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
            </div>
            <p className="text-sm leading-6 text-slate-600">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
