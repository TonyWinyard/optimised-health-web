import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Clinic Location",
      details: ["Central London", "Private Consultation Rooms", "Easy Transport Links"]
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+44 20 XXXX XXXX", "Available 9AM - 6PM", "Emergency Contact Available"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["consult@optimisedhealth.co.uk", "Response within 24 hours", "Secure Communication"]
    },
    {
      icon: Clock,
      title: "Consultation Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Virtual appointments available"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Get Started Today</span>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Begin Your Health Journey
          </h2>
          
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Ready to optimise your health and extend your healthspan? Book a consultation 
            or get in touch to learn more about personalised longevity medicine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Schedule Your Consultation
              </CardTitle>
              <CardDescription className="font-body text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours to schedule your appointment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body text-sm font-medium text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-body text-sm font-medium text-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+44 XX XXXX XXXX"
                      className="font-body"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body text-sm font-medium text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="font-body"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your health goals and any specific concerns..."
                    className="font-body resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full py-3"
                >
                  Send Message & Schedule Consultation
                </Button>
                
                <p className="font-body text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and consent to being contacted about your inquiry.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="font-body text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Quick Booking CTA */}
            <Card className="bg-gradient-to-br from-primary to-secondary border-0 text-white">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 mx-auto mb-4 opacity-90" />
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Prefer to Book Directly?
                </h3>
                <p className="font-body text-sm opacity-90 mb-4">
                  Access our online booking system for immediate appointment scheduling.
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-full"
                >
                  Open Booking System
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;