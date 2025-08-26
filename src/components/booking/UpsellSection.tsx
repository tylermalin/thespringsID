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
  onAddAddon: (addon: AddonItem) => void;
  onRemoveAddon: (sku: string) => void;
  onUpdateQuantity: (sku: string, qty: number) => void;
  productType: string;
}

const UpsellSection: React.FC<UpsellSectionProps> = ({
  addons,
  selectedAddons,
  onAddAddon,
  onRemoveAddon,
  onUpdateQuantity,
  productType
}) => {
  const getQuantity = (sku: string) => {
    const selected = selectedAddons.find(addon => addon.sku === sku);
    return selected ? selected.qty : 0;
  };

  const handleAdd = (addon: AddonItem) => {
    const currentQty = getQuantity(addon.sku);
    if (currentQty === 0) {
      onAddAddon(addon);
    } else {
      onUpdateQuantity(addon.sku, currentQty + 1);
    }
  };

  const handleRemove = (sku: string) => {
    const currentQty = getQuantity(sku);
    if (currentQty > 1) {
      onUpdateQuantity(sku, currentQty - 1);
    } else {
      onRemoveAddon(sku);
    }
  };

  // Filter addons based on product type
  const relevantAddons = addons.filter(addon => {
    if (productType === 'soak') {
      return ['towels', 'robes', 'locker', 'refreshments'].includes(addon.sku);
    } else if (productType === 'spa') {
      return ['aromatherapy', 'hot_stone', 'upgrade'].includes(addon.sku);
    } else if (productType === 'private_tub') {
      return ['champagne', 'chocolates', 'flowers', 'music'].includes(addon.sku);
    } else if (productType === 'inn') {
      return ['breakfast', 'late_checkout', 'parking'].includes(addon.sku);
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">Enhance Your Experience</h3>
        <p className="text-muted-foreground">
          Add these special touches to make your visit even more memorable
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relevantAddons.map((addon) => {
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
                    <div className="font-semibold text-primary">${addon.price}</div>
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
