import React from 'react';
import { EventDetails } from '../EventDetails/EventDetails';
import { RateCard } from '../RateCard/RateCard';
import { Hotel, EventRate } from '../../types/booking';

interface HotelDetailsProps {
  hotel: Hotel;
  onBack: () => void;
}

export function HotelDetails({ hotel, onBack }: HotelDetailsProps) {
  const handleRateSelect = (rate: EventRate) => {
    console.log('Rate selected:', rate);
  };

  return (
    <>
      <EventDetails event={hotel.events[0]} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotel.events[0].rates.map((rate) => (
          <RateCard
            key={rate.id}
            rate={rate}
            onSelect={() => handleRateSelect(rate)}
          />
        ))}
      </div>
      <button
        onClick={onBack}
        className="mt-8 text-indigo-600 hover:text-indigo-800"
      >
        ← Volver a la lista de hoteles
      </button>
    </>
  );
}