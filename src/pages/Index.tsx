import LuxuryNavigation from "@/components/LuxuryNavigation";
import LuxuryHero from "@/components/LuxuryHero";
import CuratedExperiences from "@/components/CuratedExperiences";
import InnSection from "@/components/InnSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      <main>
        <LuxuryHero />
        <CuratedExperiences />
        <InnSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
