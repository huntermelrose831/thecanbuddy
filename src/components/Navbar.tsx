import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-sm shadow-soft"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                <img
                  src="/images/wavelogo2.jpg"
                  alt="The Can Buddy Logo"
                  className="h-16 sm:h-20 w-auto mb-[5px] mix-blend-multiply"
                />
                <img
                  src="/images/wavelogo3.jpg"
                  alt="The Can Buddy Logo"
                  className="h-16 sm:h-20 w-auto mb-[5px] mix-blend-multiply"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-primary hidden xs:inline">
                The Can Buddy
              </span>
            </motion.div>

            <div className="hidden min-[918px]:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-foreground hover:text-accent transition-colors font-semibold relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </button>
              <button
                onClick={() => scrollTo("rates")}
                className="text-foreground hover:text-accent transition-colors font-semibold relative group"
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="text-foreground hover:text-accent transition-colors font-semibold relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-ocean-blue to-sky-blue hover:from-ocean-blue/90 hover:to-sky-blue/90 hover:shadow-glow transition-all duration-300 font-bold text-base px-6 lg:px-8 rounded-lg"
                onClick={() => scrollTo("contact")}
              >
                Start Service
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Fixed Mobile Menu Button - Below Navbar */}
      <motion.button
        className="min-[918px]:hidden fixed top-[4.5rem] sm:top-[5.5rem] right-4 z-[100] w-12 h-12 flex items-center justify-center bg-gradient-to-r from-ocean-blue to-sky-blue text-white rounded-full shadow-2xl hover:shadow-glow transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      >
        <Menu className="w-6 h-6" />
      </motion.button>

      {/* Mobile Menu Overlay - Separate from nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              style={{ zIndex: 9998, paddingTop: "4rem" }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-2xl overflow-y-auto"
              style={{ zIndex: 9999, top: "4rem" }}
            >
              <div className="p-6 space-y-6">
                {" "}
                {/* Close Button */}
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <h3 className="text-xl font-bold text-primary">Menu</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-sky-blue/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-primary" />
                  </button>
                </div>
                {/* Navigation Links */}
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setIsOpen(false);
                    }}
                    className="flex items-center w-full text-left py-3 px-4 text-foreground hover:bg-sky-blue/10 rounded-lg transition-colors font-semibold text-lg"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollTo("rates")}
                    className="flex items-center w-full text-left py-3 px-4 text-foreground hover:bg-sky-blue/10 rounded-lg transition-colors font-semibold text-lg"
                  >
                    Pricing
                  </button>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="flex items-center w-full text-left py-3 px-4 text-foreground hover:bg-sky-blue/10 rounded-lg transition-colors font-semibold text-lg"
                  >
                    Contact
                  </button>
                </div>
                {/* Divider */}
                <div className="border-t border-border" />
                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="tel:+18314402247"
                    className="flex items-center gap-3 py-2 px-4 text-ocean-blue hover:bg-sky-blue/10 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">(831) 440-2247</span>
                  </a>
                  <a
                    href="mailto:thecanbuddy@gmail.com"
                    className="flex items-center gap-3 py-2 px-4 text-ocean-blue hover:bg-sky-blue/10 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">Email Us</span>
                  </a>
                </div>
                {/* CTA Button */}
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-ocean-blue to-sky-blue hover:from-ocean-blue/90 hover:to-sky-blue/90 font-bold text-lg py-6 rounded-xl shadow-lg"
                  onClick={() => scrollTo("contact")}
                >
                  Start Service
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
