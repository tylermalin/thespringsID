import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
              Privacy Policy — The Springs Resort & Inn the Pines
            </h1>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Last Updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  The Springs Resort & Inn the Pines ("The Springs," "we," "our") values your privacy. 
                  This Privacy Policy explains how we collect, use, and share your information when you 
                  visit our resort, website, or make reservations.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">2. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Personal Information: Name, email, phone number, billing details.</li>
                  <li>Booking Information: Dates of stay, spa services, special requests.</li>
                  <li>Technical Information: IP address, browser, device type, cookies.</li>
                  <li>Communications: Messages, feedback, or reviews.</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">3. How We Use Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Process reservations and payments.</li>
                  <li>Provide customer support.</li>
                  <li>Send booking confirmations and service updates.</li>
                  <li>Share promotional offers (you may opt out anytime).</li>
                  <li>Improve our services and guest experience.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Sharing Information */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">4. Sharing Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We share information only with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Payment processors and booking providers.</li>
                  <li>Service vendors who support operations.</li>
                  <li>Legal authorities when required.</li>
                </ul>
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We do not sell personal data to third parties.
                </p>
              </CardContent>
            </Card>

            {/* Cookies & Analytics */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">5. Cookies & Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We use cookies for site functionality and analytics. You can manage cookies through your browser.
                </p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">6. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We retain data as long as needed for bookings, guest services, or legal compliance.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">7. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  Depending on your jurisdiction, you may have rights to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access or request a copy of your data.</li>
                  <li>Correct or delete personal information.</li>
                  <li>Opt out of promotional communications.</li>
                </ul>
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  Requests can be made to: privacy@thespringsid.com.
                </p>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">8. Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We implement safeguards to protect your data, but no system is completely secure.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">9. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  Our services are not directed at children under 13. We do not knowingly collect personal data from them.
                </p>
              </CardContent>
            </Card>

            {/* International Use */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">10. International Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  If you are outside the U.S., your data may be transferred and stored in the U.S.
                </p>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">11. Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We may update this policy periodically. Updates will be posted with a new "Last Updated" date.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">12. Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  Questions? Contact us at:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: privacy@thespringsid.com</p>
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
              Questions About Privacy?
            </h2>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide mb-8">
              We're here to help clarify any questions you may have about our privacy practices.
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

export default PrivacyPolicy;
