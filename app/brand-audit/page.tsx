"use client"

import { useMemo, useState } from "react"

const tokens = {
  storm: "#0B1220",
  thunder: "#1F2937",
  lapis: "#26619C",
  cranberry: "#D61F69",
  lagoon: "#1AAE9F",
  mist: "#E5E7EB",
  white: "#FFFFFF",
} as const

const backgrounds = ["white", "mist", "storm", "thunder", "lapis", "cranberry", "lagoon"] as const
const inks = ["thunder", "white", "lapis", "cranberry", "lagoon", "storm"] as const

function hexToRgb(hex: string) {
  const h = hex.replace("#", "")
  return [Number.parseInt(h.slice(0, 2), 16), Number.parseInt(h.slice(2, 4), 16), Number.parseInt(h.slice(4, 6), 16)]
}
function srgbToLin(c: number) {
  c /= 255
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}
function relLuminance(rgb: number[]) {
  const [r, g, b] = rgb
  const R = srgbToLin(r),
    G = srgbToLin(g),
    B = srgbToLin(b)
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}
function contrast(hex1: string, hex2: string) {
  const L1 = relLuminance(hexToRgb(hex1))
  const L2 = relLuminance(hexToRgb(hex2))
  const lighter = Math.max(L1, L2),
    darker = Math.min(L1, L2)
  return (lighter + 0.05) / (darker + 0.05)
}

function Badge({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        borderRadius: 999,
        padding: "4px 8px",
        fontSize: 12,
        fontWeight: 700,
        marginRight: 6,
        background: ok ? "#10B981" : "#EF4444",
        color: "var(--color-white)",
      }}
    >
      {ok ? "PASS" : "FAIL"}
    </span>
  )
}

const BrandAuditPage = () => {
  const [filter, setFilter] = useState<"all" | "fail_any" | "pass_all">("all")
  const pairs = useMemo(() => {
    const list: [string, string][] = []
    backgrounds.forEach((bg) => {
      inks.forEach((fg) => list.push([fg, bg]))
    })
    return list
  }, [])

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 20 }}>
      <div
        style={{
          background: "var(--color-white)",
          border: "1px solid var(--color-border)",
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <h1>Torvus Brand Audit</h1>
        <p style={{ fontSize: 12, color: "#6B7280" }}>
          Checks text, large text, and icon (non-text) contrast across your palette. Also previews core components.
        </p>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 10 }}>
          <label>
            Filter:&nbsp;
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              style={{ padding: "8px 10px", border: "1px solid var(--color-border)", borderRadius: 8 }}
            >
              <option value="all">All pairs</option>
              <option value="fail_any">Show failures only</option>
              <option value="pass_all">Show passes only</option>
            </select>
          </label>
          <span
            style={{
              fontSize: 12,
              background: "var(--color-mist)",
              border: "1px solid var(--color-border)",
              padding: "4px 8px",
              borderRadius: 999,
            }}
          >
            AA normal ≥ 4.5:1
          </span>
          <span
            style={{
              fontSize: 12,
              background: "var(--color-mist)",
              border: "1px solid var(--color-border)",
              padding: "4px 8px",
              borderRadius: 999,
            }}
          >
            AA large ≥ 3.0:1
          </span>
          <span
            style={{
              fontSize: 12,
              background: "var(--color-mist)",
              border: "1px solid var(--color-border)",
              padding: "4px 8px",
              borderRadius: 999,
            }}
          >
            Icons/UI ≥ 3.0:1
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))", gap: 10 }}>
          {pairs.map(([fg, bg], i) => {
            const fgHex = (tokens as any)[fg]
            const bgHex = (tokens as any)[bg]
            const ratio = contrast(fgHex, bgHex)
            const passNormal = ratio >= 4.5
            const passLarge = ratio >= 3.0
            const passIcon = ratio >= 3.0
            const failsAny = !(passNormal && passLarge && passIcon)
            const passesAll = passNormal && passLarge && passIcon
            if (filter === "fail_any" && !failsAny) return null
            if (filter === "pass_all" && !passesAll) return null
            return (
              <div
                key={i}
                style={{
                  border: "1px solid var(--color-border)",
                  borderRadius: 10,
                  padding: 10,
                  background: "var(--color-white)",
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 6, alignItems: "center" }}>
                  <div>
                    <strong>FG</strong>
                  </div>
                  <div>
                    {fg} ({fgHex})
                  </div>
                  <div>
                    <strong>BG</strong>
                  </div>
                  <div>
                    {bg} ({bgHex})
                  </div>
                </div>
                <div
                  style={{
                    background: bgHex,
                    color: fgHex,
                    padding: 10,
                    borderRadius: 8,
                    margin: "8px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 24, lineHeight: 1.25 }}>Large text AA</div>
                    <div style={{ fontSize: 16, lineHeight: 1.5 }}>
                      Normal text AA — The quick brown fox jumps over the lazy dog.
                    </div>
                  </div>
                  <div style={{ width: 20, height: 20, background: fgHex, borderRadius: 4 }} title="Icon sample" />
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                  <span style={{ fontSize: 12, color: "#6B7280" }}>Contrast ratio: {ratio.toFixed(2)}:1</span>
                  <Badge ok={passNormal} label="AA Normal" />
                  <Badge ok={passLarge} label="AA Large" />
                  <Badge ok={passIcon} label="Icons/UI" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div
        style={{
          background: "var(--color-white)",
          border: "1px solid var(--color-border)",
          borderRadius: 12,
          padding: 16,
        }}
      >
        <h2>Core Components (safe mappings)</h2>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "10px 0" }}>
          <a
            style={{
              background: tokens.lapis,
              color: "var(--color-white)",
              padding: "10px 14px",
              borderRadius: 8,
              fontWeight: 700,
              border: "1px solid transparent",
              textDecoration: "none",
            }}
          >
            Primary
          </a>
          <a
            style={{
              background: "var(--color-white)",
              color: tokens.thunder,
              padding: "10px 14px",
              borderRadius: 8,
              fontWeight: 700,
              border: "1px solid " + tokens.thunder,
              textDecoration: "none",
            }}
          >
            Secondary
          </a>
          <span
            style={{
              background: tokens.lapis,
              color: "var(--color-white)",
              padding: "4px 8px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            info
          </span>
          <span
            style={{
              background: tokens.lagoon,
              color: tokens.thunder,
              padding: "4px 8px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            success
          </span>
          <span
            style={{
              background: tokens.cranberry,
              color: "var(--color-white)",
              padding: "4px 8px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            alert
          </span>
        </div>
        <p style={{ fontSize: 12, color: "#6B7280" }}>These use tokens that always pass contrast for their role.</p>
      </div>
    </div>
  )
}

const Page = () => {
  if (process.env.NODE_ENV === "production") {
    return null
  } else {
    return <BrandAuditPage />
  }
}

export default Page
