import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ServiceShowcase from "@/components/ServiceShowcase";
import EcoMessage from "@/components/EcoMessage";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Rates from "@/components/Rates";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimate from "@/components/ScrollAnimate";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBadges />
      <ScrollAnimate>
        <ServiceShowcase />
      </ScrollAnimate>
      <ScrollAnimate delay={100}>
        <EcoMessage />
      </ScrollAnimate>
      <ScrollAnimate delay={200}>
        <ProcessSection />
      </ScrollAnimate>
      <ScrollAnimate delay={100}>
        <WhyChooseUs />
      </ScrollAnimate>
      <ScrollAnimate delay={200}>
        <HowItWorks />
      </ScrollAnimate>
      <ScrollAnimate delay={100}>
        <Rates />
      </ScrollAnimate>
      <ScrollAnimate delay={200}>
        <Reviews />
      </ScrollAnimate>
      <ScrollAnimate delay={100}>
        <ServiceArea />
      </ScrollAnimate>
      <ScrollAnimate delay={200}>
        <FAQ />
      </ScrollAnimate>
      <ScrollAnimate delay={100}>
        <Contact />
      </ScrollAnimate>
      <Footer />
    </div>
  );
};

export default Index;
