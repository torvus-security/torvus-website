import { Chip } from "@/components/ui/chip"

export default function SpecCard({
  title,
  technical,
  plain,
  status,
  tone = "sky",
}: {
  title: string
  technical: string
  plain: string
  status: "now" | "planned" | "beta" | "neutral"
  tone?: "lemon" | "mint" | "sky" | "blush" | "lilac" | "sand"
}) {
  return (
    <article className={`spec-card elev-1 elev-transition surface--${tone}`}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="h4">{title}</h3>
        <Chip label={statusLabel(status)} tone={status} />
      </div>
      <div className="tech micro text-muted-foreground">{technical}</div>
      <p className="plain small">{plain}</p>
    </article>
  )
}

function statusLabel(s: "now" | "planned" | "beta" | "neutral") {
  return s === "now" ? "Now" : s === "planned" ? "Planned" : s === "beta" ? "Beta" : "Info"
}
