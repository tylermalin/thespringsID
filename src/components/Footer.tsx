import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Experiences",
      links: [
        { name: "Hot Springs", href: "#" },
        { name: "Spa Treatments", href: "#" },
        { name: "Private Events", href: "#" },
        { name: "Gift Cards", href: "#" },
      ],
    },
    {
      title: "Accommodations",
      links: [
        { name: "Standard Rooms", href: "#" },
        { name: "Luxury Suites", href: "#" },
        { name: "Packages", href: "#" },
        { name: "Policies", href: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Accessibility", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-serif font-bold mb-4">The Springs</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Experience luxury mountain wellness at our pristine hot springs resort in the heart of the Colorado Rockies.
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
                <h4 className="font-semibold mb-4 text-luxury">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        {link.name}
                      </a>
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
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;