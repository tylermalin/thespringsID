import React, { useState } from 'react';
import { X, AlertTriangle, Calendar, Hotel, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleBookInn = () => {
    navigate('/accommodations');
  };



  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200/50 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 to-orange-100/20"></div>
      <div className="luxury-container relative z-10">
        <div className="flex items-center justify-between py-6 px-6">
          <div className="flex items-center gap-6 flex-1">
            <div className="flex-shrink-0">
              <div className="p-2 bg-amber-100/80 rounded-full backdrop-blur-sm">
                <AlertTriangle className="w-6 h-6 text-amber-700" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-6 flex-wrap mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-amber-200/60 rounded">
                    <Calendar className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="font-canela text-lg font-semibold text-amber-800 tracking-tight">
                    Temporary Closure Notice
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-green-200/60 rounded">
                    <Hotel className="w-4 h-4 text-green-700" />
                  </div>
                  <span className="font-avenir font-medium text-green-700">
                    Inn The Pines remains open
                  </span>
                </div>
              </div>
              
              <p className="font-avenir text-amber-700/90 leading-relaxed">
                The Springs will be closed <span className="font-semibold">July 21st through August 30th, 2025</span> for remodeling. 
                Guests staying at Inn The Pines during the closure will receive a <span className="font-semibold text-green-700">hotel discount</span> when The Springs reopens.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 flex-shrink-0">
            <Button
              onClick={handleBookInn}
              size="lg"
              className="font-avenir bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Book Inn The Pines
            </Button>
            
            <button
              onClick={handleClose}
              className="p-2 hover:bg-amber-100/80 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Close notification"
            >
              <X className="w-5 h-5 text-amber-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBanner;
