import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Users, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useBooking } from "@/contexts/BookingContext";
import DateSelector from "@/components/booking/DateSelector";
import PartySelector from "@/components/booking/PartySelector";
import TimeSelector from "@/components/booking/TimeSelector";
import UpsellSection from "@/components/booking/UpsellSection";
import CheckoutSection from "@/components/booking/CheckoutSection";
import { useEffect, useState } from "react";

// Booking flow steps
const STEPS = [
  { id: 'choose', label: 'Choose Experience', icon: Calendar },
  { id: 'date', label: 'Date & Party', icon: Users },
  { id: 'time', label: 'Select Time', icon: Clock },
  { id: 'addons', label: 'Add-ons', icon: Calendar },
  { id: 'checkout', label: 'Checkout', icon: CreditCard },
];

// Product types
const PRODUCT_TYPES = [
  {
    id: 'soak',
    title: 'Soak',
    subtitle: 'Public Pools',
    description: 'Relax in our natural hot springs pools',
    price: 'from $35',
    duration: '2.5 hours',
    image: '/hero-hot-springs.jpg',
    available: true
  },
  {
    id: 'private_tub',
    title: 'Private Tub',
    subtitle: 'Exclusive Experience',
    description: 'Your own private hot springs tub',
    price: 'from $85',
    duration: '1 hour',
    image: '/springsinteriornight.jpg',
    available: true
  },
  {
    id: 'spa',
    title: 'Spa Treatment',
    subtitle: 'Therapeutic Services',
    description: 'Professional massage and wellness treatments',
    price: 'from $120',
    duration: '60-90 min',
    image: '/springsinteriornight.jpg',
    available: true
  },
  {
    id: 'inn',
    title: 'Stay at Inn The Pines',
    subtitle: 'Overnight Accommodation',
    description: 'Cozy rooms with hot springs access',
    price: 'from $199',
    duration: 'Overnight',
            image: '/innthepinesexterior.jpg',
    available: true
  }
];

// Mock data for time slots
const MOCK_TIME_SLOTS = [
  { id: '9am', time: '9:00 AM', available: true, price: 35, capacity: 20, remaining: 15 },
  { id: '11am', time: '11:00 AM', available: true, price: 35, capacity: 20, remaining: 8 },
  { id: '1pm', time: '1:00 PM', available: true, price: 35, capacity: 20, remaining: 12 },
  { id: '3pm', time: '3:00 PM', available: true, price: 35, capacity: 20, remaining: 20 },
  { id: '5pm', time: '5:00 PM', available: false, price: 35, capacity: 20, remaining: 0 },
  { id: '7pm', time: '7:00 PM', available: true, price: 40, capacity: 15, remaining: 10 },
];

// Mock data for add-ons
const MOCK_ADDONS = [
  { sku: 'towels', name: 'Premium Towels', description: 'Luxury towels for your comfort', price: 5, category: 'amenities', qty: 0 },
  { sku: 'robes', name: 'Plush Robes', description: 'Comfortable robes for your stay', price: 8, category: 'amenities', qty: 0 },
  { sku: 'locker', name: 'Private Locker', description: 'Secure storage for your belongings', price: 3, category: 'amenities', qty: 0 },
  { sku: 'refreshments', name: 'Refreshments', description: 'Complimentary tea and water', price: 0, category: 'amenities', qty: 0 },
  { sku: 'aromatherapy', name: 'Aromatherapy', description: 'Essential oils for relaxation', price: 15, category: 'spa', qty: 0 },
  { sku: 'hot_stone', name: 'Hot Stone Therapy', description: 'Heated stones for deep relaxation', price: 25, category: 'spa', qty: 0 },
  { sku: 'champagne', name: 'Champagne Service', description: 'Bottle of champagne with glasses', price: 45, category: 'luxury', qty: 0 },
  { sku: 'chocolates', name: 'Artisan Chocolates', description: 'Handcrafted chocolates', price: 12, category: 'luxury', qty: 0 },
  { sku: 'breakfast', name: 'Breakfast Service', description: 'Continental breakfast delivered', price: 18, category: 'inn', qty: 0 },
  { sku: 'late_checkout', name: 'Late Checkout', description: 'Extended checkout until 2 PM', price: 25, category: 'inn', qty: 0 },
];

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to Bookio integration page
  useEffect(() => {
    window.location.href = '/bookio-integration.html';
  }, []);

  // This component will redirect, so we don't need the rest of the logic
  return (
    <div className="min-h-screen bg-background font-avenir flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <h2 className="text-xl font-semibold">Redirecting to Booking System...</h2>
        <p className="text-muted-foreground">Please wait while we connect you to our booking platform.</p>
      </div>
    </div>
  );
};

export default Booking;
