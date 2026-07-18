import { Phone, Mail, MapPin, Clock, CheckCircle2, CalendarCheck, UserCheck, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const JOBATORY_URL = "https://thecanbuddy.jobatory.com/home";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-sky-blue/10 via-background to-ocean-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We use <span className="text-accent font-semibold">Jobatory</span> to make signing up, scheduling, and managing your service as easy as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Jobatory CTA Card */}
          <Card className="p-8 md:p-10 bg-white shadow-medium border-2 border-accent/20 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                Powered by Jobatory
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                Sign up online in minutes
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our online portal makes it simple to start service, choose your plan, and manage everything from one place — no phone calls required.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                { icon: CalendarCheck, text: "Pick your plan and schedule online" },
                { icon: UserCheck,     text: "Manage your account anytime" },
                { icon: Bell,          text: "Get service reminders and updates" },
                { icon: CheckCircle2,  text: "Easy cancellation, no hassle" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-ocean-blue to-sky-blue rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{text}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="w-full bg-gradient-ocean hover:shadow-glow transition-all duration-300 text-lg font-bold py-6 h-auto rounded-xl"
              onClick={() => window.open(JOBATORY_URL, "_blank")}
            >
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Start Service on Jobatory
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already a customer?{" "}
              <a
                href="https://thecanbuddy.jobatory.com/auth/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:underline"
              >
                Log in to your account
              </a>
            </p>
          </Card>

          {/* Contact Info */}
          <div className="space-y-5">
            <Card className="p-6 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-sky rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-1">Phone</h3>
                  <a href="tel:+18313316174" className="text-muted-foreground hover:text-accent font-medium">
                    (831) 331-6174
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Mon–Sat: 8am – 6pm</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-sky rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-1">Email</h3>
                  <a href="mailto:thecanbuddy8@gmail.com" className="text-muted-foreground hover:text-accent font-medium">
                    thecanbuddy8@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-sky rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-1">Service Area</h3>
                  <p className="text-muted-foreground">Santa Cruz County</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-sky rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Monday – Friday</p>
                  <p className="text-sm text-muted-foreground mt-1">8:00 AM – 3:00 PM</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
