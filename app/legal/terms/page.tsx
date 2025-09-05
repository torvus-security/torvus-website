import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Torvus Security Pty Ltd's Terms of Service",
}

export default function TermsPage() {
  return (
    <main className="container-page section">
      <section className="py-24">
        <div className="max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="h1">Terms of Service</h1>
              <p className="small">Last updated: December 15, 2024</p>
              <p className="small">Torvus Security Pty Ltd (ABN: 12 345 678 901)</p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8 text-foreground stack-lg">
              <section>
                <h2 className="h2">Acceptance of Terms</h2>
                <p className="body">
                  By accessing or using Torvus Security services, you agree to be bound by these Terms of Service and
                  our Privacy Policy. These terms constitute a legally binding agreement between you and Torvus Security
                  Pty Ltd (ABN: 12 345 678 901). If you do not agree to these terms, please do not use our services.
                  These terms are governed by Australian law and subject to the jurisdiction of New South Wales courts.
                </p>
              </section>

              <section>
                <h2 className="h2">Service Description</h2>
                <div className="space-y-4">
                  <p className="body">
                    Torvus Security provides digital guardianship and conditional release services, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Secure Storage:</strong> Encrypted vault for sensitive documents and information
                    </li>
                    <li>
                      <strong>Conditional Release:</strong> Automated delivery based on predefined triggers and
                      conditions
                    </li>
                    <li>
                      <strong>Check-in Monitoring:</strong> Regular activity verification to prevent accidental releases
                    </li>
                    <li>
                      <strong>Recipient Management:</strong> Identity verification and secure delivery to designated
                      recipients
                    </li>
                    <li>
                      <strong>Audit & Compliance:</strong> Detailed logging and reporting for legal and regulatory
                      requirements
                    </li>
                  </ul>
                  <p className="body">
                    Our services are designed for legitimate use cases including estate planning, journalism, legal
                    protection, and business continuity.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">User Responsibilities</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>As a user of our services, you are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maintaining the security and confidentiality of your account credentials</li>
                    <li>Ensuring the accuracy of recipient information and contact details</li>
                    <li>Complying with all applicable laws and regulations in your jurisdiction</li>
                    <li>Regularly updating your check-in schedule and emergency contacts</li>
                    <li>Notifying us immediately of any security breaches or unauthorized access</li>
                    <li>Using the service only for lawful purposes and legitimate use cases</li>
                    <li>Maintaining current payment information and paying fees when due</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">Prohibited Uses</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Our services may not be used for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Illegal activities, including but not limited to fraud, money laundering, or terrorism</li>
                    <li>Harassment, stalking, or threatening behavior toward any individual</li>
                    <li>Storing or distributing illegal content, including child exploitation material</li>
                    <li>Circumventing legal processes, court orders, or law enforcement investigations</li>
                    <li>Violating intellectual property rights or confidentiality agreements</li>
                    <li>Attempting to hack, reverse engineer, or compromise our security systems</li>
                    <li>Creating multiple accounts to evade restrictions or abuse our services</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>
                      We reserve the right to immediately terminate accounts that violate these prohibitions and
                      cooperate with law enforcement as required.
                    </strong>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">Service Availability & Limitations</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    While we strive for 99.9% uptime, our services are provided "as is" without warranties of any kind.
                    We are not liable for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service interruptions due to maintenance, technical issues, or force majeure events</li>
                    <li>Delays in conditional releases due to recipient verification requirements</li>
                    <li>Third-party service failures (email providers, SMS gateways, payment processors)</li>
                    <li>User error in configuring release conditions or recipient information</li>
                    <li>Legal restrictions that prevent delivery in certain jurisdictions</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Our maximum liability is limited to the fees paid for the affected service period, not to exceed AUD
                    $10,000.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Subscription fees are billed in advance and are non-refundable except as required by Australian
                  Consumer Law. Prices are in Australian Dollars (AUD) and include GST where applicable. We reserve the
                  right to change pricing with 30 days notice to existing subscribers. Accounts with overdue payments
                  may be suspended, but conditional releases will continue to function during grace periods.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate this agreement with 30 days written notice. Upon termination, you will have
                  90 days to export your data before it is permanently deleted. Conditional releases configured before
                  termination will continue to function for 12 months or until triggered, whichever comes first. We may
                  immediately terminate accounts for violations of these terms or illegal activity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any disputes arising from these terms will be resolved through binding arbitration under the
                  Australian Centre for International Commercial Arbitration (ACICA) rules, with proceedings conducted
                  in Sydney, NSW. For disputes under AUD $25,000, you may choose small claims court in your
                  jurisdiction. These terms are governed by Australian law, and any court proceedings must be brought in
                  New South Wales courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">Contact Information</h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    <strong>Legal Department:</strong>{" "}
                    <a
                      href="mailto:legal@torvus.security"
                      className="text-rose-500 hover:text-rose-600 hover:underline"
                    >
                      legal@torvus.security
                    </a>
                  </p>
                  <p>
                    <strong>Postal Address:</strong> Torvus Security Pty Ltd, Level 15, 1 Bligh Street, Sydney NSW 2000,
                    Australia
                  </p>
                  <p>
                    <strong>Phone:</strong> +61 2 8123 4567
                  </p>
                  <p>For questions about these terms or to report violations, please contact our legal department.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
