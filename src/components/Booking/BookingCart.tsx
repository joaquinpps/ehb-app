import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BookingDateRange } from './BookingDateRange';
import { RoomSelection } from './RoomSelection';
import { AdditionalServices } from './AdditionalServices';
import { BookingSummary } from './BookingSummary';
import { BookingItem } from '../../types/booking';

interface BookingCartProps {
  items: BookingItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onCheckout: () => void;
}

export function BookingCart({ items, onUpdateQuantity, onCheckout }: BookingCartProps) {
  const [expandedDates, setExpandedDates] = useState<string[]>([]);

  const groupedItems = items.reduce((acc, item) => {
    const dateKey = item.dates 
      ? `${item.dates.startDate}-${item.dates.endDate}`
      : 'services';
    
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(item);
    return acc;
  }, {} as Record<string, BookingItem[]>);

  const toggleDateExpansion = (dateKey: string) => {
    setExpandedDates(prev => 
      prev.includes(dateKey)
        ? prev.filter(d => d !== dateKey)
        : [...prev, dateKey]
    );
  };

  const totalAmount = items.reduce((sum, item) => 
    sum + (item.item.price * item.quantity), 0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Habitaciones</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {Object.entries(groupedItems).map(([dateKey, dateItems]) => (
            dateKey !== 'services' ? (
              <div key={dateKey} className="mb-6 bg-white rounded-lg shadow-sm">
                <BookingDateRange
                  startDate={dateItems[0].dates!.startDate}
                  endDate={dateItems[0].dates!.endDate}
                  onToggle={() => toggleDateExpansion(dateKey)}
                  isExpanded={expandedDates.includes(dateKey)}
                />
                
                {expandedDates.includes(dateKey) && dateItems.map(item => (
                  <RoomSelection
                    key={item.id}
                    room={item.item}
                    quantity={item.quantity}
                    onQuantityChange={(q) => onUpdateQuantity(item.id, q)}
                  />
                ))}
              </div>
            ) : null
          ))}

          {groupedItems['services']?.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Espacios y servicios</h2>
              <div className="bg-white rounded-lg shadow-sm">
                {groupedItems['services'].map(item => (
                  <AdditionalServices
                    key={item.id}
                    service={item.item}
                    quantity={item.quantity}
                    onQuantityChange={(q) => onUpdateQuantity(item.id, q)}
                  />
                ))}
              </div>
            </div>
          )}

          <button className="mt-6 text-indigo-900 font-medium">
            + Añadir nuevo rango de fechas
          </button>
        </div>

        <div className="lg:col-span-1">
          <BookingSummary
            summary={{ items, totalAmount }}
            onCheckout={onCheckout}
          />
        </div>
      </div>
    </div>
  );
}