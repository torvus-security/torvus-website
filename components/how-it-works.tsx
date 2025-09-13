// components/how-it-works.tsx
import FramedPanel from "./framed-panel";

const STEPS = [
  {
    k: "01",
    title: "Add materials",
    body:
      "Upload files or collect evidence directly. Everything is encrypted at rest and in transit.",
  },
  {
    k: "02",
    title: "Set the rules",
    body:
      "Choose recipients, timing windows, and safeguards like single-use, watermarking, or revocation.",
  },
  {
    k: "03",
    title: "Share & prove",
    body:
      "Send controlled access links and export tamper-evident proof for audits or disputes.",
  },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="hiw-heading" className="mt-10 md:mt-12 lg:mt-14">
      <h2
        id="hiw-heading"
        className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white"
      >
        How it works
      </h2>

      <FramedPanel>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.k}>
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500/15 text-sm font-semibold text-rose-700 ring-1 ring-rose-500/30">
                  {s.k}
                </span>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </FramedPanel>
    </section>
  );
}
