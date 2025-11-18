import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder for user images
  const galleryImages = [
    { id: 1, title: "Main Building", category: "Architecture" },
    { id: 2, title: "Innovation Lab", category: "Facilities" },
    { id: 3, title: "Collaborative Space", category: "Interior" },
    { id: 4, title: "Event Hall", category: "Venues" },
    { id: 5, title: "Sustainable Design", category: "Architecture" },
    { id: 6, title: "Community Area", category: "Interior" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore the Space
          </h2>
          <p className="text-lg text-muted-foreground">
            Take a visual tour of our state-of-the-art facilities and discover the spaces where innovation comes to life.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className="group overflow-hidden cursor-pointer hover:shadow-strong transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                {/* Placeholder for user images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl font-bold text-primary/40 mb-2">{image.id}</div>
                    <div className="text-sm text-muted-foreground">Your image here</div>
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="text-xs text-white/80 uppercase tracking-wider mb-1">
                      {image.category}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Note for Images */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-card rounded-xl border border-border shadow-soft">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Note:</strong> The gallery currently shows placeholders. Replace these with your actual project images to showcase the 974 Innovation Hub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
