import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';
import { HotelCard } from './components/HotelCard/HotelCard';
import { EventDetails } from './components/EventDetails/EventDetails';
import { RateCard } from './components/RateCard/RateCard';
import { Hotel, Event } from './types/booking';

const mockEvent: Event = {
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

const mockHotels: Hotel[] = [
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

function App() {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="relative mb-16">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
            alt="Hotel banner"
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="absolute -bottom-8 left-0 right-0">
            <SearchBar
              location="America's Cup 2024"
              rooms="Habitaciones disponibles"
              dates="1 Mar - 15 Mar 2024"
              onSearch={() => console.log('Searching...')}
            />
          </div>
        </div>

        {selectedHotel ? (
          <>
            <EventDetails event={mockEvent} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockEvent.rates.map((rate) => (
                <RateCard
                  key={rate.id}
                  rate={rate}
                  onSelect={() => console.log('Rate selected:', rate)}
                />
              ))}
            </div>
            <button
              onClick={() => setSelectedHotel(null)}
              className="mt-8 text-indigo-600 hover:text-indigo-800"
            >
              ← Volver a la lista de hoteles
            </button>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Hoteles para America's Cup</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockHotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                  onSelect={setSelectedHotel}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;