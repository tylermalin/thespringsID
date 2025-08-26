import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Car, Clock, Phone, Mail } from "lucide-react";

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
  const [mapLoaded, setMapLoaded] = useState(false);

  const locations: Record<string, LocationInfo> = {
    springs: {
      name: "The Springs",
      address: "3764 Hwy 21, Idaho City, ID 83631",
      coordinates: { lat: 43.8284, lng: -115.8346 }, // Idaho City coordinates
      phone: "(208) 392-7680",
      hours: "Daily 9:00 AM - 9:00 PM",
      description: "Natural hot springs with multiple pools and spa services"
    },
    inn: {
      name: "Inn The Pines",
      address: "3764 Hwy 21, Idaho City, ID 83631",
      coordinates: { lat: 43.8284, lng: -115.8346 }, // Same location as springs
      phone: "(208) 392-7680",
      hours: "Check-in: 3:00 PM, Check-out: 11:00 AM",
      description: "Cozy mountain lodge with hot springs access"
    }
  };

  const currentLocation = locations[selectedLocation];

  const handleGetDirections = (platform: 'google' | 'apple' | 'waze') => {
    const { lat, lng } = currentLocation.coordinates;
    const address = encodeURIComponent(currentLocation.address);
    
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

  useEffect(() => {
    // For now, we'll use a static map image until Google Maps API key is configured
    setMapLoaded(true);
  }, [selectedLocation]);

  return (
    <div className="space-y-6">
      {/* Location Selector */}
      <div className="flex space-x-2">
        <Button
          variant={selectedLocation === 'springs' ? 'default' : 'outline'}
          onClick={() => setSelectedLocation('springs')}
          className="flex-1"
        >
          <MapPin className="w-4 h-4 mr-2" />
          The Springs
        </Button>
        <Button
          variant={selectedLocation === 'inn' ? 'default' : 'outline'}
          onClick={() => setSelectedLocation('inn')}
          className="flex-1"
        >
          <MapPin className="w-4 h-4 mr-2" />
          Inn The Pines
        </Button>
      </div>

      {/* Map Container */}
      <Card className="overflow-hidden">
        <CardHeader className="pb-0">
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-luxury" />
            <span>{currentLocation.name}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div 
            id="map" 
            className="w-full h-80 bg-muted relative"
            style={{ minHeight: '320px' }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-luxury mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">{currentLocation.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{currentLocation.address}</p>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 max-w-xs mx-auto">
                  <p className="text-xs text-muted-foreground">
                    Interactive map coming soon with Google Maps integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location Information */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-primary mb-2">Address</h3>
              <p className="text-muted-foreground">{currentLocation.address}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-primary mb-2">Hours</h3>
              <p className="text-muted-foreground">{currentLocation.hours}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-primary mb-2">Description</h3>
              <p className="text-muted-foreground">{currentLocation.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-primary mb-4">Get Directions</h3>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => handleGetDirections('google')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Google Maps
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => handleGetDirections('apple')}
              >
                <Car className="w-4 h-4 mr-2" />
                Apple Maps
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => handleGetDirections('waze')}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Waze
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-primary mb-4">Contact</h3>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={handleCall}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call {currentLocation.phone}
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={handleEmail}
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Driving Directions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Car className="w-5 h-5 text-luxury" />
            <span>Driving Directions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-primary mb-2">From Boise (45 minutes)</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Take I-84 E toward Mountain Home</li>
                <li>Take exit 57 for ID-21 toward Idaho City</li>
                <li>Turn right onto ID-21 N/Idaho City Rd</li>
                <li>Continue on ID-21 for approximately 35 miles</li>
                <li>Turn right onto the property driveway</li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-medium text-primary mb-2">From Idaho City (5 minutes)</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>Head north on ID-21</li>
                <li>Continue for approximately 5 miles</li>
                <li>Look for The Springs sign on the right</li>
                <li>Turn right onto the property driveway</li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveMap;
