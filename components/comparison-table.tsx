import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./animated-section"
import { Check, X, AlertTriangle } from "lucide-react"

const comparisonData = [
  {
    feature: "Conditional Release",
    torvus: { status: "full", description: "Automated conditional triggers" },
    lawyers: { status: "partial", description: "Manual process, requires availability" },
    passwordManagers: { status: "none", description: "No conditional release features" },
    cloudStorage: { status: "none", description: "No conditional access controls" },
  },
  {
    feature: "Zero-Knowledge Encryption",
    torvus: { status: "full", description: "Client-side encryption, we can't access data" },
    lawyers: { status: "none", description: "Physical documents, no encryption" },
    passwordManagers: { status: "partial", description: "Encrypted but provider has access" },
    cloudStorage: { status: "partial", description: "Encrypted in transit and at rest" },
  },
  {
    feature: "Audit Trail",
    torvus: { status: "full", description: "Immutable blockchain-based logging" },
    lawyers: { status: "partial", description: "Paper trail, manual documentation" },
    passwordManagers: { status: "partial", description: "Basic access logs" },
    cloudStorage: { status: "partial", description: "Access logs available" },
  },
  {
    feature: "Recipient Verification",
    torvus: { status: "full", description: "Multi-factor identity verification" },
    lawyers: { status: "full", description: "In-person verification" },
    passwordManagers: { status: "none", description: "No recipient verification" },
    cloudStorage: { status: "none", description: "Basic sharing permissions" },
  },
  {
    feature: "Cost Efficiency",
    torvus: { status: "full", description: "Automated, scalable pricing" },
    lawyers: { status: "partial", description: "High hourly rates, ongoing costs" },
    passwordManagers: { status: "full", description: "Low monthly subscription" },
    cloudStorage: { status: "full", description: "Low storage costs" },
  },
  {
    feature: "Legal Compliance",
    torvus: { status: "full", description: "Built for regulatory compliance" },
    lawyers: { status: "full", description: "Professional legal standards" },
    passwordManagers: { status: "partial", description: "Basic compliance features" },
    cloudStorage: { status: "partial", description: "Enterprise compliance options" },
  },
]

const statusIcons = {
  full: <Check className="w-4 h-4 text-accent" />,
  partial: <AlertTriangle className="w-4 h-4 text-amber-500" />,
  none: <X className="w-4 h-4 text-muted-foreground" />,
}

const statusColors = {
  full: "bg-accent/10 text-accent",
  partial: "bg-amber-500/10 text-amber-600",
  none: "bg-muted text-muted-foreground",
}

export function ComparisonTable() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container-narrow">
          <AnimatedSection className="text-left space-y-3 mb-8" delay={0.1}>
            <h2 className="h2">How Torvus Compares</h2>
            <p className="small max-w-2xl">Quick view of what's included, and at what depth.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Feature Comparison</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full table--compact text-sm">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-center p-4 font-semibold bg-primary/5">
                          <div className="flex flex-col items-center space-y-1">
                            <span>Torvus Security</span>
                            <Badge className="text-xs">Recommended</Badge>
                          </div>
                        </th>
                        <th className="text-center p-4 font-semibold">Traditional Lawyers</th>
                        <th className="text-center p-4 font-semibold">Password Managers</th>
                        <th className="text-center p-4 font-semibold">Cloud Storage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium">{row.feature}</td>
                          <td className="p-4 bg-primary/5">
                            <div className="flex flex-col items-center space-y-2">
                              <div className="flex items-center space-x-2">
                                {statusIcons[row.torvus.status]}
                                <Badge className={statusColors[row.torvus.status]} variant="secondary">
                                  {row.torvus.status === "full"
                                    ? "Full Support"
                                    : row.torvus.status === "partial"
                                      ? "Partial"
                                      : "Not Available"}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground text-center">{row.torvus.description}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex flex-col items-center space-y-2">
                              <div className="flex items-center space-x-2">
                                {statusIcons[row.lawyers.status]}
                                <Badge className={statusColors[row.lawyers.status]} variant="secondary">
                                  {row.lawyers.status === "full"
                                    ? "Full Support"
                                    : row.lawyers.status === "partial"
                                      ? "Partial"
                                      : "Not Available"}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground text-center">{row.lawyers.description}</p>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex flex-col items-center space-y-2">
                              <div className="flex items-center space-x-2">
                                {statusIcons[row.passwordManagers.status]}
                                <Badge className={statusColors[row.passwordManagers.status]} variant="secondary">
                                  {row.passwordManagers.status === "full"
                                    ? "Full Support"
                                    : row.passwordManagers.status === "partial"
                                      ? "Partial"
                                      : "Not Available"}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground text-center">
                                {row.passwordManagers.description}
                              </p>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex flex-col items-center space-y-2">
                              <div className="flex items-center space-x-2">
                                {statusIcons[row.cloudStorage.status]}
                                <Badge className={statusColors[row.cloudStorage.status]} variant="secondary">
                                  {row.cloudStorage.status === "full"
                                    ? "Full Support"
                                    : row.cloudStorage.status === "partial"
                                      ? "Partial"
                                      : "Not Available"}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground text-center">
                                {row.cloudStorage.description}
                              </p>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </AnimatedSection>
  )
}
