import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const LuxuryNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { href: "/experiences", label: "Experiences" },
    { href: "/accommodations", label: "Accommodations" },
    { href: "/spa", label: "Spa & Wellness" },
    { href: "/about", label: "Our Story" },
  ];

  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/50">
      <div className="luxury-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigate('/')}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/springslogo.png" 
                alt="The Springs" 
                className="h-12 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation - Minimal and Curated */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-avenir text-sm font-normal text-foreground hover:text-luxury transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Single CTA - Exclusive Experience */}
          <div className="hidden lg:flex items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="font-avenir"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Minimal */}
        {isOpen && (
          <div className="lg:hidden py-8 border-t border-border/50 animate-luxury-fade">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-avenir text-foreground hover:text-luxury transition-colors duration-300 font-light text-lg tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full font-avenir"
                  onClick={handleBookNow}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LuxuryNavigation;