import {
  Sparkles,
  Shield,
  Bug,
  Home,
  Clock,
  Timer,
  Leaf,
  HeartPulse,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "No More Foul Odors",
      description:
        "Eliminate stubborn smells from food scraps and spills. Professional cleaning leaves your bin fresh and pleasant.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Better Hygiene & Sanitation",
      description:
        "Your trash can is a breeding ground for bacteria, mold, and germs. Regular cleaning ensures a healthier environment for your family and pets.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Bug,
      title: "Pest Prevention",
      description:
        "Keep rodents, ants, and flies away from your bins. Regular cleanings prevent infestations that can spread to your yard or home.",
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: Home,
      title: "Aesthetic Appeal",
      description:
        "A freshly cleaned bin doesn't just smell better—it looks better too. Keep your curb appeal sharp and your driveway tidy.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      title: "It's So Convenient",
      description:
        "No more dealing with gunk and grime yourself. Schedule regular cleanings and we'll take care of the dirty work for you.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Timer,
      title: "Long-Term Durability",
      description:
        "Regular cleaning extends the life of your trash can by preventing stains, rust, and material damage from spills.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Options",
      description:
        "We use eco-friendly, non-toxic cleaning solutions. Keep your bin clean while protecting the planet—it's a win-win!",
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: HeartPulse,
      title: "Health Benefits",
      description:
        "Clean bins reduce mold and mildew that trigger allergies and asthma. Breathe easier with a cleaner, healthier home environment.",
      gradient: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Why Get Your Trash Can Cleaned?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trash cans aren't glamorous, but ignoring a stinky, dirty bin can
              quickly become more than just a nuisance. Here are 8 reasons why
              regular trash can cleaning is totally worth it!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-white group"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center space-y-6">
            <div className="inline-block bg-gradient-ocean text-white px-8 py-4 rounded-full shadow-glow">
              <p className="text-lg font-semibold">
                Ready for a fresher, cleaner home? Let The Can Buddy handle the
                dirty work! 🗑️✨
              </p>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join 7+ happy customers in Santa Cruz County who've discovered the
              difference a clean trash can makes!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
