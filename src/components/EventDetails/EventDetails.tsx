import React from 'react';
import { Calendar, Users, Info } from 'lucide-react';
import { Event } from '../../types/booking';

interface EventDetailsProps {
  event: Event;
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.name}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center space-x-3">
          <Calendar className="text-indigo-600" />
          <div>
            <p className="text-sm font-medium text-gray-600">Fechas del evento</p>
            <p className="text-gray-900">{event.startDate} - {event.endDate}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Users className="text-indigo-600" />
          <div>
            <p className="text-sm font-medium text-gray-600">Código de grupo</p>
            <p className="text-gray-900">{event.code}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Info className="text-indigo-600" />
          <div>
            <p className="text-sm font-medium text-gray-600">Tarifas disponibles</p>
            <p className="text-gray-900">{event.rates.length} opciones</p>
          </div>
        </div>
      </div>
    </div>
  );
}