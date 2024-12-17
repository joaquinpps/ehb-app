import { useState, useCallback } from 'react';
import { BookingItem, BookingSummary, RoomType, AdditionalService } from '../types/booking';

export function useBooking() {
  const [bookingItems, setBookingItems] = useState<BookingItem[]>([]);

  const addItem = useCallback((item: RoomType | AdditionalService, type: 'room' | 'service', dates?: { startDate: string; endDate: string }) => {
    setBookingItems(prev => {
      const existingItem = prev.find(
        i => i.item.id === item.id && 
        i.type === type && 
        (!dates || (i.dates?.startDate === dates.startDate && i.dates?.endDate === dates.endDate))
      );

      if (existingItem) {
        return prev.map(i => 
          i === existingItem 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, {
        id: `${item.id}-${Date.now()}`,
        type,
        item,
        quantity: 1,
        dates
      }];
    });
  }, []);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    setBookingItems(prev => 
      quantity === 0
        ? prev.filter(i => i.id !== itemId)
        : prev.map(i => i.id === itemId ? { ...i, quantity } : i)
    );
  }, []);

  const getSummary = useCallback((): BookingSummary => {
    const totalAmount = bookingItems.reduce((sum, item) => 
      sum + (item.item.price * item.quantity), 0
    );

    return {
      items: bookingItems,
      totalAmount
    };
  }, [bookingItems]);

  return {
    bookingItems,
    addItem,
    updateQuantity,
    getSummary
  };
}