"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AppLayout } from "@/components/app-layout"
import { AuthGuard } from "@/components/auth-guard"
import { mockRecipients, formatDate, type MockRecipient } from "@/lib/mock-data"
import { Plus, Users, Mail, Shield, FileText, CheckCircle, Clock, XCircle, MoreHorizontal } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const createRecipientSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  relationship: z.string().min(1, "Relationship is required"),
  verificationMethod: z.enum(["email-otp", "id-document", "notary", "passphrase"]),
  notes: z.string().optional(),
})

type CreateRecipientForm = z.infer<typeof createRecipientSchema>

const statusColors = {
  verified: "bg-green-500/10 text-green-500",
  pending: "bg-yellow-500/10 text-yellow-500",
  unverified: "bg-red-500/10 text-red-500",
}

const statusIcons = {
  verified: CheckCircle,
  pending: Clock,
  unverified: XCircle,
}

const verificationMethods = {
  "email-otp": "Email OTP",
  "id-document": "ID Document",
  notary: "Notary",
  passphrase: "Passphrase",
}

export default function RecipientsPage() {
  const [recipients, setRecipients] = useState<MockRecipient[]>(mockRecipients)
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [verificationDialog, setVerificationDialog] = useState<{ open: boolean; recipient?: MockRecipient }>({
    open: false,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CreateRecipientForm>({
    resolver: zodResolver(createRecipientSchema),
  })

  const onSubmit = (data: CreateRecipientForm) => {
    const newRecipient: MockRecipient = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      relationship: data.relationship,
      verificationMethod: data.verificationMethod,
      status: "unverified",
      notes: data.notes,
      addedDate: new Date(),
    }
    setRecipients([newRecipient, ...recipients])
    setIsCreateOpen(false)
    reset()
  }

  const startVerification = (recipient: MockRecipient) => {
    setVerificationDialog({ open: true, recipient })
  }

  const completeVerification = () => {
    if (verificationDialog.recipient) {
      setRecipients(
        recipients.map((r) =>
          r.id === verificationDialog.recipient!.id
            ? { ...r, status: "verified" as const, lastContact: new Date() }
            : r,
        ),
      )
    }
    setVerificationDialog({ open: false })
  }

  return (
    <AuthGuard>
      <AppLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Recipients</h1>
              <p className="text-muted-foreground mt-2">Manage trusted contacts for document releases</p>
            </div>
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Recipient
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Recipient</DialogTitle>
                  <DialogDescription>Add a trusted contact for document releases</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="e.g., John Smith"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john.smith@email.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="relationship" className="text-sm font-medium">
                      Relationship
                    </label>
                    <Input
                      id="relationship"
                      {...register("relationship")}
                      placeholder="e.g., Spouse, Lawyer, Friend"
                      className={errors.relationship ? "border-destructive" : ""}
                    />
                    {errors.relationship && <p className="text-sm text-destructive">{errors.relationship.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="verificationMethod" className="text-sm font-medium">
                      Verification Method
                    </label>
                    <Select onValueChange={(value) => setValue("verificationMethod", value as any)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select verification method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email-otp">Email OTP</SelectItem>
                        <SelectItem value="id-document">ID Document</SelectItem>
                        <SelectItem value="notary">Notary</SelectItem>
                        <SelectItem value="passphrase">Passphrase</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.verificationMethod && (
                      <p className="text-sm text-destructive">{errors.verificationMethod.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="notes" className="text-sm font-medium">
                      Notes (Optional)
                    </label>
                    <Textarea
                      id="notes"
                      {...register("notes")}
                      placeholder="e.g., Primary emergency contact, lawyer of record"
                      rows={3}
                    />
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => setIsCreateOpen(false)} className="flex-1">
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1">
                      Add Recipient
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Recipients List */}
          {recipients.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No recipients</h3>
                <p className="text-muted-foreground mb-4">Add at least one trusted contact.</p>
                <Button onClick={() => setIsCreateOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add your first recipient
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Trusted Contacts ({recipients.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recipients.map((recipient) => {
                    const StatusIcon = statusIcons[recipient.status]
                    return (
                      <div
                        key={recipient.id}
                        className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-3">
                              <h4 className="font-medium">{recipient.name}</h4>
                              <Badge className={statusColors[recipient.status]}>
                                <StatusIcon className="h-3 w-3 mr-1" />
                                {recipient.status}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                              <span className="flex items-center space-x-1">
                                <Mail className="h-3 w-3" />
                                <span>{recipient.email}</span>
                              </span>
                              <span>{recipient.relationship}</span>
                              <span>{verificationMethods[recipient.verificationMethod]}</span>
                            </div>
                            {recipient.notes && <p className="text-sm text-muted-foreground mt-1">{recipient.notes}</p>}
                            <div className="text-xs text-muted-foreground mt-1">
                              Added {formatDate(recipient.addedDate)}
                              {recipient.lastContact && ` • Last contact ${formatDate(recipient.lastContact)}`}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {recipient.status === "unverified" && (
                            <Button variant="outline" size="sm" onClick={() => startVerification(recipient)}>
                              <Shield className="h-4 w-4 mr-1" />
                              Verify
                            </Button>
                          )}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Mail className="h-4 w-4 mr-2" />
                                Send Test Email
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileText className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              {recipient.status !== "verified" && (
                                <DropdownMenuItem onClick={() => startVerification(recipient)}>
                                  <Shield className="h-4 w-4 mr-2" />
                                  Start Verification
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Verification Dialog */}
          <Dialog open={verificationDialog.open} onOpenChange={(open) => setVerificationDialog({ open })}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Verify Recipient</DialogTitle>
                <DialogDescription>
                  {verificationDialog.recipient && (
                    <>
                      Verify {verificationDialog.recipient.name} using{" "}
                      {verificationMethods[verificationDialog.recipient.verificationMethod]}
                    </>
                  )}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                {verificationDialog.recipient?.verificationMethod === "email-otp" && (
                  <div className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground">
                      An OTP has been sent to {verificationDialog.recipient.email}
                    </p>
                    <Input placeholder="Enter 6-digit code" className="text-center" />
                  </div>
                )}
                {verificationDialog.recipient?.verificationMethod === "passphrase" && (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Enter the passphrase shared with this recipient</p>
                    <Input type="password" placeholder="Enter passphrase" />
                  </div>
                )}
                {verificationDialog.recipient?.verificationMethod === "id-document" && (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Upload a photo of the recipient's government-issued ID
                    </p>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                    </div>
                  </div>
                )}
                {verificationDialog.recipient?.verificationMethod === "notary" && (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">Upload notarized identity verification document</p>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Upload notarized document</p>
                    </div>
                  </div>
                )}
                <div className="flex space-x-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setVerificationDialog({ open: false })}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button onClick={completeVerification} className="flex-1">
                    Complete Verification
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </AppLayout>
    </AuthGuard>
  )
}
