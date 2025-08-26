import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";

const PoliciesPage = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
  };

  const policies = [
    {
      category: "Reservation & Cancellation",
      items: [
        {
          title: "Reservation Policy",
          content: "BY RESERVATION ONLY - arrive promptly or early. Limited to 65-70 guests per 2½ hour session. No-show charges enforced when guests fail to cancel."
        },
        {
          title: "Cancellation Policy",
          content: "Separate Reservations: Springs and Inn The Pines reservations must be cancelled separately. Must contact both facilities to avoid cancellation charges."
        },
        {
          title: "No-Show Policy",
          content: "No-show charges enforced when guests fail to cancel. Please call to cancel if you cannot make your reservation."
        }
      ]
    },
    {
      category: "Age & Safety",
      items: [
        {
          title: "Age Restrictions by Day",
          content: "Adults Only (18+): Monday, Thursday, Friday (all day). All Ages Welcome: Saturday and Sunday until 7:00 PM. Adults Only (18+): Saturday and Sunday from 7:30 PM - 10:00 PM."
        },
        {
          title: "Supervision Requirements",
          content: "18+ required to supervise anyone younger (no lifeguards on duty). Not responsible for lost or stolen items."
        },
        {
          title: "Private Tubs Age Policy",
          content: "Private tubs are Adults 18+ only. Up to 4 adults per reservation."
        }
      ]
    },
    {
      category: "Facility & Amenities",
      items: [
        {
          title: "Towel Service",
          content: "NOT provided - bring your own (towels available for purchase)."
        },
        {
          title: "Lockers & Bags",
          content: "Limited personal lockers - bring only what you need. Bags not allowed poolside (except mesh/clear bags at private tubs only)."
        },
        {
          title: "Food & Beverage",
          content: "Outside food NOT allowed on premises. Food and beverage menu with poolside service available. Limited beer and wine service (not a bar - for relaxation, not inebriation)."
        }
      ]
    },
    {
      category: "Alcohol Policy",
      items: [
        {
          title: "Zero Tolerance Policy",
          content: "No outside alcohol anywhere on premises (including parking lot/picnic area)."
        },
        {
          title: "Consequences",
          content: "Refusal of service and removal for violations or inebriation."
        },
        {
          title: "On-Site Service",
          content: "Limited beer and wine service available (not a bar - for relaxation, not inebriation)."
        }
      ]
    },
    {
      category: "Operating Hours & Schedule",
      items: [
        {
          title: "General Hours",
          content: "Open 5 days a week (Thursday-Monday). Hours: 10:30 AM - 10:00 PM. Closed: Tuesday and Wednesday each week."
        },
        {
          title: "Private Tubs Hours",
          content: "Private tubs available 10:30 AM - 9:00 PM."
        },
        {
          title: "Massage Services",
          content: "60-minute therapeutic table massage sessions available 5 days a week with limited availability. 10% off soak when combined with massage."
        }
      ]
    },
    {
      category: "Pricing & Services",
      items: [
        {
          title: "General Soak Pricing",
          content: "Adult General Soak: $25 (2½ hour session). Child General Soak: $22 (2½ hour session)."
        },
        {
          title: "Private Tubs Pricing",
          content: "$55+ tax per hour (up to 2 adults). Additional $5 each for 3rd and 4th adult. Poolside server available for food and drinks."
        },
        {
          title: "Separate Reservations",
          content: "Private tubs require separate reservation from main facility (no combined discount available)."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
                            src="/innthepinesexterior.jpg"
            alt="Policies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center luxury-container animate-luxury-fade">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-canela text-6xl md:text-8xl font-normal text-white leading-[0.9] tracking-tight">
              Policies
            </h1>
            
            <div className="w-24 h-px bg-white/60 mx-auto my-12"></div>
            
            <p className="font-avenir text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Important information to ensure a safe and enjoyable experience for all guests.
            </p>

            <div className="pt-12">
              <Button 
                size="xl" 
                className="font-avenir bg-white text-primary hover:bg-white/90 tracking-wide"
                onClick={handleBookNow}
              >
                Book Your Experience
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice - Temporary Closure */}
      <section className="luxury-section bg-red-50 border-l-4 border-red-400">
        <div className="luxury-container">
          <div className="text-center">
            <h2 className="font-canela text-3xl md:text-4xl font-normal text-red-800 mb-4 tracking-tight">
              Temporary Closure Notice
            </h2>
            <p className="font-avenir text-lg text-red-700 font-medium mb-4">
              The Springs will be closed July 21st through August 30th, 2025 for remodeling
            </p>
            <p className="font-avenir text-md text-red-600 mb-6">
              Inn The Pines remains open during this time. Guests staying at Inn The Pines during the closure will receive a hotel discount when The Springs reopens.
            </p>
            <Button 
              variant="outline" 
              className="font-avenir border-red-400 text-red-700 hover:bg-red-50"
              onClick={() => navigate('/accommodations')}
            >
              Book Inn The Pines
            </Button>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Resort Policies
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Please review our policies to ensure a smooth and enjoyable experience during your visit.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {policies.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="font-canela text-2xl text-primary mb-6">{category.category}</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`} className="border border-border rounded-lg">
                      <AccordionTrigger className="px-6 py-4 text-left font-avenir">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-muted-foreground font-avenir">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Important Notice
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide mb-8">
              By making a reservation, you acknowledge that you have read and agree to our policies. We reserve the right to modify these policies at any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="font-avenir"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-avenir"
                onClick={handleBookNow}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoliciesPage;
