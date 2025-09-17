const stages = [
  "Client-side encryption",
  "Policy sealing",
  "Oracles",
  "HSM/TEE key shares",
  "Release orchestrator",
  "Recipient portal",
];

export function ProvenanceDiagram() {
  return (
    <div className="space-y-6">
      <ol className="sr-only">
        {stages.map((stage, index) => (
          <li key={stage}>
            {index + 1}. {stage}
          </li>
        ))}
      </ol>

      <div className="hidden items-stretch gap-4 lg:flex">
        {stages.map((stage, index) => (
          <FragmentedStage
            key={`desktop-${stage}`}
            label={stage}
            isLast={index === stages.length - 1}
          />
        ))}
      </div>

      <div
        className="flex gap-4 overflow-x-auto pb-2 lg:hidden snap-x snap-mandatory"
        role="list"
      >
        {stages.map((stage) => (
          <div key={`mobile-${stage}`} role="listitem" className="snap-start">
            <StagePill label={stage} />
          </div>
        ))}
      </div>
    </div>
  );
}

function FragmentedStage({ label, isLast }: { label: string; isLast: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <StagePill label={label} />
      {!isLast ? (
        <div className="flex h-16 items-center" aria-hidden="true">
          <div className="h-px w-14 bg-storm/30" />
          <span className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-storm/25 text-storm">
            →
          </span>
        </div>
      ) : null}
    </div>
  );
}

function StagePill({ label }: { label: string }) {
  return (
    <div
      className="relative flex min-w-[200px] max-w-[220px] items-center gap-3 rounded-full border border-mist/30 bg-[rgba(229,231,235,0.55)] px-6 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
      aria-label={label}
    >
      <span
        className="inline-flex h-2.5 w-2.5 flex-none rounded-full bg-lagoon"
        aria-hidden="true"
      />
      <span className="text-[0.95rem] font-semibold text-thunder">{label}</span>
    </div>
  );
}
