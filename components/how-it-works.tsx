// components/how-it-works.tsx
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

export default function HowItWorks() {
  return (
    <div className="panel-with-frame p-2">
      <div className="panel p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="card">
              <div className="inline-flex items-center gap-2">
                <span className="icon-pill !bg-rose-50 !border-rose-200/70 !text-rose-600">
                  <span className="text-xs font-bold">{s.n}</span>
                </span>
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-6">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
