import React from 'react';
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/hooks/use-analytics";

const PrivacyPolicy = () => {
  useAnalytics('privacy-policy');

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
              Effective Date: February 6, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto space-y-12 prose prose-slate max-w-none font-avenir">

            <p className="text-lg text-muted-foreground leading-relaxed">
              This Privacy Policy explains how The Springs collects, uses, and protects information you provide when you visit our website, make a reservation, or contact us.
            </p>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Information We Collect</h2>
              <p>We may collect:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Contact information (such as name, email, phone number)</li>
                <li>Reservation information (such as date/time, party size, services selected)</li>
                <li>Messages you send us through forms or email</li>
                <li>Basic website usage data (such as pages visited and general interaction data)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">How We Use Information</h2>
              <p>We use information to:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Process reservations and provide services</li>
                <li>Communicate with you about your booking or questions</li>
                <li>Improve our website and customer experience</li>
                <li>Maintain security and prevent fraud or misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Third-Party Services</h2>
              <p>We may use trusted third-party services to operate our business, such as:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Online booking/reservation tools</li>
                <li>Form providers (for applications or inquiries)</li>
                <li>Website analytics tools</li>
              </ul>
              <p className="mt-4">These providers may process limited information on our behalf to deliver their services.</p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Cookies and Analytics</h2>
              <p>Our website may use cookies or similar technologies to help the site function properly and understand general website traffic. You can adjust cookie settings in your browser, though some site features may not work as intended.</p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">How We Protect Information</h2>
              <p>We take reasonable measures to protect personal information. No method of transmission or storage is 100% secure, but we work to safeguard your information using appropriate administrative and technical practices.</p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Your Choices</h2>
              <p>You may request to update or correct your information by contacting us. You may also opt out of non-essential communications at any time.</p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Contact</h2>
              <p>For privacy questions or requests, contact us at:</p>
              <p className="font-medium mt-4">
                Email: info@thespringsid.com
              </p>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
