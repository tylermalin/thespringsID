import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SeasonalGalleryProps {
  season: 'winter' | 'summer';
  images: string[];
  title: string;
  description: string;
}

const SeasonalGallery: React.FC<SeasonalGalleryProps> = ({ season, images, title, description }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const seasonColors = {
    winter: {
      bg: 'bg-blue-50',
      accent: 'text-blue-600',
      border: 'border-blue-200'
    },
    summer: {
      bg: 'bg-amber-50',
      accent: 'text-amber-600',
      border: 'border-amber-200'
    }
  };

  const colors = seasonColors[season];

  return (
    <div className={`rounded-lg overflow-hidden ${colors.bg} ${colors.border} border`}>
      <div className="p-6">
        <div className="text-center mb-6">
          <h3 className={`font-canela text-2xl ${colors.accent} mb-2`}>{title}</h3>
          <p className="font-avenir text-muted-foreground text-sm">{description}</p>
        </div>

        {/* Main Image */}
        <div className="relative mb-4">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={images[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex justify-center space-x-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-12 h-12 rounded overflow-hidden transition-all ${
                  index === currentImageIndex 
                    ? 'ring-2 ring-luxury' 
                    : 'hover:opacity-80'
                }`}
              >
                <img
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="text-center mt-3">
            <span className="text-xs text-muted-foreground">
              {currentImageIndex + 1} of {images.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeasonalGallery;
