import { CheckCircle2, Circle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timelinePhases = [
  {
    phase: "Phase 1",
    title: "Project Initiation",
    period: "Q4 2022",
    status: "completed",
    description: "Project charter development, stakeholder identification, and feasibility study completion.",
    milestones: [
      "Project charter approved",
      "Stakeholder analysis completed",
      "Initial budget allocated"
    ]
  },
  {
    phase: "Phase 2",
    title: "Planning & Design",
    period: "Q1-Q2 2023",
    status: "completed",
    description: "Detailed planning of hub transformation, architectural designs, and resource allocation.",
    milestones: [
      "Architectural plans finalized",
      "Resource management plan created",
      "Risk assessment completed"
    ]
  },
  {
    phase: "Phase 3",
    title: "Construction & Development",
    period: "Q3 2023 - Q2 2024",
    status: "completed",
    description: "Physical transformation of Stadium 974 into innovation hub facilities.",
    milestones: [
      "Demolition and preparation",
      "Core facilities constructed",
      "Technology infrastructure installed"
    ]
  },
  {
    phase: "Phase 4",
    title: "Program Development",
    period: "Q3-Q4 2024",
    status: "completed",
    description: "Launch of innovation programs, partnerships establishment, and community building.",
    milestones: [
      "Partnership agreements signed",
      "Mentorship program launched",
      "First cohort onboarded"
    ]
  },
  {
    phase: "Phase 5",
    title: "Operations & Growth",
    period: "Q1 2025 - Ongoing",
    status: "in-progress",
    description: "Full operational capacity with continuous improvement and scaling initiatives.",
    milestones: [
      "50+ startups hosted",
      "International partnerships established",
      "Sustainability targets on track"
    ]
  },
  {
    phase: "Phase 6",
    title: "Future Expansion",
    period: "2026 & Beyond",
    status: "planned",
    description: "Regional expansion and establishment as Middle East's leading innovation ecosystem.",
    milestones: [
      "Regional hub network launch",
      "Advanced research facilities",
      "Global innovation partnerships"
    ]
  }
];

const Timeline = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-6 h-6 text-green-500" />;
      case "in-progress":
        return <Clock className="w-6 h-6 text-primary animate-pulse" />;
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      completed: "bg-green-100 text-green-700 border-green-200",
      "in-progress": "bg-primary/10 text-primary border-primary/20",
      planned: "bg-muted text-muted-foreground border-border"
    };
    const labels = {
      completed: "Completed",
      "in-progress": "In Progress",
      planned: "Planned"
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <section id="timeline" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            Project Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Journey to Innovation
          </h2>
          <p className="text-lg text-muted-foreground">
            From World Cup legacy to innovation powerhouse - tracking our transformation milestones and future vision.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-primary to-muted-foreground/30 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelinePhases.map((phase, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-[26px] w-8 h-8 rounded-full bg-background border-4 border-primary items-center justify-center z-10">
                    {getStatusIcon(phase.status)}
                  </div>

                  {/* Content Card */}
                  <Card className="md:ml-20 hover:shadow-medium transition-all duration-300 border-l-4 border-l-primary">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-bold text-primary">{phase.phase}</span>
                            {getStatusBadge(phase.status)}
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {phase.title}
                          </h3>
                          <p className="text-sm text-muted-foreground font-medium">{phase.period}</p>
                        </div>
                        <div className="md:hidden">
                          {getStatusIcon(phase.status)}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {phase.description}
                      </p>

                      {/* Milestones */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Milestones:</h4>
                        <ul className="space-y-2">
                          {phase.milestones.map((milestone, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{milestone}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4/6</div>
                  <div className="text-sm text-muted-foreground">Phases Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">67%</div>
                  <div className="text-sm text-muted-foreground">Overall Progress</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">On Track</div>
                  <div className="text-sm text-muted-foreground">Project Status</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
