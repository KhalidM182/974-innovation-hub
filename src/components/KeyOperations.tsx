import { Rocket, Calendar, Users, Globe } from "lucide-react";
import { Box, Cpu, Briefcase, DollarSign, Trophy } from "lucide-react";

const activities = [
  { name: "Incubator programs", icon: Rocket },
  { name: "Event management", icon: Calendar },
  { name: "Coworking operations", icon: Users },
  { name: "Digital services", icon: Globe },
];

const resources = [
  { name: "Stadium containers", icon: Box },
  { name: "Tech infrastructure", icon: Cpu },
  { name: "Staff", icon: Briefcase },
  { name: "Funding", icon: DollarSign },
  { name: "Brand legacy", icon: Trophy },
];

const KeyOperations = () => {
  return (
    <section id="operations" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Key Activities */}
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Key Activities
            </h2>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-accent/5 transition-all duration-300 shadow-soft hover:shadow-medium"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg font-medium text-foreground">{activity.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Resources */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              What We Have
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Key Resources
            </h2>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-primary/5 transition-all duration-300 shadow-soft hover:shadow-medium"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg font-medium text-foreground">{resource.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyOperations;
