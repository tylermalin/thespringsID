import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";
import SeasonalGallery from "@/components/SeasonalGallery";

// Custom Luxury Icons
const RelaxIcon = () => (
  <div className="relative w-16 h-16 mx-auto mb-6">
    <div className="absolute inset-0 bg-gradient-to-br from-luxury/20 to-luxury/10 rounded-full"></div>
    <div className="absolute inset-2 bg-gradient-to-br from-luxury to-luxury/80 rounded-full flex items-center justify-center">
      <div className="w-8 h-8 relative">
        {/* Mountain silhouette with steam */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-white/90 rounded-t-full"></div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-white/90 rounded-t-full"></div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/90 rounded-t-full"></div>
        {/* Steam wisps */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white/60 rounded-full opacity-60"></div>
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-1.5 bg-white/60 rounded-full opacity-40"></div>
      </div>
    </div>
  </div>
);

const EnjoyIcon = () => (
  <div className="relative w-16 h-16 mx-auto mb-6">
    <div className="absolute inset-0 bg-gradient-to-br from-luxury/20 to-luxury/10 rounded-full"></div>
    <div className="absolute inset-2 bg-gradient-to-br from-luxury to-luxury/80 rounded-full flex items-center justify-center">
      <div className="w-8 h-8 relative">
        {/* Sun with rays */}
        <div className="absolute inset-0 bg-white/90 rounded-full"></div>
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-white/90 rounded-full"></div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-white/90 rounded-full"></div>
        <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-0.5 bg-white/90 rounded-full"></div>
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-0.5 bg-white/90 rounded-full"></div>
        <div className="absolute top-1 -left-1 w-1 h-1 bg-white/90 rounded-full"></div>
        <div className="absolute top-1 -right-1 w-1 h-1 bg-white/90 rounded-full"></div>
        <div className="absolute bottom-1 -left-1 w-1 h-1 bg-white/90 rounded-full"></div>
        <div className="absolute bottom-1 -right-1 w-1 h-1 bg-white/90 rounded-full"></div>
      </div>
    </div>
  </div>
);

const EscapeIcon = () => (
  <div className="relative w-16 h-16 mx-auto mb-6">
    <div className="absolute inset-0 bg-gradient-to-br from-luxury/20 to-luxury/10 rounded-full"></div>
    <div className="absolute inset-2 bg-gradient-to-br from-luxury to-luxury/80 rounded-full flex items-center justify-center">
      <div className="w-8 h-8 relative">
        {/* Compass/Adventure symbol */}
        <div className="absolute inset-0 border-2 border-white/90 rounded-full"></div>
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-white/90 rounded-full"></div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-white/90 rounded-full"></div>
        <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-3 h-0.5 bg-white/90 rounded-full"></div>
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-0.5 bg-white/90 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white/90 rounded-full"></div>
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/springsinteriornight.jpg"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center luxury-container animate-luxury-fade">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-canela text-6xl md:text-8xl font-normal text-white leading-[0.9] tracking-tight">
              Our Story
            </h1>
            
            <div className="w-24 h-px bg-white/60 mx-auto my-12"></div>
            
            <p className="font-avenir text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              A legacy of mountain wellness and natural healing in the heart of the Idaho mountains.
            </p>

            <div className="pt-12">
              <Button 
                size="xl" 
                className="font-avenir bg-white text-primary hover:bg-white/90 tracking-wide"
                onClick={handleBookNow}
              >
                Experience The Springs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
                Mountain Wellness Legacy
              </h2>
              <div className="w-24 h-px bg-primary/30 mb-8"></div>
              <p className="font-avenir text-lg text-muted-foreground font-light leading-relaxed tracking-wide mb-8">
                The Springs (Hot Springs) and Inn The Pines are sister properties located in the beautiful Idaho mountains, just north of Idaho City. Our natural thermal waters have been providing healing and relaxation to visitors for generations, offering a true mountain wellness experience.
              </p>
              <p className="font-avenir text-lg text-muted-foreground font-light leading-relaxed tracking-wide">
                Today, we continue to honor the traditions of mountain wellness while embracing modern luxury and sustainable practices. Our commitment to preserving the natural beauty of the Idaho mountains remains at the heart of everything we do.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/innthepinesexterior.jpg"
                alt="Mountain legacy"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Properties */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Our Properties
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-px bg-luxury mx-auto mb-6"></div>
              <h3 className="font-canela text-2xl text-primary mb-4">The Springs</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed mb-4">
                Natural hot springs facility offering therapeutic soaks and massage services.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>3742 Hwy 21, PO Box 1110</p>
                <p>Idaho City, ID 83631</p>
                <p>Phone: (208) 392-9500</p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-px bg-luxury mx-auto mb-6"></div>
              <h3 className="font-canela text-2xl text-primary mb-4">Inn The Pines</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed mb-4">
                Cozy mountain lodge providing comfortable accommodations for your mountain getaway.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>3764 Hwy 21</p>
                <p>Idaho City, ID 83631</p>
                <p>Phone: (208) 392-9505</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Our Values
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <RelaxIcon />
              <h3 className="font-canela text-2xl text-primary mb-4">RELAX</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                We provide a peaceful mountain sanctuary where guests can truly relax and unwind in natural thermal waters.
              </p>
            </div>
            <div className="text-center">
              <EnjoyIcon />
              <h3 className="font-canela text-2xl text-primary mb-4">ENJOY</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                We create memorable experiences that allow guests to enjoy the beauty and tranquility of the Idaho mountains.
              </p>
            </div>
            <div className="text-center">
              <EscapeIcon />
              <h3 className="font-canela text-2xl text-primary mb-4">ESCAPE</h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed">
                We offer a true escape from the everyday, providing a mountain getaway with much to see and experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Year-Round Experience */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Year-Round Mountain Experience
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              We have you covered all year long. Our temperature-controlled pools can be cooled on warm days and heated on cool days, ensuring the perfect temperature for your visit regardless of the season.
            </p>
          </div>

          {/* Seasonal Galleries */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <SeasonalGallery
              season="winter"
              title="Winter Wonderland"
              description="Cozy up in our warm thermal waters while surrounded by snow-covered mountains"
              images={[
                '/privatetubssnow.jpg',
                '/pubpoolsnow.jpg',
                '/privatetubswinternight.jpg',
                '/privatetubswinternightexterior.jpg'
              ]}
            />
            <SeasonalGallery
              season="summer"
              title="Summer Serenity"
              description="Enjoy refreshing soaks with mountain views and perfect temperatures"
              images={[
                '/privatetubssummer.jpg',
                '/pubpoolsummer.jpg',
                '/privatetubssummer.png',
                '/privatetubssummerwithguest.jpg'
              ]}
            />
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="font-avenir"
                onClick={handleBookNow}
              >
                Book Your Experience
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-avenir"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
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

export default AboutPage;
