import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Heart, Brain, Zap, Calendar, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Biomarker Analysis",
      description: "Comprehensive blood work analysis to identify your unique health markers and areas for optimization.",
      features: ["Complete metabolic panel", "Hormone assessment", "Nutrient analysis", "Inflammatory markers"]
    },
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Advanced cardiovascular risk assessment and prevention strategies for optimal heart health.",
      features: ["Heart rate variability", "Blood pressure optimization", "Lipid profile analysis", "Exercise protocols"]
    },
    {
      icon: Brain,
      title: "Cognitive Enhancement",
      description: "Brain health optimization through targeted interventions for mental clarity and longevity.",
      features: ["Memory assessment", "Stress management", "Sleep optimization", "Nootropic guidance"]
    },
    {
      icon: Zap,
      title: "Metabolic Optimization",
      description: "Personalized nutrition and lifestyle strategies to enhance energy and metabolic function.",
      features: ["Nutrition planning", "Intermittent fasting", "Supplement protocols", "Energy optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Comprehensive Care</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Personalised Longevity Medicine
          </h2>
          
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Evidence-based interventions tailored to your unique biology, lifestyle, and health goals. 
            Each consultation includes detailed analysis and actionable recommendations.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-lg font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Process Overview */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Your Journey to Optimal Health
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">Initial Consultation</h4>
                    <p className="font-body text-sm text-muted-foreground">Comprehensive health assessment and goal setting session.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">Diagnostic Testing</h4>
                    <p className="font-body text-sm text-muted-foreground">Advanced biomarker analysis and health screening.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">Personalised Plan</h4>
                    <p className="font-body text-sm text-muted-foreground">Tailored interventions and ongoing support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6 text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-heading font-semibold text-foreground mb-2">Flexible Appointments</h4>
                <p className="font-body text-sm text-muted-foreground">In-person or virtual consultations available.</p>
              </div>
              
              <div className="bg-muted/50 rounded-xl p-6 text-center">
                <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h4 className="font-heading font-semibold text-foreground mb-2">Ongoing Support</h4>
                <p className="font-body text-sm text-muted-foreground">Regular follow-ups and plan adjustments.</p>
              </div>
              
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full py-3">
                Schedule Your Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;