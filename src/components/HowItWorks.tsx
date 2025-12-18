import { Calendar, Sparkles, CheckCircle, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Phone,
    title: "Book Online",
    description:
      "Choose your service plan and schedule your first cleaning through our simple online booking system.",
  },
  {
    icon: Calendar,
    title: "We Come to You",
    description:
      "Our team arrives on your scheduled day with professional equipment and eco-friendly solutions.",
  },
  {
    icon: Sparkles,
    title: "Deep Clean",
    description:
      "We power wash, sanitize, and deodorize your bins using high-temperature water and biodegradable cleaners.",
  },
  {
    icon: CheckCircle,
    title: "Enjoy Fresh Bins",
    description:
      "Your bins are left spotless, odor-free, and ready to use. We handle all the dirty work!",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, efficient, and hassle-free trash can cleaning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative p-8 text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-accent bg-white group"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold text-lg shadow-glow">
                {index + 1}
              </div>

              <div className="mt-4 mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-sky rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-accent" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
