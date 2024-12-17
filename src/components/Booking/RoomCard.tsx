import React from 'react';
import { Camera } from 'lucide-react';

interface RoomCardProps {
  room: {
    id: string;
    name: string;
    image: string;
    pricePerNight: number;
    maxOccupancy: number;
    minNights: number;
    recommended?: boolean;
  };
  onSelect: () => void;
}

export function RoomCard({ room, onSelect }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow border border-gray-200">
      <div className="relative">
        {room.recommended && (
          <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
            La más recomendada
          </div>
        )}
        <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
        <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg">
          <Camera className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{room.name}</h3>
        <div className="mt-2 text-sm text-gray-600">
          <p>Desde {room.pricePerNight}€ por noche • {room.maxOccupancy} habs. max • {room.minNights} noche mín</p>
        </div>

        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Opcupación</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option>Añade por ocupación</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Régimen</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option>Añade desayuno o media pensión</option>
            </select>
          </div>

          <button
            onClick={onSelect}
            className="w-full bg-indigo-900 text-white py-2 px-4 rounded-lg hover:bg-indigo-800 transition-colors"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}