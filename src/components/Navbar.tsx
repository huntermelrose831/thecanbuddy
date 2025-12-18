import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/images/canbuddylogo3.png"
              alt="The Can Buddy Logo"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-primary">
              The Can Buddy
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("rates")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              size="lg"
              className="bg-gradient-ocean hover:shadow-glow transition-all duration-300 font-bold text-base px-8"
              onClick={() => scrollTo("contact")}
            >
              Start Service
            </Button>
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border animate-fade-in">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
              }}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("rates")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              size="lg"
              className="w-full bg-gradient-ocean font-bold"
              onClick={() => scrollTo("contact")}
            >
              Start Service
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
