import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Gallery images from assets
  const galleryImages = [
    { id: 1, title: "Main Building", category: "Architecture", image: new URL("@/assets/image1.png", import.meta.url).href },
    { id: 2, title: "Innovation Lab", category: "Facilities", image: new URL("@/assets/image2.png", import.meta.url).href },
    { id: 3, title: "Collaborative Space", category: "Interior", image: new URL("@/assets/image3.png", import.meta.url).href },
    { id: 4, title: "Event Hall", category: "Venues", image: new URL("@/assets/image4.png", import.meta.url).href },
    { id: 5, title: "Sustainable Design", category: "Architecture", image: new URL("@/assets/image5.png", import.meta.url).href },
    { id: 6, title: "Community Area", category: "Interior", image: new URL("@/assets/image.png", import.meta.url).href },
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
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* Gallery image */}
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
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
              Explore our state-of-the-art facilities designed to foster innovation and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
