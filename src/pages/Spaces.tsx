import { useState } from 'react';
import { Link } from 'react-router-dom';
import { spaces } from '@/data/spaces';
import { Space } from '@/types/spaces';
import { BookingDialog } from '@/components/BookingDialog';
import { CompanyRegistrationDialog } from '@/components/CompanyRegistrationDialog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Clock, Calendar, Laptop, GraduationCap, Rocket, Lightbulb, Gamepad2, Building2, CheckCircle, ArrowLeft, ClipboardList } from 'lucide-react';
import { useCompany } from '@/hooks/useCompany';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Laptop,
  GraduationCap,
  Calendar,
  Rocket,
  Lightbulb,
  Gamepad2,
};

export default function Spaces() {
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [filterType, setFilterType] = useState<'all' | Space['type']>('all');
  const { company, loading, registerCompany } = useCompany();

  const filteredSpaces = filterType === 'all' 
    ? spaces 
    : spaces.filter(space => space.type === filterType);

  const handleBookNow = (space: Space) => {
    if (!company) {
      setSelectedSpace(space);
      setRegisterOpen(true);
    } else {
      setSelectedSpace(space);
      setDialogOpen(true);
    }
  };

  const handleCompanyRegistered = () => {
    setRegisterOpen(false);
    if (selectedSpace) {
      setDialogOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            {company && (
              <Link to="/my-bookings">
                <Button variant="outline">
                  <ClipboardList className="w-4 h-4 mr-2" />
                  My Bookings
                </Button>
              </Link>
            )}
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a Container Space</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Experience innovation in repurposed 974 Stadium shipping containers - sustainable workspaces, training halls, and event venues
            </p>
            
            {/* Company Status */}
            {!loading && (
              <div className="flex justify-center items-center gap-2 mt-4">
                {company ? (
                  <Badge variant="secondary" className="text-sm py-2 px-4">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Registered as: {company.name}
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-sm py-2 px-4">
                    <Building2 className="w-4 h-4 mr-2" />
                    Register your company to book spaces
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Tabs value={filterType} onValueChange={(value: any) => setFilterType(value)}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="coworking">Co-Work</TabsTrigger>
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
            {filteredSpaces.map((space) => {
              const IconComponent = iconMap[space.icon] || Laptop;
              return (
                <Card key={space.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <IconComponent className="w-24 h-24 text-primary/60" />
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
                      {company ? 'Book Now' : 'Register & Book'}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {filteredSpaces.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No container spaces found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <CompanyRegistrationDialog
        open={registerOpen}
        onOpenChange={setRegisterOpen}
        onSuccess={handleCompanyRegistered}
        registerCompany={registerCompany}
      />

      <BookingDialog 
        space={selectedSpace}
        company={company}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
