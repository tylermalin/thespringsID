import { Button } from "@/components/ui/button";
import spaImage from "@/assets/spa-treatment.jpg";

const CuratedExperiences = () => {
  return (
    <section id="experiences" className="luxury-section bg-background">
      <div className="luxury-container">
        {/* Minimal Section Header */}
        <div className="text-center mb-24">
          <h2 className="font-canela text-5xl md:text-6xl font-normal text-primary mb-8 tracking-tight">
            Curated Experiences
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
          <p className="font-avenir text-lg text-muted-foreground font-light max-w-xl mx-auto leading-relaxed tracking-wide">
            Three carefully crafted experiences designed for the discerning guest
          </p>
        </div>

        {/* Experience Grid - Minimal and Spacious */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Thermal Waters */}
          <div className="group">
            <div className="text-center space-y-6">
              <div className="w-16 h-px bg-luxury mx-auto mb-8"></div>
              <h3 className="font-canela text-3xl font-normal text-primary tracking-tight">
                Thermal Waters
              </h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed tracking-wide">
                Natural mineral springs in a pristine mountain setting. Multiple pools maintained at optimal temperatures for therapeutic benefit.
              </p>
              <div className="pt-8">
                <Button variant="luxury" size="lg" className="font-avenir">
                  Reserve Soaks
                </Button>
              </div>
            </div>
          </div>

          {/* Wellness Treatments */}
          <div className="group">
            <div className="mb-8 rounded-sm overflow-hidden">
              <img
                src={spaImage}
                alt="Luxury spa treatment sanctuary"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="text-center space-y-6">
              <div className="w-16 h-px bg-luxury mx-auto"></div>
              <h3 className="font-canela text-3xl font-normal text-primary tracking-tight">
                Wellness Treatments
              </h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed tracking-wide">
                Personalized therapeutic treatments by master practitioners. Each session is tailored to restore balance and vitality.
              </p>
              <div className="pt-8">
                <Button variant="exclusive" size="lg" className="font-avenir">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Private Sanctuary */}
          <div className="group">
            <div className="text-center space-y-6">
              <div className="w-16 h-px bg-luxury mx-auto mb-8"></div>
              <h3 className="font-canela text-3xl font-normal text-primary tracking-tight">
                Private Sanctuary
              </h3>
              <p className="font-avenir text-muted-foreground font-light leading-relaxed tracking-wide">
                Exclusive access to private thermal pools and treatment spaces. Perfect for intimate celebrations or corporate retreats.
              </p>
              <div className="pt-8">
                <Button variant="hero" size="lg" className="font-avenir">
                  Inquire Access
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Exclusive Statement */}
        <div className="text-center mt-32">
          <div className="max-w-2xl mx-auto">
            <p className="font-avenir text-sm text-muted-foreground font-light tracking-widest uppercase mb-4">
              By Appointment Only
            </p>
            <p className="font-canela text-2xl text-primary font-light italic leading-relaxed">
              "Each guest's journey is individually curated to ensure the most refined mountain wellness experience."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedExperiences;