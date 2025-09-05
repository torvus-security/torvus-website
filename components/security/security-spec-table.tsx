import { Chip } from "@/components/ui/Chip"
import type { ReactNode } from "react"

type Item = {
  label: string
  technical: string | ReactNode
  plain: string
  status: "now" | "planned" | "beta" | "neutral"
}

export default function SecuritySpecTable({ items }: { items: Item[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table--compact text-sm">
        <thead>
          <tr>
            <th>Capability</th>
            <th>Technical</th>
            <th>Plain language</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((it) => (
            <tr key={it.label}>
              <td className="h3">{it.label}</td>
              <td className="body">{it.technical}</td>
              <td className="body">{it.plain}</td>
              <td>
                <Chip label={labelFor(it.status)} tone={it.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function labelFor(s: Item["status"]) {
  if (s === "now") return "Now"
  if (s === "planned") return "Planned"
  if (s === "beta") return "Beta"
  return "Info"
}
