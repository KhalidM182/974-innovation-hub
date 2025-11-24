import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Space } from '@/types/spaces';
import { useToast } from '@/hooks/use-toast';

interface BookingDialogProps {
  space: Space | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingDialog({ space, open, onOpenChange }: BookingDialogProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [durationType, setDurationType] = useState<'hourly' | 'daily'>('hourly');
  const [hours, setHours] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  if (!space) return null;

  const totalPrice = durationType === 'hourly' 
    ? space.pricePerHour * hours 
    : space.pricePerDay;

  const handleBooking = () => {
    if (!name || !email || !date) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Booking Confirmed! 🎉',
      description: `${space.name} booked for ${date.toLocaleDateString()}. Total: QAR ${totalPrice}`,
    });

    // Reset form
    setName('');
    setEmail('');
    setHours(1);
    setDate(new Date());
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book {space.name}</DialogTitle>
          <DialogDescription>
            Capacity: {space.capacity} people
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Personal Info */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <Label>Select Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date()}
              className="rounded-md border"
            />
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
          <Button onClick={handleBooking}>
            Confirm Booking
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
