import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Leaf, Mountain, Droplets, Sun, Recycle, Heart } from "lucide-react";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";

const Sustainability = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary">
        <div className="luxury-container">
          <div className="text-center">
            <h1 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              Sustainability Statement
            </h1>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              Committed to preserving the natural beauty of Idaho's mountains while providing luxury wellness experiences
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Content */}
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Introduction */}
            <Card className="border-0 bg-card">
              <CardContent className="space-y-4">
                <p className="font-avenir text-lg text-muted-foreground leading-relaxed">
                  At The Springs Resort & Inn the Pines, we believe that luxury and environmental stewardship go hand in hand. 
                  Our commitment to sustainability is rooted in our deep connection to the natural geothermal resources that have 
                  sustained this region for centuries.
                </p>
                <p className="font-avenir text-lg text-muted-foreground leading-relaxed">
                  We are dedicated to operating in harmony with the environment, preserving the pristine beauty of the Idaho 
                  mountains for future generations while providing exceptional wellness experiences for our guests.
                </p>
              </CardContent>
            </Card>

            {/* Natural Resource Stewardship */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Droplets className="w-6 h-6 text-luxury" />
                  <CardTitle className="font-canela text-2xl">Natural Resource Stewardship</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Geothermal Energy</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      Our hot springs utilize naturally occurring geothermal energy, a renewable resource that requires no 
                      external heating. We carefully monitor and maintain the natural flow of these thermal waters to ensure 
                      their long-term sustainability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Water Conservation</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We implement water-saving technologies throughout our facilities, including low-flow fixtures, 
                      efficient irrigation systems, and responsible water management practices. Our geothermal pools 
                      are designed to minimize water waste while maintaining optimal guest experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Natural Filtration</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We use natural filtration systems where possible and maintain the mineral-rich properties of our 
                      thermal waters without excessive chemical treatment, preserving both water quality and environmental health.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Environmental Protection */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mountain className="w-6 h-6 text-luxury" />
                  <CardTitle className="font-canela text-2xl">Environmental Protection</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Wildlife Habitat Preservation</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      Our property is designed to coexist with local wildlife, maintaining natural habitats and migration 
                      corridors. We use wildlife-friendly landscaping and lighting practices to minimize our impact on 
                      native species.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Native Landscaping</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We prioritize native plants in our landscaping, which require less water, provide habitat for local 
                      wildlife, and maintain the natural character of the Idaho mountains. Our gardens showcase the region's 
                      natural beauty while supporting local ecosystems.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Waste Management</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We have implemented comprehensive recycling and composting programs, diverting waste from landfills 
                      and reducing our environmental footprint. Our goal is to minimize waste generation through thoughtful 
                      purchasing and operational practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Energy Efficiency */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Sun className="w-6 h-6 text-luxury" />
                  <CardTitle className="font-canela text-2xl">Energy Efficiency</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Renewable Energy</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We are committed to reducing our carbon footprint through energy-efficient systems and renewable 
                      energy sources where feasible. Our facilities use energy-efficient lighting, heating, and cooling 
                      systems to minimize energy consumption.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Building Design</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      Our buildings are designed with sustainability in mind, incorporating natural ventilation, 
                      energy-efficient windows, and insulation to reduce heating and cooling needs. We use sustainable 
                      building materials and construction practices.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Smart Technology</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We utilize smart building technologies to optimize energy use, including automated lighting systems, 
                      energy monitoring, and intelligent climate control that adapts to occupancy and weather conditions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community & Local Partnerships */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="w-6 h-6 text-luxury" />
                  <CardTitle className="font-canela text-2xl">Community & Local Partnerships</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Local Sourcing</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We prioritize local suppliers and vendors, reducing transportation emissions and supporting the 
                      local economy. Our spa products, food services, and amenities are sourced from regional providers 
                      whenever possible.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Community Engagement</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We actively participate in local environmental initiatives and support community conservation 
                      efforts. Our team members are encouraged to volunteer with local environmental organizations 
                      and participate in community clean-up events.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Educational Programs</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We offer educational programs for guests about the local ecosystem, geothermal resources, and 
                      sustainable practices. Our goal is to inspire environmental awareness and stewardship among 
                      our visitors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sustainable Operations */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Recycle className="w-6 h-6 text-luxury" />
                  <CardTitle className="font-canela text-2xl">Sustainable Operations</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Green Cleaning</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      We use eco-friendly cleaning products throughout our facilities, ensuring a safe environment 
                      for guests and staff while minimizing our impact on local waterways and ecosystems.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Sustainable Amenities</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      Our guest amenities are carefully selected for their environmental credentials, including 
                      biodegradable packaging, organic ingredients, and sustainable sourcing practices.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Staff Training</h4>
                    <p className="font-avenir text-muted-foreground leading-relaxed">
                      Our team receives regular training on sustainable practices, environmental awareness, and 
                      conservation techniques. We empower our staff to identify and implement sustainability 
                      improvements in their daily operations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Future Commitments */}
            <Card className="border-0 bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-luxury" />
                  <CardTitle className="font-canela text-2xl">Future Commitments</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We are committed to continuous improvement in our sustainability practices. Our ongoing initiatives include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Expanding renewable energy usage and reducing carbon emissions</li>
                  <li>Enhancing water conservation and management systems</li>
                  <li>Implementing additional waste reduction and recycling programs</li>
                  <li>Strengthening partnerships with local environmental organizations</li>
                  <li>Developing new educational programs for guests and community members</li>
                  <li>Regular sustainability audits and goal setting</li>
                </ul>
                <p className="font-avenir text-muted-foreground leading-relaxed mt-4">
                  We believe that sustainable luxury is not just a goal, but a responsibility. By choosing The Springs, 
                  our guests become part of our commitment to environmental stewardship and the preservation of Idaho's 
                  natural treasures.
                </p>
              </CardContent>
            </Card>

            {/* Contact for More Information */}
            <Card className="border-0 bg-secondary">
              <CardContent className="text-center space-y-4">
                <h3 className="font-canela text-2xl text-primary">Questions About Our Sustainability Practices?</h3>
                <p className="font-avenir text-muted-foreground leading-relaxed">
                  We welcome inquiries about our environmental initiatives and are happy to share more details 
                  about our sustainability programs.
                </p>
                <Button 
                  size="lg" 
                  className="font-avenir"
                  onClick={handleContact}
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;
