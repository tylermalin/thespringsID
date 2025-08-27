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
  bookingData: {
    product: string | null;
    room?: string | null;
    date: string | null;
    timeSlot: string | null;
    party: { adults: number; children: number };
    addons: any[];
  };
  onBookingComplete: (bookingId: string) => void;
}

const CheckoutSection: React.FC<CheckoutSectionProps> = ({
  bookingData,
  onBookingComplete
}) => {
  const [guestInfo, setGuestInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
    sms_updates: false
  });
  const [policiesAcknowledged, setPoliciesAcknowledged] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGuestInfoChange = (field: string, value: string | boolean) => {
    setGuestInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleCompleteBooking = async () => {
    setLoading(true);
    // Simulate booking process
    setTimeout(() => {
      const bookingId = `SPR-${Date.now()}`;
      onBookingComplete(bookingId);
      setLoading(false);
    }, 2000);
  };

  const calculateTotal = () => {
    let basePrice = 35; // Default price
    if (bookingData.product === 'private_tub') basePrice = 85;
    if (bookingData.product === 'spa') basePrice = 120;
    if (bookingData.product === 'inn') {
      // For inn, use room-specific pricing
      if (bookingData.room === 'double_queen') basePrice = 199;
      if (bookingData.room === 'king') basePrice = 179;
      if (bookingData.room === 'cabin') basePrice = 249;
    }
    
    const addonsTotal = bookingData.addons.reduce((sum, addon) => sum + (addon.price * addon.qty), 0);
    return basePrice + addonsTotal;
  };

  const getRoomName = (roomId: string | null | undefined) => {
    if (!roomId) return null;
    const roomMap: { [key: string]: string } = {
      'double_queen': 'Double Queen Room',
      'king': 'King Room',
      'cabin': 'Mountain Cabin'
    };
    return roomMap[roomId] || roomId;
  };

  const getTimeSlotDisplay = (timeSlotId: string | null) => {
    if (!timeSlotId) return 'N/A';
    const timeMap: { [key: string]: string } = {
      '9am': '9:00 AM',
      '11am': '11:00 AM',
      '1pm': '1:00 PM',
      '3pm': '3:00 PM',
      '5pm': '5:00 PM',
      '7pm': '7:00 PM'
    };
    return timeMap[timeSlotId] || timeSlotId;
  };

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
                <span>{bookingData.product ? getProductDisplayName(bookingData.product) : 'N/A'}</span>
              </div>
              {bookingData.room && (
                <div className="flex justify-between">
                  <span className="font-medium">Room:</span>
                  <span>{getRoomName(bookingData.room)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="font-medium">Date:</span>
                <span>{bookingData.date ? new Date(bookingData.date).toLocaleDateString() : 'N/A'}</span>
              </div>
              {bookingData.product !== 'inn' && (
                <div className="flex justify-between">
                  <span className="font-medium">Time:</span>
                  <span>{getTimeSlotDisplay(bookingData.timeSlot)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="font-medium">Guests:</span>
                <span>{bookingData.party.adults} adults, {bookingData.party.children} children</span>
              </div>
            </div>

            {bookingData.addons.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-medium mb-2">Add-ons:</h4>
                  <div className="space-y-1">
                    {bookingData.addons.map((addon, index) => (
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
              <span className="text-primary">${calculateTotal().toFixed(2)}</span>
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
                onChange={(e) => handleGuestInfoChange('name', e.target.value)}
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
                onChange={(e) => handleGuestInfoChange('email', e.target.value)}
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
                onChange={(e) => handleGuestInfoChange('phone', e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Special Requests</Label>
              <Textarea
                id="notes"
                value={guestInfo.notes}
                onChange={(e) => handleGuestInfoChange('notes', e.target.value)}
                placeholder="Any special requests or accessibility needs"
                rows={3}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="sms_updates"
                checked={guestInfo.sms_updates}
                onCheckedChange={(checked) => 
                  handleGuestInfoChange('sms_updates', checked as boolean)
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
                {bookingData.product === 'inn' ? (
                  <>
                    <li>• Hotel reservations require 48 hours notice for cancellation</li>
                    <li>• Check-in: 3:00 PM | Check-out: 11:00 AM</li>
                    <li>• Hot springs access included with overnight stay</li>
                    <li>• Full payment required to confirm reservation</li>
                  </>
                ) : (
                  <>
                    <li>• Cancellations must be made 24 hours in advance for a full refund</li>
                    <li>• Children under 16 must be accompanied by an adult</li>
                    <li>• Please consult your doctor before using hot springs if you have health conditions</li>
                    <li>• A 25% deposit is required to confirm your booking</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complete Booking Button */}
      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={handleCompleteBooking}
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
              <span>Complete Booking - ${calculateTotal().toFixed(2)}</span>
            </div>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSection;
