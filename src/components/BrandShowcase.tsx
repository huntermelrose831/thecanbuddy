import { motion } from "framer-motion";
import { Sparkles, Waves } from "lucide-react";

const BrandShowcase = () => {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-white via-sky-blue/5 to-white">
      {/* Decorative wave pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-ocean-blue"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Logo Display */}
          <motion.div
            className="relative group flex items-center gap-6 -ml-[15px]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Glow effect behind logos */}
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-blue/20 via-ocean-blue/20 to-sky-blue/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Logo container with glass effect - wavelogo2 */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

              <img
                src="/images/wavelogo2.png"
                alt="The Can Buddy - Santa Cruz Trash Can Cleaning"
                className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain relative z-10"
              />
            </div>

            {/* Logo container with glass effect - wavelogo3 */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out delay-100" />

              <img
                src="/images/wavelogo3.png"
                alt="The Can Buddy Logo"
                className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain relative z-10"
              />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-sky-blue to-ocean-blue rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>

          {/* Brand Message */}
          <motion.div
            className="text-center lg:text-left max-w-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-blue/10 rounded-full text-ocean-blue font-semibold text-sm mb-4">
              <Waves className="w-4 h-4" />
              <span>Santa Cruz's Finest</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Fresh Bins,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-blue to-sky-blue">
                Happy Homes
              </span>
            </h2>

            <p className="text-primary/70 text-base sm:text-lg leading-relaxed">
              Born and raised in Santa Cruz, we're committed to keeping our
              beautiful beach community clean—one trash can at a time.
              Eco-friendly cleaning that's good for you and good for our coast.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-primary/60">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Locally Owned</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary/60">
                <div className="w-2 h-2 bg-sky-blue rounded-full animate-pulse" />
                <span>Ocean Safe Products</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary/60">
                <div className="w-2 h-2 bg-ocean-blue rounded-full animate-pulse" />
                <span>Santa Cruz Based</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandShowcase;
