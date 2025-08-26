import React, { useState, useEffect } from 'react';

interface RoomImageGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

const RoomImageGallery: React.FC<RoomImageGalleryProps> = ({ images, alt, className = "" }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance images every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className={`w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-48 overflow-hidden rounded-lg ${className}`}>
      {/* Main Image */}
      <img
        src={images[currentImageIndex]}
        alt={`${alt} - Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      
      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {currentImageIndex + 1} / {images.length}
        </div>
      )}
      
      {/* Navigation Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomImageGallery;
