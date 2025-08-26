import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LuxuryHero = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
                      <source src="/herovideoback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Minimalist Hero Content */}
      <div className="relative z-10 text-center luxury-container animate-luxury-fade">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-canela text-6xl md:text-8xl font-normal text-black leading-[0.9] tracking-tight">
            Mountain
            <br />
            Sanctuary
          </h1>
          
          <div className="w-24 h-px bg-black/60 mx-auto my-12"></div>
          
          <p className="font-avenir text-xl md:text-2xl text-black/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
            A curated wellness experience where natural thermal waters meet refined luxury
          </p>

          <div className="pt-12 space-x-4">
            <Button 
              variant="outline" 
              size="xl" 
              className="font-avenir bg-white/90 border-black/30 text-black hover:bg-white backdrop-blur-sm tracking-wide"
            >
              Discover Experience
            </Button>
            <Button 
              size="xl" 
              className="font-avenir bg-black text-white hover:bg-black/90 tracking-wide"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Minimal Info Markers */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="flex justify-center items-center space-x-16">
            <div className="text-center">
              <div className="w-2 h-2 bg-black/60 rounded-full mx-auto mb-3"></div>
              <p className="font-avenir text-black/80 text-sm tracking-wider">THERMAL POOLS</p>
            </div>
            <div className="text-center">
              <div className="w-2 h-2 bg-black/60 rounded-full mx-auto mb-3"></div>
              <p className="font-avenir text-black/80 text-sm tracking-wider">SPA TREATMENTS</p>
            </div>
            <div className="text-center">
              <div className="w-2 h-2 bg-black/60 rounded-full mx-auto mb-3"></div>
              <p className="font-avenir text-black/80 text-sm tracking-wider">MOUNTAIN LODGE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHero;