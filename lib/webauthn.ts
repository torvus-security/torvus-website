import type {
  GenerateRegistrationOptionsOpts,
  VerifyRegistrationResponseOpts,
  GenerateAuthenticationOptionsOpts,
  VerifyAuthenticationResponseOpts,
  RegistrationResponseJSON,
  AuthenticationResponseJSON,
} from "@simplewebauthn/server"
import {
  generateRegistrationOptions,
  verifyRegistrationResponse,
  generateAuthenticationOptions,
  verifyAuthenticationResponse,
} from "@simplewebauthn/server"

type Credential = { id: string; publicKey: string; counter: number }
const users = new Map<string, { credentials: Credential[] }>()
const challenges = new Map<string, string>()

export function getUser(email: string) {
  if (!users.has(email)) users.set(email, { credentials: [] })
  return users.get(email)!
}

export async function startRegistration(email: string) {
  const opts: GenerateRegistrationOptionsOpts = {
    rpName: "Torvus Security",
    rpID: process.env.RP_ID!,
    userID: email,
    userName: email,
    attestationType: "none",
    authenticatorSelection: { residentKey: "preferred", userVerification: "preferred" },
  }
  const options = await generateRegistrationOptions(opts)
  challenges.set(email, options.challenge)
  return options
}

export async function finishRegistration(email: string, response: RegistrationResponseJSON) {
  const expectedChallenge = challenges.get(email)
  const verification = await verifyRegistrationResponse({
    response,
    expectedChallenge,
    expectedOrigin: process.env.WEB_ORIGIN!,
    expectedRPID: process.env.RP_ID!,
    requireUserVerification: false,
  } as VerifyRegistrationResponseOpts)
  if (verification.verified && verification.registrationInfo) {
    const { credentialID, credentialPublicKey, counter } = verification.registrationInfo
    const u = getUser(email)
    u.credentials.push({
      id: Buffer.from(credentialID).toString("base64url"),
      publicKey: Buffer.from(credentialPublicKey).toString("base64url"),
      counter,
    })
  }
  return verification.verified
}

export async function startAuth(email: string) {
  const u = getUser(email)
  const opts: GenerateAuthenticationOptionsOpts = {
    rpID: process.env.RP_ID!,
    userVerification: "preferred",
    allowCredentials: u.credentials.map((c) => ({ id: Buffer.from(c.id, "base64url"), type: "public-key" })),
  }
  const options = await generateAuthenticationOptions(opts)
  challenges.set(email, options.challenge)
  return options
}

export async function finishAuth(email: string, response: AuthenticationResponseJSON) {
  const u = getUser(email)
  const cred = u.credentials.find((c) => c.id === response.rawId)
  const verification = await verifyAuthenticationResponse({
    response,
    expectedChallenge: challenges.get(email),
    expectedOrigin: process.env.WEB_ORIGIN!,
    expectedRPID: process.env.RP_ID!,
    requireUserVerification: false,
    authenticator: cred
      ? {
          credentialPublicKey: Buffer.from(cred.publicKey, "base64url"),
          credentialID: Buffer.from(cred.id, "base64url"),
          counter: cred.counter,
          transports: (response as any).response?.transports as any,
        }
      : undefined,
  } as VerifyAuthenticationResponseOpts)
  return verification.verified
}
