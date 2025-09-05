import type React from "react"
type Props = {
  id: string
  heading: string
  children: React.ReactNode
  variant?: "light" | "mist"
}

export default function SecuritySection({ id, heading, children, variant = "light" }: Props) {
  const surface = variant === "mist" ? "surface--mist" : "surface--light"
  return (
    <section id={id} className={`${surface} p-6 sm:p-8 rounded-xl`}>
      <h2 className="h2 mb-2">{heading}</h2>
      <div className="prose">{children}</div>
    </section>
  )
}
