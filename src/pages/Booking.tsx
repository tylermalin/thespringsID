import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Users, CreditCard, Check } from "lucide-react";
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
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";

// Booking flow steps - dynamic based on product type
const getStepsForProduct = (productType: string | null) => {
  const baseSteps = [
  { id: 'choose', label: 'Choose Experience', icon: Calendar },
  { id: 'date', label: 'Date & Party', icon: Users },
  { id: 'time', label: 'Select Time', icon: Clock },
  { id: 'addons', label: 'Add-ons', icon: Calendar },
  { id: 'checkout', label: 'Checkout', icon: CreditCard },
];

  if (productType === 'inn') {
    // For inn bookings, add room selection step and skip time selection
    return [
      { id: 'choose', label: 'Choose Experience', icon: Calendar },
      { id: 'room', label: 'Choose Room', icon: Users },
      { id: 'date', label: 'Date & Party', icon: Users },
      { id: 'addons', label: 'Add-ons', icon: Calendar },
      { id: 'checkout', label: 'Checkout', icon: CreditCard },
    ];
  }

  return baseSteps;
};

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
    image: '/spaservices.jpg',
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

// Mock data for room types
const ROOM_TYPES = [
  {
    id: 'double_queen',
    name: 'Double Queen Room',
    description: 'Spacious room with two queen beds, perfect for families or groups',
    price: 199,
    maxOccupancy: 4,
    amenities: ['Two Queen Beds', 'Mountain Views', 'Hot Springs Access', 'WiFi', 'Coffee Maker'],
    image: '/inntwoqueen.jpg'
  },
  {
    id: 'king',
    name: 'King Room',
    description: 'Intimate room with one king bed and stunning mountain views',
    price: 179,
    maxOccupancy: 2,
    amenities: ['King Bed', 'Mountain Views', 'Hot Springs Access', 'WiFi', 'Coffee Maker'],
    image: '/one king.webp'
  },
  {
    id: 'cabin',
    name: 'Mountain Cabin',
    description: 'Private cabin retreat with rustic charm and modern amenities',
    price: 249,
    maxOccupancy: 6,
    amenities: ['Full Kitchen', 'Fireplace', 'Private Deck', 'Hot Springs Access', 'WiFi', 'Mountain Views'],
    image: '/innthepinesexterior.jpg'
  }
];

// Mock data for add-ons and experience upgrades
const MOCK_ADDONS = [
  // Experience Upgrades & Cross-Sells
  { sku: 'upgrade_private_tub', name: 'Upgrade to Private Tub', description: 'Exclusive private hot springs experience', price: 50, category: 'upgrade', qty: 0 },
  { sku: 'add_massage', name: 'Add Therapeutic Massage', description: '60-minute professional massage', price: 120, category: 'experience', qty: 0 },
  { sku: 'add_spa_combo', name: 'Massage + Soak Combo', description: 'Perfect wellness combination (save $15)', price: 140, category: 'experience', qty: 0 },
  { sku: 'stay_inn', name: 'Stay at Inn The Pines', description: 'Overnight accommodation with hot springs access', price: 179, category: 'accommodation', qty: 0 },
  { sku: 'add_private_combo', name: 'Private Tub + Massage', description: 'Ultimate luxury experience (save $30)', price: 175, category: 'experience', qty: 0 },
  
  // Traditional Add-ons
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
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [party, setParty] = useState({ adults: 1, children: 0 });
  const [addons, setAddons] = useState<any[]>([]);

  // Get current steps based on selected product
  const currentSteps = getStepsForProduct(selectedProduct);

  // Check if there's a pre-selected product from navigation state
  useEffect(() => {
    if (location.state?.selectedProduct) {
      setSelectedProduct(location.state.selectedProduct);
      if (location.state.selectedProduct === 'inn') {
        setCurrentStep(1); // Go to room selection for inn
      } else {
        setCurrentStep(1); // Skip to date/party step for other services
      }
    }
  }, [location.state]);

  const canProceedToNextStep = () => {
    const stepId = currentSteps[currentStep]?.id;
    
    switch (stepId) {
      case 'choose': return selectedProduct !== null;
      case 'room': return selectedRoom !== null;
      case 'date': return selectedDate !== null;
      case 'time': return selectedTimeSlot !== null;
      case 'addons': return true; // Add-ons are optional
      case 'checkout': return true; // Checkout validation handled in checkout component
      default: return false;
    }
  };

  const nextStep = () => {
    if (canProceedToNextStep() && currentStep < currentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
    setSelectedTimeSlot(null); // Reset time slot when changing product
    nextStep();
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null); // Reset time slot when changing date
    nextStep();
  };

  const handleTimeSelect = (timeSlotId: string) => {
    setSelectedTimeSlot(timeSlotId);
    nextStep();
  };

  const progressPercentage = ((currentStep + 1) / currentSteps.length) * 100;

  // Smart add-on filtering based on selected product
  const getRelevantAddons = () => {
    if (!selectedProduct) return [];
    
    let relevantAddons = [];
    
    // Always include basic amenities
    const amenities = MOCK_ADDONS.filter(addon => addon.category === 'amenities');
    const luxury = MOCK_ADDONS.filter(addon => addon.category === 'luxury');
    
    // Add experience-specific upgrades based on what they haven't selected
    if (selectedProduct === 'soak') {
      // If they booked a soak, offer upgrades to private experiences
      relevantAddons = [
        ...MOCK_ADDONS.filter(addon => 
          addon.sku === 'upgrade_private_tub' || 
          addon.sku === 'add_massage' || 
          addon.sku === 'add_spa_combo' ||
          addon.sku === 'stay_inn'
        ),
        ...amenities,
        ...luxury
      ];
    } else if (selectedProduct === 'private_tub') {
      // If they booked private tub, offer massage and accommodation
      relevantAddons = [
        ...MOCK_ADDONS.filter(addon => 
          addon.sku === 'add_massage' || 
          addon.sku === 'add_private_combo' ||
          addon.sku === 'stay_inn'
        ),
        ...amenities,
        ...luxury
      ];
    } else if (selectedProduct === 'spa') {
      // If they booked spa, offer hot springs experiences and accommodation
      relevantAddons = [
        ...MOCK_ADDONS.filter(addon => 
          addon.sku === 'upgrade_private_tub' ||
          addon.sku === 'stay_inn'
        ),
        ...MOCK_ADDONS.filter(addon => addon.category === 'spa'),
        ...amenities,
        ...luxury
      ];
    } else if (selectedProduct === 'inn') {
      // If they booked inn, offer experiences
      relevantAddons = [
        ...MOCK_ADDONS.filter(addon => 
          addon.sku === 'add_massage' || 
          addon.sku === 'add_spa_combo' ||
          addon.sku === 'upgrade_private_tub'
        ),
        ...MOCK_ADDONS.filter(addon => addon.category === 'inn'),
        ...amenities,
        ...luxury
      ];
    }
    
    return relevantAddons;
  };

  const renderStepContent = () => {
    const currentStepId = currentSteps[currentStep]?.id;
    
    switch (currentStepId) {
      case 'choose': // Choose Experience
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-canela text-3xl md:text-4xl font-normal text-primary mb-4">
                Choose Your Experience
              </h2>
              <p className="text-muted-foreground text-lg">
                Select from our curated collection of wellness experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRODUCT_TYPES.map((product) => (
                <Card
                  key={product.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedProduct === product.id
                      ? 'ring-2 ring-primary bg-primary/5'
                      : 'hover:bg-muted/50'
                  } ${!product.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => product.available && handleProductSelect(product.id)}
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{product.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{product.price}</p>
                        <p className="text-sm text-muted-foreground">{product.duration}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{product.description}</p>
                    {product.available ? (
                      <Badge variant="outline" className="mt-3 text-green-600 border-green-600">
                        Available
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="mt-3 text-red-600 border-red-600">
                        Unavailable
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'room': // Room Selection for Inn
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-canela text-3xl md:text-4xl font-normal text-primary mb-4">
                Choose Your Room
              </h2>
              <p className="text-muted-foreground text-lg">
                Select from our available room types
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ROOM_TYPES.map((room) => (
                <Card
                  key={room.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedRoom === room.id
                      ? 'ring-2 ring-primary bg-primary/5'
                      : 'hover:bg-muted/50'
                  }`}
                  onClick={() => {
                    setSelectedRoom(room.id);
                    nextStep();
                  }}
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{room.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">Max {room.maxOccupancy} guests</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">${room.price}/night</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{room.description}</p>
                    <div className="space-y-1">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></span>
                          {amenity}
                        </div>
                      ))}
                    </div>
                    <Badge variant="outline" className="mt-3 text-green-600 border-green-600">
                      Available
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'date': // Date & Party
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-canela text-3xl md:text-4xl font-normal text-primary mb-4">
                Select Date & Party Size
              </h2>
              <p className="text-muted-foreground text-lg">
                Choose your preferred date and number of guests
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <DateSelector
                onDateSelect={handleDateSelect}
                selectedDate={selectedDate}
              />
              <PartySelector
                party={party}
                onPartyChange={setParty}
                productType={selectedProduct as any}
              />
            </div>
          </div>
        );

      case 'time': // Time Selection
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-canela text-3xl md:text-4xl font-normal text-primary mb-4">
                Select Your Time
              </h2>
              <p className="text-muted-foreground text-lg">
                Choose from available time slots for {selectedDate}
              </p>
            </div>
            
            <TimeSelector
              timeSlots={MOCK_TIME_SLOTS}
              selectedTimeSlot={selectedTimeSlot}
              onTimeSelect={handleTimeSelect}
            />
          </div>
        );

      case 'addons': // Add-ons
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-canela text-3xl md:text-4xl font-normal text-primary mb-4">
                Enhance Your Experience
              </h2>
              <p className="text-muted-foreground text-lg">
                Complete your perfect wellness getaway with these complementary experiences and amenities
              </p>
            </div>
            
            <UpsellSection
              addons={getRelevantAddons()}
              selectedAddons={addons}
              onAddonsChange={setAddons}
            />
          </div>
        );

      case 'checkout': // Checkout
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-canela text-3xl md:text-4xl font-normal text-primary mb-4">
                Complete Your Booking
              </h2>
              <p className="text-muted-foreground text-lg">
                Review your selection and complete payment
              </p>
            </div>
            
            <CheckoutSection
              bookingData={{
                product: selectedProduct,
                room: selectedRoom,
                date: selectedDate,
                timeSlot: selectedTimeSlot,
                party,
                addons
              }}
              onBookingComplete={(bookingId) => {
                toast({
                  title: "Booking Confirmed!",
                  description: `Your booking ${bookingId} has been confirmed.`,
                });
                navigate('/');
              }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background font-avenir">
      <LuxuryNavigation />
      
      {/* Header with Progress */}
      <div className="bg-muted/30 border-b">
        <div className="luxury-container py-8">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              onClick={() => currentStep === 0 ? navigate('/') : prevStep()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{currentStep === 0 ? 'Back to Home' : 'Previous Step'}</span>
            </Button>
            
            <div className="text-center">
              <h1 className="font-canela text-2xl font-normal text-primary">
                Book Your Experience
              </h1>
            </div>
            
            <div className="w-24" /> {/* Spacer for balance */}
          </div>
          
          {/* Progress Bar */}
          <div className="space-y-4">
            <Progress value={progressPercentage} className="w-full h-2" />
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between">
              {currentSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;
                
                return (
                  <div
                    key={step.id}
                    className={`flex items-center space-x-2 ${
                      isActive ? 'text-primary' : 
                      isCompleted ? 'text-green-600' : 
                      'text-muted-foreground'
                    }`}
                  >
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center border-2
                      ${isActive ? 'border-primary bg-primary text-primary-foreground' :
                        isCompleted ? 'border-green-600 bg-green-600 text-white' :
                        'border-muted-foreground'
                      }
                    `}>
                      {isCompleted ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Icon className="w-4 h-4" />
                      )}
                    </div>
                    <span className="text-sm font-medium hidden sm:block">
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="luxury-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Content */}
          <div className="lg:col-span-2">
            {renderStepContent()}
            
            {/* Navigation Buttons */}
            {currentStep > 0 && currentSteps[currentStep]?.id !== 'checkout' && (
              <div className="flex justify-between mt-12 pt-8 border-t">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>
                
                <Button
                  onClick={nextStep}
                  disabled={!canProceedToNextStep()}
                  className="flex items-center space-x-2"
                >
                  <span>Continue</span>
                  <Calendar className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Selection Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/10">
                <CardHeader>
                  <CardTitle className="text-xl font-canela text-primary">Your Selections</CardTitle>
                  <p className="text-sm text-muted-foreground">Track your choices as you build your perfect experience</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Experience Selection */}
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wider">Experience</h4>
                    {selectedProduct ? (
                      <div className="flex items-center space-x-2 p-3 bg-white/80 rounded-lg border">
                        <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium">{(() => {
                          switch (selectedProduct) {
                            case 'soak': return 'Hot Springs Soak';
                            case 'private_tub': return 'Private Hot Tub';
                            case 'spa': return 'Spa Treatment';
                            case 'inn': return 'Inn Accommodation';
                            default: return selectedProduct;
                          }
                        })()}</span>
                      </div>
                    ) : (
                      <div className="p-3 bg-muted/30 rounded-lg border border-dashed">
                        <span className="text-sm text-muted-foreground">Choose your experience</span>
                      </div>
                    )}
                  </div>

                  {/* Room Selection (Inn only) */}
                  {selectedProduct === 'inn' && (
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wider">Room</h4>
                      {selectedRoom ? (
                        <div className="flex items-center space-x-2 p-3 bg-white/80 rounded-lg border">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm font-medium">{(() => {
                            const room = ROOM_TYPES.find(r => r.id === selectedRoom);
                            return room ? room.name : selectedRoom;
                          })()}</span>
                        </div>
                      ) : (
                        <div className="p-3 bg-muted/30 rounded-lg border border-dashed">
                          <span className="text-sm text-muted-foreground">Choose your room</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Date & Party Selection */}
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wider">Date & Party</h4>
                    {selectedDate ? (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 p-3 bg-white/80 rounded-lg border">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm font-medium">{selectedDate}</span>
                        </div>
                        <div className="flex items-center space-x-2 p-3 bg-white/80 rounded-lg border">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm font-medium">{party.adults} adults{party.children > 0 && `, ${party.children} children`}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 bg-muted/30 rounded-lg border border-dashed">
                        <span className="text-sm text-muted-foreground">Select date and party size</span>
                      </div>
                    )}
                  </div>

                  {/* Time Selection (Non-Inn only) */}
                  {selectedProduct && selectedProduct !== 'inn' && (
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wider">Time</h4>
                      {selectedTimeSlot ? (
                        <div className="flex items-center space-x-2 p-3 bg-white/80 rounded-lg border">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm font-medium">{selectedTimeSlot}</span>
                        </div>
                      ) : (
                        <div className="p-3 bg-muted/30 rounded-lg border border-dashed">
                          <span className="text-sm text-muted-foreground">Select your time</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Add-ons Selection */}
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wider">Add-ons</h4>
                    {addons.length > 0 ? (
                      <div className="space-y-2">
                        {addons.map((addon) => (
                          <div key={addon.sku} className="flex items-center justify-between p-3 bg-white/80 rounded-lg border">
                            <div className="flex items-center space-x-2 flex-1">
                              <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                              <span className="text-sm font-medium">{addon.name} (×{addon.qty})</span>
                            </div>
                            <span className="text-sm font-semibold text-primary">${(addon.price * addon.qty).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-3 bg-muted/30 rounded-lg border border-dashed">
                        <span className="text-sm text-muted-foreground">No add-ons selected</span>
                      </div>
                    )}
                  </div>

                  {/* Estimated Total */}
                  {(selectedProduct || addons.length > 0) && (
                    <div className="pt-4 border-t border-primary/20">
                      <div className="bg-primary/10 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-primary">Estimated Total</span>
                          <span className="font-bold text-xl text-primary">
                            ${(() => {
                              let total = 0;
                              
                              // Base product price
                              if (selectedProduct === 'soak') total += 35;
                              else if (selectedProduct === 'private_tub') total += 85;
                              else if (selectedProduct === 'spa') total += 120;
                              else if (selectedProduct === 'inn' && selectedRoom) {
                                const room = ROOM_TYPES.find(r => r.id === selectedRoom);
                                total += room ? room.price : 179;
                              }
                              
                              // Add-ons
                              addons.forEach(addon => {
                                total += addon.price * addon.qty;
                              });
                              
                              return total.toFixed(2);
                            })()}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Final pricing confirmed at checkout</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Booking;
