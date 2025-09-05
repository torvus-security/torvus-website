import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { Shield, Eye, FileText, Users, Server, Lock } from "lucide-react"

const transparencyReports = [
  {
    period: "Q4 2023",
    date: "January 15, 2024",
    highlights: {
      dataRequests: 0,
      securityIncidents: 0,
      uptime: "99.99%",
      usersProtected: "10,000+",
    },
  },
  {
    period: "Q3 2023",
    date: "October 15, 2023",
    highlights: {
      dataRequests: 0,
      securityIncidents: 0,
      uptime: "99.98%",
      usersProtected: "8,500+",
    },
  },
]

const securityPractices = [
  {
    icon: Lock,
    title: "Zero-Knowledge Architecture",
    description:
      "We cannot access your data even if we wanted to. All encryption happens client-side with keys only you control.",
  },
  {
    icon: Shield,
    title: "SOC 2 Type II Compliance",
    description: "Independently audited security controls and procedures to protect customer data and privacy.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Multi-region deployment with encrypted data at rest and in transit, regular security assessments.",
  },
  {
    icon: Eye,
    title: "Regular Security Audits",
    description: "Quarterly penetration testing and annual security reviews by independent third-party firms.",
  },
  {
    icon: Users,
    title: "Employee Access Controls",
    description: "Strict access controls, background checks, and security training for all team members.",
  },
  {
    icon: FileText,
    title: "Incident Response Plan",
    description: "Comprehensive incident response procedures with 24/7 monitoring and rapid response capabilities.",
  },
]

export default function TransparencyPage() {
  return (
    <main className="container-page section">
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-b from-background to-muted/10">
          <div className="max-w-7xl">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight h1 ink2 ink2--cranberry-lagoon ink-shadow">
                Transparency Reports
              </h1>
              <div className="prose stack-lg">
                <p className="text-xl text-muted-foreground body">
                  Complete transparency about our security practices, data handling, and operational metrics.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-7xl space-y-16">
            {/* Latest Report */}
            <div>
              <h2 className="text-3xl font-bold mb-8 h2">Latest Transparency Report</h2>
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl h3">Q4 2023 Transparency Report</CardTitle>
                    <Badge className="bg-green-500/10 text-green-500">Latest</Badge>
                  </div>
                  <p className="text-muted-foreground small">Published January 15, 2024</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-muted/20 rounded-lg">
                      <div className="h4 text-primary mb-2">0</div>
                      <div className="text-sm text-muted-foreground small">Government Data Requests</div>
                    </div>
                    <div className="text-center p-4 bg-muted/20 rounded-lg">
                      <div className="h4 text-primary mb-2">0</div>
                      <div className="text-sm text-muted-foreground small">Security Incidents</div>
                    </div>
                    <div className="text-center p-4 bg-muted/20 rounded-lg">
                      <div className="h4 text-primary mb-2">99.99%</div>
                      <div className="text-sm text-muted-foreground small">System Uptime</div>
                    </div>
                    <div className="text-center p-4 bg-muted/20 rounded-lg">
                      <div className="h4 text-primary mb-2">10,000+</div>
                      <div className="text-sm text-muted-foreground small">Users Protected</div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2 h3">Zero Data Requests</h4>
                    <div className="prose stack-lg">
                      <p className="text-sm text-muted-foreground body">
                        We received zero government or law enforcement requests for user data in Q4 2023. Our
                        zero-knowledge architecture ensures we cannot access user data even if compelled.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Historical Reports */}
            <div>
              <h2 className="text-3xl font-bold mb-8 h2">Historical Reports</h2>
              <div className="space-y-4">
                {transparencyReports.slice(1).map((report) => (
                  <Card key={report.period}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold h3">{report.period} Transparency Report</h3>
                        <span className="text-sm text-muted-foreground small">{report.date}</span>
                      </div>
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="h4 text-primary">{report.highlights.dataRequests}</div>
                          <div className="text-xs text-muted-foreground small">Data Requests</div>
                        </div>
                        <div className="text-center">
                          <div className="h4 text-primary">{report.highlights.securityIncidents}</div>
                          <div className="text-xs text-muted-foreground small">Security Incidents</div>
                        </div>
                        <div className="text-center">
                          <div className="h4 text-primary">{report.highlights.uptime}</div>
                          <div className="text-xs text-muted-foreground small">Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="h4 text-primary">{report.highlights.usersProtected}</div>
                          <div className="text-xs text-muted-foreground small">Users Protected</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Security Practices */}
            <div>
              <h2 className="text-3xl font-bold mb-8 h2">Our Security Practices</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityPractices.map((practice) => (
                  <Card key={practice.title} className="elev-1 elev-transition card-hover transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <practice.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg h3">{practice.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground body">{practice.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Data Handling Principles */}
            <div>
              <h2 className="text-3xl font-bold mb-8 h2">Data Handling Principles</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="prose stack-lg space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 h3">Zero-Knowledge by Design</h3>
                      <p className="text-muted-foreground body">
                        All data is encrypted client-side before it reaches our servers. We never have access to your
                        encryption keys or unencrypted data.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 h3">Minimal Data Collection</h3>
                      <p className="text-muted-foreground body">
                        We collect only the minimum data necessary to provide our service: email addresses for account
                        management and encrypted file metadata.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 h3">No Third-Party Sharing</h3>
                      <p className="text-muted-foreground body">
                        We never sell, rent, or share your data with third parties. Your information stays with us and
                        is used solely to provide our service.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 h3">User Control</h3>
                      <p className="text-muted-foreground body">
                        You maintain complete control over your data. You can export or delete your account and all
                        associated data at any time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
