import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useBooking } from "@/contexts/BookingContext";

interface DateSelectorProps {
  onDateSelect: (date: string) => void;
  selectedDate?: string | null;
}

const DateSelector = ({ onDateSelect, selectedDate }: DateSelectorProps) => {
  const { state } = useBooking();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate calendar days for current month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const days = getDaysInMonth(currentMonth);

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return selectedDate === formatDate(date);
  };

  const isPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isBlackoutDate = (date: Date) => {
    const dateStr = formatDate(date);
    return state.bookingService?.isBlackoutDate(dateStr) || false;
  };

  const handleDateClick = (date: Date) => {
    if (isPast(date) || isBlackoutDate(date)) return;
    onDateSelect(formatDate(date));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Select Date</CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevMonth}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-medium min-w-[120px] text-center">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={nextMonth}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1">
          {/* Day headers */}
          {dayNames.map((day) => (
            <div
              key={day}
              className="h-10 flex items-center justify-center text-sm font-medium text-muted-foreground"
            >
              {day}
            </div>
          ))}
          
          {/* Calendar days */}
          {days.map((day, index) => (
            <div
              key={index}
              className={`h-10 flex items-center justify-center text-sm relative ${
                !day
                  ? "text-transparent"
                  : isPast(day)
                  ? "text-muted-foreground cursor-not-allowed"
                  : isBlackoutDate(day)
                  ? "text-muted-foreground cursor-not-allowed"
                  : isSelected(day)
                  ? "bg-primary text-primary-foreground rounded-md cursor-pointer"
                  : "hover:bg-muted rounded-md cursor-pointer"
              }`}
              onClick={() => day && handleDateClick(day)}
            >
              {day && day.getDate()}
              {day && isToday(day) && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></div>
              )}
              {day && isBlackoutDate(day) && (
                <div className="absolute inset-0 bg-muted/50 rounded-md"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Legend */}
        <div className="mt-4 pt-4 border-t space-y-2">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-primary rounded-sm"></div>
              <span>Selected</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-muted rounded-sm"></div>
              <span>Unavailable</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Today</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DateSelector;
