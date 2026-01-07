import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/boardwalk.png",
    label: "Boardwalk Cleaning",
    fit: "cover",
  },
  { src: "/images/spraying.png", label: "Process", fit: "cover" },
  {
    src: "/images/mattCleaningCans.jpg",
    label: "Cleaning Process",
    fit: "cover",
  },
  { src: "/images/canbuddylogo.png", label: "Our Logo", fit: "contain" },
];

const ServiceShowcase = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-glow">
            <img
              src={slides[index].src}
              alt={slides[index].label}
              className={`w-full h-auto ${
                slides[index].fit === "contain"
                  ? "object-contain bg-white p-8"
                  : "object-cover"
              }`}
              style={{
                maxHeight: slides[index].fit === "contain" ? "520px" : "600px",
              }}
            />

            <div className="absolute top-6 left-6 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-primary">
              {slides[index].label}
            </div>

            <button
              onClick={() =>
                setIndex((i) => (i - 1 + slides.length) % slides.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>

            <button
              onClick={() => setIndex((i) => (i + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full ${
                    i === index ? "bg-accent" : "bg-white/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
