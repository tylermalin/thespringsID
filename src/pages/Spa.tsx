import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";

const SpaPage = () => {
  const navigate = useNavigate();

  const handleBookNow = (serviceType: string) => {
    navigate('/booking', { state: { selectedProduct: serviceType } });
  };

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
                            src="/springsinteriornight.jpg"
            alt="Spa & Wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center luxury-container animate-luxury-fade">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-canela text-6xl md:text-8xl font-normal text-white leading-[0.9] tracking-tight">
              Spa & Wellness
            </h1>
            
            <div className="w-24 h-px bg-white/60 mx-auto my-12"></div>
            
            <p className="font-avenir text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Therapeutic massage services to enhance your mountain wellness experience.
            </p>

            <div className="pt-12">
              <Button 
                size="xl" 
                className="font-avenir bg-white text-primary hover:bg-white/90 tracking-wide"
                onClick={() => handleBookNow('spa')}
              >
                Book Massage
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice - Temporary Closure */}
      <section className="luxury-section bg-red-50 border-l-4 border-red-400">
        <div className="luxury-container">
          <div className="text-center">
            <h2 className="font-canela text-3xl md:text-4xl font-normal text-red-800 mb-4 tracking-tight">
              Temporary Closure Notice
            </h2>
            <p className="font-avenir text-lg text-red-700 font-medium mb-4">
              The Springs will be closed July 21st through August 30th, 2025 for remodeling
            </p>
            <p className="font-avenir text-md text-red-600 mb-6">
              Inn The Pines remains open during this time. Guests staying at Inn The Pines during the closure will receive a hotel discount when The Springs reopens.
            </p>
            <Button 
              variant="outline" 
              className="font-avenir border-red-400 text-red-700 hover:bg-red-50"
              onClick={() => navigate('/accommodations')}
            >
              Book Inn The Pines
            </Button>
          </div>
        </div>
      </section>

      {/* Massage Services */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Massage Services
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              60-minute therapeutic table massage sessions available 5 days a week with limited availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">Therapeutic Massage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  60-minute therapeutic table massage sessions designed to promote relaxation and wellness.
                </p>
                <p className="text-luxury font-semibold mb-4">Available 5 days a week</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Limited availability - book early to secure your preferred time.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleBookNow('spa')}
                >
                  Book Massage
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">Combination Discount</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Enhance your experience with a combination of massage and hot springs soak.
                </p>
                <p className="text-luxury font-semibold mb-4">10% off soak when combined with massage</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfect for a complete wellness experience.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleBookNow('spa')}
                >
                  Book Combination
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">Booking Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Reserve your massage session in advance to ensure availability.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">• Available online</p>
                  <p className="text-sm text-muted-foreground">• Call (208) 392-9500</p>
                  <p className="text-sm text-muted-foreground">• Limited availability</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/contact')}
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wellness Experience */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
                Complete Wellness Experience
              </h2>
              <div className="w-24 h-px bg-primary/30 mb-8"></div>
              <p className="font-avenir text-lg text-muted-foreground font-light leading-relaxed tracking-wide mb-8">
                Combine the therapeutic benefits of our natural hot springs with professional massage therapy for the ultimate mountain wellness experience. Our massage services are designed to complement your soak session and enhance your overall relaxation and well-being.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full"></div>
                  <span className="font-avenir text-foreground">60-minute therapeutic sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full"></div>
                  <span className="font-avenir text-foreground">10% discount on soak when combined</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full"></div>
                  <span className="font-avenir text-foreground">Available 5 days a week</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/innthepinesexterior.jpg"
                alt="Wellness sanctuary"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Book Your Massage
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Reserve your therapeutic massage session to enhance your mountain wellness experience.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 bg-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="font-canela text-2xl text-primary mb-4">Reservation Options</h3>
                    <p className="text-muted-foreground mb-6">
                      Book online or call us directly to secure your preferred time.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button 
                      size="lg" 
                      className="font-avenir"
                      onClick={() => handleBookNow('spa')}
                    >
                      Book Online
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="font-avenir"
                      onClick={() => window.open('tel:208-392-9500', '_self')}
                    >
                      Call (208) 392-9500
                    </Button>
                  </div>
                  
                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">
                      Limited availability - book early to secure your preferred time
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      <Footer />
    </div>
  );
};

export default SpaPage;
