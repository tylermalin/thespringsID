import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, CreditCard, User, Mail, Phone } from "lucide-react";

interface CheckoutSectionProps {
  bookingSummary: {
    product: string;
    date: string;
    time: string;
    party: { adults: number; children: number };
    addons: Array<{ name: string; qty: number; price: number }>;
    total: number;
  };
  guestInfo: {
    name: string;
    email: string;
    phone: string;
    notes: string;
    sms_updates: boolean;
  };
  onGuestInfoChange: (field: string, value: string | boolean) => void;
  onCompleteBooking: () => void;
  loading?: boolean;
}

const CheckoutSection: React.FC<CheckoutSectionProps> = ({
  bookingSummary,
  guestInfo,
  onGuestInfoChange,
  onCompleteBooking,
  loading = false
}) => {
  const [policiesAcknowledged, setPoliciesAcknowledged] = useState(false);

  const getProductDisplayName = (product: string) => {
    switch (product) {
      case 'soak': return 'Public Soak';
      case 'private_tub': return 'Private Tub';
      case 'spa': return 'Spa Treatment';
      case 'inn': return 'Inn The Pines';
      default: return product;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2">Complete Your Booking</h3>
        <p className="text-muted-foreground">
          Review your selections and provide your information
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Booking Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Booking Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Service:</span>
                <span>{getProductDisplayName(bookingSummary.product)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Date:</span>
                <span>{new Date(bookingSummary.date).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Time:</span>
                <span>{bookingSummary.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Guests:</span>
                <span>{bookingSummary.party.adults} adults, {bookingSummary.party.children} children</span>
              </div>
            </div>

            {bookingSummary.addons.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-medium mb-2">Add-ons:</h4>
                  <div className="space-y-1">
                    {bookingSummary.addons.map((addon, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>{addon.name} (x{addon.qty})</span>
                        <span>${(addon.price * addon.qty).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <Separator />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span className="text-primary">${bookingSummary.total.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>

        {/* Guest Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Guest Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={guestInfo.name}
                onChange={(e) => onGuestInfoChange('name', e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={guestInfo.email}
                onChange={(e) => onGuestInfoChange('email', e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={guestInfo.phone}
                onChange={(e) => onGuestInfoChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Special Requests</Label>
              <Textarea
                id="notes"
                value={guestInfo.notes}
                onChange={(e) => onGuestInfoChange('notes', e.target.value)}
                placeholder="Any special requests or accessibility needs"
                rows={3}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="sms_updates"
                checked={guestInfo.sms_updates}
                onCheckedChange={(checked) => 
                  onGuestInfoChange('sms_updates', checked as boolean)
                }
              />
              <Label htmlFor="sms_updates" className="text-sm">
                Receive SMS updates about my booking
              </Label>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Policies and Terms */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="policies"
                checked={policiesAcknowledged}
                onCheckedChange={(checked) => setPoliciesAcknowledged(checked as boolean)}
                required
              />
              <Label htmlFor="policies" className="text-sm leading-relaxed">
                I acknowledge that I have read and agree to The Springs' 
                <a href="/policies" className="text-primary hover:underline ml-1">
                  booking policies, cancellation policy, and terms of service
                </a>
              </Label>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Important Information:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Cancellations must be made 24 hours in advance for a full refund</li>
                <li>• Children under 16 must be accompanied by an adult</li>
                <li>• Please consult your doctor before using hot springs if you have health conditions</li>
                <li>• A 25% deposit is required to confirm your booking</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Booking Button */}
      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={onCompleteBooking}
          disabled={!policiesAcknowledged || !guestInfo.name || !guestInfo.email || !guestInfo.phone || loading}
          className="w-full max-w-md"
        >
          {loading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Processing...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span>Complete Booking - ${bookingSummary.total.toFixed(2)}</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSection;
