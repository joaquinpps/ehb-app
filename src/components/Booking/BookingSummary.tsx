import React from 'react';
import { BookingSummary as BookingSummaryType } from '../../types/booking';

interface BookingSummaryProps {
  summary: BookingSummaryType;
  onCheckout: () => void;
}

export function BookingSummary({ summary, onCheckout }: BookingSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
      <h2 className="text-lg font-semibold mb-4">Total reserva ({summary.items.length})</h2>
      
      {summary.items.map((item) => (
        <div key={item.id} className="flex justify-between py-2 text-sm">
          <span>{item.quantity}x {item.item.name}</span>
          <span>{(item.quantity * item.item.price).toFixed(2)} €</span>
        </div>
      ))}
      
      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>{summary.totalAmount.toFixed(2)} €</span>
        </div>
      </div>
      
      <button
        onClick={onCheckout}
        className="w-full mt-6 bg-indigo-900 text-white py-3 px-4 rounded-lg hover:bg-indigo-800 transition-colors"
      >
        Checkout
      </button>
    </div>
  );
}