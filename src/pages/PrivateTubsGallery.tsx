import React from 'react';
import RoomGallery from '@/components/RoomGallery';
import LuxuryNavigation from '@/components/LuxuryNavigation';
import Footer from '@/components/Footer';

const PrivateTubsGallery: React.FC = () => {
  const privateTubsRoom = {
    type: 'PRIVATE_TUBS',
    name: 'Private Hot Springs Tubs',
    rate: 45,
    occupancy: 'Base 1, Max 4 adults',
    beds: 'N/A - Hot Springs Experience',
    description: 'Exclusive private hot springs tubs for intimate soaking experiences with stunning mountain views.',
    features: [
      'Private soaking tubs',
      'Mountain views',
      'Temperature controlled',
      'Complimentary towels',
      'Changing rooms',
      'Outdoor seating areas'
    ],
    images: [
      '/pathtoprivatepools.jpg',
      '/priv-tubs2_orig.jpg',
      '/priv-tubs3_orig.jpg',
      '/PrivateHotSprings.jpg',
      '/privatepool1.jpg',
      '/privatepools.jpg',
      '/privatetubsoverhead.jpg',
      '/privatetubssnow.jpg',
      '/privatetubssummer.jpg',
      '/privatetubssummer.png',
      '/privatetubssummerwithguest.jpg',
      '/privatetubswinternight.jpg',
      '/privatetubswinternightexterior.jpg'
    ]
  };

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      <RoomGallery roomType={privateTubsRoom} />
      <Footer />
    </div>
  );
};

export default PrivateTubsGallery;
