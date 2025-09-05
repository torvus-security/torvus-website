"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AppLayout } from "@/components/app-layout"
import { AuthGuard } from "@/components/auth-guard"
import { mockReleasePlans, mockFiles, mockRecipients, formatTimeUntil, type MockReleasePlan } from "@/lib/mock-data"
import { Plus, FileText, Users, Clock, Play, Pause, Settings, Eye, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const statusColors = {
  active: "bg-green-500/10 text-green-500",
  paused: "bg-yellow-500/10 text-yellow-500",
  draft: "surface--mist text-gray-500",
}

const deliveryChannelLabels = {
  email: "Email",
  "secure-link": "Secure Link",
  sftp: "SFTP",
  webhook: "Webhook",
}

export default function ReleasePlansPage() {
  const [plans, setPlans] = useState<MockReleasePlan[]>(mockReleasePlans)

  const togglePlanStatus = (id: string) => {
    setPlans(
      plans.map((plan) =>
        plan.id === id ? { ...plan, status: plan.status === "active" ? "paused" : ("active" as const) } : plan,
      ),
    )
  }

  const runDryRun = (plan: MockReleasePlan) => {
    const fileNames = plan.files.map((fileId) => mockFiles.find((f) => f.id === fileId)?.name).join(", ")
    const recipientNames = plan.recipients
      .map((recipientId) => mockRecipients.find((r) => r.id === recipientId)?.name)
      .join(", ")

    alert(
      `Dry-run simulation for "${plan.name}":\n\n` +
        `Files: ${fileNames}\n` +
        `Recipients: ${recipientNames}\n` +
        `Delivery: ${deliveryChannelLabels[plan.deliveryChannel]}\n\n` +
        `✓ Simulation completed successfully\n` +
        `✓ All recipients would receive notifications\n` +
        `✓ No actual data was sent`,
    )
  }

  return (
    <AuthGuard>
      <AppLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Release Plans</h1>
              <p className="text-muted-foreground mt-2">Manage conditional document release configurations</p>
            </div>
            <Link href="/app/release-plans/new">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Release Plan
              </Button>
            </Link>
          </div>

          {/* Plans List */}
          {plans.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No release plans</h3>
                <p className="text-muted-foreground mb-4">Create your first conditional release.</p>
                <Link href="/app/release-plans/new">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create your first plan
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {plans.map((plan) => (
                <Card key={plan.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold text-lg">{plan.name}</h3>
                          <Badge className={statusColors[plan.status]}>{plan.status}</Badge>
                          {plan.dryRun && <Badge variant="outline">Dry-run enabled</Badge>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {plan.files.length} file{plan.files.length !== 1 ? "s" : ""}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {plan.recipients.length} recipient{plan.recipients.length !== 1 ? "s" : ""}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {plan.status === "active" && plan.nextTriggerWindow
                                ? `Next trigger: ${formatTimeUntil(plan.nextTriggerWindow)}`
                                : plan.status === "paused"
                                  ? "Paused"
                                  : "Draft"}
                            </span>
                          </div>
                        </div>

                        <div className="text-sm text-muted-foreground">
                          <p>Delivery: {deliveryChannelLabels[plan.deliveryChannel]}</p>
                          <p className="mt-1 max-w-2xl">{plan.messageTemplate}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        {plan.dryRun && (
                          <Button variant="outline" size="sm" onClick={() => runDryRun(plan)}>
                            <Eye className="h-4 w-4 mr-1" />
                            Run Simulation
                          </Button>
                        )}

                        {plan.status !== "draft" && (
                          <Button variant="ghost" size="sm" onClick={() => togglePlanStatus(plan.id)}>
                            {plan.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          </Button>
                        )}

                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/app/release-plans/${plan.id}`}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Settings className="h-4 w-4 mr-2" />
                              Edit Plan
                            </DropdownMenuItem>
                            {plan.dryRun && (
                              <DropdownMenuItem onClick={() => runDryRun(plan)}>
                                <Play className="h-4 w-4 mr-2" />
                                Run Simulation
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="elev-1 elev-transition">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="h4 text-green-500">{plans.filter((p) => p.status === "active").length}</div>
                  <div className="text-sm text-muted-foreground">Active Plans</div>
                </div>
              </CardContent>
            </Card>
            <Card className="elev-1 elev-transition">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="h4 text-yellow-500">{plans.filter((p) => p.status === "paused").length}</div>
                  <div className="text-sm text-muted-foreground">Paused Plans</div>
                </div>
              </CardContent>
            </Card>
            <Card className="elev-1 elev-transition">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="h4 text-gray-500">{plans.filter((p) => p.status === "draft").length}</div>
                  <div className="text-sm text-muted-foreground">Draft Plans</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AppLayout>
    </AuthGuard>
  )
}
