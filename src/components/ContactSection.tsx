import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import InteractiveMap from "./InteractiveMap";

const ContactSection = () => {
  const navigate = useNavigate();

  const handleBookHotSprings = () => {
    navigate('/booking', { state: { selectedProduct: 'soak' } });
  };

  const handleBookAccommodation = () => {
    navigate('/booking', { state: { selectedProduct: 'inn' } });
  };

  const handleGiftCards = () => {
    navigate('/gift-cards');
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      details: ["3764 Hwy 21", "Idaho City, ID 83631"],
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Reservations",
      details: ["(208) 392-7680"],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: ["info@thespringsid.com"],
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      details: ["Hot Springs: 9:00 AM - 9:00 PM", "Spa: By appointment"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Visit The Springs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of the Idaho mountains, we're ready to welcome you to your mountain retreat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 bg-card hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-luxury mt-1">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Ready to Book?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="luxury" 
                  size="lg" 
                  className="flex-1"
                  onClick={handleBookHotSprings}
                >
                  Book Hot Springs
                </Button>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="flex-1"
                  onClick={handleBookAccommodation}
                >
                  Book Accommodation
                </Button>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <InteractiveMap />
        </div>

        {/* Gift Cards CTA */}
        <div className="mt-16 text-center gradient-luxury rounded-2xl p-12">
          <h3 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
            Give the Gift of Relaxation
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
            Share the experience of mountain wellness with our luxury gift cards, perfect for any occasion
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
            onClick={handleGiftCards}
          >
            Purchase Gift Cards
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;