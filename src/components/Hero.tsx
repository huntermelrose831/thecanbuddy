import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle2, Clock, Leaf } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 150]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* Animated Gradient Background with Depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-sky-blue/50 via-sky-blue/30 to-ocean-blue/20"
        style={{ y: y1 }}
      />

      {/* Mesh Gradient Overlay for Depth */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.3) 0px, transparent 50%),
            radial-gradient(at 97% 21%, hsla(195, 90%, 55%, 0.25) 0px, transparent 50%),
            radial-gradient(at 52% 99%, hsla(204, 98%, 45%, 0.2) 0px, transparent 50%),
            radial-gradient(at 10% 29%, hsla(199, 89%, 48%, 0.3) 0px, transparent 50%),
            radial-gradient(at 97% 96%, hsla(189, 85%, 42%, 0.25) 0px, transparent 50%)
          `,
        }}
      />

      {/* Pattern Overlay with Parallax */}
      <motion.div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzBmNzJiYiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"
        style={{ y: y2 }}
      />

      {/* Floating Elements for Depth */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-sky-blue/10 rounded-full blur-2xl hidden sm:block"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-32 h-32 bg-ocean-blue/10 rounded-full blur-3xl hidden md:block"
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content */}
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-sky-blue/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sky-blue" />
              <span className="text-xs sm:text-sm font-semibold text-primary">
                Professional Bin Cleaning Service
              </span>
            </motion.div>

            {/* Heading with Enhanced Typography */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] px-2 sm:px-4"
            >
              Residential Can Cleaning
              <span className="block mt-2 sm:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-ocean-blue via-sky-blue to-ocean-blue bg-[length:200%_auto] animate-gradient">
                Santa Cruz, CA
              </span>
            </motion.h1>

            {/* Enhanced Stats Cards with Glassmorphism */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8 px-2 sm:px-4"
            >
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 to-ocean-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative px-6 sm:px-8 py-4 sm:py-5 flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-blue to-ocean-blue rounded-xl flex items-center justify-center shadow-lg">
                    <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-ocean-blue to-sky-blue bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-primary font-semibold mt-0.5">
                      Eco-Friendly
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 to-ocean-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative px-6 sm:px-8 py-4 sm:py-5 flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-blue to-ocean-blue rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-ocean-blue to-sky-blue bg-clip-text text-transparent">
                      Same Day
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-primary font-semibold mt-0.5">
                      Available
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="pt-4 sm:pt-6 md:pt-8 px-2 sm:px-4"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary/90 max-w-3xl mx-auto leading-relaxed font-medium">
                Eco-friendly, professional trash can cleaning in Santa Cruz.{" "}
                <span className="text-sky-blue font-semibold">
                  We collect and dispose of wastewater responsibly.
                </span>
              </p>
            </motion.div>

            {/* CTA Buttons - Mobile First */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-2 sm:px-4"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-gradient-to-r from-ocean-blue to-sky-blue hover:from-ocean-blue/90 hover:to-sky-blue/90 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("rates")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-ocean-blue/30 text-ocean-blue font-semibold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                View Pricing
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
