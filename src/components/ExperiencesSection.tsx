import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import spaImage from "@/assets/spa-treatment.jpg";

const ExperiencesSection = () => {
  const experiences = [
    {
      title: "Hot Springs Soaks",
      description: "Immerse yourself in our natural mineral-rich thermal pools with stunning mountain views. Perfect for relaxation and rejuvenation.",
      features: ["Multiple temperature pools", "Mountain views", "Mineral-rich waters", "Private tub options"],
      price: "From $45",
      buttonText: "Book Soak",
      buttonVariant: "spa" as const,
    },
    {
      title: "Spa Treatments",
      description: "Indulge in world-class massage therapy and wellness treatments designed to restore balance and tranquility.",
      features: ["Swedish & deep tissue massage", "Hot stone therapy", "Couples treatments", "Wellness packages"],
      price: "From $120",
      buttonText: "Book Treatment", 
      buttonVariant: "forest" as const,
    },
    {
      title: "Private Events",
      description: "Host your special occasions in our stunning mountain setting. Perfect for weddings, retreats, and celebrations.",
      features: ["Wedding ceremonies", "Corporate retreats", "Private dining", "Custom packages"],
      price: "Contact Us",
      buttonText: "Plan Event",
      buttonVariant: "luxury" as const,
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Mountain Wellness
            <span className="block text-luxury">Experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of wellness experiences designed to rejuvenate your mind, body, and spirit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8">
                {index === 1 && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img
                      src={spaImage}
                      alt="Luxury spa treatment room"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-semibold text-primary mb-3">
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="text-2xl font-bold text-luxury mb-4">
                    {experience.price}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {experience.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-luxury rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={experience.buttonVariant} 
                  className="w-full"
                  size="lg"
                >
                  {experience.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;