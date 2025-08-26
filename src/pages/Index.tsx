import LuxuryNavigation from "@/components/LuxuryNavigation";
import NotificationBanner from "@/components/NotificationBanner";
import LuxuryHero from "@/components/LuxuryHero";
import CuratedExperiences from "@/components/CuratedExperiences";
import InnSection from "@/components/InnSection";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
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
        <CuratedExperiences />
        <InnSection />
        <ContactSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
