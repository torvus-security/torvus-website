"use client"
import { useEffect, useState } from "react"

const SECTIONS = [
  { id: "identity", label: "Identity & access" },
  { id: "data", label: "Data protection" },
  { id: "keys", label: "Key management" },
  { id: "secrets", label: "Secrets & service identity" },
  { id: "sdlc", label: "Secure development" },
  { id: "infra", label: "Infrastructure & network" },
  { id: "monitoring", label: "Monitoring & IR" },
  { id: "compliance", label: "Compliance & privacy" },
  { id: "continuity", label: "Business continuity" },
  { id: "disclosure", label: "Responsible disclosure" },
]

export default function AnchorNav() {
  const [active, setActive] = useState(SECTIONS[0].id)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (top) setActive(top.target.id)
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 1] },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return (
    <nav className="sec-anchors" aria-label="On this page">
      <div className="small" style={{ opacity: 0.7, marginBottom: 6 }}>
        On this page
      </div>
      {SECTIONS.map((s) => (
        <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? "true" : "false"}>
          {s.label}
        </a>
      ))}
    </nav>
  )
}
