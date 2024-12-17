import React from 'react';
import { Clock, Users } from 'lucide-react';
import { AdditionalService } from '../../types/booking';

interface AdditionalServicesProps {
  service: AdditionalService;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export function AdditionalServices({ service, quantity, onQuantityChange }: AdditionalServicesProps) {
  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <img src={service.image} alt={service.name} className="w-24 h-24 object-cover rounded-lg" />
      
      <div className="flex-grow ml-4">
        <h3 className="font-medium text-gray-900">{service.name}</h3>
        <div className="flex space-x-4 mt-2 text-sm text-gray-600">
          {service.capacity && (
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              <span>{service.capacity} personas</span>
            </div>
          )}
          {service.timeSlot && (
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>Seleccionar hora</span>
            </div>
          )}
        </div>
        <p className="text-lg font-semibold text-gray-900 mt-2">{service.price.toFixed(2)} €</p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => onQuantityChange(Math.max(0, quantity - 1))}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
        >
          -
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => onQuantityChange(quantity + 1)}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
        >
          +
        </button>
      </div>
    </div>
  );
}