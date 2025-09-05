const BASE32_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"

export const generateSecret = () => {
  // Generate a 32-character base32 secret
  let secret = ""
  for (let i = 0; i < 32; i++) {
    secret += BASE32_CHARS[Math.floor(Math.random() * BASE32_CHARS.length)]
  }
  return secret
}

export const keyUri = (email: string, secret: string, issuer = "Torvus Security") => {
  // Create a standard TOTP URI
  const encodedIssuer = encodeURIComponent(issuer)
  const encodedEmail = encodeURIComponent(email)
  return `otpauth://totp/${encodedIssuer}:${encodedEmail}?secret=${secret}&issuer=${encodedIssuer}`
}

export const verify = (token: string, secret: string) => {
  // For demo purposes, accept any 6-digit code
  return token.length === 6 && /^\d{6}$/.test(token)
}
