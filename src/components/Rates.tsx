import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Monthly Cleaning",
    price: "$30",
    period: "for 2 cans",
    description: "Once per month cleaning",
    promo: "50% OFF first service with code: FirstClean50",
    features: [
      "$30.00 for 2 cans cleaned once per month",
      "Any additional can $10.00 each",
      "50% off your first service",
      "Cancel anytime",
    ],
    popular: true,
  },
  {
    name: "Bi-Monthly Cleaning",
    price: "$37.50",
    period: "for 2 cans",
    description: "Once every other month",
    promo: null,
    features: [
      "$37.50 for 2 cans cleaned every other month",
      "Any additional can $10.00 each",
      "Great balance of value",
    ],
    popular: false,
  },
  {
    name: "Quarterly Cleaning",
    price: "$45",
    period: "for 2 cans",
    description: "Once every 3 months",
    promo: null,
    features: [
      "$45.00 for 2 cans cleaned once per quarter",
      "Any additional can $10.00 each",
      "Perfect for light usage",
    ],
    popular: false,
  },

  {
    name: "Bi-Annually Cleaning",
    price: "$60",
    period: "for 2 cans",
    description: "Twice per year",
    promo: null,
    features: [
      "$60.00 for 2 cans cleaned twice per year",
      "Any additional can $10.00 each",
      "No promo discount on this plan",
    ],
    popular: false,
  },
  {
    name: "One Time Cleaning",
    price: "$75",
    period: "for 2 cans",
    description: "One-time deep clean",
    promo: null,
    features: [
      "$75.00 for 2 cans cleaned one time",
      "Any additional can $10.00 each",
      "$50 credit if you upgrade to recurring plan within 3 months",
    ],
    popular: false,
  },
];

const Rates = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="rates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple pricing, no surprises — starts at{" "}
            <span className="text-accent font-extrabold">$30</span> for 2 cans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-6 hover:shadow-medium transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-accent shadow-glow lg:scale-105 bg-gradient-to-br from-white to-ocean-light/10"
                  : "hover:-translate-y-2 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-ocean text-white text-sm font-semibold rounded-full shadow-soft">
                  Most Popular
                </div>
              )}

              {plan.promo && (
                <div className="mb-4 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                  <p className="text-xs text-green-700 font-semibold text-center">
                    🎉 {plan.promo}
                  </p>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl md:text-6xl font-extrabold text-accent">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-ocean hover:shadow-glow"
                    : "bg-primary hover:bg-accent"
                } transition-all duration-300 font-bold`}
                size="lg"
                onClick={scrollToContact}
              >
                Start Service
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-muted-foreground text-lg">
            Additional cans:{" "}
            <span className="text-accent font-extrabold">$10.00 each</span>
          </p>
          <p className="text-muted-foreground text-lg">
            Optional food-scrap bins:{" "}
            <span className="text-accent font-extrabold">$5.00 each</span>{" "}
            (optional add-on)
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Monthly plan eligible for 50% off first service. One-time cleaning
            includes $50 credit towards a recurring plan if you upgrade within 3
            months.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rates;
