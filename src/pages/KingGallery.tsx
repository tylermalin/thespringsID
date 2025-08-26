import React from 'react';
import RoomGallery from '@/components/RoomGallery';
import LuxuryNavigation from '@/components/LuxuryNavigation';
import Footer from '@/components/Footer';

const KingGallery: React.FC = () => {
  const kingRoom = {
    type: 'NK',
    name: 'Non-Smoking King',
    rate: 125,
    occupancy: 'Base 2, Max 2 adults',
    beds: '1 King',
    description: 'Spacious room with a king bed, ideal for couples seeking comfort and privacy.',
    features: [
      'Free WiFi',
      '42" flat screen TV',
      'Keurig coffee maker',
      'Room refrigerator'
    ],
    images: [
      '/one king.webp',
      '/restroom.webp',
      '/restshower.webp'
    ]
  };

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      <RoomGallery roomType={kingRoom} />
      <Footer />
    </div>
  );
};

export default KingGallery;
