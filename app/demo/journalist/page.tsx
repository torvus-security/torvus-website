"use client"

import { AnimatedSection } from "@/components/animated-section"
import { EnhancedButton } from "@/components/enhanced-button"
import {
  Shield,
  FileText,
  Search,
  Filter,
  Download,
  Eye,
  Lock,
  AlertTriangle,
  Globe,
  UserX,
  Link,
  Zap,
  Trash2,
} from "lucide-react"

export default function JournalistDemoPage() {
  return (
    <main className="container-page section">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24">
          <div className="max-w-7xl">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Journalist Security Demo</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore how investigative journalists working in high-risk environments use Torvus to protect sensitive
                sources, secure classified documents, and maintain operational security.
              </p>
              <div className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm max-w-md mx-auto">
                <AlertTriangle className="w-4 h-4" />
                High-Security Environment Active
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Dashboard Overview */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-7xl">
            <div className="bg-card border rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Security Dashboard</h2>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-red-700">Threat Level</h3>
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-red-700 mb-2">HIGH</div>
                  <p className="text-sm text-red-600">Location: Overseas</p>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-primary">Active Sources</h3>
                    <UserX className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <p className="text-sm text-muted-foreground">Anonymous contacts</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-blue-700">Secure Links</h3>
                    <Link className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-700 mb-2">12</div>
                  <p className="text-sm text-blue-600">Active upload portals</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-green-700">Stories</h3>
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-700 mb-2">4</div>
                  <p className="text-sm text-green-600">Active investigations</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <EnhancedButton className="flex items-center gap-2">
                  <Link className="w-4 h-4" />
                  Create Secure Link
                </EnhancedButton>
                <EnhancedButton variant="outline" className="flex items-center gap-2">
                  <UserX className="w-4 h-4" />
                  Add Anonymous Source
                </EnhancedButton>
                <EnhancedButton
                  variant="outline"
                  className="flex items-center gap-2 text-red-600 border-red-200 hover:bg-red-50"
                >
                  <Zap className="w-4 h-4" />
                  Emergency Protocol
                </EnhancedButton>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Source Protection Vault */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-7xl">
            <div className="bg-card border rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <Lock className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Source Protection Vault</h2>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by story, not source identity..."
                    className="field w-full pl-10"
                  />
                </div>
                <EnhancedButton variant="outline" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filter by Story
                </EnhancedButton>
                <EnhancedButton className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Secure Upload
                </EnhancedButton>
              </div>

              <div className="space-y-3">
                {[
                  {
                    name: "Source_Alpha_Documents.enc",
                    size: "15.2 MB",
                    type: "Corruption Investigation",
                    date: "2024-01-15",
                    risk: "Critical",
                  },
                  {
                    name: "Whistleblower_Beta_Audio.enc",
                    size: "8.7 MB",
                    type: "Corporate Fraud",
                    date: "2024-01-12",
                    risk: "High",
                  },
                  {
                    name: "Government_Leak_Gamma.enc",
                    size: "3.4 MB",
                    type: "Political Scandal",
                    date: "2024-01-10",
                    risk: "Critical",
                  },
                  {
                    name: "Financial_Records_Delta.enc",
                    size: "22.1 MB",
                    type: "Money Laundering",
                    date: "2024-01-08",
                    risk: "Medium",
                  },
                ].map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{file.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {file.size} • {file.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">{file.type}</span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          file.risk === "Critical"
                            ? "bg-red-100 text-red-700"
                            : file.risk === "High"
                              ? "bg-orange-100 text-orange-700"
                              : "surface--warning text-yellow-700"
                        }`}
                      >
                        {file.risk}
                      </span>
                      <EnhancedButton variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </EnhancedButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Secure Link Management */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-7xl">
            <div className="bg-card border rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <Link className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Secure Upload Portals</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Corruption Investigation Portal",
                    status: "Active",
                    expires: "7 days",
                    uploads: 3,
                    url: "https://secure.torvus.app/upload/a7b9c2d1",
                    risk: "Critical",
                  },
                  {
                    name: "Corporate Fraud Whistleblower",
                    status: "Active",
                    expires: "14 days",
                    uploads: 1,
                    url: "https://secure.torvus.app/upload/x3y8z5w2",
                    risk: "High",
                  },
                  {
                    name: "Political Source Portal",
                    status: "Expired",
                    expires: "Expired 2 days ago",
                    uploads: 5,
                    url: "https://secure.torvus.app/upload/m9n4p7q1",
                    risk: "Critical",
                  },
                ].map((portal, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:bg-muted/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{portal.name}</h3>
                        <p className="text-muted-foreground text-sm font-mono">{portal.url}</p>
                      </div>
                      <div className="flex gap-2">
                        <span
                          className={`px-3 py-1 text-sm rounded-full ${
                            portal.risk === "Critical" ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {portal.risk}
                        </span>
                        <span
                          className={`px-3 py-1 text-sm rounded-full ${
                            portal.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {portal.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                      <span>{portal.uploads} uploads received</span>
                      <span>Expires: {portal.expires}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Emergency Protocols & Security */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Emergency Protocols */}
              <div className="bg-card border rounded-2xl p-8 elev-1 elev-transition">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-red-600" />
                  <h3 className="h4">Emergency Protocols</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div>
                      <div className="font-medium text-red-800">Dead Man's Switch</div>
                      <div className="text-sm text-red-600">24h check-in required</div>
                    </div>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <div>
                      <div className="font-medium text-orange-800">Data Destruction</div>
                      <div className="text-sm text-orange-600">Triggered if compromised</div>
                    </div>
                    <EnhancedButton variant="ghost" size="sm" className="text-orange-600">
                      <Trash2 className="w-4 h-4" />
                    </EnhancedButton>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div>
                      <div className="font-medium text-blue-800">Source Protection</div>
                      <div className="text-sm text-blue-600">Auto-anonymization active</div>
                    </div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Threat Monitoring */}
              <div className="bg-card border rounded-2xl p-8 elev-1 elev-transition">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="h4">Threat Monitoring</h3>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      threat: "VPN connection verified",
                      location: "Secure tunnel active",
                      time: "2 min ago",
                      level: "Safe",
                    },
                    {
                      threat: "Unusual login attempt blocked",
                      location: "Unknown IP: 192.168.1.1",
                      time: "1 hour ago",
                      level: "Warning",
                    },
                    {
                      threat: "Source portal accessed",
                      location: "Tor network",
                      time: "3 hours ago",
                      level: "Normal",
                    },
                    {
                      threat: "Emergency contact triggered",
                      location: "Legal team notified",
                      time: "6 hours ago",
                      level: "Critical",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 hover:bg-muted/30 rounded-lg transition-colors"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activity.level === "Critical"
                            ? "bg-red-500"
                            : activity.level === "Warning"
                              ? "bg-orange-500"
                              : activity.level === "Safe"
                                ? "bg-green-500"
                                : "bg-blue-500"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{activity.threat}</div>
                        <div className="text-xs text-muted-foreground">{activity.location}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-7xl">
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Protect your sources. Secure your stories.</h2>
              <p className="text-xl text-muted-foreground">
                Join investigative journalists worldwide who trust Torvus for maximum security in high-risk
                environments.
              </p>
              <EnhancedButton size="lg" className="text-lg px-8 py-4">
                <a href="/#early-access">Request Journalist Access</a>
              </EnhancedButton>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
