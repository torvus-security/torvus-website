import type React from "react"

export function Card(props: React.PropsWithChildren<{ className?: string; title?: string; subtitle?: string }>) {
  const { className = "", title, subtitle, children } = props
  return (
    <div className={`card ${className}`}>
      {title && <h2>{title}</h2>}
      {subtitle && (
        <p className="small muted" style={{ marginTop: -4 }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
