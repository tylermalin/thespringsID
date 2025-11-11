// Page Generator Utility for The Springs Resort
// Based on the Master Prompt Template

export interface PageTemplate {
  title: string;
  description: string;
  sections: PageSection[];
  meta: PageMeta;
}

export interface PageSection {
  type: 'hero' | 'content' | 'highlight' | 'faq' | 'cta';
  title?: string;
  content?: string;
  image?: string;
  layout?: 'text-image' | 'image-text' | 'grid' | 'centered';
  data?: any;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

// Master Prompt Template
export const MASTER_PROMPT = `
Create an Awwwards-winning, mobile-first website template for The Springs – {Page Title}.

Design Style: Luxury, modern spa aesthetic. Clean layouts, spacious white space, elegant typography (serif + sans pairing), soft earth-tone palette (stone, cream, warm bronze), immersive photography, smooth micro-animations.

Navigation: Top sticky nav with logo left, menu right. Mobile hamburger with slide-in overlay. Clear breadcrumb trail for secondary pages.

Hero Section: Full-bleed image or video background with overlaid headline + subcopy. Subtle gradient overlay for legibility.

Content Blocks: Modular grid system with cards, alternating text+image rows, pull quotes, iconography, and callouts. Every section designed for scannability on mobile.

UX Details: Large tappable buttons, sticky CTA ("Book Now"), smooth scroll reveals, WCAG-compliant contrast, subtle hover animations.

Components:
	•	Hero
	•	3–4 content sections unique to {Page Title}
	•	Highlight block (testimonials, statistics, press logos, sustainability icons, etc.)
	•	FAQ or policy accordion (if relevant)
	•	Clear CTA footer (Book, Contact, Subscribe).

Goal: Make the {Page Title} template feel immersive, aspirational, and instantly trustworthy — while aligning seamlessly with the booking system and guest journey.
`;

// Page Templates Database
export const PAGE_TEMPLATES: Record<string, PageTemplate> = {
  'hot-springs': {
    title: 'Hot Springs',
    description: 'Experience the therapeutic benefits of our natural mineral springs in a pristine mountain setting.',
    sections: [
      {
        type: 'hero',
        title: 'Natural Thermal Waters',
        content: 'Immerse yourself in the healing properties of our natural mineral springs, maintained at optimal temperatures for therapeutic benefit.',
        image: '/src/assets/hero-hot-springs.jpg'
      },
      {
        type: 'content',
        title: 'Therapeutic Benefits',
        content: 'Our mineral-rich waters contain natural healing properties that promote relaxation, improve circulation, and soothe muscle tension.',
        layout: 'text-image'
      },
      {
        type: 'content',
        title: 'Multiple Pool Experiences',
        content: 'From our main thermal pool to secluded soaking areas, each space offers a unique experience designed for your comfort and relaxation.',
        layout: 'image-text'
      },
      {
        type: 'highlight',
        title: 'Guest Experiences',
        data: {
          type: 'testimonials',
          items: [
            'The most relaxing experience I\'ve ever had',
            'Pure mountain magic',
            'A true wellness sanctuary'
          ]
        }
      }
    ],
    meta: {
      title: 'Hot Springs - The Springs Resort',
      description: 'Experience natural thermal waters in the Colorado Rockies',
      keywords: ['hot springs', 'thermal waters', 'mineral springs', 'wellness', 'relaxation']
    }
  },
  'spa-treatments': {
    title: 'Spa & Wellness',
    description: 'Personalized therapeutic treatments by master practitioners in our mountain sanctuary.',
    sections: [
      {
        type: 'hero',
        title: 'Spa & Wellness',
        content: 'Personalized therapeutic treatments by master practitioners. Each session is tailored to restore balance and vitality.',
        image: '/src/assets/eveningspringspool.jpg'
      },
      {
        type: 'content',
        title: 'Signature Treatments',
        content: 'Our signature treatments combine ancient healing techniques with modern wellness practices.',
        layout: 'grid'
      },
      {
        type: 'content',
        title: 'Wellness Programs',
        content: 'Comprehensive wellness programs designed to address your specific needs and goals.',
        layout: 'text-image'
      },
      {
        type: 'highlight',
        title: 'Treatment Menu',
        data: {
          type: 'services',
          items: [
            'Therapeutic Massage',
            'Facial Treatments',
            'Body Wraps',
            'Energy Healing'
          ]
        }
      }
    ],
    meta: {
      title: 'Spa & Wellness - The Springs Resort',
      description: 'Luxury spa treatments in the Colorado Rockies',
      keywords: ['spa', 'wellness', 'massage', 'treatments', 'relaxation']
    }
  },
  'accommodations': {
    title: 'Accommodations',
    description: 'Elegant mountain lodge accommodations with stunning views and premium amenities.',
    sections: [
      {
        type: 'hero',
        title: 'Inn The Pines',
        content: 'Retreat to our elegant mountain lodge, where luxury meets comfort in the heart of the Colorado Rockies.',
        image: '/src/assets/innthepinesexterior.jpg'
      },
      {
        type: 'content',
        title: 'Room Types',
        content: 'From cozy standard rooms to luxurious suites, each accommodation offers stunning mountain views and premium amenities.',
        layout: 'grid'
      },
      {
        type: 'content',
        title: 'Amenities & Services',
        content: 'Enjoy complimentary amenities including WiFi, parking, and access to our thermal springs.',
        layout: 'text-image'
      },
      {
        type: 'highlight',
        title: 'Guest Reviews',
        data: {
          type: 'testimonials',
          items: [
            'Perfect mountain getaway',
            'Luxury in the wilderness',
            'Exceptional service and comfort'
          ]
        }
      }
    ],
    meta: {
      title: 'Accommodations - The Springs Resort',
      description: 'Luxury mountain lodge accommodations',
      keywords: ['accommodations', 'lodging', 'mountain lodge', 'hotel', 'resort']
    }
  }
};

// Generate page template based on title
export function generatePageTemplate(pageTitle: string): PageTemplate {
  const key = pageTitle.toLowerCase().replace(/\s+/g, '-');
  
  if (PAGE_TEMPLATES[key]) {
    return PAGE_TEMPLATES[key];
  }

  // Generate default template
  return {
    title: pageTitle,
    description: `Experience ${pageTitle.toLowerCase()} at The Springs Resort in the Colorado Rockies.`,
    sections: [
      {
        type: 'hero',
        title: pageTitle,
        content: `Discover ${pageTitle.toLowerCase()} in our mountain sanctuary.`,
        image: '/src/assets/hero-hot-springs.jpg'
      },
      {
        type: 'content',
        title: 'About ' + pageTitle,
        content: `Learn more about our ${pageTitle.toLowerCase()} offerings and how they can enhance your mountain wellness experience.`,
        layout: 'text-image'
      },
      {
        type: 'cta',
        title: 'Book Your Experience',
        content: 'Ready to experience the magic of The Springs?'
      }
    ],
    meta: {
      title: `${pageTitle} - The Springs Resort`,
      description: `Experience ${pageTitle.toLowerCase()} at The Springs Resort`,
      keywords: [pageTitle.toLowerCase(), 'wellness', 'mountain', 'resort']
    }
  };
}

// Generate React component from template
export function generatePageComponent(template: PageTemplate): string {
  return `
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ${template.title.replace(/\s+/g, '')}Page = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/bookeo-integration');
  };

  return (
    <div className="min-h-screen bg-background font-avenir">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="${template.sections[0]?.image || '/src/assets/hero-hot-springs.jpg'}"
            alt="${template.title}"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center luxury-container animate-luxury-fade">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-canela text-6xl md:text-8xl font-normal text-white leading-[0.9] tracking-tight">
              ${template.title}
            </h1>
            
            <div className="w-24 h-px bg-white/60 mx-auto my-12"></div>
            
            <p className="font-avenir text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              ${template.sections[0]?.content || template.description}
            </p>

            <div className="pt-12">
              <Button 
                size="xl" 
                className="font-avenir bg-white text-primary hover:bg-white/90 tracking-wide"
                onClick={handleBookNow}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      ${template.sections.slice(1).map((section, index) => `
      <section className="luxury-section bg-background">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <h2 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
              ${section.title || 'Content'}
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
            <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
              ${section.content || ''}
            </p>
          </div>
        </div>
      </section>
      `).join('')}
    </div>
  );
};

export default ${template.title.replace(/\s+/g, '')}Page;
`;
}

// Available page types for navigation
export const AVAILABLE_PAGES = [
  'Hot Springs',
  'Spa Treatments', 
  'Accommodations',
  'Private Events',
  'Gift Cards',
  'Standard Rooms',
  'Luxury Suites',
  'Packages',
  'Policies',
  'Our Story',
  'Sustainability',
  'Careers',
  'Press',
  'Contact Us',
  'FAQs',
  'Accessibility',
  'Privacy Policy'
];
