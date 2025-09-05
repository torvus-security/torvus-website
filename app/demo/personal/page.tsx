"use client"

import { useState, useEffect } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { EnhancedButton } from "@/components/enhanced-button"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Skeleton, CardSkeleton } from "@/components/skeleton"
import {
  Shield,
  FileText,
  Users,
  Clock,
  Activity,
  Search,
  Filter,
  Download,
  Eye,
  Settings,
  Bell,
  Lock,
} from "lucide-react"

export default function PersonalDemoPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingSection, setLoadingSection] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSectionLoad = (section: string) => {
    setLoadingSection(section)
    setTimeout(() => {
      setLoadingSection(null)
    }, 1500)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card/30 to-primary/5">
        <LoadingSpinner variant="branded" size="lg" text="Loading Personal Demo..." />
      </div>
    )
  }

  return (
    <main className="container-page section">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24">
          <div className="max-w-7xl">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h1 className="h1">Personal Account Demo</h1>
              <p className="body max-w-2xl mx-auto">
                Explore how individuals and families use Torvus to manage their digital legacy, secure important
                documents, and ensure loved ones have access when needed.
              </p>
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
                <h2 className="h2">Dashboard Overview</h2>
              </div>

              {loadingSection === "dashboard" ? (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                  </div>
                  <div className="flex gap-3">
                    <Skeleton width={150} height={40} />
                    <Skeleton width={120} height={40} />
                    <Skeleton width={140} height={40} />
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="h3 font-semibold text-primary">Active Plans</h3>
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">3</div>
                      <p className="small text-muted-foreground">Release plans configured</p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="h3 font-semibold text-blue-700">Next Check-in</h3>
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-3xl font-bold text-blue-700 mb-2">2d</div>
                      <p className="small text-blue-600">Email verification due</p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="h3 font-semibold text-green-700">Recipients</h3>
                        <Users className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="text-3xl font-bold text-green-700 mb-2">5</div>
                      <p className="small text-green-600">Verified contacts</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <EnhancedButton className="flex items-center gap-2" onClick={() => handleSectionLoad("dashboard")}>
                      <FileText className="w-4 h-4" />
                      Create Release Plan
                    </EnhancedButton>
                    <EnhancedButton variant="outline" className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Add Recipient
                    </EnhancedButton>
                    <EnhancedButton variant="outline" className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Upload to Vault
                    </EnhancedButton>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Vault Interface */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-7xl">
            <div className="bg-card border rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <Lock className="w-8 h-8 text-primary" />
                <h2 className="h2">Secure Vault</h2>
              </div>

              {loadingSection === "vault" ? (
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Skeleton height={40} className="flex-1" />
                    <Skeleton width={80} height={40} />
                    <Skeleton width={100} height={40} />
                  </div>
                  <div className="space-y-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Skeleton key={i} height={60} />
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input type="text" placeholder="Search files..." className="field w-full pl-10" />
                    </div>
                    <EnhancedButton variant="outline" className="flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Filter
                    </EnhancedButton>
                    <EnhancedButton className="flex items-center gap-2" onClick={() => handleSectionLoad("vault")}>
                      <Download className="w-4 h-4" />
                      Upload
                    </EnhancedButton>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "Last_Will_Testament.pdf", size: "2.4 MB", type: "Legal", date: "2024-01-15" },
                      { name: "Insurance_Policies.pdf", size: "1.8 MB", type: "Financial", date: "2024-01-12" },
                      { name: "Property_Deeds.pdf", size: "3.2 MB", type: "Legal", date: "2024-01-10" },
                      { name: "Family_Photos.zip", size: "45.6 MB", type: "Personal", date: "2024-01-08" },
                    ].map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <FileText className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{file.name}</div>
                            <div className="small text-muted-foreground">
                              {file.size} • {file.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">{file.type}</span>
                          <EnhancedButton variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </EnhancedButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Release Plans */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-7xl">
            <div className="bg-card border rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <Settings className="w-8 h-8 text-primary" />
                <h2 className="h2">Release Plans</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Family Emergency Plan",
                    status: "Active",
                    trigger: "7 days missed check-ins",
                    recipients: 3,
                    files: 5,
                  },
                  {
                    name: "Business Continuity",
                    status: "Active",
                    trigger: "14 days missed check-ins",
                    recipients: 2,
                    files: 8,
                  },
                  {
                    name: "Personal Archive",
                    status: "Draft",
                    trigger: "30 days missed check-ins",
                    recipients: 1,
                    files: 12,
                  },
                ].map((plan, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:bg-muted/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="h3 font-semibold">{plan.name}</h3>
                        <p className="body text-muted-foreground">{plan.trigger}</p>
                      </div>
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          plan.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {plan.status}
                      </span>
                    </div>
                    <div className="flex gap-6 small text-muted-foreground">
                      <span>{plan.recipients} recipients</span>
                      <span>{plan.files} files</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Check-ins & Activity */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Check-ins */}
              <div className="bg-card border rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Bell className="w-6 h-6 text-primary" />
                  <h3 className="h3">Check-ins</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div>
                      <div className="font-medium text-green-800">Weekly Email</div>
                      <div className="small text-green-600">Last: 2 days ago</div>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div>
                      <div className="font-medium text-blue-800">Monthly SMS</div>
                      <div className="small text-blue-600">Next: 5 days</div>
                    </div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-card border rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-6 h-6 text-primary" />
                  <h3 className="h3">Recent Activity</h3>
                </div>

                <div className="space-y-3">
                  {[
                    { action: "File uploaded", item: "Insurance_Policies.pdf", time: "2 hours ago" },
                    { action: "Check-in completed", item: "Weekly verification", time: "2 days ago" },
                    { action: "Recipient verified", item: "john@example.com", time: "3 days ago" },
                    { action: "Plan updated", item: "Family Emergency Plan", time: "1 week ago" },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 hover:bg-muted/30 rounded-lg transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <div className="small font-medium">{activity.action}</div>
                        <div className="text-xs text-muted-foreground">{activity.item}</div>
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
              <h2 className="h2">Ready to secure your digital legacy?</h2>
              <p className="body">
                Join the early access program and be among the first to experience enterprise-grade digital
                guardianship.
              </p>
              <EnhancedButton size="lg" className="text-lg px-8 py-4">
                <a href="/#early-access">Get Early Access</a>
              </EnhancedButton>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  )
}
