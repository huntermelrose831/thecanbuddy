import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const MobileQuickAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsExpanded(false);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsExpanded(false);
  };

  return (
    <>
      {/* Mobile Quick Actions - Bottom Right */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 md:hidden"
          >
            {/* Expanded Actions */}
            <AnimatePresence>
              {isExpanded && (
                <>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ delay: 0.1 }}
                    onClick={scrollToTop}
                    className="w-12 h-12 bg-white border-2 border-ocean-blue/20 rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                  >
                    <ChevronUp className="w-5 h-5 text-ocean-blue" />
                  </motion.button>

                  <motion.a
                    href="tel:+18314402247"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ delay: 0.05 }}
                    className="w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </motion.a>
                </>
              )}
            </AnimatePresence>

            {/* Main Action Button */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-gradient-to-br from-ocean-blue to-sky-blue rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transition-shadow"
            >
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Floating CTA */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="hidden md:block fixed bottom-8 right-8 z-50"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-ocean-blue to-sky-blue hover:from-ocean-blue/90 hover:to-sky-blue/90 text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95 rounded-full px-6 py-3"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get a Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileQuickAction;
