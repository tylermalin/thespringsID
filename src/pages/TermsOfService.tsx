Year-Round Mountain Experience
We have you covered all year long. Our temperature-controlled pools can be cooled on warm days and heated on cool days, ensuring the perfect temperature for your visit regardless of the season.import React from 'react';
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
              Terms of Service
            </h1>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Acceptance of Terms */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  By accessing and using The Springs website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">2. Services Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  The Springs provides hot springs facilities, spa services, accommodations, and related wellness experiences. 
                  Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Natural hot springs soaking experiences</li>
                  <li>Private tub rentals</li>
                  <li>Spa and massage services</li>
                  <li>Overnight accommodations at Inn The Pines</li>
                  <li>Private event hosting</li>
                  <li>Gift card purchases</li>
                </ul>
              </CardContent>
            </Card>

            {/* Reservations and Cancellations */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">3. Reservations and Cancellations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Reservations</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      All services require advance reservations. Walk-ins are not accepted. Reservations can be made online or by phone.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Cancellation Policy</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      Cancellations must be made 24 hours in advance for a full refund. Late cancellations or no-shows may result in charges.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Modifications</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      Changes to reservations are subject to availability and may incur additional charges.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health and Safety */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">4. Health and Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Health Considerations</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      Hot springs use may not be suitable for everyone. Consult with your healthcare provider if you have health conditions, 
                      are pregnant, or have concerns about hot water exposure.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Safety Rules</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>No lifeguards on duty - swim at your own risk</li>
                      <li>Children under 16 must be supervised by adults 18+</li>
                      <li>No outside food or beverages allowed</li>
                      <li>Follow posted safety guidelines and staff instructions</li>
                      <li>No glass containers in pool areas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Age Restrictions */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">5. Age Restrictions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">General Soak</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      All ages welcome on weekends and Sundays until 7:00 PM. Adults only (18+) on Monday, Thursday, Friday, and Saturday/Sunday evenings.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Private Tubs</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      Adults 18+ only. Valid ID may be required.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Spa Services</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      Adults 18+ only. Some treatments may have additional age restrictions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment and Pricing */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">6. Payment and Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Pricing</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      All prices are subject to change without notice. Current rates are available on our website and by phone.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Payment</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      Payment is required at the time of booking. We accept all major credit cards. Cash payments may be accepted on-site.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Taxes and Fees</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      All rates exclude applicable taxes and fees. A 5% service fee may apply to certain services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conduct and Behavior */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">7. Conduct and Behavior</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We reserve the right to refuse service or ask guests to leave for inappropriate behavior, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Disruptive or unsafe behavior</li>
                  <li>Violation of facility rules</li>
                  <li>Intoxication or drug use</li>
                  <li>Harassment of other guests or staff</li>
                  <li>Damage to property</li>
                </ul>
              </CardContent>
            </Card>

            {/* Liability and Indemnification */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">8. Liability and Indemnification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  By using our services, you agree to release The Springs from liability for any injuries, damages, or losses that may occur 
                  during your visit, except in cases of gross negligence. You agree to indemnify and hold harmless The Springs from any claims 
                  arising from your use of our facilities.
                </p>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">9. Privacy and Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy for information about how we collect, use, and protect your personal information.
                </p>
              </CardContent>
            </Card>

            {/* Modifications to Terms */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">10. Modifications to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. 
                  Continued use of our services constitutes acceptance of modified terms.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">11. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  If you have questions about these terms, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Phone: (208) 392-9500</p>
                  <p>Email: info@thespringsid.com</p>
                  <p>Address: 3742 Hwy 21, Idaho City, ID 83631</p>
                </div>
              </CardContent>
            </Card>

            {/* Effective Date */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">12. Effective Date</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  These terms are effective as of January 1, 2024, and apply to all services and reservations made on or after this date.
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
