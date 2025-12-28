import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [foodScrapCount, setFoodScrapCount] = useState<number>(0);

  useEffect(() => {
    const count = Number(sessionStorage.getItem("foodScrapCount") || 0);
    if (count > 0) {
      setFoodScrapCount(count);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      bins: formData.get("bins"),
      details: formData.get("details"),
    };

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send email");

      toast({
        title: "Thanks — request received!",
        description: `We'll call or email you within 24 hours to confirm.${
          foodScrapCount > 0
            ? ` Includes ${foodScrapCount} food-scrap bin(s).`
            : ""
        }`,
      });

      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Start Your Service Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a free quote and experience the difference of professionally
            cleaned bins
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 bg-white shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    placeholder="John"
                    required
                    className="border-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Last Name
                  </label>
                  <Input
                    name="lastName"
                    placeholder="Doe"
                    required
                    className="border-2"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="border-2"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="(831) 555-0123"
                  required
                  className="border-2"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Address in Santa Cruz County
                </label>
                <Input
                  name="address"
                  placeholder="123 Beach St"
                  required
                  className="border-2"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Number of Bins
                </label>
                <Input
                  name="bins"
                  type="number"
                  min="1"
                  placeholder="2"
                  required
                  className="border-2"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Additional Details
                </label>
                <Textarea
                  name="details"
                  placeholder="Tell us about your needs..."
                  className="border-2 min-h-[100px]"
                />
              </div>

              {foodScrapCount > 0 && (
                <div className="p-4 bg-accent/10 rounded-md text-accent font-medium">
                  You selected{" "}
                  <span className="font-bold">{foodScrapCount}</span> food-scrap
                  bin(s) at <span className="font-bold">$5.00</span> each. This
                  will be included in your quote.
                </div>
              )}

              {foodScrapCount > 0 && (
                <input
                  type="hidden"
                  name="foodScrapBins"
                  value={foodScrapCount}
                />
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-ocean hover:shadow-glow transition-all duration-300 text-lg font-bold py-6 h-auto"
              >
                {isSubmitting ? "Sending..." : "Start Service - Get Free Quote"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-sky rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+18313316174"
                    className="text-muted-foreground hover:text-accent font-medium"
                  >
                    (831) 331-6174
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Mon-Sat: 8am - 6pm
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-sky rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:thecanbuddy8@gmail.com"
                    className="text-muted-foreground hover:text-accent font-medium"
                  >
                    thecanbuddy8@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-sky rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-1">
                    Service Area
                  </h3>
                  <p className="text-muted-foreground">City of Santa Cruz </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Aptos, Capitola, Scotts Valley & More Coming Soon!
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-sky rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-1">
                    Business Hours
                  </h3>
                  <p className="text-muted-foreground">Monday - Friday</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    8:00 AM - 3:00 PM
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
