import { Hotel, Event } from '../types/booking';

export const mockEvent: Event = {
  id: '1',
  name: "America's Cup 2024",
  startDate: '2024-03-01',
  endDate: '2024-03-15',
  code: 'AC2024',
  rates: [
    {
      id: '1',
      name: 'Tarifa Grupo Estándar',
      price: 180,
      conditions: [
        'Cancelación gratuita hasta 48h antes',
        'Desayuno incluido',
        'Acceso al business center'
      ],
      maxGuests: 2,
      amenities: ['WiFi', 'Gimnasio', 'Servicio de habitaciones']
    },
    {
      id: '2',
      name: 'Tarifa Grupo Premium',
      price: 250,
      conditions: [
        'Cancelación gratuita hasta 24h antes',
        'Pensión completa',
        'Traslados incluidos'
      ],
      maxGuests: 2,
      amenities: ['WiFi', 'Spa', 'Restaurante exclusivo', 'Servicio de conserjería 24h']
    }
  ]
};

export const mockHotels: Hotel[] = [
  {
    id: '1',
    name: 'Hyatt Centric Gran vía',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    rooms: 50,
    halls: 16,
    restaurants: 3,
    location: 'Madrid',
    events: [mockEvent],
    availableRooms: []
  },
  {
    id: '2',
    name: 'Me Madrid by Meliá',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    rooms: 45,
    halls: 16,
    restaurants: 3,
    location: 'Madrid',
    events: [mockEvent],
    availableRooms: []
  },
  {
    id: '3',
    name: 'Only You Barcelona',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    rooms: 60,
    halls: 16,
    restaurants: 3,
    location: 'Barcelona',
    events: [mockEvent],
    availableRooms: []
  }
];