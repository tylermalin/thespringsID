import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart } from "lucide-react";

interface AddonItem {
  sku: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  qty: number;
}

interface UpsellSectionProps {
  addons: AddonItem[];
  selectedAddons: AddonItem[];
  onAddonsChange: (addons: AddonItem[]) => void;
}

const UpsellSection: React.FC<UpsellSectionProps> = ({
  addons,
  selectedAddons,
  onAddonsChange,
}) => {
  const getQuantity = (sku: string): number => {
    const selectedAddon = selectedAddons.find(addon => addon.sku === sku);
    return selectedAddon ? selectedAddon.qty : 0;
  };

  const handleAdd = (addon: AddonItem) => {
    const existingAddon = selectedAddons.find(a => a.sku === addon.sku);
    let newAddons;
    
    if (existingAddon) {
      newAddons = selectedAddons.map(a => 
        a.sku === addon.sku ? { ...a, qty: a.qty + 1 } : a
      );
    } else {
      newAddons = [...selectedAddons, { ...addon, qty: 1 }];
    }
    onAddonsChange(newAddons);
  };

  const handleRemove = (sku: string) => {
    const existingAddon = selectedAddons.find(a => a.sku === sku);
    let newAddons;
    
    if (existingAddon && existingAddon.qty > 1) {
      newAddons = selectedAddons.map(a => 
        a.sku === sku ? { ...a, qty: a.qty - 1 } : a
      );
    } else {
      newAddons = selectedAddons.filter(a => a.sku !== sku);
    }
    onAddonsChange(newAddons);
  };

  // Organize add-ons by category
  const experienceUpgrades = addons.filter(addon => 
    addon.category === 'upgrade' || addon.category === 'experience' || addon.category === 'accommodation'
  );
  const traditionalAddons = addons.filter(addon => 
    addon.category === 'amenities' || addon.category === 'luxury' || addon.category === 'spa' || addon.category === 'inn'
  );

  return (
    <div className="space-y-8">
      {/* Experience Upgrades Section */}
      {experienceUpgrades.length > 0 && (
        <div>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-2 text-primary">Complete Your Wellness Journey</h3>
            <p className="text-muted-foreground">
              Add these complementary experiences for the ultimate getaway
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {experienceUpgrades.map((addon) => {
              const qty = getQuantity(addon.sku);
              const isSelected = qty > 0;
              const isExperienceUpgrade = addon.category === 'upgrade' || addon.category === 'experience' || addon.category === 'accommodation';

              return (
                <Card
                  key={addon.sku}
                  className={`transition-all ${
                    isSelected ? 'ring-2 ring-primary bg-primary/5' : 'hover:shadow-lg border-2 hover:border-primary/20'
                  } ${isExperienceUpgrade ? 'bg-gradient-to-br from-primary/5 to-secondary/10' : ''}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-primary">{addon.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {addon.description}
                        </p>
                        {addon.sku.includes('combo') && (
                          <div className="mt-2">
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              Best Value
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-right ml-4">
                        <div className="font-bold text-primary text-xl">${addon.price}</div>
                        {qty > 0 && (
                          <Badge variant="secondary" className="text-xs">
                            {qty} selected
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemove(addon.sku)}
                          disabled={qty === 0}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium">
                          {qty}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleAdd(addon)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      
                      {qty === 0 && (
                        <Button
                          className="ml-auto bg-primary hover:bg-primary/90"
                          size="sm"
                          onClick={() => handleAdd(addon)}
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Add Experience
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Traditional Add-ons Section */}
      {traditionalAddons.length > 0 && (
        <div>
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Luxury Amenities</h3>
            <p className="text-muted-foreground text-sm">
              Perfect touches to enhance your comfort
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {traditionalAddons.map((addon) => {
              const qty = getQuantity(addon.sku);
              const isSelected = qty > 0;

              return (
                <Card
                  key={addon.sku}
                  className={`transition-all ${
                    isSelected ? 'ring-2 ring-primary bg-primary/5' : 'hover:shadow-md'
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{addon.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {addon.description}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="font-semibold text-primary">
                          {addon.price === 0 ? 'Free' : `$${addon.price}`}
                        </div>
                        {qty > 0 && (
                          <Badge variant="secondary" className="text-xs">
                            {qty} selected
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemove(addon.sku)}
                          disabled={qty === 0}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium">
                          {qty}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleAdd(addon)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      
                      {qty === 0 && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleAdd(addon)}
                          className="ml-auto"
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {selectedAddons.length > 0 && (
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Selected Add-ons:</h4>
          <div className="space-y-1">
            {selectedAddons.map((addon) => (
              <div key={addon.sku} className="flex justify-between text-sm">
                <span>{addon.name} (x{addon.qty})</span>
                <span className="font-medium">${(addon.price * addon.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UpsellSection;