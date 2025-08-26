import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hot-springs.jpg";

const LuxuryHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury mountain hot springs sanctuary"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Minimalist Hero Content */}
      <div className="relative z-10 text-center luxury-container animate-luxury-fade">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-canela text-6xl md:text-8xl font-normal text-white leading-[0.9] tracking-tight">
            Mountain
            <br />
            Sanctuary
          </h1>
          
          <div className="w-24 h-px bg-white/60 mx-auto my-12"></div>
          
          <p className="font-avenir text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
            A curated wellness experience where natural thermal waters meet refined luxury
          </p>

          <div className="pt-12">
            <Button variant="outline" size="xl" className="font-avenir bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm tracking-wide">
              Discover Experience
            </Button>
          </div>
        </div>

        {/* Minimal Info Markers */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="flex justify-center items-center space-x-16">
            <div className="text-center">
              <div className="w-2 h-2 bg-white/60 rounded-full mx-auto mb-3"></div>
              <p className="font-avenir text-white/80 text-sm tracking-wider">THERMAL POOLS</p>
            </div>
            <div className="text-center">
              <div className="w-2 h-2 bg-white/60 rounded-full mx-auto mb-3"></div>
              <p className="font-avenir text-white/80 text-sm tracking-wider">SPA TREATMENTS</p>
            </div>
            <div className="text-center">
              <div className="w-2 h-2 bg-white/60 rounded-full mx-auto mb-3"></div>
              <p className="font-avenir text-white/80 text-sm tracking-wider">MOUNTAIN LODGE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHero;