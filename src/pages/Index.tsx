import React from 'react';
import LuxuryNavigation from "@/components/LuxuryNavigation";
import NotificationBanner from "@/components/NotificationBanner";
import LuxuryHero from "@/components/LuxuryHero";
import LuxuryExperiences from "@/components/LuxuryExperiences";
import LuxuryAccommodations from "@/components/LuxuryAccommodations";
import OurStory from "@/components/OurStory";
import PlanYourVisit from "@/components/PlanYourVisit";
import ReviewsSection from "@/components/ReviewsSection";
import LuxuryGiftCards from "@/components/LuxuryGiftCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-avenir">
      <div className="relative z-30">
        <NotificationBanner />
      </div>
      <div className="relative z-20">
        <LuxuryNavigation />
      </div>
      <main>
        <LuxuryHero />
        <LuxuryExperiences />
        <LuxuryAccommodations />
        <OurStory />
        <PlanYourVisit />
        <ReviewsSection />
        <LuxuryGiftCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
