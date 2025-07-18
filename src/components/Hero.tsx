import { Button } from "@/components/ui/button";
import { CalendarDays, Heart, Activity } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dr Ashwin Bhandari - Longevity Medicine Specialist"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">Special interest in longevity</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Optimise your health.
            <br />
            <span className="text-accent">Live longer,</span>
            <br />
            live better.
          </h1>
          
          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            A tailored, individualised approach to help you achieve personal health goals 
            and improve longevity markers through evidence-based medicine.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              asChild
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="https://calendly.com/drash-optimisedhealth/30min" target="_blank" rel="noopener noreferrer">
                <CalendarDays className="w-5 h-5 mr-2" />
                Book Consultation
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/50 text-white bg-transparent hover:bg-white/20 hover:text-white px-8 py-4 rounded-full backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent" />
              <span className="font-body text-sm">Biomarker Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" />
              <span className="font-body text-sm">Metabolic Optimisation</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-accent" />
              <span className="font-body text-sm">Personalised Plans</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;