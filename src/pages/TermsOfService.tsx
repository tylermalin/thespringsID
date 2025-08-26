import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
              Terms of Service — The Springs Resort & Inn the Pines
            </h1>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Last Updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Agreement to Terms */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">1. Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  By accessing or booking with The Springs Resort & Inn the Pines ("The Springs," "we," "our," or "us"), 
                  you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use our services.
                </p>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">2. Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  You must be at least 18 years old (or the age of majority in your jurisdiction) to make a booking. 
                  Minors must be accompanied by a parent or legal guardian.
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">3. Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We provide:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Day-use access to thermal pools and hot springs.</li>
                  <li>Spa & wellness treatments.</li>
                  <li>Private sanctuary rentals for events and retreats.</li>
                  <li>Overnight accommodations at Inn the Pines.</li>
                </ul>
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We may update or adjust our services without notice.
                </p>
              </CardContent>
            </Card>

            {/* Reservations & Payments */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">4. Reservations & Payments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All bookings are subject to availability.</li>
                  <li>Payment is due at the time of booking unless otherwise specified.</li>
                  <li>Prices are listed in USD and subject to applicable taxes.</li>
                  <li>Cancellation and refund policies are outlined at checkout and on confirmation emails.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Guest Conduct */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">5. Guest Conduct</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  To ensure the safety and comfort of all guests, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Follow posted rules for pool and spa use.</li>
                  <li>Refrain from disruptive or unsafe behavior.</li>
                  <li>Respect staff instructions and property guidelines.</li>
                </ul>
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We reserve the right to refuse service or remove guests who violate these rules.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">6. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  All content on our website, including logos, images, text, and design, is owned by The Springs 
                  and may not be copied or distributed without written permission.
                </p>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">7. Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We may integrate third-party tools (e.g., Google Maps, Stripe, booking platforms). 
                  We are not responsible for the practices of these services.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimer of Warranties */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">8. Disclaimer of Warranties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  Our services are provided "as is." We make no warranties about uninterrupted service, 
                  availability, or fitness for a particular purpose.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, The Springs is not liable for indirect, incidental, 
                  or consequential damages. Our liability for direct damages shall not exceed the amount paid 
                  for the specific service booked.
                </p>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">10. Indemnification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold us harmless from any claims, liabilities, or damages 
                  resulting from your use of our services or breach of these Terms.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law & Dispute Resolution */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">11. Governing Law & Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of the State of Idaho. Any disputes shall be resolved 
                  in the courts of Ada County, Idaho, unless arbitration is mutually agreed.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">12. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We may update these Terms from time to time. Updates will be posted on our website 
                  with a revised "Last Updated" date.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">13. Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  For questions, please contact:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: info@thespringsid.com</p>
                  <p>Phone: (208) 392-7680</p>
                </div>
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
              Questions About Our Terms?
            </h2>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide mb-8">
              We're here to help clarify any questions you may have about our terms of service.
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

export default TermsOfService;
