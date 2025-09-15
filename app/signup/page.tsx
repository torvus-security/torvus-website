// app/signup/page.tsx
import type { Metadata } from "next";
import SignupForm from "@/components/signup-form";

export const metadata: Metadata = {
  title: "Sign up — Torvus Security",
  description:
    "Join the Torvus early access list. Get product updates and invitations.",
};

export default function Page() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Sign up for early access
        </h1>
        <p className="mt-2 text-muted-foreground">
          Leave your details and we’ll keep you posted about releases and invites.
        </p>
      </div>

      <div className="mt-8">
        <SignupForm />
      </div>
    </main>
  );
}
