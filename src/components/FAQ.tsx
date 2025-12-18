import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the bin cleaning process work?",
      answer:
        "We arrive shortly after your regular trash pickup. Our specialized truck lifts your bin, blasts away grime with 200° hot water, collects all wastewater, and leaves your bin sanitized and fresh - all at your curb!",
    },
    {
      question: "How often should I have my bins cleaned?",
      answer:
        "We recommend monthly cleanings for optimal freshness and hygiene. However, we offer flexible plans from quarterly to one-time cleanings based on your needs and budget.",
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer:
        "No! We clean your bins curbside after trash pickup. Just leave them out, and we'll handle everything. You'll come home to sparkling clean bins.",
    },
    {
      question: "What happens to the dirty water?",
      answer:
        "We collect and dispose of all wastewater responsibly - never leaving it in your street or yard. Our eco-friendly process ensures proper disposal according to environmental regulations.",
    },
    {
      question: "Do you use harsh chemicals?",
      answer:
        "No harsh chemicals needed! Our high-pressure, 200° hot water system effectively eliminates bacteria, odors, and grime using heat and pressure, making it safe for your family and the environment.",
    },
    {
      question: "Can I clean multiple bins?",
      answer:
        "Absolutely! Our base pricing includes your first bin, and additional bins are just $9 each. Perfect for homes or businesses with multiple trash or recycling containers.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "Your satisfaction is guaranteed! If you're not completely happy with our service, let us know and we'll make it right. We stand behind our work 100%.",
    },
    {
      question: "How do I schedule or cancel a cleaning?",
      answer:
        "Easily manage your service through our customer portal, or simply contact us by phone or email. We offer flexible scheduling and easy cancellation if needed.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-sky">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our service
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-soft overflow-hidden transition-all duration-300 hover:shadow-medium"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors duration-200"
                >
                  <span className="font-semibold text-primary text-lg pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-white rounded-lg shadow-soft">
            <p className="text-lg text-muted-foreground">
              Still have questions?{" "}
              <a
                href="#contact"
                className="text-accent font-semibold hover:underline"
              >
                Contact us
              </a>{" "}
              - we're here to help!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
