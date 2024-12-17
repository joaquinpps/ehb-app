import React, { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { HeroSection } from './components/HeroSection/HeroSection';
import { HotelList } from './components/HotelList/HotelList';
import { BookingPage } from './components/Booking/BookingPage';
import { Hotel } from './types/booking';
import { mockHotels } from './utils/mockData';

function App() {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  return (
    <Layout>
      <HeroSection />
      {selectedHotel ? (
        <BookingPage />
      ) : (
        <HotelList
          hotels={mockHotels}
          onSelectHotel={setSelectedHotel}
        />
      )}
    </Layout>
  );
}

export default App;