import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";

const ExperiencesPage = () => {
  const navigate = useNavigate();

  const handleBookNow = (experienceType: string) => {
    navigate('/booking', { state: { selectedProduct: experienceType } });
  };

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-hot-springs.jpg"
            alt="Natural Thermal Waters"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center luxury-container animate-luxury-fade">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-canela text-6xl md:text-8xl font-normal text-white leading-[0.9] tracking-tight">
              Natural Thermal Waters
            </h1>
            
            <div className="w-24 h-px bg-white/60 mx-auto my-12"></div>
            
            <p className="font-avenir text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Immerse yourself in the healing properties of our natural mineral springs, maintained at optimal temperatures for therapeutic benefit.
            </p>

            <div className="pt-12">
              <Button 
                size="xl" 
                className="font-avenir bg-white text-primary hover:bg-white/90 tracking-wide"
                onClick={() => handleBookNow('soak')}
              >
                Book Hot Springs
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

      {/* Operating Hours & Schedule */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
                Operating Hours
              </h2>
              <div className="w-24 h-px bg-primary/30 mb-8"></div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-canela text-2xl text-primary mb-4">General Schedule</h3>
                  <p className="font-avenir text-lg text-muted-foreground font-light leading-relaxed">
                    Open 5 days a week (Thursday-Monday)<br/>
                    <strong>Hours:</strong> 10:30 AM - 10:00 PM<br/>
                    <strong>Closed:</strong> Tuesday and Wednesday each week
                  </p>
                </div>
                <div>
                  <h3 className="font-canela text-2xl text-primary mb-4">Age Restrictions</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-luxury rounded-full mt-2"></div>
                      <div>
                        <span className="font-avenir text-foreground font-medium">Adults Only (18+):</span>
                        <span className="font-avenir text-muted-foreground"> Monday, Thursday, Friday (all day)</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-luxury rounded-full mt-2"></div>
                      <div>
                        <span className="font-avenir text-foreground font-medium">All Ages Welcome:</span>
                        <span className="font-avenir text-muted-foreground"> Saturday and Sunday until 7:00 PM</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-luxury rounded-full mt-2"></div>
                      <div>
                        <span className="font-avenir text-foreground font-medium">Adults Only (18+):</span>
                        <span className="font-avenir text-muted-foreground"> Saturday and Sunday from 7:30 PM - 10:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/eveningspringspool.jpg"
                alt="Hot springs schedule"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Reservations */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Pricing & Reservations
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              BY RESERVATION ONLY - arrive promptly or early. Limited to 65-70 guests per 2½ hour session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">General Soak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-avenir">Adult General Soak</span>
                    <span className="text-luxury font-bold">$25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-avenir">Child General Soak</span>
                    <span className="text-luxury font-bold">$22</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    2½ hour session
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleBookNow('soak')}
                >
                  Reserve Soak
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">Private Tubs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-avenir">Up to 2 adults</span>
                    <span className="text-luxury font-bold">$55+ tax/hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-avenir">3rd adult</span>
                    <span className="text-luxury font-bold">+$5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-avenir">4th adult</span>
                    <span className="text-luxury font-bold">+$5</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Adults 18+ only • 10:30 AM - 9:00 PM
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleBookNow('private_tub')}
                >
                  Reserve Private Tub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities & Features */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Facilities & Features
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-px bg-luxury mx-auto mb-6"></div>
              <h3 className="font-canela text-2xl text-primary mb-4">Temperature Control</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                Pool can be cooled on warm days, heated on cool days. We can make your visit the perfect temperature.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-px bg-luxury mx-auto mb-6"></div>
              <h3 className="font-canela text-2xl text-primary mb-4">Shade & Comfort</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                Shade cover available. Cold water features in each private tub. Free spring water at poolside stations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-px bg-luxury mx-auto mb-6"></div>
              <h3 className="font-canela text-2xl text-primary mb-4">Flotation Devices</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                Provided on adults-only days (Mon, Thu, Fri). Steam room currently under renovation, returning spring 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Policies */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Important Policies
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-canela text-2xl text-primary">What to Bring</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full mt-2"></div>
                  <span className="font-avenir text-foreground">Bring your own towel (towels available for purchase)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full mt-2"></div>
                  <span className="font-avenir text-foreground">Bring your own water bottle for free spring water</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full mt-2"></div>
                  <span className="font-avenir text-foreground">Limited personal lockers - bring only what you need</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-canela text-2xl text-primary">Important Rules</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full mt-2"></div>
                  <span className="font-avenir text-foreground">No bags poolside (except mesh/clear bags at private tubs only)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full mt-2"></div>
                  <span className="font-avenir text-foreground">18+ required to supervise anyone younger (no lifeguards on duty)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-luxury rounded-full mt-2"></div>
                  <span className="font-avenir text-foreground">Outside food NOT allowed on premises</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      <Footer />
    </div>
  );
};

export default ExperiencesPage;
