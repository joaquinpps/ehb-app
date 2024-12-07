export interface EventRate {
  id: string;
  name: string;
  price: number;
  conditions: string[];
  maxGuests: number;
  amenities: string[];
}

export interface Event {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  code: string;
  rates: EventRate[];
}

export interface Room {
  id: string;
  type: string;
  capacity: number;
  description: string;
  images: string[];
  rates: EventRate[];
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  rating: number;
  rooms: number;
  halls: number;
  restaurants: number;
  location: string;
  events: Event[];
  availableRooms: Room[];
}