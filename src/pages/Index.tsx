import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import InnSection from "@/components/InnSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ExperiencesSection />
        <InnSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
