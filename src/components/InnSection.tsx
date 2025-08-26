import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Wifi, Coffee, Car, Utensils, Mountain, Flame } from "lucide-react";

const InnSection = () => {
  const navigate = useNavigate();

  const handleBookStay = () => {
    navigate('/booking', { state: { selectedProduct: 'inn' } });
  };

  const handleViewRooms = () => {
    navigate('/accommodations');
  };

  const amenities = [
    { icon: <Mountain className="w-5 h-5" />, name: "Mountain Views" },
    { icon: <Wifi className="w-5 h-5" />, name: "Free WiFi" },
    { icon: <Coffee className="w-5 h-5" />, name: "Coffee Bar" },
    { icon: <Car className="w-5 h-5" />, name: "Free Parking" },
    { icon: <Utensils className="w-5 h-5" />, name: "Restaurant" },
    { icon: <Flame className="w-5 h-5" />, name: "Fireplace" },
  ];

  return (
    <section id="inn" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Inn The Pines
              <span className="block text-luxury">Mountain Lodge</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Retreat to our elegant mountain lodge, where luxury meets comfort. Each thoughtfully appointed room offers stunning mountain views and premium amenities for the perfect mountain getaway.
            </p>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-luxury">{amenity.icon}</div>
                  <span className="text-foreground font-medium">{amenity.name}</span>
                </div>
              ))}
            </div>

            {/* Room Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="border-0 bg-accent">
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-primary mb-1">Standard Rooms</h4>
                  <p className="text-sm text-muted-foreground mb-2">Cozy mountain comfort</p>
                  <p className="text-luxury font-bold">From $189/night</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-accent">
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-primary mb-1">Luxury Suites</h4>
                  <p className="text-sm text-muted-foreground mb-2">Premium mountain views</p>
                  <p className="text-luxury font-bold">From $319/night</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="flex-1"
                onClick={handleBookStay}
              >
                Book Your Stay
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1"
                onClick={handleViewRooms}
              >
                View Rooms
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/innthepines.jpg"
                alt="Inn The Pines mountain lodge"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnSection;