import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Gift, Heart, Sparkles } from "lucide-react";

const LuxuryGiftCards = () => {
  const navigate = useNavigate();

  const giftCardOptions = [
    {
      id: 'digital',
      title: 'Digital Gift Cards',
      description: 'Instant delivery via email. Perfect for last-minute gifts or immediate use.',
      icon: Sparkles,
      features: ['Instant Delivery', 'Email Delivery', 'No Expiration', 'Easy to Use']
    },
    {
      id: 'physical',
      title: 'Mailed Gift Cards',
      description: 'Beautifully designed physical cards mailed to your recipient with a personal message.',
      icon: Gift,
      features: ['Premium Design', 'Personal Message', 'Tracked Shipping', 'Collector Quality']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-6 tracking-tight">
            Give the Gift of Relaxation
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          <p className="font-avenir text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
            Digital or mailed gift cards. Perfect for holidays, birthdays, or special occasions.
          </p>
        </div>

        {/* Gift Card Image Showcase */}
        <div className="mb-16">
          <div className="relative max-w-2xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/springs-gift-card.jpg"
                alt="The Springs Gift Card"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
              <div className="text-center">
                <div className="font-canela text-2xl text-primary mb-1">The Springs</div>
                <div className="font-avenir text-sm text-muted-foreground">Gift Card</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {giftCardOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <Card 
                key={option.id}
                className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] overflow-hidden"
              >
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-luxury/20 to-luxury/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-luxury" />
                  </div>
                  <CardTitle className="font-canela text-3xl text-primary tracking-tight">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="font-avenir text-lg text-muted-foreground leading-relaxed text-center">
                    {option.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {option.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-luxury/5 rounded-lg"
                      >
                        <Heart className="w-4 h-4 text-luxury flex-shrink-0" />
                        <span className="font-avenir text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-luxury/10 to-luxury/5 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="font-canela text-2xl text-primary mb-4">
              The Perfect Gift for Any Occasion
            </h3>
            <p className="font-avenir text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether it's a birthday, anniversary, holiday, or just because, our gift cards offer the perfect way to share the luxury and wellness experience of The Springs with someone special.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/gift-cards')}
                size="xl"
                className="font-avenir bg-gradient-to-r from-luxury to-luxury/80 hover:from-luxury/90 hover:to-luxury text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-6"
              >
                Purchase Gift Cards
              </Button>
              <Button
                onClick={() => navigate('/contact')}
                variant="outline"
                size="xl"
                className="font-avenir border-luxury text-luxury hover:bg-luxury hover:text-white transition-all duration-300 px-8 py-6"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryGiftCards;
