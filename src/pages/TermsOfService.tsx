import React from 'react';
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/hooks/use-analytics";

const TermsOfService = () => {
  useAnalytics('terms-of-service');

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="luxury-container">
          <div className="text-center">
            <h1 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Terms & Conditions
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
              These Terms & Conditions govern your use of The Springs website and facilities, and your purchase of services or reservations.
            </p>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Facility Use and Guest Responsibilities</h2>
              <p>Guests agree to:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Follow posted rules and staff instructions</li>
                <li>Use facilities safely and respectfully</li>
                <li>Immediately report unsafe conditions to staff</li>
                <li>Treat other guests and staff with respect</li>
              </ul>
              <p className="mt-6">The Springs may refuse service or remove guests for unsafe, disruptive, or inappropriate behavior without refund.</p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Assumption of Risk and Waiver</h2>
              <p>
                Use of soaking pools, steam, hot and cold temperature exposure, and related facilities involves inherent risks. By using our facilities, you acknowledge and accept these risks and agree to the Waiver & Release of Liability available at <a href="/waiver" className="text-luxury underline">/waiver</a>.
              </p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Reservations and Cancellations</h2>
              <p>
                Reservation policies (including cancellation rules, rescheduling, late arrival handling, and no-shows) will be presented during booking and may vary by service or season. By completing a booking, you agree to the stated reservation terms shown at checkout.
              </p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Time Limits and Additional Charges</h2>
              <p>
                Some services or admissions may have time limits. Additional charges may apply for extended use where stated during booking or on-site.
              </p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Food and Beverage</h2>
              <p>
                No outside food or beverages are permitted within the bathing facilities. Food and beverages purchased on-site may only be consumed in designated areas.
              </p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">No Photography / Phone Policy</h2>
              <p>
                For guest privacy and safety, cell phone use, photography, and video recording may be restricted in facility areas. Please follow posted rules and staff instructions.
              </p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Property Loss and Damage</h2>
              <p>
                Guests are responsible for their personal belongings. The Springs is not responsible for lost or stolen items. Guests may be charged for damages caused by themselves or their party.
              </p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Medical Disclaimer</h2>
              <p>
                The Springs does not provide medical advice. If you have medical concerns, consult a physician before using the facilities.
              </p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Governing Law and Venue</h2>
              <p>
                These Terms are governed by Idaho law. Any dispute arising out of these Terms shall be brought exclusively in a court of competent jurisdiction located in Idaho.
              </p>
            </section>

            <section>
              <h2 className="font-canela text-2xl text-primary mb-6">Changes to These Terms</h2>
              <p>
                We may update these Terms periodically. The most current version will be posted on this page.
              </p>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
