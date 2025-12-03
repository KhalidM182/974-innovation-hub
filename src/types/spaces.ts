export interface Space {
  id: string;
  name: string;
  type: 'coworking' | 'training-hall' | 'event-venue';
  capacity: number;
  pricePerHour: number;
  pricePerDay: number;
  icon: string;
  amenities: string[];
  description: string;
}

export interface Company {
  id: string;
  name: string;
  email: string;
  phone?: string;
  industry?: string;
  created_at: string;
}

export interface Booking {
  id: string;
  company_id: string;
  space_id: string;
  space_name: string;
  booking_date: string;
  duration_type: 'hourly' | 'daily';
  hours?: number;
  total_price: number;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}
