import { useNavigate } from "react-router-dom";
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

// Booking flow steps
const STEPS = [
  { id: 'choose', label: 'Choose Experience', icon: Calendar },
  { id: 'date', label: 'Date & Party', icon: Users },
  { id: 'options', label: 'Select Options', icon: Clock },
  { id: 'addons', label: 'Add-ons', icon: Calendar },
  { id: 'details', label: 'Guest Details', icon: Users },
  { id: 'payment', label: 'Payment', icon: CreditCard },
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

const Booking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { state, dispatch, nextStep, prevStep } = useBooking();

  const progress = ((state.currentStep + 1) / STEPS.length) * 100;

  const handleProductSelect = (productId: string) => {
    dispatch({ type: 'SELECT_PRODUCT', payload: productId });
  };

  const handleDateSelect = (date: string) => {
    dispatch({ type: 'SELECT_DATE', payload: date });
  };

  const handlePartyChange = (party: { adults: number; children: number }) => {
    dispatch({ type: 'SET_PARTY', payload: party });
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
