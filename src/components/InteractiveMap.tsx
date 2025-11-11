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
    // Load Google Maps script with API key (async for optimal performance)
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAYUXDk9Hr57guIG9Ut0t0aGZEpu4ap_HM&libraries=places&loading=async`;
    script.async = true;
    script.defer = true;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setMapLoaded(true);
      initMap();
    };
    script.onerror = () => {
      console.error('Failed to load Google Maps');
      setMapLoaded(true); // Show fallback
    };
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [selectedLocation]);

  const initMap = () => {
    if (!mapLoaded || !(window as any).google) return;

    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    try {
      const map = new (window as any).google.maps.Map(mapElement, {
        center: currentLocation.coordinates,
        zoom: 15,
        mapTypeId: (window as any).google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "transit",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      // Add marker
      new (window as any).google.maps.Marker({
        position: currentLocation.coordinates,
        map: map,
        title: currentLocation.name,
        animation: (window as any).google.maps.Animation.DROP
      });

      // Add info window
      const infoWindow = new (window as any).google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 200px;">
            <h3 style="margin: 0 0 5px 0; color: #2c3e50;">${currentLocation.name}</h3>
            <p style="margin: 0; color: #7f8c8d; font-size: 14px;">${currentLocation.address}</p>
            <p style="margin: 5px 0 0 0; color: #7f8c8d; font-size: 12px;">${currentLocation.hours}</p>
          </div>
        `
      });

      // Show info window on marker click
      (window as any).google.maps.event.addListener(map, 'click', () => {
        infoWindow.close();
      });

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

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
            className="w-full h-80 bg-muted"
            style={{ minHeight: '320px' }}
          >
            {!mapLoaded && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Loading map...</p>
                </div>
              </div>
            )}
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
