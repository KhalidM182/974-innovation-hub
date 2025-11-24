import { Space } from '@/types/spaces';

export const spaces: Space[] = [
  {
    id: '1',
    name: 'Innovation Coworking Space',
    type: 'coworking',
    capacity: 50,
    pricePerHour: 15,
    pricePerDay: 100,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    amenities: ['High-Speed WiFi', 'Coffee Bar', 'Meeting Rooms', 'Printing Services'],
    description: 'Modern coworking space perfect for startups and freelancers. Features ergonomic furniture and collaborative areas.'
  },
  {
    id: '2',
    name: 'Tech Training Hall',
    type: 'training-hall',
    capacity: 30,
    pricePerHour: 50,
    pricePerDay: 350,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    amenities: ['Projector', 'Whiteboard', 'Video Conferencing', 'AV Equipment'],
    description: 'Fully equipped training hall with state-of-the-art presentation tools and comfortable seating.'
  },
  {
    id: '3',
    name: 'Grand Event Venue',
    type: 'event-venue',
    capacity: 200,
    pricePerHour: 150,
    pricePerDay: 1000,
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80',
    amenities: ['Stage', 'Sound System', 'Lighting', 'Catering Area', 'Parking'],
    description: 'Large venue ideal for conferences, product launches, and major networking events.'
  },
  {
    id: '4',
    name: 'Creative Studio',
    type: 'coworking',
    capacity: 20,
    pricePerHour: 20,
    pricePerDay: 140,
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    amenities: ['Natural Light', 'Design Tools', 'Photo Area', 'Coffee'],
    description: 'Bright and inspiring space for creative teams and designers.'
  },
  {
    id: '5',
    name: 'Workshop Hall',
    type: 'training-hall',
    capacity: 25,
    pricePerHour: 40,
    pricePerDay: 280,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    amenities: ['Tables', 'Flipcharts', 'WiFi', 'Breakout Areas'],
    description: 'Perfect for hands-on workshops and interactive training sessions.'
  },
  {
    id: '6',
    name: 'Premium Event Space',
    type: 'event-venue',
    capacity: 100,
    pricePerHour: 100,
    pricePerDay: 700,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    amenities: ['AV System', 'Stage', 'Green Room', 'Reception Area'],
    description: 'Elegant venue for corporate events, seminars, and celebrations.'
  }
];
