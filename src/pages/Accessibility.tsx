import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";

const Accessibility = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="luxury-container">
          <div className="text-center">
            <h1 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Accessibility Statement — The Springs Resort & Inn the Pines
            </h1>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Last Updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Accessibility Content */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction */}
            <Card className="border-0 bg-card">
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  At The Springs Resort & Inn the Pines, we are committed to making our website, facilities, 
                  and services accessible to all guests, including individuals with disabilities.
                </p>
              </CardContent>
            </Card>

            {/* Website Accessibility */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">Website Accessibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>We strive to meet WCAG 2.1 AA guidelines.</li>
                  <li>Our website is compatible with screen readers, keyboard navigation, and high-contrast modes.</li>
                  <li>Images include descriptive alt text.</li>
                </ul>
              </CardContent>
            </Card>

            {/* On-Site Accessibility */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">On-Site Accessibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Designated accessible parking spaces.</li>
                  <li>Accessible entrances and pathways.</li>
                  <li>ADA-compliant restrooms.</li>
                  <li>Selected lodging accommodations designed for mobility accessibility.</li>
                  <li>Staff assistance upon request.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Ongoing Commitment */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">Ongoing Commitment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We regularly review our facilities and digital presence to ensure accessibility improvements.
                </p>
              </CardContent>
            </Card>

            {/* Feedback & Assistance */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">Feedback & Assistance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  If you experience difficulty accessing our website or facilities, please contact us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Email: accessibility@thespringsid.com</li>
                  <li>Phone: (208) 392-7680</li>
                </ul>
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We aim to respond within 2 business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="luxury-section bg-secondary">
        <div className="luxury-container">
          <div className="text-center">
            <h2 className="font-canela text-3xl md:text-4xl font-normal text-primary mb-8 tracking-tight">
              Questions About Accessibility?
            </h2>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide mb-8">
              We're here to help ensure your visit is comfortable and accessible.
            </p>
            <Button 
              size="lg" 
              className="font-avenir"
              onClick={handleContact}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accessibility;
