"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AppLayout } from "@/components/app-layout"
import { AuthGuard } from "@/components/auth-guard"
import { ArrowLeft } from "lucide-react"
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

export default function NewRecipientPage() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CreateRecipientForm>({
    resolver: zodResolver(createRecipientSchema),
  })

  const onSubmit = (data: CreateRecipientForm) => {
    // Mock creation
    console.log("Creating recipient:", data)
    router.push("/app/recipients")
  }

  return (
    <AuthGuard>
      <AppLayout>
        <div className="max-w-2xl space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="h1">Add New Recipient</h1>
              <p className="body">Add a trusted contact for document releases</p>
            </div>
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle className="h2">Recipient Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="small font-medium">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="e.g., John Smith"
                      className={`field ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && <p className="help error">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="small font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john.smith@email.com"
                      className={`field ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && <p className="help error">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="relationship" className="small font-medium">
                      Relationship *
                    </label>
                    <Input
                      id="relationship"
                      {...register("relationship")}
                      placeholder="e.g., Spouse, Lawyer, Friend"
                      className={`field ${errors.relationship ? "border-destructive" : ""}`}
                    />
                    {errors.relationship && <p className="help error">{errors.relationship.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="verificationMethod" className="small font-medium">
                      Verification Method *
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
                    {errors.verificationMethod && <p className="help error">{errors.verificationMethod.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="notes" className="small font-medium">
                    Notes
                  </label>
                  <Textarea
                    id="notes"
                    {...register("notes")}
                    placeholder="e.g., Primary emergency contact, lawyer of record"
                    rows={4}
                    className="field"
                  />
                  <p className="help">Add any additional context about this recipient's role or relationship</p>
                </div>

                <div className="flex space-x-4 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.back()}
                    className="btn btn-secondary flex-1"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="btn btn-primary flex-1">
                    Add Recipient
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </AppLayout>
    </AuthGuard>
  )
}
