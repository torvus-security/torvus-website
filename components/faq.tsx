const faqs = [
  {
    question: "How will billing work when Torvus Digital Legacy launches?",
    answer:
      "Individual accounts start with complimentary storage for core Digital Legacy items. Professional and Enterprise tiers include invoicing options and volume-based pricing when team features unlock.",
  },
  {
    question: "What security assurances do you provide?",
    answer:
      "All vault data is encrypted client-side with keys stored separately. Roadmapped hardware-backed KMS and customer-managed keys add further assurance. Review our Security page for detailed controls and attestations.",
  },
  {
    question: "Where is data located?",
    answer:
      "Initial regions are Australia and the EU with roadmap support for additional residency zones based on demand. Enterprise deployments can discuss bespoke hosting arrangements.",
  },
  {
    question: "What uptime SLA can we expect?",
    answer:
      "During preview we operate with target 99.5% availability and transparent incident reporting. Enterprise contracts include custom SLAs, runbooks, and contact routes.",
  },
];

export function FAQ() {
  return (
    <section className="pt-[calc(var(--section-pt)*0.7)] pb-[calc(var(--section-pb)*0.7)]">
      <div className="container space-y-8">
        <h2 className="text-h2 font-semibold text-storm">Pricing & rollout questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-storm/12 bg-white/95 p-5 shadow-soft-1"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-[1.05rem] font-semibold text-storm">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-storm/15 text-lagoon transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-[0.96rem] text-thunder">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
