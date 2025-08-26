import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hot-springs.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury mountain hot springs at The Springs Resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Luxury Mountain
          <br />
          <span className="text-luxury">Hot Springs</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience ultimate relaxation at our pristine mountain resort, where natural hot springs meet luxury accommodations
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" className="animate-float">
            Book Your Soak
          </Button>
          <Button variant="outline" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
            Explore Experiences
          </Button>
        </div>

        {/* Floating Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-white font-semibold mb-2">Natural Hot Springs</h3>
            <p className="text-white/80 text-sm">Mineral-rich thermal pools</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-white font-semibold mb-2">Luxury Spa</h3>
            <p className="text-white/80 text-sm">World-class treatments</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-white font-semibold mb-2">Mountain Lodge</h3>
            <p className="text-white/80 text-sm">Elegant accommodations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;