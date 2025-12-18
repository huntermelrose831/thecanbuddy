const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-blue/20 via-background to-ocean-blue/10 pt-24 pb-16">
      {/* Background Logo - positioned higher on mobile */}
      <div
        className="absolute inset-0 bg-center bg-contain bg-no-repeat opacity-15 md:opacity-20"
        style={{
          backgroundImage: "url('/images/canbuddylogo3.png')",
          backgroundPosition: "center 10%",
        }}
      ></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzBmNzJiYiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="text-center space-y-6 md:space-y-8 animate-fade-in">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight px-4">
              Clean Bins.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-ocean-blue to-sky-blue mt-2">
                Happy Home.
              </span>
            </h1>

            {/* Stats Cards - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 pt-6 md:pt-8 px-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft px-8 py-4 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-ocean-blue to-sky-blue bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-sm md:text-base text-primary font-medium mt-1">
                  Eco-Friendly
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft px-8 py-4 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-ocean-blue to-sky-blue bg-clip-text text-transparent">
                  Same Day
                </div>
                <div className="text-sm md:text-base text-primary font-medium mt-1">
                  Available
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="pt-6 md:pt-8 px-4">
              <p className="text-lg sm:text-xl md:text-2xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
                Eco-friendly, professional trash can cleaning in Santa Cruz. We
                collect and dispose of wastewater responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
