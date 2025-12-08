import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">// Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="glow-line max-w-xs mx-auto" />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Interested in collaborating on AI projects or have an opportunity to discuss?
              I'd love to hear from you.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a
              href="tel:+919800639393"
              className="group flex flex-col items-center p-6 rounded-xl glass hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Mobile</h3>
              <p className="text-sm text-muted-foreground text-center">+91 9800639393</p>
            </a>

            <a
              href="mailto:dipanjan761@gmail.com"
              className="group flex flex-col items-center p-6 rounded-xl glass hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground text-center">dipanjan761@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/dipanjan-kuila"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-xl glass hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground text-center">Let's connect professionally</p>
            </a>

            <a
              href="https://github.com/DipanjanKuila"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-xl glass hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground text-center">Check out my code</p>
            </a>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">India</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow font-semibold px-8"
                asChild
              >
                <a href="mailto:dipanjan761@gmail.com">
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 font-semibold px-8"
                asChild
              >
                <a href="https://www.linkedin.com/in/dipanjan-kuila" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
