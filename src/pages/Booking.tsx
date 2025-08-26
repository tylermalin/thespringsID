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
  const { toast } = useToast();
  const { state, dispatch, nextStep, prevStep } = useBooking();
  const [timeSlots, setTimeSlots] = useState(MOCK_TIME_SLOTS);
  const [addons] = useState(MOCK_ADDONS);
  const [loading, setLoading] = useState(false);

  const progress = ((state.currentStep + 1) / STEPS.length) * 100;

  // Handle pre-selected product from navigation
  useEffect(() => {
    if (location.state?.selectedProduct && !state.selectedProduct) {
      dispatch({ type: 'SELECT_PRODUCT', payload: location.state.selectedProduct });
      // Skip the product selection step if pre-selected
      dispatch({ type: 'SET_STEP', payload: 1 });
    }
  }, [location.state, state.selectedProduct, dispatch]);

  const handleProductSelect = (productId: string) => {
    dispatch({ type: 'SELECT_PRODUCT', payload: productId });
  };

  const handleDateSelect = (date: string) => {
    dispatch({ type: 'SELECT_DATE', payload: date });
  };

  const handlePartyChange = (party: { adults: number; children: number }) => {
    dispatch({ type: 'SET_PARTY', payload: party });
  };

  const handleTimeSelect = (timeSlotId: string) => {
    dispatch({ type: 'SELECT_TIME_SLOT', payload: timeSlotId });
  };

  const handleAddAddon = (addon: any) => {
    dispatch({ type: 'ADD_ADDON', payload: addon });
  };

  const handleRemoveAddon = (sku: string) => {
    dispatch({ type: 'REMOVE_ADDON', payload: sku });
  };

  const handleUpdateAddonQuantity = (sku: string, qty: number) => {
    dispatch({ type: 'UPDATE_ADDON_QUANTITY', payload: { sku, qty } });
  };

  const handleGuestInfoChange = (field: string, value: string | boolean) => {
    dispatch({ type: 'UPDATE_GUEST', payload: { [field]: value } });
  };

  const handleCompleteBooking = async () => {
    setLoading(true);
    try {
      // Simulate booking process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Booking Confirmed!",
        description: "Your reservation has been successfully created. You'll receive a confirmation email shortly.",
      });
      
      // Reset booking state and redirect to home
      dispatch({ type: 'RESET_BOOKING' });
      navigate('/');
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (state.currentStep > 0) {
      prevStep();
    } else {
      navigate('/');
    }
  };

  const renderStepContent = () => {
    switch (state.currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold">Choose Your Experience</h2>
              <p className="text-muted-foreground">Select the perfect way to enjoy our hot springs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRODUCT_TYPES.map((product) => (
                <Card 
                  key={product.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    state.selectedProduct === product.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => handleProductSelect(product.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{product.title}</CardTitle>
                        <CardDescription className="text-sm font-medium text-primary">
                          {product.subtitle}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {product.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Duration: {product.duration}</span>
                      {product.available ? (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Available
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-red-600 border-red-600">
                          Unavailable
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold">Select Date & Party Size</h2>
              <p className="text-muted-foreground">Choose when you'd like to visit and how many guests</p>
            </div>
            
            <DateSelector 
              onDateSelect={handleDateSelect}
              selectedDate={state.selectedDate}
            />

            <PartySelector 
              onPartyChange={handlePartyChange}
              party={state.party}
              productType={state.selectedProduct || ''}
            />

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                onClick={() => nextStep()}
                disabled={!state.selectedDate}
              >
                Continue
              </Button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <TimeSelector
              timeSlots={timeSlots}
              selectedTimeSlot={state.selectedTimeSlot}
              onTimeSelect={handleTimeSelect}
            />
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                onClick={() => nextStep()}
                disabled={!state.selectedTimeSlot}
              >
                Continue
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <UpsellSection
              addons={addons}
              selectedAddons={state.addons}
              onAddAddon={handleAddAddon}
              onRemoveAddon={handleRemoveAddon}
              onUpdateQuantity={handleUpdateAddonQuantity}
              productType={state.selectedProduct || ''}
            />
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button onClick={() => nextStep()}>
                Continue to Checkout
              </Button>
            </div>
          </div>
        );

      case 4:
        const selectedTimeSlot = timeSlots.find(slot => slot.id === state.selectedTimeSlot);
        const bookingSummary = {
          product: state.selectedProduct || '',
          date: state.selectedDate || '',
          time: selectedTimeSlot?.time || '',
          party: state.party,
          addons: state.addons.map(addon => ({
            name: addon.name,
            qty: addon.qty,
            price: addon.price
          })),
          total: selectedTimeSlot ? selectedTimeSlot.price + state.addons.reduce((sum, addon) => sum + (addon.price * addon.qty), 0) : 0
        };

        return (
          <CheckoutSection
            bookingSummary={bookingSummary}
            guestInfo={state.guest}
            onGuestInfoChange={handleGuestInfoChange}
            onCompleteBooking={handleCompleteBooking}
            loading={loading}
          />
        );

      default:
        return (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Coming Soon</h2>
            <p className="text-muted-foreground">
              Additional booking steps will be implemented here
            </p>
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background font-avenir">
      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="flex-1">
                          <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-medium">Step {state.currentStep + 1} of {STEPS.length}</span>
              <span className="text-muted-foreground">{STEPS[state.currentStep]?.label}</span>
            </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default Booking;
