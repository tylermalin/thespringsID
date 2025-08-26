import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookingProvider } from "@/contexts/BookingContext";
import { BookingService } from "@/services/booking/booking-service";
import { BookingConfig } from "@/services/booking/types";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import Experiences from "./pages/Experiences";
import Spa from "./pages/Spa";
import Accommodations from "./pages/Accommodations";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GiftCards from "./pages/GiftCards";
import PrivateEvents from "./pages/PrivateEvents";
import FAQs from "./pages/FAQs";
import Policies from "./pages/Policies";
import DoubleQueenGallery from "./pages/DoubleQueenGallery";
import PrivateTubsGallery from "./pages/PrivateTubsGallery";
import KingGallery from "./pages/KingGallery";
import PublicPoolsGallery from "./pages/PublicPoolsGallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Initialize booking service with configuration
const bookingConfig: BookingConfig = {
  policies: {
    cancellation: "Cancellations must be made 24 hours in advance for a full refund.",
    age_rules: "Children under 16 must be accompanied by an adult. Some treatments have age restrictions.",
    health_advisories: "Please consult with your doctor before using hot springs if you have health conditions.",
  },
  fees: {
    tax_rate: 0.085, // 8.5% tax
    service_fee: 0.05, // 5% service fee
    deposit_percentage: 0.25, // 25% deposit
  },
  blackout_dates: [
    "2025-12-25",
    "2025-12-31",
    "2025-01-01",
  ],
  age_minimums: {
    soak: 0,
    private_tub: 16,
    spa: 18,
    inn: 0,
  },
  max_occupancy: {
    soak: 50,
    private_tub: 4,
    spa: 2,
    inn: 4,
  },
};

const bookingService = new BookingService(
  import.meta.env.VITE_BOOKIO_API_KEY || 'demo-key',
  import.meta.env.VITE_CLOUDBEDS_API_KEY || 'demo-key',
  import.meta.env.VITE_CLOUDBEDS_PROPERTY_ID || 'demo-property',
  bookingConfig
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BookingProvider bookingService={bookingService}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/spa" element={<Spa />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/private-events" element={<PrivateEvents />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/double-queen-gallery" element={<DoubleQueenGallery />} />
            <Route path="/private-tubs-gallery" element={<PrivateTubsGallery />} />
            <Route path="/king-gallery" element={<KingGallery />} />
            <Route path="/public-pools-gallery" element={<PublicPoolsGallery />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </BookingProvider>
  </QueryClientProvider>
);

export default App;
