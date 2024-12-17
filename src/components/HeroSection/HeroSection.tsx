import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';

export function HeroSection() {
  return (
    <div className="relative mb-16">
      <img
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
        alt="Hotel banner"
        className="w-full h-[400px] object-cover rounded-lg"
      />
      <div className="absolute -bottom-8 left-0 right-0">
        <SearchBar
          location="America's Cup 2024"
          rooms="Habitaciones disponibles"
          dates="1 Mar - 15 Mar 2024"
          onSearch={() => console.log('Searching...')}
        />
      </div>
    </div>
  );
}