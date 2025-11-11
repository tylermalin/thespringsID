import { useNavigate } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = [
    {
      title: "Experiences",
      links: [
        { name: "Hot Springs", href: "/experiences", onClick: () => navigate('/bookeo-integration') },
        { name: "Spa Treatments", href: "/spa", onClick: () => navigate('/bookeo-integration') },
        { name: "Private Events", href: "/private-events", onClick: () => navigate('/private-events') },
        { name: "Gift Cards", href: "/gift-cards", onClick: () => navigate('/gift-cards') },
      ],
    },
    {
      title: "Accommodations",
      links: [
        { name: "Standard Rooms", href: "/accommodations", onClick: () => navigate('/accommodations') },
        { name: "Luxury Suites", href: "/accommodations", onClick: () => navigate('/accommodations') },
        { name: "Packages", href: "/packages", onClick: () => navigate('/packages') },
        { name: "Policies", href: "/policies", onClick: () => navigate('/policies') },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "/about", onClick: () => navigate('/about') },
        { name: "Sustainability", href: "/sustainability", onClick: () => navigate('/sustainability') },
        { name: "Careers", href: "/careers", onClick: () => navigate('/careers') },
        { name: "Press", href: "/press", onClick: () => navigate('/press') },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact", onClick: () => navigate('/contact') },
        { name: "FAQs", href: "/faqs", onClick: () => navigate('/faqs') },
        { name: "Accessibility", href: "/accessibility", onClick: () => navigate('/accessibility') },
        { name: "Privacy Policy", href: "/privacy", onClick: () => navigate('/privacy') },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/TheSpringsID/", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/thespringsid/?hl=en", name: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <img 
                src="/springslogolight.png" 
                alt="The Springs" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Experience luxury mountain wellness at our pristine hot springs resort in the heart of the Idaho mountains.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-luxury transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="font-semibold mb-4 text-white">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={link.onClick}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left w-full"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 The Springs Resort & Inn The Pines. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => navigate('/terms-of-service')}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => navigate('/privacy-policy')}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate('/accessibility')}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Accessibility
              </button>
              <button 
                onClick={() => navigate('/sustainability')}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Sustainability
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;