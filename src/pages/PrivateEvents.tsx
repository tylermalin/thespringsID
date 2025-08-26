import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Users, Calendar, Mail, Phone, MapPin } from "lucide-react";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";

const PrivateEventsPage = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  };

  const eventTypes = [
    {
      title: "Corporate Retreats",
      description: "Team building and wellness experiences in a serene mountain setting",
      capacity: "Up to 70 guests",
      features: ["Private facility access", "Catering options", "Meeting spaces"]
    },
    {
      title: "Weddings & Celebrations",
      description: "Intimate ceremonies and receptions surrounded by natural beauty",
      capacity: "Up to 50 guests",
      features: ["Scenic ceremony locations", "Reception areas", "Accommodation packages"]
    },
    {
      title: "Wellness Retreats",
      description: "Group wellness experiences combining hot springs and spa services",
      capacity: "Up to 30 guests",
      features: ["Guided sessions", "Spa treatments", "Wellness programming"]
    },
    {
      title: "Special Occasions",
      description: "Birthdays, anniversaries, and milestone celebrations",
      capacity: "Up to 40 guests",
      features: ["Custom packages", "Private dining", "Activity coordination"]
    }
  ];

  const venueSpaces = [
    {
      name: "Main Pool Area",
      description: "Natural thermal springs with mountain views",
      capacity: "Up to 70 guests",
      features: ["Temperature controlled", "Shade available", "Poolside service"]
    },
    {
      name: "Private Tubs",
      description: "Intimate soaking experiences for smaller groups",
      capacity: "Up to 4 adults per tub",
      features: ["Clothing optional", "Poolside server", "Exclusive access"]
    },
    {
      name: "Mountain Surroundings",
      description: "Outdoor spaces with stunning Idaho mountain views",
      capacity: "Up to 100 guests",
      features: ["Scenic backdrop", "Natural setting", "Flexible layout"]
    },
    {
      name: "Inn The Pines",
      description: "Cozy mountain lodge for overnight events",
      capacity: "Up to 14 guests",
      features: ["Seven rooms", "Full amenities", "Mountain atmosphere"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/hero-hot-springs.jpg"
            alt="Private Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center luxury-container animate-luxury-fade">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-canela text-6xl md:text-8xl font-normal text-white leading-[0.9] tracking-tight">
              Private Events
            </h1>
            
            <div className="w-24 h-px bg-white/60 mx-auto my-12"></div>
            
            <p className="font-avenir text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Host your special event in our mountain sanctuary surrounded by natural thermal waters.
            </p>

            <div className="pt-12">
              <Button 
                size="xl" 
                className="font-avenir bg-white text-primary hover:bg-white/90 tracking-wide"
                onClick={handleContact}
              >
                Inquire About Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Event Types
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              From corporate retreats to intimate celebrations, we offer unique venues for your special occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <Card key={index} className="border-0 bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-canela text-2xl">{event.title}</CardTitle>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-luxury" />
                      <span className="font-medium">{event.capacity}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Features:</h4>
                      <ul className="space-y-1">
                        {event.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1 h-1 bg-luxury rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleContact}
                    >
                      Inquire About {event.title}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Spaces */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Venue Spaces
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Choose from our unique mountain venues, each offering a distinct atmosphere for your event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venueSpaces.map((venue, index) => (
              <Card key={index} className="border-0 bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-canela text-2xl">{venue.name}</CardTitle>
                  <p className="text-muted-foreground">{venue.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-luxury" />
                      <span className="font-medium">{venue.capacity}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Features:</h4>
                      <ul className="space-y-1">
                        {venue.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1 h-1 bg-luxury rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Planning Your Event
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-px bg-luxury mx-auto mb-6"></div>
              <h3 className="font-canela text-2xl text-primary mb-4">Initial Consultation</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                Contact us to discuss your event vision, guest count, and preferred dates. We'll help you choose the perfect venue space.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-px bg-luxury mx-auto mb-6"></div>
              <h3 className="font-canela text-2xl text-primary mb-4">Custom Planning</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                We'll work with you to create a custom package that includes catering, accommodations, and activities tailored to your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-px bg-luxury mx-auto mb-6"></div>
              <h3 className="font-canela text-2xl text-primary mb-4">Event Execution</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                Our experienced team will ensure your event runs smoothly, from setup to cleanup, so you can enjoy your special day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Start Planning Your Event
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide mb-8">
              Ready to create an unforgettable mountain experience? Contact us to begin planning your private event.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-luxury" />
                <span className="font-avenir">info@thespringsid.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-luxury" />
                <span className="font-avenir">(208) 392-9500</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-luxury" />
                <span className="font-avenir">Idaho City, ID</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="font-avenir"
                onClick={handleContact}
              >
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-avenir"
                onClick={() => window.open('mailto:info@thespringsid.com', '_self')}
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivateEventsPage;
