export interface MockFile {
  id: string
  name: string
  size: number
  classification: "Personal" | "Legal" | "Financial" | "Medical" | "Other"
  lastModified: Date
  tags: string[]
  notes?: string
}

export interface MockStats {
  activePlans: number
  upcomingCheckIns: number
  pendingVerifications: number
}

export const mockFiles: MockFile[] = [
  {
    id: "1",
    name: "Last_Will_Testament.pdf",
    size: 2456789,
    classification: "Legal",
    lastModified: new Date("2024-01-15"),
    tags: ["will", "estate", "important"],
    notes: "Updated will with new beneficiaries",
  },
  {
    id: "2",
    name: "Insurance_Policy_Life.pdf",
    size: 1234567,
    classification: "Financial",
    lastModified: new Date("2024-01-10"),
    tags: ["insurance", "life", "policy"],
    notes: "Term life insurance policy details",
  },
  {
    id: "3",
    name: "Medical_Records_2024.pdf",
    size: 3456789,
    classification: "Medical",
    lastModified: new Date("2024-01-08"),
    tags: ["medical", "records", "health"],
  },
  {
    id: "4",
    name: "Property_Deed_House.pdf",
    size: 987654,
    classification: "Legal",
    lastModified: new Date("2024-01-05"),
    tags: ["property", "deed", "real-estate"],
    notes: "Main residence property deed",
  },
  {
    id: "5",
    name: "Bank_Account_Details.pdf",
    size: 567890,
    classification: "Financial",
    lastModified: new Date("2024-01-03"),
    tags: ["banking", "accounts", "financial"],
  },
]

export const mockStats: MockStats = {
  activePlans: 3,
  upcomingCheckIns: 2,
  pendingVerifications: 1,
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function formatTimeUntil(date: Date): string {
  const now = new Date()
  const diff = date.getTime() - now.getTime()

  if (diff < 0) {
    return "Overdue"
  }

  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(hours / 24)

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""}`
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}`
  } else {
    return "Less than 1 hour"
  }
}

export function formatDateTime(date: Date): string {
  return date.toLocaleString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export interface MockCheckIn {
  id: string
  name: string
  interval: "daily" | "weekly" | "monthly" | "custom"
  customDays?: number
  channels: ("email" | "sms" | "authenticator")[]
  gracePeriod: number // hours
  nextCheckIn: Date
  lastCheckIn?: Date
  status: "active" | "paused" | "overdue"
}

export interface MockRecipient {
  id: string
  name: string
  email: string
  relationship: string
  verificationMethod: "email-otp" | "id-document" | "notary" | "passphrase"
  status: "verified" | "pending" | "unverified"
  notes?: string
  addedDate: Date
  lastContact?: Date
}

export interface MockReleasePlan {
  id: string
  name: string
  status: "active" | "paused" | "draft"
  files: string[] // file IDs
  recipients: string[] // recipient IDs
  trigger: {
    type: "missed-checkin"
    checkInId: string
    gracePeriod: number // hours after missed check-in
  }
  deliveryChannel: "email" | "secure-link" | "sftp" | "webhook"
  messageTemplate: string
  createdDate: Date
  lastCheckIn?: Date
  nextTriggerWindow?: Date
  dryRun: boolean
}

export interface MockAuditLog {
  id: string
  timestamp: Date
  actor: string
  event: string
  resource: string
  ipAddress: string
  device: string
  details?: string
}

export const mockCheckIns: MockCheckIn[] = [
  {
    id: "1",
    name: "Daily Safety Check",
    interval: "daily",
    channels: ["email", "sms"],
    gracePeriod: 6,
    nextCheckIn: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 hours from now
    lastCheckIn: new Date(Date.now() - 20 * 60 * 60 * 1000), // 20 hours ago
    status: "active",
  },
  {
    id: "2",
    name: "Weekly Status Update",
    interval: "weekly",
    channels: ["email"],
    gracePeriod: 24,
    nextCheckIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    lastCheckIn: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
    status: "active",
  },
  {
    id: "3",
    name: "Monthly Review",
    interval: "monthly",
    channels: ["email", "authenticator"],
    gracePeriod: 72,
    nextCheckIn: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
    status: "paused",
  },
]

export const mockRecipients: MockRecipient[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    relationship: "Spouse",
    verificationMethod: "email-otp",
    status: "verified",
    notes: "Primary emergency contact",
    addedDate: new Date("2024-01-10"),
    lastContact: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@lawfirm.com",
    relationship: "Lawyer",
    verificationMethod: "id-document",
    status: "verified",
    notes: "Estate planning attorney - verified with bar association",
    addedDate: new Date("2024-01-08"),
    lastContact: new Date("2024-01-12"),
  },
  {
    id: "3",
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    relationship: "Sister",
    verificationMethod: "passphrase",
    status: "pending",
    notes: "Backup contact for family matters",
    addedDate: new Date("2024-01-14"),
  },
  {
    id: "4",
    name: "Dr. Robert Smith",
    email: "dr.smith@medical.com",
    relationship: "Doctor",
    verificationMethod: "notary",
    status: "unverified",
    notes: "Primary care physician",
    addedDate: new Date("2024-01-16"),
  },
]

export const mockReleasePlans: MockReleasePlan[] = [
  {
    id: "1",
    name: "Emergency Legal Documents",
    status: "active",
    files: ["1", "4"], // Will and Property Deed
    recipients: ["1", "2"], // Sarah and Michael
    trigger: {
      type: "missed-checkin",
      checkInId: "1",
      gracePeriod: 12,
    },
    deliveryChannel: "email",
    messageTemplate: "Important legal documents are being released as per your instructions.",
    createdDate: new Date("2024-01-12"),
    lastCheckIn: new Date(Date.now() - 20 * 60 * 60 * 1000),
    nextTriggerWindow: new Date(Date.now() + 4 * 60 * 60 * 1000),
    dryRun: false,
  },
  {
    id: "2",
    name: "Financial Information Package",
    status: "active",
    files: ["2", "5"], // Insurance and Bank Details
    recipients: ["1"],
    trigger: {
      type: "missed-checkin",
      checkInId: "2",
      gracePeriod: 48,
    },
    deliveryChannel: "secure-link",
    messageTemplate: "Your financial information package is now available for secure download.",
    createdDate: new Date("2024-01-10"),
    lastCheckIn: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    nextTriggerWindow: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    dryRun: false,
  },
  {
    id: "3",
    name: "Medical Records Release",
    status: "draft",
    files: ["3"],
    recipients: ["4"],
    trigger: {
      type: "missed-checkin",
      checkInId: "1",
      gracePeriod: 24,
    },
    deliveryChannel: "email",
    messageTemplate: "Medical records are being released to your healthcare provider.",
    createdDate: new Date("2024-01-16"),
    dryRun: true,
  },
]

export const mockAuditLogs: MockAuditLog[] = [
  {
    id: "1",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    actor: "user@example.com",
    event: "Check-in completed",
    resource: "Daily Safety Check",
    ipAddress: "203.123.45.67",
    device: "Chrome/MacOS",
    details: "Successful check-in via email",
  },
  {
    id: "2",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    actor: "system",
    event: "File uploaded",
    resource: "Last_Will_Testament.pdf",
    ipAddress: "203.123.45.67",
    device: "Chrome/MacOS",
    details: "2.4MB PDF document encrypted and stored",
  },
  {
    id: "3",
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    actor: "user@example.com",
    event: "Recipient verified",
    resource: "Sarah Johnson",
    ipAddress: "203.123.45.67",
    device: "Chrome/MacOS",
    details: "Email OTP verification completed",
  },
  {
    id: "4",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    actor: "user@example.com",
    event: "Release plan created",
    resource: "Emergency Legal Documents",
    ipAddress: "203.123.45.67",
    device: "Chrome/MacOS",
    details: "New release plan with 2 files and 2 recipients",
  },
  {
    id: "5",
    timestamp: new Date(Date.now() - 36 * 60 * 60 * 1000),
    actor: "system",
    event: "Dry-run executed",
    resource: "Medical Records Release",
    ipAddress: "system",
    device: "server",
    details: "Simulation completed successfully - no data sent",
  },
]
