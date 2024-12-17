import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <img 
            src="https://images.unsplash.com/photo-1533709752211-118fcaf03312?auto=format&fit=crop&w=100&h=50&q=80" 
            alt="Hotel Chain Logo" 
            className="h-12"
          />
          <div className="text-sm text-gray-400">
            © 2024 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}