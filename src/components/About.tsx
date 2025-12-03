import { Recycle, Building2, Sparkles } from "lucide-react";
import innovationSpace from "@/assets/innovation-space.png";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              From World Cup Legacy to Innovation Powerhouse
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The 974 Innovation Hub repurposes shipping containers from Stadium 974 into flexible modules for:
            </p>
            <ul className="text-lg text-muted-foreground leading-relaxed space-y-2 list-disc list-inside ml-4">
              <li>Startups and co-working spaces</li>
              <li>Training and conference halls</li>
              <li>Event and exhibition venues</li>
              <li>Cultural and esports events</li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The hub serves as a living example of sustainable legacy reuse, merging sports heritage with innovation and creativity.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 rounded-lg bg-card shadow-soft">
                <Recycle className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Sustainable</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card shadow-soft">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">974</div>
                <div className="text-sm text-muted-foreground">Stadium Legacy</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card shadow-soft">
                <Sparkles className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img
                src={innovationSpace}
                alt="Innovation Space Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
