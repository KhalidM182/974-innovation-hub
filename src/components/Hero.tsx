import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="974 Innovation Hub Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The <span className="text-accent-foreground">974 Innovation Hub</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Transforming the iconic modular stadium from FIFA World Cup 2022 into a thriving ecosystem for innovation, entrepreneurship, and sustainable development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-strong"
            >
              Discover Our Story
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              Join the Hub
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
