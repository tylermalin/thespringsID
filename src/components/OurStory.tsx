import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="luxury-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-6 tracking-tight">
                Our Story
              </h2>
              <div className="w-24 h-px bg-primary/30 mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <p className="font-avenir text-xl text-muted-foreground leading-relaxed tracking-wide">
                A sanctuary of natural wellness, The Springs connects you with Idaho's restorative thermal waters, offering modern comfort just 45 minutes from Boise.
              </p>
              
              <p className="font-avenir text-lg text-muted-foreground leading-relaxed">
                Nestled in the heart of the Idaho mountains, our resort has been a destination for those seeking renewal and connection with nature's healing powers. The natural geothermal springs that flow through our property have been cherished for generations, offering a unique blend of luxury and natural therapy.
              </p>
              
              <p className="font-avenir text-lg text-muted-foreground leading-relaxed">
                Today, we continue this tradition of wellness, combining the restorative power of thermal waters with modern amenities and personalized care. Every visit to The Springs is an opportunity to reconnect with yourself and the natural world.
              </p>
            </div>
            
            <Button
              onClick={() => navigate('/about')}
              size="lg"
              variant="outline"
              className="font-avenir border-luxury text-luxury hover:bg-luxury hover:text-white transition-all duration-300 px-8"
            >
              Discover Our Story
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/springsexteriornight.jpg"
                alt="The Springs Resort at night"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="font-canela text-3xl text-primary mb-2">45</div>
                <div className="font-avenir text-sm text-muted-foreground">Minutes from Boise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
