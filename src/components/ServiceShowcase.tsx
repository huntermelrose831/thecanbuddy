import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

type Slide =
  | { type: "image"; src: string; label: string; fit: "cover" | "contain" }
  | { type: "video"; src: string; label: string; poster: string };

const slides: Slide[] = [
  { type: "image", src: "/images/mattCleaningCans.jpg", label: "Matt at Work", fit: "cover" },
  { type: "video", src: "/videos/spraydownvideo.mp4", label: "High-Pressure Spray Down", poster: "/images/spraying.png" },
  { type: "image", src: "/images/cleaningprocess1.jpg", label: "Cleaning Process", fit: "cover" },
  { type: "image", src: "/images/PXL_20260729_171021006.jpg", label: "In Action", fit: "cover" },
  { type: "video", src: "/videos/cleaningprocessvideo.mp4", label: "Full Cleaning Process", poster: "/images/cleaningprocess1.jpg" },
  { type: "image", src: "/images/mounted.jpg", label: "Mounted Equipment", fit: "cover" },
  { type: "image", src: "/images/onthetruck.jpg", label: "On the Truck", fit: "cover" },
  { type: "image", src: "/images/Before-After-Pails3.png", label: "Before & After", fit: "cover" },
  { type: "image", src: "/images/before-afterv2.jpeg", label: "Results", fit: "cover" },
  { type: "image", src: "/images/boardwalk.png", label: "Boardwalk Cleaning", fit: "cover" },
  { type: "image", src: "/images/upscaledLogo.png", label: "The Can Buddy", fit: "contain" },
];

const ServiceShowcase = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentSlide = slides[index];

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000,
    );
    return () => clearInterval(id);
  }, [isPaused]);

  // When switching to a video slide, pause auto-advance until video ends
  useEffect(() => {
    if (currentSlide.type === "video" && videoRef.current) {
      setIsPaused(true);
      const vid = videoRef.current;
      const onEnded = () => {
        setIndex((i) => (i + 1) % slides.length);
        setIsPaused(false);
      };
      vid.addEventListener("ended", onEnded);
      return () => vid.removeEventListener("ended", onEnded);
    }
  }, [index, currentSlide.type]);

  const handleManualChange = (newIndex: number) => {
    setIndex(newIndex);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-10">
            See Us in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-blue to-sky-blue">
              Action
            </span>
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-glow h-[500px] sm:h-[600px]">
            {currentSlide.type === "video" ? (
              <video
                ref={videoRef}
                key={currentSlide.src}
                src={currentSlide.src}
                poster={currentSlide.poster}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                key={currentSlide.src}
                src={currentSlide.src}
                alt={currentSlide.label}
                className={`w-full h-full transition-opacity duration-500 ${
                  currentSlide.fit === "contain"
                    ? "object-contain bg-white p-8"
                    : "object-cover"
                }`}
              />
            )}

            {/* Slide label */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-primary shadow">
              {currentSlide.type === "video" && <Play className="w-3 h-3 fill-current" />}
              {currentSlide.label}
            </div>

            <button
              onClick={() =>
                handleManualChange((index - 1 + slides.length) % slides.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>

            <button
              onClick={() => handleManualChange((index + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>

            {/* Dot indicators — grouped by type (video = square, image = circle) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => handleManualChange(i)}
                  className={`transition-all duration-300 ${
                    slide.type === "video" ? "rounded-sm w-3 h-3" : "rounded-full w-2 h-2"
                  } ${i === index ? "bg-accent scale-125" : "bg-white/60"}`}
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
