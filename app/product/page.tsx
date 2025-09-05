import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Product",
  description: "Complete digital guardianship with encrypted vaults, conditional release, and verifiable delivery.",
}

const features = [
  {
    icon: "🛡️",
    title: "Encrypted vault",
    description:
      "Client-side encryption with metadata minimization. Your files are protected with per-user keys and HSM-backed key management.",
  },
  {
    icon: "⏰",
    title: "Check-ins & reminders",
    description:
      "Flexible check-in schedules via email, SMS, or authenticator apps. Configure grace periods and escalation rules.",
  },
  {
    icon: "👥",
    title: "Rules engine",
    description:
      "Define complex release conditions: inactivity intervals, multi-recipient routing, and fail-safe mechanisms.",
  },
  {
    icon: "🔑",
    title: "Recipient verification",
    description:
      "Multiple verification methods: KYC options, passphrases, notarized identity documents, and custom verification flows.",
  },
  {
    icon: "📧",
    title: "Release channels",
    description:
      "Secure delivery via email, encrypted links, SFTP, webhooks, or physical courier services for maximum flexibility.",
  },
  {
    icon: "📋",
    title: "Audit & attestations",
    description:
      "Immutable, time-stamped audit logs with tamper-evident records for complete chain-of-custody documentation.",
  },
]

export default function ProductPage() {
  return (
    <main className="min-h-screen container-page">
      {/* Hero */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="space-y-6 mb-16">
            <h1 className="h1 ink2 ink2--lapis-lagoon ink-shadow">Beyond cloud storage. Beyond wills. Beyond email.</h1>
            <div className="prose stack-lg">
              <p className="body">
                Current solutions fail when you need them most. Torvus Security provides conditional release with
                verifiable delivery and zero-knowledge architecture.
              </p>
            </div>
          </div>

          <div className="space-y-8 mb-16">
            <h2 className="h2">The problem with current alternatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="h3">Cloud drives</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose stack-lg">
                    <p className="body">
                      No conditional access. Files remain locked forever or accessible to anyone with credentials.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="h3">Traditional wills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose stack-lg">
                    <p className="body">Slow probate process. No digital assets. Limited to death-only triggers.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="h3">Email scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose stack-lg">
                    <p className="body">No verification. No encryption. No audit trail. Unreliable delivery.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="space-y-4 mb-16">
            <h2 className="h2">Complete digital guardianship</h2>
            <div className="prose stack-lg">
              <p className="body max-w-2xl mx-auto">
                Every feature designed for security, reliability, and user control
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <CardTitle className="h3">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="body">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dry Run CTA */}
      <section className="py-24">
        <div className="container max-w-2xl">
          <div className="space-y-6">
            <h2 className="h2">Test before you trust</h2>
            <p className="body">
              Run a complete dry-run simulation to see exactly how your release plan works—without sending any real
              data.
            </p>
            <Button size="lg" className="btn btn-primary">
              Try a demo simulation
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
