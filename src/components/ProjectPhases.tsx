import progressImage from "@/assets/progress-construction.png";

const phases = [
  {
    number: 1,
    title: "Foundation Phase (Days 1-40)",
    description: "Planning, approvals, and preparation",
    activities: [
      "Conduct feasibility study",
      "Obtain government approvals & permits",
      "Develop project timeline & budget",
      "Hire project management & engineering teams",
      "Design master plan & layout",
      "Inspect stadium components",
      "Dismantle stadium structures",
      "Label and document container modules",
      "Transport containers to storage",
      "Identify and secure event site"
    ]
  },
  {
    number: 2,
    title: "Growth Phase (Days 41-70)",
    description: "Site preparation and construction",
    activities: [
      "Prepare site (leveling, utilities, roads)",
      "Transport containers to new site",
      "Assemble container structures",
      "Install power, water & waste systems",
      "Modify containers for shops/offices",
      "Build public facilities (parking, restrooms)",
      "Interior finishing (painting, lighting)",
      "Install signage and branding",
      "Set up decoration and landscaping",
      "Procure and install furniture & equipment"
    ]
  },
  {
    number: 3,
    title: "Impact Phase (Days 71-80)",
    description: "Launch and operational readiness",
    activities: [
      "Develop event schedule & activities",
      "Partner with startups, vendors & sponsors",
      "Recruit volunteers & staff",
      "Conduct volunteer training & orientation",
      "Launch marketing & promotion campaign",
      "Set up ticketing & registration system",
      "Test systems (power, security, IT, logistics)",
      "Final inspection & authority approval",
      "Grand opening & event execution",
      "Post-event evaluation & reporting"
    ]
  }
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
            Project Timeline
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            A strategic 80-day implementation plan to transform Stadium 974's legacy into an innovation hub at Ras Abu Aboud, aligned with Qatar National Vision 2030
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Location: Ras Abu Aboud (near original Stadium 974)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Total Duration: 80 days</span>
            </div>
          </div>
        </div>

        {/* Progress Image */}
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in rounded-2xl overflow-hidden shadow-strong">
          <img 
            src={progressImage} 
            alt="Construction Progress at Ras Abu Aboud" 
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-6 p-8 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 border border-border">
                {/* Phase Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl bg-gradient-to-br from-primary to-accent text-white">
                    {phase.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground mb-4">{phase.description}</p>
                  
                  {/* Activities List */}
                  <div className="grid md:grid-cols-2 gap-2">
                    {phase.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < phases.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Qatar Vision 2030 Alignment */}
        <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Aligned with Qatar National Vision 2030</h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            The 974 Innovation Hub supports Qatar's strategic pillars of economic development, environmental sustainability, 
            and social progress by transforming World Cup legacy assets into a thriving ecosystem for innovation, 
            entrepreneurship, and community development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectPhases;
