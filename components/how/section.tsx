import type React from "react"
export default function HowSection({
  id,
  heading,
  accent = "lapis",
  children,
}: { id: string; heading: string; accent?: "lapis" | "green" | "rose"; children: React.ReactNode }) {
  const cls =
    accent === "green"
      ? "section-accent section-accent--green"
      : accent === "rose"
        ? "section-accent section-accent--rose"
        : "section-accent"
  return (
    <section id={id} className={`${cls} surface--mist p-6 sm:p-8 rounded-xl`}>
      <h2 className="h2">{heading}</h2>
      <div className="prose stack-lg">{children}</div>
    </section>
  )
}
