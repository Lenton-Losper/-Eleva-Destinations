import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      period: "7 days",
      description: "Perfect for testing the waters",
      features: [
        "10 searches per month",
        "Basic community data",
        "Export to CSV",
        "Email support",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      description: "For serious indie founders",
      features: [
        "Unlimited searches",
        "Advanced sentiment analysis",
        "Save searches",
        "Priority email support",
        "Export to CSV",
        "Community insights",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Team",
      price: "$29",
      period: "/month",
      description: "For growing teams",
      features: [
        "Everything in Pro",
        "Up to 5 team members",
        "Shared saved searches",
        "Team collaboration",
        "Priority support",
        "Custom alerts",
      ],
      cta: "Get Started",
      highlighted: false,
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-700">
            Pricing
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden p-8 transition-all ${
                plan.highlighted
                  ? "border-2 border-blue-500 shadow-xl ring-4 ring-blue-100"
                  : "border-gray-200 hover:border-blue-200 hover:shadow-lg"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </div>

              <Button
                className={`mb-8 w-full ${
                  plan.highlighted
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-900 hover:bg-gray-800"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          All plans include a 7-day free trial. Cancel anytime, no questions asked.
        </p>
      </div>
    </section>
  );
}
