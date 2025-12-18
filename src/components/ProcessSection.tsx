import { useState, useEffect } from "react";

const ProcessSection = () => {
  const images = [
    "/images/Before-After-Pails3.png",
    "/images/before-afterv2.jpeg",
    "/images/bincleaningprocess.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimating(false);
      }, 500); // Half of the animation duration
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-ocean-blue to-deep-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-glow max-w-md w-full relative">
                <div className="overflow-hidden">
                  <img
                    src={images[currentImageIndex]}
                    alt="Can Cleaning Process"
                    className={`w-full h-auto object-cover transition-transform duration-1000 ${
                      isAnimating ? "-translate-x-full" : "translate-x-0"
                    }`}
                    key={currentImageIndex}
                    style={{
                      animation: isAnimating
                        ? "none"
                        : "slideInFromRight 1s ease-out",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                More Than Just Empty —{" "}
                <span className="text-sky-blue bg-gradient-to-r from-sky-blue to-light-blue bg-clip-text text-transparent">
                  Truly Clean
                </span>
              </h2>
              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white/90">
                <p className="font-medium text-white">
                  At The Can Buddy, we make sure your bins aren't just emptied —
                  they're truly clean.
                </p>
                <div className="space-y-4 pl-4 border-l-4 border-sky-blue/50">
                  <p>
                    First, we arrive curbside after your trash pickup. Each can
                    is lifted into our specialized cleaning system, where{" "}
                    <span className="font-semibold text-white">
                      high‑pressure, 200° hot water jets
                    </span>{" "}
                    blast away grime, germs, and odors — no harsh chemicals
                    needed.
                  </p>
                  <p>
                    The dirty water is collected and{" "}
                    <span className="font-semibold text-white">
                      disposed of responsibly
                    </span>
                    , never left in your street or yard.
                  </p>
                  <p>
                    Finally, we sanitize and deodorize your cans, leaving them
                    fresh, spotless, and ready to use again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
