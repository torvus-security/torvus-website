"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AppLayout } from "@/components/app-layout"
import { AuthGuard } from "@/components/auth-guard"
import { mockAuditLogs, formatDateTime, type MockAuditLog } from "@/lib/mock-data"
import { Download, Search, Activity, User, Globe, Monitor } from "lucide-react"

const eventTypes = [
  "All Events",
  "Check-in completed",
  "File uploaded",
  "Recipient verified",
  "Release plan created",
  "Dry-run executed",
]

const actorTypes = ["All Actors", "user@example.com", "system"]

export default function AuditPage() {
  const [logs, setLogs] = useState<MockAuditLog[]>(mockAuditLogs)
  const [searchTerm, setSearchTerm] = useState("")
  const [eventFilter, setEventFilter] = useState("All Events")
  const [actorFilter, setActorFilter] = useState("All Actors")
  const [dateRange, setDateRange] = useState("7")

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.actor.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesEvent = eventFilter === "All Events" || log.event === eventFilter
    const matchesActor = actorFilter === "All Actors" || log.actor === actorFilter

    const daysAgo = Number.parseInt(dateRange)
    const cutoffDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000)
    const matchesDate = log.timestamp >= cutoffDate

    return matchesSearch && matchesEvent && matchesActor && matchesDate
  })

  const exportLogs = () => {
    const csvContent = [
      ["Timestamp", "Actor", "Event", "Resource", "IP Address", "Device", "Details"].join(","),
      ...filteredLogs.map((log) =>
        [
          formatDateTime(log.timestamp),
          log.actor,
          log.event,
          log.resource,
          log.ipAddress,
          log.device,
          log.details || "",
        ]
          .map((field) => `"${field}"`)
          .join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `torvus-audit-logs-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const getEventIcon = (event: string) => {
    if (event.includes("Check-in")) return Activity
    if (event.includes("File")) return Monitor
    if (event.includes("Recipient")) return User
    return Globe
  }

  const getEventColor = (event: string) => {
    if (event.includes("completed") || event.includes("verified")) return "bg-green-500/10 text-green-500"
    if (event.includes("created") || event.includes("uploaded")) return "bg-blue-500/10 text-blue-500"
    if (event.includes("Dry-run")) return "bg-amber-500/10 text-amber-500"
    return "bg-gray-500/10 text-gray-500"
  }

  return (
    <AuthGuard>
      <AppLayout>
        <main className="container-page">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="prose stack-lg">
                <h1 className="text-3xl font-bold h1">Audit Log</h1>
                <p className="text-muted-foreground mt-2 body">Complete activity history and security events</p>
              </div>
              <Button onClick={exportLogs}>
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>

            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search events..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <Select value={eventFilter} onValueChange={setEventFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={actorFilter} onValueChange={setActorFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Actor" />
                    </SelectTrigger>
                    <SelectContent>
                      {actorTypes.map((actor) => (
                        <SelectItem key={actor} value={actor}>
                          {actor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={dateRange} onValueChange={setDateRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Last 24 hours</SelectItem>
                      <SelectItem value="7">Last 7 days</SelectItem>
                      <SelectItem value="30">Last 30 days</SelectItem>
                      <SelectItem value="90">Last 90 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Audit Logs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 h2">
                  <Activity className="h-5 w-5" />
                  <span>Activity Log ({filteredLogs.length} events)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {filteredLogs.length === 0 ? (
                  <div className="text-center py-8 prose stack-lg">
                    <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2 h3">No events found</h3>
                    <p className="text-muted-foreground body">Try adjusting your filters to see more results.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredLogs.map((log) => {
                      const EventIcon = getEventIcon(log.event)
                      return (
                        <div
                          key={log.id}
                          className="flex items-start space-x-4 p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                        >
                          <div className="w-10 h-10 bg-muted/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <EventIcon className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge className={getEventColor(log.event)}>{log.event}</Badge>
                              <span className="text-sm text-muted-foreground small">
                                {formatDateTime(log.timestamp)}
                              </span>
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-4 text-sm small">
                                <span className="flex items-center space-x-1">
                                  <User className="h-3 w-3" />
                                  <span className="font-medium">{log.actor}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                  <Monitor className="h-3 w-3" />
                                  <span>{log.resource}</span>
                                </span>
                              </div>
                              <div className="flex items-center space-x-4 text-xs text-muted-foreground small">
                                <span className="flex items-center space-x-1">
                                  <Globe className="h-3 w-3" />
                                  <span>{log.ipAddress}</span>
                                </span>
                                <span>{log.device}</span>
                              </div>
                              {log.details && <p className="text-sm text-muted-foreground mt-2 body">{log.details}</p>}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </AppLayout>
    </AuthGuard>
  )
}
