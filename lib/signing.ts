// lib/signing.ts — Ed25519 signing for provenance (demo)
import nacl from "tweetnacl"
import crypto from "crypto"

// Base64url helpers
function b64url(buf: Uint8Array | Buffer): string {
  return Buffer.from(buf).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "")
}
function fromB64url(s: string): Uint8Array {
  const pad = s.length % 4 == 0 ? "" : "=".repeat(4 - (s.length % 4))
  return new Uint8Array(Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/") + pad, "base64"))
}

// Deterministic demo keypair from env seed (do NOT use in prod)
let keyPair: nacl.SignKeyPair | null = null
function loadKeyPair() {
  if (keyPair) return keyPair
  const seedStr = process.env.PROVENANCE_SEED || "torvus-demo-seed"
  const seed = crypto.createHash("sha256").update(seedStr).digest().subarray(0, 32)
  keyPair = nacl.sign.keyPair.fromSeed(seed)
  return keyPair!
}

export type ProvenancePayload = {
  policyDigest: string // sha256 of canonical policy snapshot
  snapshotAt: number // ms epoch
  issuer: "Torvus Security (demo)"
}

function sha256(data: string): string {
  return crypto.createHash("sha256").update(data).digest("hex")
}

function sortKeysDeep(obj: any): any {
  if (Array.isArray(obj)) return obj.map(sortKeysDeep)
  if (obj && typeof obj === "object") {
    return Object.keys(obj)
      .sort()
      .reduce((acc: any, k) => {
        acc[k] = sortKeysDeep(obj[k])
        return acc
      }, {})
  }
  return obj
}
export function canonicalize(obj: any): string {
  return JSON.stringify(sortKeysDeep(obj))
}

export function signProvenance(snapshot: any) {
  const kp = loadKeyPair()
  const digest = sha256(canonicalize(snapshot))
  const payload: ProvenancePayload = {
    policyDigest: digest,
    snapshotAt: Date.now(),
    issuer: "Torvus Security (demo)",
  }
  const bytes = Buffer.from(JSON.stringify(payload))
  const sig = nacl.sign.detached(new Uint8Array(bytes), kp.secretKey)
  return {
    payload,
    signature: b64url(sig),
    pubkey: b64url(kp.publicKey),
  }
}

export function verifyProvenance(bundle: {
  payload: ProvenancePayload
  signature: string
  pubkey: string
  snapshot: any
}): boolean {
  const msg = Buffer.from(JSON.stringify(bundle.payload))
  const sig = fromB64url(bundle.signature)
  const pk = fromB64url(bundle.pubkey)
  const valid = nacl.sign.detached.verify(new Uint8Array(msg), sig, pk)
  if (!valid) return false
  const expected = sha256(canonicalize(bundle.snapshot))
  return expected === bundle.payload.policyDigest
}
