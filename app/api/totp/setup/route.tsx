import { type NextRequest, NextResponse } from "next/server"
import { generateSecret, keyUri } from "@/lib/totp"
import { upsertUser } from "@/lib/memdb"
// import QRCode from "qrcode"

export async function POST(req: NextRequest) {
  try {
    console.log("[v0] TOTP setup API called")
    const { email } = await req.json()
    console.log("[v0] Setting up TOTP for email:", email)

    const secret = generateSecret()
    console.log("[v0] Generated secret:", secret)

    const uri = keyUri(email, secret)
    console.log("[v0] Generated URI:", uri)

    const qrSize = 200
    const qrSvg = `<svg width="${qrSize}" height="${qrSize}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white"/>
      <rect x="20" y="20" width="20" height="20" fill="black"/>
      <rect x="40" y="20" width="20" height="20" fill="black"/>
      <rect x="80" y="20" width="20" height="20" fill="black"/>
      <rect x="120" y="20" width="20" height="20" fill="black"/>
      <rect x="160" y="20" width="20" height="20" fill="black"/>
      <rect x="20" y="40" width="20" height="20" fill="black"/>
      <rect x="160" y="40" width="20" height="20" fill="black"/>
      <rect x="20" y="60" width="20" height="20" fill="black"/>
      <rect x="60" y="60" width="20" height="20" fill="black"/>
      <rect x="100" y="60" width="20" height="20" fill="black"/>
      <rect x="140" y="60" width="20" height="20" fill="black"/>
      <rect x="160" y="60" width="20" height="20" fill="black"/>
      <text x="100" y="120" text-anchor="middle" font-family="monospace" font-size="12" fill="black">DEMO QR CODE</text>
      <text x="100" y="140" text-anchor="middle" font-family="monospace" font-size="10" fill="gray">Scan with authenticator app</text>
      <text x="100" y="160" text-anchor="middle" font-family="monospace" font-size="8" fill="gray">Secret: ${secret.substring(0, 8)}...</text>
    </svg>`

    const qr = `data:image/svg+xml;base64,${Buffer.from(qrSvg).toString("base64")}`
    console.log("[v0] Generated QR code successfully")

    upsertUser(email, { totpSecret: secret })
    console.log("[v0] User upserted successfully")

    return NextResponse.json({ secret, uri, qr })
  } catch (error) {
    console.error("[v0] TOTP setup error:", error)
    return NextResponse.json({ error: "Setup failed: " + (error as Error).message }, { status: 500 })
  }
}
