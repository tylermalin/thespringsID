import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Globe, ChevronDown, ChevronUp } from "lucide-react";
import InteractiveMap from "@/components/InteractiveMap";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const navigate = useNavigate();
  const [expandedDirection, setExpandedDirection] = useState<string | null>(null);

  const handleBookNow = () => {
    navigate('/bookeo-integration');
  };

  const toggleDirection = (direction: string) => {
    setExpandedDirection(expandedDirection === direction ? null : direction);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "The Springs Location",
      details: ["3742 Hwy 21, PO Box 1110", "Idaho City, ID 83631"],
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Inn The Pines Location",
      details: ["3764 Hwy 21", "Idaho City, ID 83631"],
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone Numbers",
      details: ["The Springs: (208) 392-9500", "Inn The Pines: (208) 392-9505"],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: ["info@thespringsid.com"],
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Website",
      details: ["www.innthepines.com"],
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Operating Hours",
      details: ["Thursday-Monday: 10:30 AM - 10:00 PM", "Closed: Tuesday and Wednesday"],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-hot-springs.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center luxury-container animate-luxury-fade">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-canela text-6xl md:text-8xl font-normal text-white leading-[0.9] tracking-tight">
              Contact Us
            </h1>
            
            <div className="w-24 h-px bg-white/60 mx-auto my-12"></div>
            
            <p className="font-avenir text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              We're here to help you plan your perfect mountain wellness experience.
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

      {/* Contact Information */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Get In Touch
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Located in the heart of the Idaho mountains, we're ready to welcome you to your mountain retreat.
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
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 bg-card">
                <CardHeader>
                  <CardTitle className="font-canela text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full p-3 border border-border rounded-md bg-background"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-3 border border-border rounded-md bg-background"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-border rounded-md bg-background"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 border border-border rounded-md bg-background"
                  />
                  <select className="w-full p-3 border border-border rounded-md bg-background">
                    <option>Select Inquiry Type</option>
                    <option>Reservations</option>
                    <option>Spa Services</option>
                    <option>Private Events</option>
                    <option>Employment</option>
                    <option>General Information</option>
                  </select>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border border-border rounded-md bg-background resize-none"
                  ></textarea>
                  <Button className="w-full font-avenir">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Additional Info */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Connect With Us
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Follow us for updates, special offers, and mountain wellness inspiration.
                </p>
                <div className="space-y-2">
                  <p className="font-avenir text-foreground">@thespringsid</p>
                  <p className="text-sm text-muted-foreground">Facebook and Instagram</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">Employment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Join our team and be part of creating exceptional mountain experiences.
                </p>
                <div className="space-y-2">
                  <p className="font-avenir text-foreground">Currently Hiring:</p>
                  <p className="text-sm text-muted-foreground">Front Desk, Poolside Server, Attendant</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => window.open('https://thespringsid.wufoo.com/forms/apply-online-to-join-the-team-at-the-springs/', '_blank')}
                >
                  Apply Online
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">Private Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Host your special event in our mountain sanctuary.
                </p>
                <p className="font-avenir text-foreground mb-4">
                  Email: info@thespringsid.com
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/private-events')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Find Us
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Located in the heart of the Idaho mountains, just north of Idaho City
            </p>
          </div>

          {/* Get Directions Buttons - Mobile First */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="font-avenir"
              onClick={() => window.open('https://maps.google.com/?q=3742+Hwy+21+Idaho+City+ID+83631', '_blank')}
            >
              Get Directions to The Springs
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-avenir"
              onClick={() => window.open('https://maps.google.com/?q=3764+Hwy+21+Idaho+City+ID+83631', '_blank')}
            >
              Get Directions to Inn The Pines
            </Button>
          </div>

          {/* Collapsible Directions */}
          <div className="max-w-2xl mx-auto space-y-4 mb-12">
            <Card className="border-0 bg-card">
              <CardHeader 
                className="cursor-pointer hover:bg-secondary/50 transition-colors"
                onClick={() => toggleDirection('boise')}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="font-canela text-xl">From Boise</CardTitle>
                  {expandedDirection === 'boise' ? 
                    <ChevronUp className="w-5 h-5" /> : 
                    <ChevronDown className="w-5 h-5" />
                  }
                </div>
              </CardHeader>
              {expandedDirection === 'boise' && (
                <CardContent>
                  <p className="font-avenir text-muted-foreground leading-relaxed">
                    Take Highway 21 north towards Idaho City. Look for The Springs sign on the left just past mile marker 37. 
                    Idaho City is 1 mile beyond The Springs. Drive time: approximately 45 minutes.
                  </p>
                </CardContent>
              )}
            </Card>

            <Card className="border-0 bg-card">
              <CardHeader 
                className="cursor-pointer hover:bg-secondary/50 transition-colors"
                onClick={() => toggleDirection('idaho-city')}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="font-canela text-xl">From Idaho City</CardTitle>
                  {expandedDirection === 'idaho-city' ? 
                    <ChevronUp className="w-5 h-5" /> : 
                    <ChevronDown className="w-5 h-5" />
                  }
                </div>
              </CardHeader>
              {expandedDirection === 'idaho-city' && (
                <CardContent>
                  <p className="font-avenir text-muted-foreground leading-relaxed">
                    Head south on Highway 21 towards Boise. The Springs is located 1 mile south of Idaho City on the right side of the highway. 
                    Look for our distinctive sign. Drive time: approximately 2 minutes.
                  </p>
                </CardContent>
              )}
            </Card>
          </div>

          <InteractiveMap />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
