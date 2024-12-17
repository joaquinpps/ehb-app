import React from 'react';

interface BookingTabsProps {
  activeTab: 'rooms' | 'services' | 'packages';
  onTabChange: (tab: 'rooms' | 'services' | 'packages') => void;
}

export function BookingTabs({ activeTab, onTabChange }: BookingTabsProps) {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8">
        <button
          onClick={() => onTabChange('rooms')}
          className={`py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'rooms'
              ? 'border-indigo-900 text-indigo-900'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Habitaciones
        </button>
        <button
          onClick={() => onTabChange('services')}
          className={`py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'services'
              ? 'border-indigo-900 text-indigo-900'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Servicios
        </button>
        <button
          onClick={() => onTabChange('packages')}
          className={`py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'packages'
              ? 'border-indigo-900 text-indigo-900'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Paquetes
        </button>
      </nav>
    </div>
  );
}