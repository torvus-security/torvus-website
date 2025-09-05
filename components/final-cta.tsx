import { EnhancedButton } from "@/components/enhanced-button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function FinalCTA() {
  return (
    <section id="early-access" className="py-24 bg-card">
      <div className="container max-w-2xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Join the early access</h2>
          <p className="text-muted-foreground max-w-lg">
            Be among the first to secure your most important information with Torvus Security.
          </p>

          <form className="space-y-4 max-w-md w-full">
            <Input type="email" placeholder="Enter your email address" className="w-full text-center" />
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Checkbox id="consent" />
              <label htmlFor="consent" className="text-muted-foreground text-center">
                I agree to receive updates about Torvus Security and understand the{" "}
                <a href="/legal/privacy" className="text-primary hover:underline">
                  privacy policy
                </a>
              </label>
            </div>
            <EnhancedButton type="submit" variant="primary" className="w-full">
              Get early access
            </EnhancedButton>
          </form>
        </div>
      </div>
    </section>
  )
}
