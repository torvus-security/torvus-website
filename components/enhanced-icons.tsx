import { Shield, Lock, Users, Clock, FileText, CheckCircle, Fingerprint, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

// Enhanced icon components with consistent sizing and styling
export const SecurityIcon = ({ className }: { className?: string }) => (
  <Shield className={cn("w-6 h-6 text-primary", className)} />
)

export const EncryptionIcon = ({ className }: { className?: string }) => (
  <Lock className={cn("w-6 h-6 text-primary", className)} />
)

export const UsersIcon = ({ className }: { className?: string }) => (
  <Users className={cn("w-6 h-6 text-primary", className)} />
)

export const TimeIcon = ({ className }: { className?: string }) => (
  <Clock className={cn("w-6 h-6 text-primary", className)} />
)

export const DocumentIcon = ({ className }: { className?: string }) => (
  <FileText className={cn("w-6 h-6 text-primary", className)} />
)

export const VerifiedIcon = ({ className }: { className?: string }) => (
  <CheckCircle className={cn("w-6 h-6 text-accent", className)} />
)

export const ComplianceIcon = ({ className }: { className?: string }) => (
  <ShieldCheck className={cn("w-6 h-6 text-accent", className)} />
)

export const BiometricIcon = ({ className }: { className?: string }) => (
  <Fingerprint className={cn("w-6 h-6 text-primary", className)} />
)
