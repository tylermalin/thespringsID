import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import AlertSection from "@/components/AlertSection";
import { useAnalytics } from "@/hooks/use-analytics";

const FAQsPage = () => {
  useAnalytics('faqs');
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/bookeo-integration');
  };

  const faqCategories = [
    {
      category: "Reservations & Booking",
      items: [
        {
          question: "Do I need a reservation?",
          answer: "Yes, BY RESERVATION ONLY. No walk-ins are accepted. Please book online or call (208) 392-9500 to secure your spot."
        },
        {
          question: "What is the cancellation policy?",
          answer: "All reservations require 12 hours advance notice for cancellation. Credit card will be charged full price for no-shows or late cancellations. You must receive email confirmation for all reservations."
        },
        {
          question: "How far in advance should I book?",
          answer: "We recommend booking as early as possible, especially for weekends and holidays. Limited to 65-70 guests per 2.5 hour session."
        },
        {
          question: "Can I modify my reservation?",
          answer: "Reservations can be modified up to 12 hours before your scheduled time, subject to availability. Changes within 12 hours may incur fees."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      items: [
        {
          question: "What are the current rates?",
          answer: "Adult General Soak: $25 (2.5 hour session), Child General Soak: $22 (children 12 and under). Hotel guests receive discounted rates: Adults $20, Children $17."
        },
        {
          question: "Do you offer hotel guest discounts?",
          answer: "Yes! Guests staying at Inn The Pines receive guaranteed entry to The Springs even when fully booked, plus discounted pricing: Adults $20, Children $17."
        },
        {
          question: "What are private tub rates?",
          answer: "Private tubs are $55/hour for couples (up to 2 adults), with $5 extra per person for 3rd and 4th adult. Adults 18+ only."
        },
        {
          question: "Do you accept credit cards?",
          answer: "Yes, we accept all major credit cards. Payment is required at the time of booking."
        }
      ]
    },
    {
      category: "Age Restrictions & Policies",
      items: [
        {
          question: "What are the age restrictions?",
          answer: "Adults Only (18+): Monday, Thursday, Friday (all day). All Ages Welcome: Saturday and Sunday until 7:00 PM. Adults Only (18+): Saturday and Sunday from 7:30 PM - 10:00 PM."
        },
        {
          question: "Can children visit?",
          answer: "Yes, on Saturday and Sunday until 7:00 PM. Children 12 and under are $22. 18+ required to supervise anyone younger (no lifeguards on duty)."
        },
        {
          question: "Are private tubs family-friendly?",
          answer: "No, private tubs are Adults 18+ only. Up to 4 adults per reservation."
        },
        {
          question: "Do you have lifeguards?",
          answer: "No lifeguards on duty. 18+ required to supervise anyone younger. Guests are responsible for their own safety."
        }
      ]
    },
    {
      category: "What to Bring & Facilities",
      items: [
        {
          question: "Do you provide towels?",
          answer: "No, towel service is NOT provided. Please bring your own towel (towels available for purchase if needed)."
        },
        {
          question: "Can I bring outside food?",
          answer: "No, outside food is NOT allowed on premises. We offer food and beverage menu with poolside service. Picnic area available near property for outside food."
        },
        {
          question: "Can I bring alcohol?",
          answer: "No outside alcohol anywhere on premises (including parking lot/picnic area). Zero tolerance policy - refusal of service and removal for violations. Limited beer and wine service available on-site for relaxation, not inebriation."
        },
        {
          question: "Do you have lockers?",
          answer: "Limited personal lockers available. Please bring only what you need. We are not responsible for lost or stolen items."
        },
        {
          question: "Can I bring bags poolside?",
          answer: "Bags are not allowed poolside except mesh/clear bags at private tubs only."
        }
      ]
    },
    {
      category: "Operating Hours & Schedule",
      items: [
        {
          question: "What are your hours?",
          answer: "Open 5 days a week (Thursday-Monday). Hours: 10:30 AM - 10:00 PM. Closed: Tuesday and Wednesday each week."
        },
        {
          question: "What are private tub hours?",
          answer: "Private tubs available 10:30 AM - 10:00 PM (updated November 3rd). 1 hour reservations."
        },
        {
          question: "When is the steam room available?",
          answer: "Steam room is currently under renovation and will return spring 2024."
        },
        {
          question: "Do you offer massage services?",
          answer: "Yes, 60-minute therapeutic table massage sessions available 5 days a week with limited availability. 10% off soak when combined with massage. Located in private yurt near pool deck."
        }
      ]
    },
    {
      category: "Location & Directions",
      items: [
        {
          question: "Where are you located?",
          answer: "The Springs: 3742 Hwy 21, PO Box 1110, Idaho City, ID 83631. Inn The Pines: 3764 Hwy 21, Idaho City, ID 83631."
        },
        {
          question: "How do I get there from Boise?",
          answer: "Take Highway 21 north towards Idaho City, look for sign on left just past mile marker 37 (Idaho City is 1 mile beyond The Springs)."
        },
        {
          question: "Is there parking available?",
          answer: "Yes, free parking is available on-site."
        },
        {
          question: "Are you near Idaho City?",
          answer: "Yes, we are located just north of Idaho City, about 1 mile before you reach the town."
        }
      ]
    },
    {
      category: "Special Services & Events",
      items: [
        {
          question: "Do you offer gift cards?",
          answer: "Yes, gift cards available for Springs facilities, food/beverages, retail, private tubs, and Inn The Pines."
        },
        {
          question: "Can I host a private event?",
          answer: "Yes, private events available by email inquiry to info@thespringsid.com."
        },
        {
          question: "Are you hiring?",
          answer: "Yes, currently hiring Front Desk, Poolside Server, and Attendant positions. Servers must be 19+. Apply online at our website."
        },
        {
          question: "Do you offer packages?",
          answer: "Yes, combination packages available. 10% off soak when combined with massage. Hotel guests receive guaranteed entry and discounted pricing."
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
            src="/hero-hot-springs.jpg"
            alt="Frequently Asked Questions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center luxury-container animate-luxury-fade">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-canela text-6xl md:text-8xl font-normal text-white leading-[0.9] tracking-tight">
              FAQs
            </h1>
            
            <div className="w-24 h-px bg-white/60 mx-auto my-12"></div>
            
            <p className="font-avenir text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Find answers to the most commonly asked questions about The Springs and Inn The Pines.
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

      {/* Alert Section - Managed via Admin Dashboard */}
      <AlertSection pageName="faqs" />

      {/* FAQs Section */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Everything you need to know about visiting The Springs and Inn The Pines.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="font-canela text-2xl text-primary mb-6">{category.category}</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`} className="border border-border rounded-lg">
                      <AccordionTrigger className="px-6 py-4 text-left font-avenir">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-muted-foreground font-avenir">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Still Have Questions?
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide mb-8">
              Can't find what you're looking for? Our team is here to help you plan your perfect mountain experience.
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

export default FAQsPage;
