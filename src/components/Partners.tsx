import { Building2, Briefcase, Monitor, Wifi, GraduationCap } from "lucide-react";

const partners = [
  { name: "Qatar Foundation", icon: GraduationCap },
  { name: "QDB", icon: Building2 },
  { name: "Microsoft", icon: Monitor },
  { name: "Ooredoo", icon: Wifi },
  { name: "Qatar University", icon: GraduationCap },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            Our Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            Collaborating with leading organizations to build a world-class innovation ecosystem
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 flex flex-col items-center justify-center gap-4 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <partner.icon className="w-12 h-12 text-primary" />
              <p className="text-center font-semibold text-foreground text-sm">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
