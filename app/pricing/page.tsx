import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for digital guardianship. Choose from Basic, Pro, or Enterprise plans with 30-day money-back guarantee.",
}

const plans = [
  {
    name: "Basic",
    price: "AUD $9",
    period: "/month",
    description: "Perfect for individuals with essential protection needs",
    features: [
      "5 GB encrypted vault storage",
      "1 active release plan",
      "Email check-ins",
      "Up to 2 recipients",
      "Basic audit logs",
      "Email support",
    ],
    storage: "5 GB",
    plans: "1",
    recipients: "2",
    checkins: "Email only",
    support: "Email",
    api: false,
    sso: false,
    customRules: false,
  },
  {
    name: "Pro",
    price: "AUD $29",
    period: "/month",
    description: "Advanced features for professionals and families",
    features: [
      "50 GB encrypted vault storage",
      "5 active release plans",
      "Email & SMS check-ins",
      "Up to 10 recipients",
      "Advanced rules engine",
      "Audit log exports",
      "Priority support",
      "Dry-run simulations",
    ],
    popular: true,
    storage: "50 GB",
    plans: "5",
    recipients: "10",
    checkins: "Email & SMS",
    support: "Priority",
    api: false,
    sso: false,
    customRules: true,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    period: "",
    description: "Custom solutions for organizations and legal practices",
    features: [
      "Unlimited vault storage",
      "Unlimited release plans",
      "SSO integration",
      "Custom retention policies",
      "Data processing agreements",
      "Dedicated support",
      "API integrations",
      "Custom verification flows",
    ],
    storage: "Unlimited",
    plans: "Unlimited",
    recipients: "Unlimited",
    checkins: "All methods",
    support: "Dedicated",
    api: true,
    sso: true,
    customRules: true,
  },
]

const comparisonFeatures = [
  { name: "Vault Storage", key: "storage" },
  { name: "Active Release Plans", key: "plans" },
  { name: "Recipients", key: "recipients" },
  { name: "Check-in Methods", key: "checkins" },
  { name: "Support Level", key: "support" },
  { name: "Advanced Rules Engine", key: "customRules" },
  { name: "API Access", key: "api" },
  { name: "SSO Integration", key: "sso" },
]

export default function PricingPage() {
  return (
    <main className="container-page section">
      <section className="py-24 bg-gradient-to-br from-rose-50/30 to-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center space-y-6 mb-16">
            <h1 className="h1 ink2 ink2--lapis-cranberry ink-shadow">Transparent pricing for digital guardianship</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your protection needs. All plans include core security features and 30-day
              money-back guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "border-rose-300 shadow-xl shadow-rose-500/10 scale-105 bg-gradient-to-br from-rose-50/50 to-pink-50/30"
                    : "border-rose-100 hover:border-rose-200 hover:shadow-lg transition-all duration-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="h3 font-semibold">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gray-900">
                      {plan.price}
                      <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="small text-muted-foreground leading-relaxed">{plan.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <span className="text-rose-500 flex-shrink-0 mt-0.5 font-bold">✓</span>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg"
                        : "border-rose-200 text-rose-600 hover:bg-rose-50 hover:text-rose-700"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="container-narrow section">
            <div className="about-hero elev-1 elev-transition">
              <div className="about-hero__inner">
                <h2 className="h2">Feature Comparison</h2>
                <div className="surface--light border rounded-xl p-3 mt-4 elev-1">
                  <div className="overflow-x-auto">
                    <table className="table table--compact text-sm">
                      <thead>
                        <tr>
                          <th className="font-semibold text-gray-900">Features</th>
                          {plans.map((plan, index) => (
                            <th
                              key={index}
                              className={`text-center font-semibold ${plan.popular ? "text-rose-600" : "text-gray-900"}`}
                            >
                              {plan.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonFeatures.map((feature, index) => (
                          <tr key={index} className="hover:bg-rose-25">
                            <td className="py-4 px-4 font-medium text-gray-900">{feature.name}</td>
                            {plans.map((plan, planIndex) => (
                              <td key={planIndex} className="text-center py-4 px-4">
                                {typeof plan[feature.key] === "boolean" ? (
                                  plan[feature.key] ? (
                                    <span className="text-rose-500 font-bold">✓</span>
                                  ) : (
                                    <span className="text-gray-300">—</span>
                                  )
                                ) : (
                                  <span
                                    className={`text-sm ${plan.popular ? "font-semibold text-rose-600" : "text-gray-700"}`}
                                  >
                                    {plan[feature.key]}
                                  </span>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center space-y-4">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100">
              <h3 className="font-semibold text-gray-900 mb-2">All plans include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-rose-500">✓</span>
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-rose-500">✓</span>
                  <span>Zero-knowledge architecture</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-rose-500">✓</span>
                  <span>Australian data residency</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              * All prices in AUD and include GST. Physical custody & courier delivery priced separately.
              <br />
              30-day money-back guarantee. No setup fees. Cancel anytime.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
