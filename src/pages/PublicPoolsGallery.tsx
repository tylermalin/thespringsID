import React from 'react';
import RoomGallery from '@/components/RoomGallery';
import LuxuryNavigation from '@/components/LuxuryNavigation';
import Footer from '@/components/Footer';

const PublicPoolsGallery: React.FC = () => {
  const publicPoolsExperience = {
    type: 'PUBLIC_POOLS',
    name: 'Public Hot Springs Pools',
    rate: 25,
    occupancy: 'All ages welcome (with restrictions)',
    beds: 'N/A - Hot Springs Experience',
    description: 'Experience the healing properties of our natural mineral springs in our main public pool, maintained at optimal temperatures for therapeutic benefit.',
    features: [
      'Natural mineral springs',
      'Temperature controlled',
      'Shade cover available',
      'Cold water features',
      'Free spring water stations',
      'Flotation devices (adults-only days)'
    ],
    images: [
      '/springs hero.png',
      '/pubpoolbubble.jpg',
      '/pubpoolday1.jpg',
      '/pubpoolevening.jpg',
      '/pubpoollight.jpg',
      '/pubpoolsnow.jpg',
      '/pubpoolsteam.jpg',
      '/pubpoolsummer.jpg',
      '/pubpoolsunrise.jpg',
      '/pubpoolsunset.jpg',
      '/pubsteamynight.jpg',
      '/springsinteriornight.jpg'
    ]
  };

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      <RoomGallery roomType={publicPoolsExperience} />
      <Footer />
    </div>
  );
};

export default PublicPoolsGallery;
