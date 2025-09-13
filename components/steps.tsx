// components/steps.tsx
const steps = [
  {
    num: "01",
    title: "Add materials",
    desc:
      "Upload files or collect evidence directly. Everything is encrypted at rest and in transit.",
  },
  {
    num: "02",
    title: "Set the rules",
    desc:
      "Choose recipients, timing windows, watermarking, and safeguards like single-use or revocation.",
  },
  {
    num: "03",
    title: "Share & prove",
    desc:
      "Send controlled access links and export tamper-evident proof for audits or disputes.",
  },
];

export function Steps() {
  return (
    <div className="rounded-3xl border border-border/70 bg-background p-5 md:p-6 shadow-[0_1px_2px_rgba(0,0,0,.06)]">
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <li key={s.num} className="flex items-start gap-4">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-rose-50 border border-rose-200/60 text-rose-600 font-semibold">
              {s.num}
            </span>
            <div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
