"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AppLayout } from "@/components/app-layout"
import { AuthGuard } from "@/components/auth-guard"
import { mockCheckIns, formatTimeUntil, type MockCheckIn } from "@/lib/mock-data"
import { Plus, Clock, Mail, Smartphone, Shield, Play, Pause, Settings } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const createCheckInSchema = z.object({
  name: z.string().min(1, "Name is required"),
  interval: z.enum(["daily", "weekly", "monthly", "custom"]),
  customDays: z.number().min(1).max(365).optional(),
  channels: z.array(z.enum(["email", "sms", "authenticator"])).min(1, "At least one channel is required"),
  gracePeriod: z.number().min(1, "Grace period must be at least 1 hour").max(168, "Grace period cannot exceed 7 days"),
})

type CreateCheckInForm = z.infer<typeof createCheckInSchema>

const statusColors = {
  active: "bg-green-500/10 text-green-500",
  paused: "bg-yellow-500/10 text-yellow-500",
  overdue: "bg-red-500/10 text-red-500",
}

const channelIcons = {
  email: Mail,
  sms: Smartphone,
  authenticator: Shield,
}

export default function CheckInsPage() {
  const [checkIns, setCheckIns] = useState<MockCheckIn[]>(mockCheckIns)
  const [isCreateOpen, setIsCreateOpen] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<CreateCheckInForm>({
    resolver: zodResolver(createCheckInSchema),
    defaultValues: {
      channels: ["email"],
      gracePeriod: 6,
    },
  })

  const selectedChannels = watch("channels", ["email"])
  const interval = watch("interval")

  const onSubmit = (data: CreateCheckInForm) => {
    const newCheckIn: MockCheckIn = {
      id: Date.now().toString(),
      name: data.name,
      interval: data.interval,
      customDays: data.customDays,
      channels: data.channels,
      gracePeriod: data.gracePeriod,
      nextCheckIn: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      status: "active",
    }
    setCheckIns([newCheckIn, ...checkIns])
    setIsCreateOpen(false)
    reset()
  }

  const toggleCheckInStatus = (id: string) => {
    setCheckIns(
      checkIns.map((checkIn) =>
        checkIn.id === id
          ? { ...checkIn, status: checkIn.status === "active" ? "paused" : ("active" as const) }
          : checkIn,
      ),
    )
  }

  return (
    <AuthGuard>
      <AppLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="h1">Check-ins & Reminders</h1>
              <div className="prose stack-lg">
                <p className="body mt-2">Manage your activity verification schedules</p>
              </div>
            </div>
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Check-in
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Create New Check-in</DialogTitle>
                  <DialogDescription>Set up a new activity verification schedule</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="small font-medium">
                      Check-in Name
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="e.g., Daily Safety Check"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="small text-destructive">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interval" className="small font-medium">
                      Frequency
                    </label>
                    <Select onValueChange={(value) => setValue("interval", value as any)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.interval && <p className="small text-destructive">{errors.interval.message}</p>}
                  </div>

                  {interval === "custom" && (
                    <div className="space-y-2">
                      <label htmlFor="customDays" className="small font-medium">
                        Custom Interval (days)
                      </label>
                      <Input
                        id="customDays"
                        type="number"
                        {...register("customDays", { valueAsNumber: true })}
                        placeholder="e.g., 3"
                        min="1"
                        max="365"
                      />
                      {errors.customDays && <p className="small text-destructive">{errors.customDays.message}</p>}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="small font-medium">Delivery Channels</label>
                    <div className="space-y-2">
                      {(["email", "sms", "authenticator"] as const).map((channel) => (
                        <div key={channel} className="flex items-center space-x-2">
                          <Checkbox
                            id={channel}
                            checked={selectedChannels.includes(channel)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setValue("channels", [...selectedChannels, channel])
                              } else {
                                setValue(
                                  "channels",
                                  selectedChannels.filter((c) => c !== channel),
                                )
                              }
                            }}
                          />
                          <label htmlFor={channel} className="small capitalize">
                            {channel === "authenticator" ? "Authenticator App" : channel}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.channels && <p className="small text-destructive">{errors.channels.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="gracePeriod" className="small font-medium">
                      Grace Period (hours)
                    </label>
                    <Input
                      id="gracePeriod"
                      type="number"
                      {...register("gracePeriod", { valueAsNumber: true })}
                      placeholder="6"
                      min="1"
                      max="168"
                    />
                    {errors.gracePeriod && <p className="small text-destructive">{errors.gracePeriod.message}</p>}
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => setIsCreateOpen(false)} className="flex-1">
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      Create Check-in
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Check-ins List */}
          {checkIns.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <div className="prose stack-lg">
                  <h3 className="h3 mb-2">No check-ins configured</h3>
                  <p className="body mb-4">Set up your first activity verification schedule.</p>
                </div>
                <Button onClick={() => setIsCreateOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create your first check-in
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {checkIns.map((checkIn) => (
                <Card key={checkIn.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold">{checkIn.name}</h3>
                          <Badge className={statusColors[checkIn.status]}>{checkIn.status}</Badge>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <span>
                            {checkIn.interval === "custom"
                              ? `Every ${checkIn.customDays} days`
                              : `${checkIn.interval.charAt(0).toUpperCase() + checkIn.interval.slice(1)}`}
                          </span>
                          <span>Grace period: {checkIn.gracePeriod}h</span>
                          <span>
                            Next: {checkIn.status === "active" ? formatTimeUntil(checkIn.nextCheckIn) : "Paused"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {checkIn.channels.map((channel) => {
                            const Icon = channelIcons[channel]
                            return (
                              <div
                                key={channel}
                                className="flex items-center space-x-1 text-xs bg-muted px-2 py-1 rounded"
                              >
                                <Icon className="h-3 w-3" />
                                <span className="capitalize">{channel}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => toggleCheckInStatus(checkIn.id)}>
                          {checkIn.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Next Check-in Preview */}
          {checkIns.some((c) => c.status === "active") && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Upcoming Check-ins</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {checkIns
                    .filter((c) => c.status === "active")
                    .sort((a, b) => a.nextCheckIn.getTime() - b.nextCheckIn.getTime())
                    .slice(0, 3)
                    .map((checkIn) => (
                      <div key={checkIn.id} className="flex items-center justify-between small">
                        <span>{checkIn.name}</span>
                        <span className="text-muted-foreground">
                          {formatTimeUntil(checkIn.nextCheckIn)} • {checkIn.nextCheckIn.toLocaleString()}
                        </span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </AppLayout>
    </AuthGuard>
  )
}
