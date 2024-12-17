import React from 'react';
import { Star } from 'lucide-react';

interface HotelHeaderProps {
  hotel: {
    name: string;
    rating: number;
    rooms: number;
    halls: number;
    restaurants: number;
    distanceToCenter: string;
  };
}

export function HotelHeader({ hotel }: HotelHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
      <div className="flex items-center space-x-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < hotel.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-600 mt-2">
        {hotel.rooms} habitaciones • {hotel.halls} salas • {hotel.restaurants} restaurantes • {hotel.distanceToCenter} del centro de la ciudad
      </p>
    </div>
  );
}