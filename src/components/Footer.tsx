import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="font-heading font-semibold text-lg">
                Dr Ashwin Bhandari
              </span>
            </div>
            <p className="font-body text-sm text-white/80 mb-6 max-w-md leading-relaxed">
              Medical Doctor specialising in longevity medicine. Helping individuals 
              optimise their health span through evidence-based interventions and 
              personalised care.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span className="font-body">Central London, United Kingdom</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span className="font-body">+44 7940 016 927</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <span className="font-body">consult@optimisedhealth.co.uk</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 font-body text-sm text-white/70">
              <li><a href="#services" className="hover:text-accent transition-colors">Biomarker Analysis</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Cardiovascular Health</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Cognitive Enhancement</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Metabolic Optimization</a></li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Information</h3>
            <ul className="space-y-2 font-body text-sm text-white/70">
              <li><a href="#about" className="hover:text-accent transition-colors">About Dr Bhandari</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Book Consultation</a></li>
              <li><a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-body text-sm text-white/60">
            © 2025 Dr Ashwin Bhandari. All rights reserved. | Medical practice registration details available on request.
          </p>
          <p className="font-body text-xs text-white/50 mt-2">
            This website provides general health information and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;