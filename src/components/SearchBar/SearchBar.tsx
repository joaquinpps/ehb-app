import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  location: string;
  rooms: string;
  dates: string;
  onSearch: () => void;
}

export function SearchBar({ location, rooms, dates, onSearch }: SearchBarProps) {
  return (
    <div className="bg-white rounded-full shadow-lg p-4 flex items-center justify-between max-w-4xl mx-auto gap-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Lugar del evento</label>
        <input
          type="text"
          value={location}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2"
        />
      </div>
      
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Habitaciones</label>
        <input
          type="text"
          value={rooms}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2"
        />
      </div>
      
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">Fecha</label>
        <input
          type="text"
          value={dates}
          readOnly
          className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2"
        />
      </div>
      
      <button
        onClick={onSearch}
        className="bg-indigo-900 text-white p-4 rounded-full hover:bg-indigo-800 transition-colors"
      >
        <Search size={24} />
      </button>
    </div>
  );
}