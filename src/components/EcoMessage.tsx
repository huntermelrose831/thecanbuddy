import { Droplets, Leaf, Recycle, Shield } from "lucide-react";

const EcoMessage = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Environmentally Responsible Service
            </h2>
            <p className="text-xl text-primary-foreground/90">
              We collect and dispose of wastewater responsibly
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">Wastewater Collection</h3>
              <p className="text-sm text-primary-foreground/80">
                All wastewater is safely collected and properly disposed
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">Eco-Friendly Products</h3>
              <p className="text-sm text-primary-foreground/80">
                Biodegradable cleaners that are safe for the environment
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Recycle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">Water Conservation</h3>
              <p className="text-sm text-primary-foreground/80">
                Efficient cleaning methods that minimize water usage
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg">EPA Compliant</h3>
              <p className="text-sm text-primary-foreground/80">
                All processes meet environmental protection standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoMessage;
