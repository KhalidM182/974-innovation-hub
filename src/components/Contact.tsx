import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-medium animate-fade-in-up">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interest in the 974 Innovation Hub..."
                    rows={6}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-primary-foreground text-lg py-6">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of the following channels. Our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-soft transition-shadow duration-300">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:info@974innovationhub.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@974innovationhub.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-soft transition-shadow duration-300">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a href="tel:+97412345678" className="text-muted-foreground hover:text-primary transition-colors">
                      +974 1234 5678
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-soft transition-shadow duration-300">
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Former Stadium 974 Site<br />
                      Ras Abu Aboud, Doha, Qatar
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
