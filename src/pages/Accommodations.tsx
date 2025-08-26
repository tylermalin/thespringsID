import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Bed, Wifi, Coffee, Tv, Users, Utensils, Mountain, Snowflake, Car } from "lucide-react";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import RoomImageGallery from "@/components/RoomImageGallery";

const AccommodationsPage = () => {
  const navigate = useNavigate();

  const handleBookNow = (roomType: string) => {
    navigate('/booking', { state: { selectedProduct: 'inn', roomType } });
  };

  const roomTypes = [
    {
      type: 'NQQ',
      name: 'Non-Smoking Double Queen',
      rate: 125,
      occupancy: 'Base 2, Max 4 adults',
      beds: '1 Double Queen',
      description: 'Comfortable room with two queen beds, perfect for families or small groups.',
      features: ['Free WiFi', '42" flat screen TV', 'Keurig coffee maker', 'Room refrigerator'],
      images: ['/inntwoqueen.jpg', '/inqueen.jpg', '/restroom.webp', '/restshower.webp']
    },
    {
      type: 'NK',
      name: 'Non-Smoking King',
      rate: 125,
      occupancy: 'Base 2, Max 2 adults',
      beds: '1 King',
      description: 'Spacious room with a king bed, ideal for couples seeking comfort and privacy.',
      features: ['Free WiFi', '42" flat screen TV', 'Keurig coffee maker', 'Room refrigerator'],
      images: ['/one king.webp', '/restroom.webp', '/restshower.webp']
    },
    {
      type: 'NC',
      name: 'Non-Smoking Cabin',
      rate: 235,
      occupancy: 'Base 2, Max 6 adults',
      beds: '1 King, 1 Full, 1 Pull-out Queen',
      description: 'Full cabin experience with kitchen and living space, perfect for larger groups or extended stays.',
      features: ['Full kitchen', 'Washer & dryer', 'Dishwasher', 'Living room', 'Complete dish sets'],
      images: ['/innthepinesexterior.jpg', '/innthepines.jpg', '/inn-room.jpg']
    }
  ];

  const amenities = [
    { icon: <Wifi className="w-5 h-5" />, title: 'Free WiFi', description: 'High-speed internet access' },
    { icon: <Tv className="w-5 h-5" />, title: '42" Flat Screen TV', description: 'Direct TV with HBO included' },
    { icon: <Coffee className="w-5 h-5" />, title: 'Keurig Coffee Maker', description: 'In-room coffee service' },
    { icon: <Bed className="w-5 h-5" />, title: 'Premium Bedding', description: 'Comfortable and clean linens' },
    { icon: <Users className="w-5 h-5" />, title: 'Complimentary Toiletries', description: 'Shampoo, conditioner, shower gel, body lotion' },
    { icon: <Utensils className="w-5 h-5" />, title: 'Room Refrigerator', description: 'Keep your refreshments cool' },
    { icon: <Mountain className="w-5 h-5" />, title: 'Mountain Views', description: 'Stunning Idaho mountain scenery' },
    { icon: <Car className="w-5 h-5" />, title: 'Free Parking', description: 'Convenient on-site parking' }
  ];

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
                              src="/innthepinesexterior.jpg"
            alt="Inn The Pines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center luxury-container animate-luxury-fade">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-canela text-6xl md:text-8xl font-normal text-white leading-[0.9] tracking-tight">
              Inn The Pines
            </h1>
            
            <div className="w-24 h-px bg-white/60 mx-auto my-12"></div>
            
            <p className="font-avenir text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Seven-room hotel just down the road from The Springs. Brand new rooms, the nicest in town.
            </p>

            <div className="pt-12">
              <Button 
                size="xl" 
                className="font-avenir bg-white text-primary hover:bg-white/90 tracking-wide"
                onClick={() => handleBookNow('NK')}
              >
                Reserve Your Room
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Benefits */}
      <section className="luxury-section bg-luxury/10 border-l-4 border-luxury">
        <div className="luxury-container">
          <div className="text-center">
            <h2 className="font-canela text-3xl md:text-4xl font-normal text-primary mb-4 tracking-tight">
              Special Hotel Guest Benefits
            </h2>
            <p className="font-avenir text-lg text-primary font-medium mb-4">
              Stay at Inn The Pines and enjoy exclusive access to The Springs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-px bg-luxury mx-auto mb-4"></div>
                <h3 className="font-canela text-xl text-primary mb-2">Guaranteed Entry</h3>
                <p className="font-avenir text-muted-foreground">
                  Guaranteed entry to The Springs even when fully booked
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-px bg-luxury mx-auto mb-4"></div>
                <h3 className="font-canela text-xl text-primary mb-2">Discounted Pricing</h3>
                <p className="font-avenir text-muted-foreground">
                  Special rates: Adults $20, Children $17 (regular $25/$22)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Room Types & Rates
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              All rates exclude tax. Choose the perfect accommodation for your mountain getaway.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <Card key={index} className="border-0 bg-card hover:shadow-lg transition-shadow overflow-hidden">
                {/* Auto-advancing Gallery */}
                <div className="p-6 pb-0">
                  <RoomImageGallery 
                    images={room.images} 
                    alt={room.name}
                    className="mb-6"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="font-canela text-2xl">{room.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-luxury">${room.rate}</span>
                    <span className="text-sm text-muted-foreground">per night</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{room.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Occupancy:</span>
                      <span className="text-muted-foreground">{room.occupancy}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Beds:</span>
                      <span className="text-muted-foreground">{room.beds}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {room.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-luxury rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleBookNow(room.type)}
                    >
                      Book {room.name}
                    </Button>
                    {room.type === 'NQQ' && (
                      <Button 
                        variant="ghost" 
                        className="w-full text-luxury hover:text-luxury/80"
                        onClick={() => navigate('/double-queen-gallery')}
                      >
                        View Photo Gallery
                      </Button>
                    )}
                    {room.type === 'NK' && (
                      <Button 
                        variant="ghost" 
                        className="w-full text-luxury hover:text-luxury/80"
                        onClick={() => navigate('/king-gallery')}
                      >
                        View Photo Gallery
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Standard Room Amenities
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="text-luxury mb-4 flex justify-center">
                  {amenity.icon}
                </div>
                <h3 className="font-canela text-xl text-primary mb-2">{amenity.title}</h3>
                <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="font-canela text-2xl text-primary mb-6">Additional Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-muted-foreground">
              <div>• Alarm clock with phone charging station</div>
              <div>• Hair dryer</div>
              <div>• Iron and ironing board (upon request)</div>
              <div>• Free local calls</div>
              <div>• Complimentary newspaper</div>
              <div>• Heating/AC</div>
              <div>• Direct TV with HBO</div>
              <div>• Phone docking station</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cabin Special Features */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
                Cabin Experience
              </h2>
              <div className="w-24 h-px bg-primary/30 mb-8"></div>
              <p className="font-avenir text-lg text-muted-foreground font-light leading-relaxed tracking-wide mb-8">
                Our Non-Smoking Cabin offers the ultimate mountain getaway experience with full kitchen facilities and spacious living areas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full"></div>
                  <span className="font-avenir text-foreground">Fully furnished living room</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full"></div>
                  <span className="font-avenir text-foreground">Full kitchen with stove, oven, microwave, sink</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full"></div>
                  <span className="font-avenir text-foreground">Washer and dryer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full"></div>
                  <span className="font-avenir text-foreground">Dishwasher</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full"></div>
                  <span className="font-avenir text-foreground">Complete dish sets and utensil sets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full"></div>
                  <span className="font-avenir text-foreground">Coffee maker (pot style vs Keurig)</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/innthepinesexterior.jpg"
                alt="Cabin experience"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Booking */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Book Your Mountain Stay
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide mb-8">
              Located at 3764 Hwy 21, Idaho City, ID 83631. Just down the road from The Springs for the perfect mountain wellness experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="font-avenir"
                onClick={() => handleBookNow('NK')}
              >
                Reserve Your Room
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-avenir"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      <Footer />
    </div>
  );
};

export default AccommodationsPage;
