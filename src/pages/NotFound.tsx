import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Recycle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-sky flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <Recycle className="w-24 h-24 text-accent mx-auto animate-bounce" />
        <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-primary">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Oops! Looks like this page got cleaned away. Let's get you back home.
        </p>
        <Link to="/">
          <Button
            size="lg"
            className="bg-gradient-ocean hover:shadow-glow transition-all duration-300"
          >
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
