import { Target, Globe, Zap } from "lucide-react";

const visionPoints = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To create a world-class innovation ecosystem that empowers entrepreneurs and drives sustainable economic growth in the region.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Connecting local talent with global opportunities, fostering international collaboration and knowledge exchange.",
  },
  {
    icon: Zap,
    title: "Future Ready",
    description: "Pioneering new approaches to innovation and sustainability that will shape the future of urban development.",
  },
];

const Vision = () => {
  return (
    <section id="vision" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            Our Vision
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Building Tomorrow's Innovation Landscape
          </h2>
          <p className="text-lg text-muted-foreground">
            We envision a future where sustainable innovation drives economic prosperity and creates lasting positive impact for communities worldwide.
          </p>
        </div>

        {/* Vision Points */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-8 rounded-2xl bg-card hover:shadow-medium transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <point.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-strong">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-accent"></div>
            <div className="relative p-12 text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Be Part of the Future?
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join us in creating a sustainable and innovative future. Whether you're a startup, investor, or innovator, there's a place for you at the 974 Innovation Hub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
