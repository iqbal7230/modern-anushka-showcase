import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anushkanar3004@gmail.com",
      href: "mailto:anushkanar3004@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 73030 41736",
      href: "tel:+917303041736"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sector-93 A, Noida, India",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/AnushkaNair3004",
      href: "https://linkedin.com/in/AnushkaNair3004"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              {contactInfo.map((contact, index) => (
                <Card key={index} className="group border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <a 
                      href={contact.href}
                      className="flex items-center gap-4 group-hover:text-primary transition-colors"
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                          {contact.label}
                        </p>
                        <p className="text-lg font-medium">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col justify-center space-y-6">
              <Card className="border-0 shadow-elegant bg-gradient-primary">
                <CardContent className="p-8 text-center text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
                  <p className="mb-6 opacity-90">
                    Whether you're looking for a dedicated intern, a collaborative team member, or just want to discuss the latest in data science and technology, I'd love to hear from you.
                  </p>
                  <div className="space-y-4">
                    <Button variant="secondary" size="lg" className="w-full">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                    <Button variant="outline" size="lg" className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                      View GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-soft bg-gradient-subtle">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground text-sm">
                    <strong>Currently seeking:</strong> Internship opportunities in Data Science, Machine Learning, and Full-Stack Development
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;