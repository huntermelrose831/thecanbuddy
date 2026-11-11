import { useEffect } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

const JOBATORY_URL = "https://thecanbuddy.jobatory.com/home";
const REDIRECT_DELAY_MS = 1500;

// Intermediate page: lets our site register the "Start Service" conversion
// (e.g. for Google Ads) before handing the customer off to Jobatory to book.
const StartService = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(JOBATORY_URL);
    }, REDIRECT_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-sky flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <CheckCircle2 className="w-16 h-16 text-accent mx-auto" />
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Thanks for choosing The Can Buddy!
        </h1>
        <p className="text-muted-foreground text-lg">
          Redirecting you to our secure booking portal to pick your plan and
          schedule service...
        </p>
        <Loader2 className="w-8 h-8 text-accent mx-auto animate-spin" />
        <p className="text-sm text-muted-foreground">
          Not redirected automatically?{" "}
          <a
            href={JOBATORY_URL}
            className="text-accent font-semibold hover:underline"
          >
            Click here to continue
          </a>
        </p>
      </div>
    </div>
  );
};

export default StartService;
