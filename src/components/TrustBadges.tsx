import { Shield, Droplets, Leaf, Users } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete liability coverage",
    },
    {
      icon: Droplets,
      title: "Professional Service",
      description: "200° hot water cleaning",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Environmentally responsible",
    },
    {
      icon: Users,
      title: "Locally Owned",
      description: "Serving Santa Cruz County",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-ocean flex items-center justify-center shadow-soft">
                <badge.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm md:text-base">
                  {badge.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
