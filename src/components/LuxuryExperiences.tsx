import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Waves, Heart, Crown } from "lucide-react";

const LuxuryExperiences = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      id: 'thermal-waters',
      title: 'Thermal Waters',
      description: 'Natural mineral springs in a pristine mountain setting. Multiple pools maintained at optimal temperatures for relaxation and renewal.',
      icon: Waves,
      cta: 'Reserve Your Soak',
      image: '/pubpool3.jpg',
      action: () => navigate('/bookeo-integration')
    },
    {
      id: 'wellness-treatments',
      title: 'Wellness Treatments',
      description: 'Personalized spa therapies by master practitioners. Each treatment restores balance and vitality.',
      icon: Heart,
      cta: 'Book a Spa Session',
      image: '/spaservices.jpg',
      action: () => navigate('/spa')
    },
    {
      id: 'private-sanctuary',
      title: 'Private Sanctuary',
      description: 'Exclusive access to private pools and treatment spaces. Perfect for intimate celebrations or retreats.',
      icon: Crown,
      cta: 'Request Sanctuary Access',
      image: '/privatepool1.jpg',
      action: () => navigate('/bookeo-integration')
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-6 tracking-tight">
            Choose Your Experience
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          <p className="font-avenir text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed tracking-wide">
            Three distinct ways to experience luxury mountain wellness at The Springs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card 
                key={experience.id}
                className="group border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="font-canela text-2xl text-primary tracking-tight">
                    {experience.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="font-avenir text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <Button
                    onClick={experience.action}
                    size="lg"
                    className="font-avenir w-full bg-gradient-to-r from-luxury to-luxury/80 hover:from-luxury/90 hover:to-luxury text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {experience.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LuxuryExperiences;
