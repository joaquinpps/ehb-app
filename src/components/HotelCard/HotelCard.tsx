import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Hotel } from '../../types/hotel';

interface HotelCardProps {
  hotel: Hotel;
  onSelect: (hotel: Hotel) => void;
}

export function HotelCard({ hotel, onSelect }: HotelCardProps) {
  const handleMapClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.name + ' ' + hotel.location)}`, '_blank');
  };

  return (
    <div 
      onClick={() => onSelect(hotel)}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
    >
      <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{hotel.name}</h3>
          <button 
            onClick={handleMapClick}
            className="text-indigo-600 hover:text-indigo-800"
          >
            <MapPin size={20} />
          </button>
        </div>
        
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={i < hotel.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        
        <div className="text-sm text-gray-600">
          <p>{hotel.rooms} habitaciones • {hotel.halls} salas • {hotel.restaurants} restaurantes</p>
        </div>
      </div>
    </div>
  );
}