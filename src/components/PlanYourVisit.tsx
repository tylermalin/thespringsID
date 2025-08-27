import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PlanYourVisit = () => {
  const navigate = useNavigate();
  const handleGetDirections = () => {
    window.open('https://maps.google.com/?q=3764+Hwy+21,+Idaho+City,+ID+83631', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+12083927680', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:info@thespringsid.com', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-6 tracking-tight">
            Plan Your Visit
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          <p className="font-avenir text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
            Everything you need to know for your perfect mountain getaway
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-2xl">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-luxury" />
              </div>
              <CardTitle className="font-canela text-2xl text-primary tracking-tight">
                Location
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="font-avenir text-muted-foreground leading-relaxed">
                3764 Hwy 21<br />
                Idaho City, ID 83631
              </p>
              <Button
                onClick={handleGetDirections}
                size="lg"
                className="font-avenir bg-gradient-to-r from-luxury to-luxury/80 hover:from-luxury/90 hover:to-luxury text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-2xl">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-luxury" />
              </div>
              <CardTitle className="font-canela text-2xl text-primary tracking-tight">
                Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-2">
                <p className="font-avenir text-muted-foreground">
                  <span className="font-semibold text-primary">Hot Springs:</span><br />
                  9AM–9PM
                </p>
                <p className="font-avenir text-muted-foreground">
                  <span className="font-semibold text-primary">Spa:</span><br />
                  By appointment
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-2xl">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-luxury" />
              </div>
              <CardTitle className="font-canela text-2xl text-primary tracking-tight">
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="space-y-3">
                <Button
                  onClick={handleCall}
                  variant="outline"
                  size="lg"
                  className="font-avenir w-full border-luxury text-luxury hover:bg-luxury hover:text-white transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (208) 392-7680
                </Button>
                <Button
                  onClick={handleEmail}
                  variant="outline"
                  size="lg"
                  className="font-avenir w-full border-luxury text-luxury hover:bg-luxury hover:text-white transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@thespringsid.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-luxury/10 to-luxury/5 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="font-canela text-2xl text-primary mb-4">
              Ready to Experience The Springs?
            </h3>
            <p className="font-avenir text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book your stay today and discover the perfect blend of luxury and natural wellness in the heart of Idaho's mountains.
            </p>
            <Button
              size="xl"
              className="font-avenir bg-gradient-to-r from-luxury to-luxury/80 hover:from-luxury/90 hover:to-luxury text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-12 py-6"
              onClick={() => navigate('/booking')}
            >
              Reserve Your Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanYourVisit;
