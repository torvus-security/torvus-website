import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: "◆",
    title: "Privacy",
    description: "Your data belongs to you. We design systems that we ourselves cannot access or compromise.",
  },
  {
    icon: "●",
    title: "Clarity",
    description: "No hidden features, no surprise behaviors. Every action is transparent and auditable.",
  },
  {
    icon: "■",
    title: "Restraint",
    description: "We build only what's necessary, avoiding feature bloat that increases attack surface.",
  },
  {
    icon: "▲",
    title: "Auditability",
    description: "Every action creates an immutable record. Trust through verification, not promises.",
  },
]

const advisoryRoles = [
  {
    title: "Cybersecurity Expert",
    description: "Help shape our security architecture and threat modeling approach",
  },
  {
    title: "Digital Forensics Specialist",
    description: "Ensure our audit trails meet legal and investigative standards",
  },
  {
    title: "Estate Law Attorney",
    description: "Guide compliance with inheritance and estate planning regulations",
  },
]

export default function AboutPage() {
  return (
    <main className="container-page section">
      <section className="container-page section">
        <div className="about-hero elev-2 elev-transition">
          <div className="about-hero__inner">
            <h1 className="h1 ink2 ink2--lapis-cranberry ink-shadow">Building trust through technology</h1>
            <p className="body max-w-2xl">
              Torvus Security exists to solve a fundamental problem: how to protect and conditionally release sensitive
              information when you cannot do it yourself.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-mist">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Mission */}
          <div className="space-y-8 mb-16">
            <h2 className="h2">Our Mission</h2>
            <Card className="elev-1 elev-transition surface--light border rounded-2xl p-6">
              <CardContent className="p-8">
                <div className="prose stack-lg">
                  <p className="body">
                    We serve journalists protecting sources, lawyers safeguarding client information, families planning
                    for the unexpected, and anyone who needs certainty that their most important information will reach
                    the right people at the right time—even when they cannot ensure it themselves.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Who We Serve */}
          <div className="space-y-8 mb-16">
            <h2 className="h2">Who We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="elev-1 elev-transition surface--mint border rounded-2xl p-6">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-8 h-8 rounded-md grid place-items-center text-sm"
                      style={{ background: "var(--pastel-sky)", color: "var(--color-lapis)" }}
                    >
                      ◆
                    </div>
                    <CardTitle className="h3">Journalists</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose stack-lg">
                    <p className="body">
                      Protecting source materials and ensuring critical information reaches editors or legal contacts
                      when needed.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="elev-1 elev-transition surface--sky border rounded-2xl p-6">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-8 h-8 rounded-md grid place-items-center text-sm"
                      style={{ background: "var(--pastel-sky)", color: "var(--color-lapis)" }}
                    >
                      ◆
                    </div>
                    <CardTitle className="h3">Legal Professionals</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose stack-lg">
                    <p className="body">
                      Safeguarding client confidentiality while ensuring continuity of representation and case
                      materials.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="elev-1 elev-transition surface--blush border rounded-2xl p-6">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-8 h-8 rounded-md grid place-items-center text-sm"
                      style={{ background: "var(--pastel-sky)", color: "var(--color-lapis)" }}
                    >
                      ◆
                    </div>
                    <CardTitle className="h3">Families</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose stack-lg">
                    <p className="body">
                      Planning for unexpected events with digital estate management and conditional information sharing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8 mb-16">
            <h2 className="h2">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="elev-1 elev-transition surface--light border rounded-2xl p-6">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-8 h-8 rounded-md grid place-items-center text-sm"
                        style={{ background: "var(--pastel-sky)", color: "var(--color-lapis)" }}
                      >
                        {value.icon}
                      </div>
                      <CardTitle className="h3">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="body">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advisory Roles */}
          <div className="space-y-8">
            <h2 className="h2">Advisory Roles We're Seeking</h2>
            <p className="body mb-8">
              We're building an advisory board of experts to ensure Torvus Security meets the highest standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {advisoryRoles.map((role, index) => (
                <Card key={index} className="elev-1 elev-transition surface--light border rounded-2xl p-6">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-8 h-8 rounded-md grid place-items-center text-sm"
                        style={{ background: "var(--pastel-sky)", color: "var(--color-lapis)" }}
                      >
                        ◆
                      </div>
                      <CardTitle className="h3">{role.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="body">{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button className="btn btn-primary" size="lg" asChild>
                <Link href="/contact">Join Our Advisory Board</Link>
              </Button>
              <div className="prose stack-lg">
                <p className="small mt-4">Interested in joining our advisory board? We'd love to hear from you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
