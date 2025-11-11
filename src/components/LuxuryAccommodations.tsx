import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Bed, Mountain, Home, Star } from "lucide-react";

const LuxuryAccommodations = () => {
  const navigate = useNavigate();

  const accommodations = [
    {
      id: 'queen-rooms',
      title: 'Queen Rooms',
      description: 'Cozy mountain comfort with thoughtful amenities.',
      price: '$189',
      period: '/night',
      icon: Bed,
      image: '/inntwoqueen.jpg',
      features: ['Two Queen Beds', 'Mountain Views', 'Private Bath', 'WiFi'],
      action: () => navigate('/accommodations')
    },
    {
      id: 'king-rooms',
      title: 'King Rooms',
      description: 'Spacious comfort with premium mountain views.',
      price: '$229',
      period: '/night',
      icon: Mountain,
      image: '/inqueen.jpg',
      features: ['King Bed', 'Premium Views', 'Private Bath', 'WiFi'],
      action: () => navigate('/accommodations')
    },
    {
      id: 'cabin',
      title: 'The Cabin',
      description: 'Private retreat with fireplace, living area, and sweeping views.',
      price: '$319',
      period: '/night',
      icon: Home,
      image: '/innthepines.jpg',
      features: ['Fireplace', 'Living Area', 'Full Kitchen', 'Sweeping Views'],
      action: () => navigate('/accommodations')
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-6 tracking-tight">
            Inn The Pines
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          <p className="font-avenir text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
            Mountain accommodations designed for comfort and tranquility
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {accommodations.map((accommodation, index) => {
            const IconComponent = accommodation.icon;
            return (
              <Card 
                key={accommodation.id}
                className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={accommodation.image}
                    alt={accommodation.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="bg-luxury/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="font-avenir text-white text-sm font-medium">
                        From {accommodation.price}
                      </span>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="font-canela text-2xl text-primary tracking-tight">
                    {accommodation.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="font-avenir text-muted-foreground leading-relaxed">
                    {accommodation.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-avenir text-2xl font-semibold text-primary">
                        {accommodation.price}
                      </span>
                      <span className="font-avenir text-muted-foreground">
                        {accommodation.period}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {accommodation.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-luxury/10 text-luxury text-xs font-medium rounded-full"
                        >
                          <Star className="w-3 h-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    onClick={accommodation.action}
                    variant="outline"
                    size="lg"
                    className="font-avenir w-full border-luxury text-luxury hover:bg-luxury hover:text-white transition-all duration-300"
                  >
                    View {accommodation.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={() => window.open('https://reservation.asiwebres.com/v5/RoomAvailability.aspx?id=59b16d1f00e54a5a80fb29308a6daf6c', '_blank')}
            size="xl"
            className="font-avenir bg-gradient-to-r from-luxury to-luxury/80 hover:from-luxury/90 hover:to-luxury text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-12 py-6"
          >
            Book Your Stay
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryAccommodations;
