import React from 'react';
import RoomGallery from '@/components/RoomGallery';
import LuxuryNavigation from '@/components/LuxuryNavigation';
import Footer from '@/components/Footer';

const DoubleQueenGallery: React.FC = () => {
  const doubleQueenRoom = {
    type: 'NQQ',
    name: 'Non-Smoking Double Queen',
    rate: 125,
    occupancy: 'Base 2, Max 4 adults',
    beds: '1 Double Queen',
    description: 'Comfortable room with two queen beds, perfect for families or small groups.',
    features: [
      'Free WiFi',
      '42" flat screen TV',
      'Keurig coffee maker',
      'Room refrigerator'
    ],
    images: [
      '/inntwoqueen.jpg',
      '/inqueen.jpg',
      '/restroom.webp',
      '/restshower.webp'
    ]
  };

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      <RoomGallery roomType={doubleQueenRoom} />
      <Footer />
    </div>
  );
};

export default DoubleQueenGallery;
