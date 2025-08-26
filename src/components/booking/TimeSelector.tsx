import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  price: number;
  capacity: number;
  remaining: number;
}

interface TimeSelectorProps {
  timeSlots: TimeSlot[];
  selectedTimeSlot: string | null;
  onTimeSelect: (timeSlotId: string) => void;
  loading?: boolean;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({
  timeSlots,
  selectedTimeSlot,
  onTimeSelect,
  loading = false
}) => {
  if (loading) {
    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Loading Available Times...</h3>
          <div className="animate-pulse space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (timeSlots.length === 0) {
    return (
      <div className="text-center space-y-4">
        <Clock className="w-12 h-12 mx-auto text-muted-foreground" />
        <h3 className="text-lg font-semibold">No Available Times</h3>
        <p className="text-muted-foreground">
          No time slots are available for the selected date. Please try a different date.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Select Your Time</h3>
        <p className="text-muted-foreground">Choose from available time slots</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {timeSlots.map((slot) => (
          <Card
            key={slot.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedTimeSlot === slot.id
                ? 'ring-2 ring-primary bg-primary/5'
                : slot.available
                ? 'hover:bg-muted/50'
                : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={() => slot.available && onTimeSelect(slot.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">{slot.time}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-primary">${slot.price}</div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Users className="w-3 h-3" />
                    <span>{slot.remaining} spots left</span>
                  </div>
                </div>
              </div>
              
              {slot.available ? (
                <Badge variant="outline" className="mt-2 text-green-600 border-green-600">
                  Available
                </Badge>
              ) : (
                <Badge variant="outline" className="mt-2 text-red-600 border-red-600">
                  Full
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TimeSelector;
