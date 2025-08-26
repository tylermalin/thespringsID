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
              Privacy Policy
            </h1>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              How we collect, use, and protect your personal information
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
                  The Springs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                </p>
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  By using our services, you consent to the data practices described in this policy.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">2. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Personal Information</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed mb-2">
                      We may collect the following personal information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Name and contact information (email, phone, address)</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                      <li>Reservation and booking details</li>
                      <li>Health information relevant to spa services (with consent)</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Automatically Collected Information</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed mb-2">
                      When you visit our website, we may automatically collect:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent</li>
                      <li>Referring website</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">3. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Process and manage your reservations and bookings</li>
                  <li>Provide customer service and support</li>
                  <li>Send confirmations, updates, and important notices</li>
                  <li>Process payments and prevent fraud</li>
                  <li>Improve our services and website functionality</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                  <li>Ensure safety and security of our facilities</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">4. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">We Do Not Sell Your Information</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We do not sell, trade, or rent your personal information to third parties for marketing purposes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Limited Sharing</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed mb-2">
                      We may share your information in the following limited circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>With service providers who assist in our operations (payment processors, booking systems)</li>
                      <li>To comply with legal requirements or court orders</li>
                      <li>To protect our rights, property, or safety</li>
                      <li>In connection with a business transfer or merger</li>
                      <li>With your explicit consent</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">5. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Security Measures</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal information against 
                      unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Data Retention</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy 
                      or as required by law.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">6. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Cookies</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                      and personalize content. You can control cookie settings through your browser preferences.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Third-Party Analytics</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We may use third-party analytics services to help us understand how visitors use our website. 
                      These services may collect information about your use of our site.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">7. Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Data portability (receive your data in a structured format)</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
                <p className="font-avenir text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            {/* Marketing Communications */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">8. Marketing Communications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Opt-In Consent</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We will only send you marketing communications if you have provided explicit consent or if you are an existing customer.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Opt-Out Options</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in our emails 
                      or contacting us directly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">9. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information 
                  from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">10. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers 
                  comply with applicable data protection laws and implement appropriate safeguards.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">11. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new 
                  policy on our website and updating the effective date. Your continued use of our services constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">12. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: privacy@thespringsid.com</p>
                  <p>Phone: (208) 392-9500</p>
                  <p>Address: 3742 Hwy 21, Idaho City, ID 83631</p>
                </div>
              </CardContent>
            </Card>

            {/* Effective Date */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <CardTitle className="font-canela text-2xl">13. Effective Date</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  This Privacy Policy is effective as of January 1, 2024.
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
              Questions About Privacy?
            </h2>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide mb-8">
              We're committed to transparency about how we handle your personal information.
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
