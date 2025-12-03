import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Space, Company } from '@/types/spaces';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Clock, Building2 } from 'lucide-react';

interface BookingDialogProps {
  space: Space | null;
  company: Company | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingDialog({ space, company, open, onOpenChange }: BookingDialogProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [durationType, setDurationType] = useState<'hourly' | 'daily'>('hourly');
  const [hours, setHours] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookedDates, setBookedDates] = useState<string[]>([]);
  const { toast } = useToast();

  // Fetch existing bookings for this space
  useEffect(() => {
    if (open && space) {
      fetchBookedDates();
    }
  }, [open, space]);

  const fetchBookedDates = async () => {
    if (!space) return;
    
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('booking_date')
        .eq('space_id', space.id)
        .in('status', ['pending', 'approved']);

      if (error) throw error;

      const dates = data.map(booking => booking.booking_date);
      setBookedDates(dates);
    } catch (error) {
      console.error('Error fetching booked dates:', error);
    }
  };

  if (!space || !company) return null;

  const totalPrice = durationType === 'hourly' 
    ? space.pricePerHour * hours 
    : space.pricePerDay;

  const handleBooking = async () => {
    if (!date) {
      toast({
        title: 'Missing Date',
        description: 'Please select a booking date',
        variant: 'destructive'
      });
      return;
    }

    const selectedDateStr = date.toISOString().split('T')[0];
    
    // Check if date is already booked
    if (bookedDates.includes(selectedDateStr)) {
      toast({
        title: 'Date Already Booked',
        description: 'This date is already booked. Please select another date.',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from('bookings').insert({
        company_id: company.id,
        space_id: space.id,
        space_name: space.name,
        booking_date: selectedDateStr,
        duration_type: durationType,
        hours: durationType === 'hourly' ? hours : null,
        total_price: totalPrice,
        status: 'pending'
      });

      if (error) throw error;

      setBookingComplete(true);
      toast({
        title: 'Booking Submitted! 🎉',
        description: `Your booking for ${space.name} is pending approval.`,
      });
    } catch (error) {
      toast({
        title: 'Booking Failed',
        description: 'Please try again',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setBookingComplete(false);
    setHours(1);
    setDate(new Date());
    onOpenChange(false);
  };

  if (bookingComplete) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-2xl">Booking Submitted!</DialogTitle>
          </DialogHeader>
          
          <div className="py-8 space-y-4">
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            
            <Badge variant="secondary" className="text-lg py-2 px-6">
              Pending for {company.name}
            </Badge>
            
            <div className="text-muted-foreground space-y-1">
              <p><strong>Space:</strong> {space.name}</p>
              <p><strong>Date:</strong> {date?.toLocaleDateString()}</p>
              <p><strong>Total:</strong> QAR {totalPrice}</p>
            </div>
            
            <p className="text-sm text-muted-foreground">
              You will receive a confirmation once your booking is approved.
            </p>
          </div>

          <DialogFooter>
            <Button onClick={handleClose} className="w-full">
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book {space.name}</DialogTitle>
          <DialogDescription className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            Booking as: {company.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Date Selection */}
          <div>
            <Label>Select Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => {
                const dateStr = date.toISOString().split('T')[0];
                return date < new Date() || bookedDates.includes(dateStr);
              }}
              className="rounded-md border"
            />
            {bookedDates.length > 0 && (
              <p className="text-xs text-muted-foreground mt-2">
                Already booked dates are disabled
              </p>
            )}
          </div>

          {/* Duration Type */}
          <div className="space-y-3">
            <Label>Booking Type</Label>
            <RadioGroup value={durationType} onValueChange={(value: any) => setDurationType(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hourly" id="hourly" />
                <Label htmlFor="hourly">Hourly (QAR {space.pricePerHour}/hr)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="daily" id="daily" />
                <Label htmlFor="daily">Full Day (QAR {space.pricePerDay})</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Hours Selection (if hourly) */}
          {durationType === 'hourly' && (
            <div>
              <Label htmlFor="hours">Number of Hours</Label>
              <Input 
                id="hours" 
                type="number" 
                min="1" 
                max="12"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value) || 1)}
              />
            </div>
          )}

          {/* Price Summary */}
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total Price:</span>
              <span className="text-2xl font-bold text-primary">QAR {totalPrice}</span>
            </div>
            {durationType === 'hourly' && (
              <p className="text-sm text-muted-foreground mt-1">
                {hours} hour(s) × QAR {space.pricePerHour}
              </p>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleBooking} disabled={loading}>
            {loading ? 'Submitting...' : 'Confirm Booking'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
