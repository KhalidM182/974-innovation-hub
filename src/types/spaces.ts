export interface Space {
  id: string;
  name: string;
  type: 'coworking' | 'training-hall' | 'event-venue';
  capacity: number;
  pricePerHour: number;
  pricePerDay: number;
  image: string;
  amenities: string[];
  description: string;
}

export interface Booking {
  id: string;
  spaceId: string;
  spaceName: string;
  date: Date;
  duration: number;
  totalPrice: number;
  userName: string;
  userEmail: string;
}
