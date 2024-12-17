import React from 'react';
import { ChevronDown } from 'lucide-react';

interface BookingDateRangeProps {
  startDate: string;
  endDate: string;
  onToggle: () => void;
  isExpanded: boolean;
}

export function BookingDateRange({ startDate, endDate, onToggle, isExpanded }: BookingDateRangeProps) {
  return (
    <div 
      className="border-b border-gray-200 p-4 cursor-pointer hover:bg-gray-50"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{startDate} - {endDate}</p>
        </div>
        <ChevronDown 
          className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
          size={20}
        />
      </div>
    </div>
  );
}