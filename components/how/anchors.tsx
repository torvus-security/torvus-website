"use client"
import { useState, useEffect } from "react"

const SECTIONS = [
  { id: "inheritance", label: "Inheritance" },
  { id: "journalists", label: "Journalists & safety" },
  { id: "conditional", label: "Conditional release" },
]

export default function HowAnchors() {
  const [active, setActive] = useState(SECTIONS[0].id)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (v) setActive(v.target.id)
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
