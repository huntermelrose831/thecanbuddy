import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const ServiceArea = () => {
  const serviceAreas = [
    "Santa Cruz",
    "Aptos",
    "Capitola",
    "Soquel",
    "Live Oak",
    "Scotts Valley",
    "Seabright",
    "Westside",
    "Downtown",
    "Harbor",
    "Twin Lakes",
    "Pleasure Point",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Service Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proudly serving Santa Cruz County and surrounding areas
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white shadow-soft">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Map Placeholder */}
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-sky-blue/20 to-ocean-blue/20 rounded-2xl p-8 min-h-[300px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/10 to-transparent"></div>
                  <img
                    src="/images/service-area-map.png"
                    alt="Santa Cruz County Service Area Map"
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />
                  <div className="relative z-10 mt-4"></div>
                </div>
              </div>

              {/* Service Areas List */}
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  We Service These Areas:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => {
                    const comingSoonAreas = [
                      "Aptos",
                      "Scotts Valley",
                      "Capitola",
                      "Soquel",
                      "Pleasure Point",
                    ];
                    const isComingSoon = comingSoonAreas.includes(area);
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-foreground"
                      >
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          {area}
                          {isComingSoon && (
                            <span className="italic text-muted-foreground ml-2">
                              coming soon
                            </span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">
                      Don't see your area?
                    </strong>{" "}
                    Contact us! We're always expanding our service zones.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
