type Tone = "now" | "beta" | "planned" | "neutral"

export function Chip({ label, tone = "neutral" }: { label: string; tone?: Tone }) {
  const chipClasses = {
    now: "bg-[color:var(--color-lagoon)]/12 border-[color:var(--color-lagoon)]/30 text-[13px] leading-tight text-[color:var(--color-lagoon)]",
    beta: "bg-[color:var(--color-lapis)]/12 border-[color:var(--color-lapis)]/30 text-[13px] leading-tight text-[color:var(--color-lapis)]",
    planned:
      "bg-[color:var(--color-cranberry)]/12 border-[color:var(--color-cranberry)]/35 text-[13px] leading-tight text-[color:var(--color-cranberry)]",
    neutral:
      "bg-[color:var(--color-mist)] border-[color:var(--color-thunder)]/20 text-[13px] leading-tight text-[color:var(--ink-on-light)]",
  }

  return <span className={`inline-block px-2 py-1 rounded-lg border ${chipClasses[tone]}`}>{label}</span>
}
