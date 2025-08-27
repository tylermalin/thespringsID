import { Minus, Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useBooking } from "@/contexts/BookingContext";

interface PartySelectorProps {
  onPartyChange: (party: { adults: number; children: number }) => void;
  party: { adults: number; children: number };
  productType: string;
}

const PartySelector = ({ onPartyChange, party, productType }: PartySelectorProps) => {
  const { state } = useBooking();

  const handleAdultsChange = (change: number) => {
    const newAdults = Math.max(1, Math.min(10, party.adults + change));
    onPartyChange({ ...party, adults: newAdults });
  };

  const handleChildrenChange = (change: number) => {
    const newChildren = Math.max(0, Math.min(10, party.children + change));
    onPartyChange({ ...party, children: newChildren });
  };

  // Simplified configuration access
  const getMaxOccupancy = () => {
    switch (productType) {
      case 'soak': return 8;
      case 'private_tub': return 4;
      case 'spa': return 2;
      case 'inn': return 4;
      default: return 8;
    }
  };

  const getAgeMinimum = () => {
    switch (productType) {
      case 'soak': return 0;
      case 'private_tub': return 0;
      case 'spa': return 16;
      case 'inn': return 0;
      default: return 0;
    }
  };

  const maxOccupancy = getMaxOccupancy();
  const ageMinimum = getAgeMinimum();
  const totalGuests = party.adults + party.children;
  const canAddMore = totalGuests < maxOccupancy;
  const canAddChildren = ageMinimum === 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="h-5 w-5" />
          <span>Party Size</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Adults */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Adults</h3>
              <p className="text-sm text-muted-foreground">Age 18 and older</p>
            </div>
            <Badge variant="secondary">{party.adults}</Badge>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleAdultsChange(-1)}
              disabled={party.adults <= 1}
              className="h-10 w-10 p-0"
            >
              <Minus className="h-4 w-4" />
            </Button>
            
            <div className="flex-1 text-center">
              <span className="text-2xl font-semibold">{party.adults}</span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleAdultsChange(1)}
              disabled={!canAddMore}
              className="h-10 w-10 p-0"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Children */}
        {canAddChildren && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Children</h3>
                <p className="text-sm text-muted-foreground">
                  Age {ageMinimum} to 17
                </p>
              </div>
              <Badge variant="secondary">{party.children}</Badge>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleChildrenChange(-1)}
                disabled={party.children <= 0}
                className="h-10 w-10 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <div className="flex-1 text-center">
                <span className="text-2xl font-semibold">{party.children}</span>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleChildrenChange(1)}
                disabled={!canAddMore}
                className="h-10 w-10 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Total and limits */}
        <div className="pt-4 border-t space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium">Total Guests</span>
            <Badge variant={totalGuests > maxOccupancy ? "destructive" : "default"}>
              {totalGuests} / {maxOccupancy}
            </Badge>
          </div>
          
          {totalGuests > maxOccupancy && (
            <p className="text-sm text-destructive">
              Maximum {maxOccupancy} guests allowed for {productType}
            </p>
          )}
          
          {!canAddChildren && ageMinimum > 0 && (
            <p className="text-sm text-muted-foreground">
              Minimum age {ageMinimum} required for {productType}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PartySelector;
