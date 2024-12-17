import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { RoomType } from '../../types/booking';

interface RoomSelectionProps {
  room: RoomType;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export function RoomSelection({ room, quantity, onQuantityChange }: RoomSelectionProps) {
  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <img src={room.image} alt={room.name} className="w-24 h-24 object-cover rounded-lg" />
      
      <div className="flex-grow ml-4">
        <h3 className="font-medium text-gray-900">{room.name}</h3>
        <div className="flex space-x-2 mt-1">
          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">{room.occupancy}</span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">{room.mealPlan}</span>
        </div>
        <p className="text-lg font-semibold text-gray-900 mt-2">{room.price.toFixed(2)} €</p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => onQuantityChange(Math.max(0, quantity - 1))}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Minus size={20} />
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => onQuantityChange(quantity + 1)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
}