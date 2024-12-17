import React from 'react';
import { HotelCard } from '../HotelCard/HotelCard';
import { Hotel } from '../../types/booking';

interface HotelListProps {
  hotels: Hotel[];
  onSelectHotel: (hotel: Hotel) => void;
}

export function HotelList({ hotels, onSelectHotel }: HotelListProps) {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Hoteles para America's Cup</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onSelect={onSelectHotel}
          />
        ))}
      </div>
    </>
  );
}