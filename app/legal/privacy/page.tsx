import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Torvus Security",
  description: "Torvus Security's privacy policy outlining how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
  return (
    <main className="container-page section">
      <section className="py-24">
        <div className="max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="h1">Privacy Policy</h1>
              <p className="small">Last updated: December 15, 2024</p>
              <p className="small">Torvus Security Pty Ltd (ABN: 12 345 678 901)</p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8 text-foreground stack-lg">
              <section>
                <h2 className="h2">Overview</h2>
                <p className="body">
                  Torvus Security Pty Ltd is committed to protecting your privacy and ensuring the security of your
                  personal information. This privacy policy explains how we collect, use, and protect your data in
                  accordance with Australian Privacy Principles, GDPR (where applicable), and industry best practices.
                  We operate under a zero-knowledge architecture, meaning we cannot access your encrypted files even if
                  we wanted to.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">Information We Collect</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong>Account Information:</strong> Email address, encrypted authentication credentials, and
                    billing information (processed by our payment partners).
                  </p>
                  <p>
                    <strong>File Metadata:</strong> File names, sizes, upload dates, and classification labels (all
                    encrypted). We never access file contents.
                  </p>
                  <p>
                    <strong>Audit Logs:</strong> Security events, access attempts, and system interactions for security
                    monitoring and compliance.
                  </p>
                  <p>
                    <strong>Technical Data:</strong> IP addresses (hashed after 30 days), device information, and usage
                    analytics to improve our services.
                  </p>
                  <p>
                    We collect only the minimum information necessary to provide our services and maintain security.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">How We Use Your Information</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Your information is used solely to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide digital guardianship and conditional release services</li>
                    <li>Maintain security and prevent unauthorized access</li>
                    <li>Process payments and manage subscriptions</li>
                    <li>Send service notifications and security alerts</li>
                    <li>Comply with legal obligations and law enforcement requests</li>
                    <li>Improve our services through anonymized analytics</li>
                  </ul>
                  <p>
                    <strong>We never sell, rent, or share your data with third parties for marketing purposes.</strong>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">Data Security & Encryption</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>We employ military-grade security measures:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Zero-Knowledge Architecture:</strong> Your files are encrypted with keys only you control
                    </li>
                    <li>
                      <strong>AES-256 Encryption:</strong> Industry-standard encryption for all data at rest and in
                      transit
                    </li>
                    <li>
                      <strong>Hardware Security Modules (HSMs):</strong> Tamper-resistant key management
                    </li>
                    <li>
                      <strong>Multi-Factor Authentication:</strong> Required for all account access
                    </li>
                    <li>
                      <strong>Regular Security Audits:</strong> Third-party penetration testing and compliance reviews
                    </li>
                    <li>
                      <strong>Data Residency:</strong> Choose where your data is stored (Australia, Singapore, EU)
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">Your Rights</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Under Australian Privacy Principles and GDPR, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Access:</strong> Request copies of your personal information
                    </li>
                    <li>
                      <strong>Correction:</strong> Update or correct inaccurate information
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your account and data
                    </li>
                    <li>
                      <strong>Portability:</strong> Export your data in standard formats
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to certain processing activities
                    </li>
                    <li>
                      <strong>Restriction:</strong> Request limitation of processing
                    </li>
                  </ul>
                  <p>To exercise these rights, contact us at privacy@torvus.security with your request.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">Data Retention & Deletion</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain personal information only as long as necessary to provide services or comply with legal
                  obligations. Account data is deleted within 30 days of account closure. Audit logs are retained for 7
                  years for security and compliance purposes. You can request immediate data deletion, and we provide
                  cryptographic proof of deletion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">International Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Data may be transferred between our secure facilities in Australia, Singapore, and the EU. All
                  transfers are protected by appropriate safeguards including standard contractual clauses and adequacy
                  decisions. You can choose your preferred data residency location in your account settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-rose-600">Contact Us</h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    <strong>Privacy Officer:</strong>{" "}
                    <a
                      href="mailto:privacy@torvus.security"
                      className="text-rose-500 hover:text-rose-600 hover:underline"
                    >
                      privacy@torvus.security
                    </a>
                  </p>
                  <p>
                    <strong>Postal Address:</strong> Torvus Security Pty Ltd, Level 15, 1 Bligh Street, Sydney NSW 2000,
                    Australia
                  </p>
                  <p>
                    <strong>Phone:</strong> +61 2 8123 4567
                  </p>
                  <p>
                    For privacy-related questions, complaints, or requests, please contact our Privacy Officer who will
                    respond within 30 days.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
