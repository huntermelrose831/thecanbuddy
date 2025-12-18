const ServiceShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-glow">
            <img
              src="/images/mattCleaningCans.jpg"
              alt="Professional bin cleaning service in action"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "600px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  Professional Service You Can Trust
                </h3>
                <p className="text-lg text-white/90">
                  State-of-the-art equipment and eco-friendly cleaning methods
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
