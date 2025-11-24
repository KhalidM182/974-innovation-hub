import { useState } from 'react';
import { spaces } from '@/data/spaces';
import { Space } from '@/types/spaces';
import { BookingDialog } from '@/components/BookingDialog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Clock, Calendar } from 'lucide-react';

export default function Spaces() {
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filterType, setFilterType] = useState<'all' | Space['type']>('all');

  const filteredSpaces = filterType === 'all' 
    ? spaces 
    : spaces.filter(space => space.type === filterType);

  const handleBookNow = (space: Space) => {
    setSelectedSpace(space);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Space</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse and book coworking spaces, training halls, and event venues for your innovation needs
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Tabs value={filterType} onValueChange={(value: any) => setFilterType(value)}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">All Spaces</TabsTrigger>
              <TabsTrigger value="coworking">Coworking</TabsTrigger>
              <TabsTrigger value="training-hall">Training</TabsTrigger>
              <TabsTrigger value="event-venue">Events</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Spaces Grid */}
      <section className="py-8 px-4 pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpaces.map((space) => (
              <Card key={space.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={space.image} 
                    alt={space.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{space.name}</CardTitle>
                    <Badge variant="secondary" className="capitalize">
                      {space.type.replace('-', ' ')}
                    </Badge>
                  </div>
                  <CardDescription>{space.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>Capacity: {space.capacity} people</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>QAR {space.pricePerHour}/hour</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>QAR {space.pricePerDay}/day</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {space.amenities.slice(0, 3).map((amenity, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                      {space.amenities.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{space.amenities.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleBookNow(space)}
                  >
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredSpaces.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No spaces found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <BookingDialog 
        space={selectedSpace}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
