import { Lightbulb, Users, Calendar, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation Labs",
    description: "State-of-the-art facilities equipped with cutting-edge technology to transform ideas into reality.",
    color: "from-primary to-primary-light",
  },
  {
    icon: Users,
    title: "Entrepreneurship Programs",
    description: "Comprehensive support for startups including mentorship, funding opportunities, and networking events.",
    color: "from-accent to-primary",
  },
  {
    icon: Calendar,
    title: "Events & Conferences",
    description: "World-class venues for hosting international conferences, exhibitions, and community gatherings.",
    color: "from-primary-light to-accent",
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    description: "Built on principles of circular economy and environmental responsibility, setting new standards for green innovation.",
    color: "from-accent to-primary-dark",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Four Pillars of Innovation
          </h2>
          <p className="text-lg text-muted-foreground">
            Our hub is designed around four core pillars that drive sustainable growth and foster a thriving innovation ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 border-border hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
