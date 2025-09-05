import { type NextRequest, NextResponse } from "next/server"
import { buildReleasePreview } from "@/lib/release"
import { audit } from "@/lib/memdb"

export async function GET(_req: NextRequest) {
  const pkg = buildReleasePreview()
  try {
    audit("recipient", "preview_viewed", { at: pkg.generatedAt })
  } catch {}
  return NextResponse.json({ ok: true, package: pkg })
}
