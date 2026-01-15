const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2">
                <img
                  src="/images/wavelogo.jpeg"
                  alt="The Can Buddy Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-2xl font-bold">The Can Buddy</span>
            </div>
            <p className="text-primary-foreground/80">
              Santa Cruz's premier eco-friendly trash can cleaning service.
              Keeping your bins fresh and your community clean.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#rates" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Service Area</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Santa Cruz</li>
              <li>Aptos</li>
              <li>Capitola</li>
              <li>Scotts Valley</li>
              <li>Live Oak</li>
              <li>Seabright</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>
            &copy; {currentYear} The Can Buddy. All rights reserved. | Proudly
            serving Santa Cruz County | Created by Hunter Melrose{" "}
            <a
              href="https://huntermelrose.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              huntermelrose.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
