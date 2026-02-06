import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, Car, Phone, Mail } from "lucide-react";

interface LocationInfo {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phone: string;
  hours: string;
  description: string;
}

const InteractiveMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<'springs' | 'inn'>('springs');

  const locations: Record<string, LocationInfo> = {
    springs: {
      name: "The Springs",
      address: "3742 Hwy 21, Idaho City, ID 83631",
      coordinates: { lat: 43.81535227109484, lng: -115.86692332381458 },
      phone: "208.392.9500",
      hours: "Daily 10:30am - 10pm",
      description: "Natural hot springs with multiple pools and spa services"
    },
    inn: {
      name: "Inn The Pines",
      address: "3764 Hwy 21, Idaho City, ID 83631",
      coordinates: { lat: 43.81535227109484, lng: -115.86692332381458 },
      phone: "(208) 392-9505",
      hours: "Check-in: 3:00 PM, Check-out: 11:00 AM",
      description: "Cozy mountain lodge with hot springs access"
    }
  };

  const currentLocation = locations[selectedLocation];

  const handleGetDirections = (platform: 'google' | 'apple' | 'waze') => {
    const { lat, lng } = currentLocation.coordinates;

    let url = '';
    switch (platform) {
      case 'google':
        url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        break;
      case 'apple':
        url = `http://maps.apple.com/?daddr=${lat},${lng}`;
        break;
      case 'waze':
        url = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
        break;
    }

    window.open(url, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${currentLocation.phone}`, '_self');
  };

  const handleEmail = () => {
    window.open('mailto:info@thespringsid.com', '_self');
  };

  return (
    <div className="space-y-6 animate-luxury-fade">
      {/* Location Selector */}
      <div className="flex space-x-2">
        <Button
          variant={selectedLocation === 'springs' ? 'luxury' : 'outline'}
          onClick={() => setSelectedLocation('springs')}
          className="flex-1 font-avenir"
        >
          <MapPin className="w-4 h-4 mr-2" />
          The Springs
        </Button>
        <Button
          variant={selectedLocation === 'inn' ? 'luxury' : 'outline'}
          onClick={() => setSelectedLocation('inn')}
          className="flex-1 font-avenir"
        >
          <MapPin className="w-4 h-4 mr-2" />
          Inn The Pines
        </Button>
      </div>

      {/* Map Container */}
      <Card className="overflow-hidden border-0 shadow-lg">
        <CardHeader className="bg-primary text-white py-4 px-6">
          <CardTitle className="flex items-center space-x-2 font-canela text-xl">
            <MapPin className="w-5 h-5 text-luxury" />
            <span>{currentLocation.name}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="w-full h-[450px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.9521332453005!2d-115.86692332381458!3d43.81535227109484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54af20bcfcc2bbcd%3A0x38c3c5e3206c54ef!2sThe%20Springs!5e0!3m2!1sen!2sus!4v1770405834579!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Springs Location Map"
            />
          </div>
        </CardContent>
      </Card>

      {/* Location Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 bg-white/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="font-canela text-lg text-primary mb-2">Address</h3>
            <p className="font-avenir text-sm text-muted-foreground">{currentLocation.address}</p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="font-canela text-lg text-primary mb-2">Hours</h3>
            <p className="font-avenir text-sm text-muted-foreground">{currentLocation.hours}</p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-white/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="font-canela text-lg text-primary mb-2">Contact</h3>
            <div className="space-y-1">
              <p className="font-avenir text-sm text-muted-foreground">{currentLocation.phone}</p>
              <p className="font-avenir text-sm text-muted-foreground">info@thespringsid.com</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-canela text-xl text-primary mb-4">Get Directions</h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start font-avenir"
                onClick={() => handleGetDirections('google')}
              >
                <Navigation className="w-4 h-4 mr-2 text-luxury" />
                Google Maps
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start font-avenir"
                onClick={() => handleGetDirections('apple')}
              >
                <Car className="w-4 h-4 mr-2 text-luxury" />
                Apple Maps
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start font-avenir"
                onClick={() => handleGetDirections('waze')}
              >
                <Navigation className="w-4 h-4 mr-2 text-luxury" />
                Waze
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-canela text-xl text-primary mb-4">Quick Contact</h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start font-avenir"
                onClick={handleCall}
              >
                <Phone className="w-4 h-4 mr-2 text-luxury" />
                Call {currentLocation.phone}
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start font-avenir"
                onClick={handleEmail}
              >
                <Mail className="w-4 h-4 mr-2 text-luxury" />
                Send Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveMap;
