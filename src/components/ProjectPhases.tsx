import { CheckCircle2, Circle } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "Foundation Phase",
    description: "Establishing core infrastructure, setting up modular container spaces, and onboarding initial partners and tenants.",
    status: "completed",
  },
  {
    number: 2,
    title: "Growth Phase",
    description: "Expanding programs, launching incubator initiatives, scaling event operations, and building the innovation community.",
    status: "current",
  },
  {
    number: 3,
    title: "Impact Phase",
    description: "Achieving full operational capacity, establishing regional leadership, and creating measurable economic and social impact.",
    status: "upcoming",
  },
];

const ProjectPhases = () => {
  return (
    <section id="phases" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            Our Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Project Phases
          </h2>
          <p className="text-lg text-muted-foreground">
            A strategic three-phase approach to building the future of innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`flex gap-6 p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 ${
                phase.status === 'current' ? 'border-2 border-primary' : 'border border-border'
              }`}>
                {/* Phase Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl ${
                    phase.status === 'completed'
                      ? 'bg-gradient-to-br from-accent to-primary text-white'
                      : phase.status === 'current'
                      ? 'bg-gradient-to-br from-primary to-primary-light text-white'
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {phase.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                    {phase.status === 'completed' && (
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    )}
                    {phase.status === 'current' && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                        <Circle className="w-4 h-4 text-primary animate-pulse" fill="currentColor" />
                        <span className="text-sm font-semibold text-primary">In Progress</span>
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>
              </div>

              {/* Connector Line */}
              {index < phases.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPhases;
