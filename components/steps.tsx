// components/steps.tsx
export default function Steps() {
  const steps = [
    {
      n: "01",
      title: "Add materials",
      body:
        "Upload files or collect evidence directly. Everything is encrypted at rest and in transit.",
    },
    {
      n: "02",
      title: "Set the rules",
      body:
        "Choose recipients, timing windows, and safeguards like single-use, watermarking, or revocation.",
    },
    {
      n: "03",
      title: "Share & prove",
      body:
        "Send controlled access links and export tamper-evident proof for audits or disputes.",
    },
  ];

  return (
    <ol className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {steps.map((s) => (
        <li key={s.n} className="card">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600 ring-1 ring-inset ring-rose-200/70">
            {s.n}
          </div>
          <h3 className="mt-3 text-base font-semibold text-slate-900">{s.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
