import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Heart, Users } from "lucide-react";

const About = () => {
  const qualifications = [
    "MBBS - Bachelor of Medicine, Bachelor of Surgery",
    "Special interest in longevity medicine"
  ];

  const stats = [
    { number: "500+", label: "Patients Helped", icon: Users },
    { number: "5+", label: "Years Experience", icon: Award }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Dr Bhandari</span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Partner in 
              <span className="text-primary"> Optimal Health</span>
            </h2>
            
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>
                Dr Ashwin Bhandari is a medical doctor specialising in longevity medicine, 
                dedicated to helping individuals optimise their health span and extend their 
                years of vitality through evidence-based interventions.
              </p>
              
              <p>
                With extensive training in metabolic health, biomarker analysis, and 
                personalised medicine, Dr Bhandari takes a comprehensive approach to 
                health optimization that goes beyond traditional healthcare.
              </p>
              
              <p>
                His practice focuses on identifying and addressing the root causes of 
                age-related decline, empowering patients with the knowledge and tools 
                needed to achieve their personal health goals.
              </p>
            </div>
            
            {/* Qualifications */}
            <div className="mt-8">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                Qualifications & Expertise
              </h3>
              <div className="space-y-2">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">{qual}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Philosophy */}
            <div className="mt-8 p-6 bg-muted/30 rounded-xl border-l-4 border-primary">
              <blockquote className="font-body italic text-muted-foreground">
                "My mission is to deliver a tailored, individualised approach that helps 
                people achieve their personal health goals and improve longevity markers 
                through evidence-based medicine and lifestyle optimization."
              </blockquote>
              <cite className="font-heading font-semibold text-foreground mt-3 block">
                - Dr Ashwin Bhandari
              </cite>
            </div>
          </div>
          
          {/* Stats & Visual */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card border-border text-center p-6 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-heading text-2xl font-bold text-foreground mb-1">
                      {stat.number}
                    </div>
                    <div className="font-body text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Specializations */}
            <Card className="bg-card border-border p-6">
              <CardContent className="p-0">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                  Areas of Specialisation
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-body text-xs">Metabolic Health</Badge>
                  <Badge variant="secondary" className="font-body text-xs">Hormone Optimization</Badge>
                  <Badge variant="secondary" className="font-body text-xs">Cardiovascular Risk</Badge>
                  <Badge variant="secondary" className="font-body text-xs">Nutrition Therapy</Badge>
                  <Badge variant="secondary" className="font-body text-xs">Sleep Medicine</Badge>
                  <Badge variant="secondary" className="font-body text-xs">Stress Management</Badge>
                  <Badge variant="secondary" className="font-body text-xs">Supplement Protocols</Badge>
                  <Badge variant="secondary" className="font-body text-xs">Exercise Physiology</Badge>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;