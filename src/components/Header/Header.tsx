import React from 'react';
import { Timer } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between border-b">
      <div className="flex items-center space-x-8">
        <img 
          src="https://images.unsplash.com/photo-1533709752211-118fcaf03312?auto=format&fit=crop&w=100&h=50&q=80" 
          alt="Logo" 
          className="h-12"
        />
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900">EVENT INFO</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">HOW TO WATCH</a>
        </nav>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="text-center">
          <h2 className="font-bold">LOUIS VUITTON</h2>
          <p className="text-sm">37TH AMERICA'S CUP MATCH</p>
        </div>
        <div className="flex items-center space-x-2">
          <Timer className="text-gray-700" />
          <div className="text-xl font-mono">1:14:32:48</div>
        </div>
      </div>
    </header>
  );
}