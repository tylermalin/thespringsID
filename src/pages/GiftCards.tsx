import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Gift, Waves, Bed, Utensils, Users } from "lucide-react";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";

const GiftCardsPage = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  };

  const giftCardOptions = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Springs Facilities",
      description: "General soak sessions and access to our natural thermal waters",
      value: "Perfect for hot springs enthusiasts"
    },
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Inn The Pines",
      description: "Overnight stays at our cozy mountain lodge",
      value: "Ideal for mountain getaways"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Food & Beverages",
      description: "Poolside dining and refreshments",
      value: "Great for dining experiences"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Private Tubs",
      description: "Exclusive private soaking experiences",
      value: "Perfect for intimate relaxation"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Retail Items",
      description: "Souvenirs and wellness products",
      value: "Memorable keepsakes"
    }
  ];

  const giftCardAmounts = [
    { amount: 25, description: "General Soak Session" },
    { amount: 55, description: "Private Tub Experience" },
    { amount: 125, description: "Overnight Stay" },
    { amount: 200, description: "Complete Experience Package" },
    { amount: 500, description: "Luxury Mountain Getaway" }
  ];

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-hot-springs.jpg"
            alt="Gift Cards"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center luxury-container animate-luxury-fade">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-canela text-6xl md:text-8xl font-normal text-white leading-[0.9] tracking-tight">
              Gift Cards
            </h1>
            
            <div className="w-24 h-px bg-white/60 mx-auto my-12"></div>
            
            <p className="font-avenir text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Perfect for birthdays, anniversaries, or simply sharing wellness.
            </p>

            <div className="pt-12">
              <Button 
                size="xl" 
                className="font-avenir bg-white text-primary hover:bg-white/90 tracking-wide"
                onClick={handleContact}
              >
                Buy Gift Card
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Card Options */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Gift Card Options
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Available for Springs facilities, food/beverages, retail, private tubs, and Inn The Pines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftCardOptions.map((option, index) => (
              <Card key={index} className="border-0 bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-luxury mb-4 flex justify-center">
                    {option.icon}
                  </div>
                  <CardTitle className="font-canela text-2xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <p className="text-sm text-luxury font-medium">{option.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Amounts */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Suggested Gift Amounts
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Choose from our popular gift card amounts or create a custom value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftCardAmounts.map((amount, index) => (
              <Card key={index} className="border-0 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-luxury mb-4">${amount.amount}</div>
                  <p className="text-muted-foreground">{amount.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6"
                    onClick={handleContact}
                  >
                    Buy ${amount.amount} Card
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="border-0 bg-card max-w-md mx-auto">
              <CardContent className="p-8">
                <h3 className="font-canela text-2xl text-primary mb-4">Custom Amount</h3>
                <p className="text-muted-foreground mb-6">
                  Choose your own gift card value to create the perfect gift.
                </p>
                <Button 
                  className="w-full"
                  onClick={handleContact}
                >
                  Create Custom Gift Card
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gift Card Benefits */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Gift Card Benefits
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-px bg-luxury mx-auto mb-6"></div>
              <h3 className="font-canela text-2xl text-primary mb-4">Perfect Gift</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                Give the gift of relaxation and mountain wellness to friends and family.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-px bg-luxury mx-auto mb-6"></div>
              <h3 className="font-canela text-2xl text-primary mb-4">Flexible Use</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                Recipients can choose how to use their gift card across all our services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-px bg-luxury mx-auto mb-6"></div>
              <h3 className="font-canela text-2xl text-primary mb-4">No Expiration</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                Gift cards never expire, giving recipients time to plan their perfect visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Purchase */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              How to Purchase
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide mb-8">
              Contact us to purchase gift cards for any amount. We can arrange for pickup or delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="font-avenir"
                onClick={handleContact}
              >
                Contact Us to Purchase
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GiftCardsPage;
