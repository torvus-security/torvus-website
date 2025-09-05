import type React from "react"

export default function StepCard({
  title,
  body,
  icon,
  chipClass,
}: { title: string; body: string; icon?: React.ReactNode; chipClass?: string }) {
  return (
    <article className="step elev-1 elev-transition">
      <div className="meta">
        {icon ? (
          <span className={`icon-chip icon-chip--sm ${chipClass || ""}`} aria-hidden>
            {icon}
          </span>
        ) : null}
        <h4 className="h4 title">{title}</h4>
      </div>
      <p className="small">{body}</p>
    </article>
  )
}
