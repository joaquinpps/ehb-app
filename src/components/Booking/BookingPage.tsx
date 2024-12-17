import React, { useState } from 'react';
import { BookingTabs } from './BookingTabs';
import { RoomCard } from './RoomCard';
import { HotelHeader } from './HotelHeader';
import { BookingCart } from './BookingCart';
import { Filter } from 'lucide-react';
import { useBooking } from '../../hooks/useBooking';

export function BookingPage() {
  const [activeTab, setActiveTab] = useState<'rooms' | 'services' | 'packages'>('rooms');
  const [showCart, setShowCart] = useState(false);
  const { bookingItems, addItem, updateQuantity, getSummary } = useBooking();

  const mockHotel = {
    name: 'Me Madrid by Meliá',
    rating: 5,
    rooms: 200,
    halls: 16,
    restaurants: 3,
    distanceToCenter: '1.1 km'
  };

  const mockRooms = [
    {
      id: '1',
      name: 'Junior Suite',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      price: 399,
      occupancy: 'Individual',
      mealPlan: 'Desayuno',
      recommended: true
    },
    // ... other rooms
  ];

  const handleAddToCart = (room: any) => {
    addItem(room, 'room', {
      startDate: '2024-03-01',
      endDate: '2024-03-15'
    });
    setShowCart(true);
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout with items:', getSummary());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {showCart ? (
        <BookingCart
          items={bookingItems}
          onUpdateQuantity={updateQuantity}
          onCheckout={handleCheckout}
        />
      ) : (
        <>
          <HotelHeader hotel={mockHotel} />
          
          <div className="flex items-center justify-between mb-6">
            <BookingTabs activeTab={activeTab} onTabChange={setActiveTab} />
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
              <Filter size={20} />
              <span>Filtros</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'rooms' && mockRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onSelect={() => handleAddToCart(room)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}