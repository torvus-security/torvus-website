import type React from "react"
export default function Section({
  id,
  heading,
  variant = "light",
  children,
}: {
  id: string
  heading: string
  variant?: "light" | "mist" | "rose" | "green"
  children: React.ReactNode
}) {
  const base =
    variant === "mist"
      ? "section-accent section-accent--mist"
      : variant === "rose"
        ? "section-accent section-accent--rose"
        : variant === "green"
          ? "section-accent section-accent--green"
          : "section-accent"
  return (
    <section id={id} className={`${base} surface--light border rounded-xl p-6 sm:p-8 elev-1 elev-transition stack-lg`}>
      <h2 className="h2">{heading}</h2>
      <div className="prose">{children}</div>
    </section>
  )
}
