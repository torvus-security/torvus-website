"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Download, Bell, Wifi, WifiOff } from "lucide-react"
import { toast } from "sonner"

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function PWAFeatures() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)

  useEffect(() => {
    // Check if app is installed
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches
    setIsInstalled(isStandalone)

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    // Listen for online/offline status
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    // Check notification permission
    if ("Notification" in window) {
      setNotificationsEnabled(Notification.permission === "granted")
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      toast.success("App installed successfully!")
      setIsInstalled(true)
    }

    setDeferredPrompt(null)
  }

  const enableNotifications = async () => {
    if (!("Notification" in window)) {
      toast.error("Notifications not supported")
      return
    }

    const permission = await Notification.requestPermission()
    if (permission === "granted") {
      setNotificationsEnabled(true)
      toast.success("Notifications enabled!")

      // Show test notification
      new Notification("Torvus Security", {
        body: "You'll now receive check-in reminders and security alerts.",
        icon: "/favicon.ico",
      })
    }
  }

  return (
    <div className="space-y-4">
      {/* Connection Status */}
      <div className="flex items-center space-x-2">
        {isOnline ? (
          <Badge className="bg-green-500/10 text-green-500">
            <Wifi className="h-3 w-3 mr-1" />
            Online
          </Badge>
        ) : (
          <Badge className="bg-red-500/10 text-red-500">
            <WifiOff className="h-3 w-3 mr-1" />
            Offline
          </Badge>
        )}

        {isInstalled && (
          <Badge className="bg-blue-500/10 text-blue-500">
            <Smartphone className="h-3 w-3 mr-1" />
            App Installed
          </Badge>
        )}
      </div>

      {/* PWA Features Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Smartphone className="h-5 w-5" />
            <span>Mobile Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Install App */}
          {!isInstalled && deferredPrompt && (
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <h4 className="font-medium">Install Mobile App</h4>
                <p className="text-sm text-muted-foreground">Get faster access and offline capabilities</p>
              </div>
              <Button onClick={handleInstallClick} size="sm">
                <Download className="h-4 w-4 mr-2" />
                Install
              </Button>
            </div>
          )}

          {/* Enable Notifications */}
          {!notificationsEnabled && (
            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
              <div>
                <h4 className="font-medium">Enable Notifications</h4>
                <p className="text-sm text-muted-foreground">Get check-in reminders and security alerts</p>
              </div>
              <Button onClick={enableNotifications} size="sm" variant="outline">
                <Bell className="h-4 w-4 mr-2" />
                Enable
              </Button>
            </div>
          )}

          {/* Offline Capabilities */}
          <div className="p-3 bg-muted/20 rounded-lg">
            <h4 className="font-medium mb-2">Offline Capabilities</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• View previously loaded files and data</li>
              <li>• Complete check-ins (syncs when online)</li>
              <li>• Access emergency contact information</li>
              <li>• View audit logs and activity history</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
