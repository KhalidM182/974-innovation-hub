import { Space } from '@/types/spaces';

export const spaces: Space[] = [
  {
    id: '1',
    name: 'Container Co-Work Hub',
    type: 'coworking',
    capacity: 20,
    pricePerHour: 15,
    pricePerDay: 100,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    amenities: ['High-Speed WiFi', 'Climate Control', 'Standing Desks', '974 Stadium View'],
    description: 'Converted shipping container coworking space at 974 Stadium. Industrial-chic design with modern amenities for startups and entrepreneurs.'
  },
  {
    id: '2',
    name: 'Stadium Container Training Center',
    type: 'training-hall',
    capacity: 25,
    pricePerHour: 50,
    pricePerDay: 350,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80',
    amenities: ['Smart Screen', 'Whiteboard Walls', 'Video Setup', 'Stadium Architecture'],
    description: 'Upcycled shipping container training hall featuring the iconic 974 Stadium aesthetic. Perfect for workshops and tech training sessions.'
  },
  {
    id: '3',
    name: '974 Container Event Arena',
    type: 'event-venue',
    capacity: 150,
    pricePerHour: 150,
    pricePerDay: 1000,
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=800&q=80',
    amenities: ['Modular Stage', 'Sound System', 'LED Lighting', 'Outdoor Terrace', 'Stadium Views'],
    description: 'Multi-container event space inspired by 974 Stadium\'s sustainable design. Ideal for product launches, conferences, and innovation showcases.'
  },
  {
    id: '4',
    name: 'Startup Container Pod',
    type: 'coworking',
    capacity: 12,
    pricePerHour: 20,
    pricePerDay: 140,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    amenities: ['Private WiFi', 'Glass Walls', 'Lounge Area', 'Mini Kitchenette'],
    description: 'Intimate shipping container workspace at the 974 hub. Features industrial design with floor-to-ceiling windows for natural light.'
  },
  {
    id: '5',
    name: 'Innovation Container Lab',
    type: 'training-hall',
    capacity: 20,
    pricePerHour: 40,
    pricePerDay: 280,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
    amenities: ['Tech Equipment', 'Collaboration Tools', 'WiFi', '974 Theme Decor'],
    description: 'Repurposed shipping container designed for hands-on innovation workshops. Embodies the spirit of 974 Stadium\'s sustainable architecture.'
  },
  {
    id: '6',
    name: 'Container Esports Arena',
    type: 'event-venue',
    capacity: 80,
    pricePerHour: 100,
    pricePerDay: 700,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    amenities: ['Gaming Stations', 'Streaming Setup', 'LED Screens', 'Audience Seating'],
    description: 'Container-based esports and gaming venue at 974 Hub. Modern gaming infrastructure within sustainable shipping container architecture.'
  }
];
