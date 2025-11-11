import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RoomGalleryProps {
  roomType: {
    type: string;
    name: string;
    rate: number;
    occupancy: string;
    beds: string;
    description: string;
    features: string[];
    images: string[];
  };
}

const RoomGallery: React.FC<RoomGalleryProps> = ({ roomType }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookNow = () => {
    window.open('https://reservation.asiwebres.com/v5/RoomAvailability.aspx?id=59b16d1f00e54a5a80fb29308a6daf6c', '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === roomType.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? roomType.images.length - 1 : prev - 1
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-background">
      <div className="luxury-container py-16">
        <div className="text-center mb-12">
          <h1 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-4 tracking-tight pt-6 pb-6">
            {roomType.name}
          </h1>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-6"></div>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-3xl font-bold text-luxury">${roomType.rate}</span>
            <span className="text-muted-foreground">per night</span>
          </div>
          <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
            {roomType.description}
          </p>
        </div>

        {/* Main Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Main Image */}
          <div className="relative group cursor-pointer" onClick={openModal}>
            <img
              src={roomType.images[currentImageIndex]}
              alt={`${roomType.name} - Image ${currentImageIndex + 1}`}
              className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-lg font-medium">
                Click to enlarge
              </div>
            </div>
          </div>

          {/* Room Details */}
          <div className="space-y-6">
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">Room Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Occupancy</h4>
                    <p className="text-foreground">{roomType.occupancy}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Beds</h4>
                    <p className="text-foreground">{roomType.beds}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {roomType.features.map((feature, index) => (
                      <li key={index} className="text-sm text-foreground flex items-center">
                        <div className="w-1 h-1 bg-luxury rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  size="lg" 
                  className="w-full font-avenir"
                  onClick={handleBookNow}
                >
                  Book {roomType.name}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="mb-8">
          <h3 className="font-canela text-2xl text-primary mb-6 text-center">Photo Gallery</h3>
          <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
            {roomType.images.map((image, index) => (
              <div
                key={index}
                className={`relative cursor-pointer transition-all ${
                  index === currentImageIndex ? 'ring-2 ring-luxury' : 'hover:opacity-80'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${roomType.name} thumbnail ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                {index === currentImageIndex && (
                  <div className="absolute inset-0 bg-luxury/20 rounded-lg"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevImage}
            className="font-avenir"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <span className="flex items-center text-sm text-muted-foreground">
            {currentImageIndex + 1} of {roomType.images.length}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={nextImage}
            className="font-avenir"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Modal for Full-Screen View */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            >
              <X className="w-6 h-6" />
            </Button>
            
            <div className="relative">
              <img
                src={roomType.images[currentImageIndex]}
                alt={`${roomType.name} - Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain"
              />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>
            
            <div className="text-center mt-4 text-white">
              <span className="text-sm">
                {currentImageIndex + 1} of {roomType.images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomGallery;
