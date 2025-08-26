import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CuratedExperiences = () => {
  const navigate = useNavigate();

  const handleBookExperience = (experienceType: string) => {
    navigate('/booking', { state: { selectedProduct: experienceType } });
  };

  const experiences = [
    {
      title: "Thermal Waters",
      description: "Natural mineral springs in a pristine mountain setting. Multiple pools maintained at optimal temperatures for therapeutic benefit.",
      image: "/src/assets/springs hero.png",
      alt: "Natural thermal waters at The Springs",
      buttonText: "Reserve Soaks",
      buttonAction: () => handleBookExperience('soak')
    },
    {
      title: "Wellness Treatments",
      description: "Personalized therapeutic treatments by master practitioners. Each session is tailored to restore balance and vitality.",
      image: "/src/assets/spaservices.jpg",
      alt: "Wellness treatments and spa services",
      buttonText: "Book Consultation",
      buttonAction: () => handleBookExperience('spa')
    },
    {
      title: "Private Sanctuary",
      description: "Exclusive access to private thermal pools and treatment spaces. Perfect for intimate celebrations or corporate retreats.",
      image: "/src/assets/PrivateHotSprings.jpg",
      alt: "Private hot springs sanctuary",
      buttonText: "Inquire Access",
      buttonAction: () => handleBookExperience('private_tub')
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
            Curated Experiences
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          <p className="font-avenir text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three carefully crafted experiences designed for the discerning guest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="border-0 bg-card overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-canela text-2xl text-primary mb-4">
                  {experience.title}
                </h3>
                <p className="font-avenir text-muted-foreground font-light leading-relaxed mb-6">
                  {experience.description}
                </p>
                <Button 
                  variant="outline" 
                  className="font-avenir border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                  onClick={experience.buttonAction}
                >
                  {experience.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedExperiences;