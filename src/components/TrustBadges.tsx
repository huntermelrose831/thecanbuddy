import { Shield, Droplets, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-sky-blue/5 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center text-center space-y-2 sm:space-y-3 p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-ocean-blue to-sky-blue flex items-center justify-center shadow-lg"
              >
                <badge.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="font-bold text-primary text-sm sm:text-base">
                  {badge.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
