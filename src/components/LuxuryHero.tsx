import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LuxuryHero = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
  };

  const handleDiscoverExperience = () => {
    navigate('/experiences');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden mb-8 md:mb-0">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/steambackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Minimalist Hero Content */}
      <div className="relative z-10 text-center luxury-container animate-luxury-fade">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center">
            <img 
              src="/springstransparent.png" 
              alt="The Springs" 
              className="h-24 md:h-32 w-auto opacity-90"
            />
          </div>
          
          <div className="w-24 h-px bg-black/60 mx-auto my-12"></div>
          
          <p className="font-avenir text-xl md:text-2xl text-black/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
            Idaho's Premier Mountain Hot Springs — Wellness, Luxury, and Nature Combined
          </p>

          <div className="pt-8 md:pt-12 space-x-4">
            <Button 
              variant="outline" 
              size="xl" 
              className="font-avenir bg-white/90 border-black/30 text-black hover:bg-white backdrop-blur-sm tracking-wide"
              onClick={handleDiscoverExperience}
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


      </div>
    </section>
  );
};

export default LuxuryHero;