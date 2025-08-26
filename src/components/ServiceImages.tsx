import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ServiceImages = () => {
  const services = [
    {
      title: "Thermal Waters",
      description: "Natural mineral-rich hot springs",
      image: "/springs hero.png",
      alt: "Natural thermal waters at The Springs"
    },
    {
      title: "Wellness Treatments",
      description: "Professional spa and massage services",
      image: "/spaservices.jpg",
      alt: "Wellness treatments and spa services"
    },
    {
      title: "Private Sanctuary",
      description: "Exclusive private hot spring experiences",
      image: "/PrivateHotSprings.jpg",
      alt: "Private hot springs sanctuary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          <p className="font-avenir text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the perfect blend of natural healing and luxury wellness experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 bg-card overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-canela text-2xl text-primary mb-2">
                  {service.title}
                </h3>
                <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceImages;
