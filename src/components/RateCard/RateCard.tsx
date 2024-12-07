import React from 'react';
import { Check } from 'lucide-react';
import { EventRate } from '../../types/booking';

interface RateCardProps {
  rate: EventRate;
  onSelect: (rate: EventRate) => void;
}

export function RateCard({ rate, onSelect }: RateCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:border-indigo-500 transition-colors">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{rate.name}</h3>
      <p className="text-3xl font-bold text-indigo-600 mb-4">
        €{rate.price}<span className="text-sm text-gray-500">/noche</span>
      </p>
      
      <div className="space-y-3 mb-6">
        {rate.conditions.map((condition, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Check size={16} className="text-green-500" />
            <span className="text-sm text-gray-600">{condition}</span>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4">
        <h4 className="font-medium text-gray-900 mb-2">Servicios incluidos:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {rate.amenities.map((amenity, index) => (
            <li key={index}>• {amenity}</li>
          ))}
        </ul>
      </div>
      
      <button
        onClick={() => onSelect(rate)}
        className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Seleccionar tarifa
      </button>
    </div>
  );
}