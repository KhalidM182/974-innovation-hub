import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useCompany } from '@/hooks/useCompany';
import { Booking } from '@/types/spaces';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Building2, AlertCircle } from 'lucide-react';

export default function MyBookings() {
  const { company, loading: companyLoading } = useCompany();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (company) {
      fetchBookings();
    } else if (!companyLoading) {
      setLoading(false);
    }
  }, [company, companyLoading]);

  const fetchBookings = async () => {
    if (!company) return;
    
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('company_id', company.id)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setBookings(data as Booking[]);
    }
    setLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-700 border-yellow-500/30';
      case 'approved': return 'bg-green-500/20 text-green-700 border-green-500/30';
      case 'rejected': return 'bg-red-500/20 text-red-700 border-red-500/30';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Bookings</h1>
          {company && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="w-5 h-5" />
              <span>{company.name}</span>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4 pb-20">
        <div className="container mx-auto">
          {loading || companyLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading bookings...</p>
            </div>
          ) : !company ? (
            <Card className="max-w-md mx-auto text-center">
              <CardHeader>
                <AlertCircle className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <CardTitle>No Company Registered</CardTitle>
                <CardDescription>
                  You need to register your company before you can view bookings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/spaces">
                  <Button>Go to Spaces & Register</Button>
                </Link>
              </CardContent>
            </Card>
          ) : bookings.length === 0 ? (
            <Card className="max-w-md mx-auto text-center">
              <CardHeader>
                <Calendar className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <CardTitle>No Bookings Yet</CardTitle>
                <CardDescription>
                  You haven't made any bookings yet. Browse our container spaces to get started.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/spaces">
                  <Button>Browse Spaces</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookings.map((booking) => (
                <Card key={booking.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{booking.space_name}</CardTitle>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </Badge>
                    </div>
                    <CardDescription>
                      Booked on {new Date(booking.created_at).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Date: {new Date(booking.booking_date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>
                        {booking.duration_type === 'hourly' 
                          ? `${booking.hours} hour(s)` 
                          : 'Full Day'}
                      </span>
                    </div>
                    <div className="pt-3 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Total</span>
                        <span className="text-lg font-bold text-primary">
                          QAR {booking.total_price}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Quick Actions */}
          {company && (
            <div className="mt-8 text-center">
              <Link to="/spaces">
                <Button variant="outline">
                  Book Another Space
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
