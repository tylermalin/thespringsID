import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Phone, Mail, MapPin, Clock, Bed, Wifi, Coffee, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/hooks/use-analytics";

const InnBooking = () => {
  useAnalytics('inn-booking');
  const navigate = useNavigate();

  const handleBookingRedirect = () => {
    window.open('https://reservation.asiwebres.com/v5/RoomAvailability.aspx?id=59b16d1f00e54a5a80fb29308a6daf6c', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <LuxuryNavigation />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <h1 className="text-4xl font-canela text-slate-800 mb-4">
            Book Your Stay at Inn The Pines
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-avenir">
            Reserve your perfect mountain retreat in Idaho City
          </p>
        </div>

        {/* Primary Booking Button */}
        <Card className="shadow-xl border-0 bg-gradient-to-br from-amber-50 to-orange-50 mb-8">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <ExternalLink className="w-8 h-8 text-amber-600" />
            </div>
            <CardTitle className="text-3xl font-canela text-slate-800">
              Online Reservations
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 font-avenir">
              Book directly through our secure reservation system
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8 text-center">
            <p className="text-slate-600 mb-6 font-avenir text-lg">
              Click below to access our online booking system. Select your dates, 
              choose your room type, and complete your reservation securely.
            </p>
            
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-6 text-lg font-avenir"
              onClick={handleBookingRedirect}
            >
              <ExternalLink className="mr-2 h-6 w-6" />
              Reserve Your Room
            </Button>
            
            <p className="text-sm text-slate-500 mt-4 font-avenir">
              Opens in a new tab • Secure booking system
            </p>
          </CardContent>
        </Card>

        {/* Room Types */}
        <Card className="shadow-xl border-0 mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-canela text-slate-800">
              Available Room Types
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 font-avenir">
              Comfortable mountain accommodations for every need
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Double Queen Room */}
              <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Bed className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-canela text-slate-800">Non-Smoking Double Queen</h4>
                    <p className="text-amber-700 font-avenir font-semibold">From $125/night</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4 font-avenir">
                  Comfortable room with two queen beds, perfect for families or small groups.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 font-avenir">
                  <li className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-blue-600" />
                    Free WiFi
                  </li>
                  <li className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-blue-600" />
                    Keurig Coffee Maker
                  </li>
                  <li className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-blue-600" />
                    Base 2, Max 4 adults
                  </li>
                </ul>
              </div>

              {/* King Room */}
              <div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Mountain className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-canela text-slate-800">Non-Smoking King</h4>
                    <p className="text-amber-700 font-avenir font-semibold">From $125/night</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4 font-avenir">
                  Spacious room with one king bed, ideal for couples seeking mountain comfort.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 font-avenir">
                  <li className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-green-600" />
                    Free WiFi
                  </li>
                  <li className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-green-600" />
                    Keurig Coffee Maker
                  </li>
                  <li className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-green-600" />
                    Mountain Views
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                onClick={handleBookingRedirect}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 font-avenir"
              >
                Check Availability & Rates
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Amenities */}
        <Card className="shadow-xl border-0 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-canela text-slate-800">
              Inn The Pines Amenities
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Wifi className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-avenir font-medium text-slate-800 mb-2">Free WiFi</h4>
                <p className="text-sm text-slate-600 font-avenir">Stay connected throughout your stay</p>
              </div>
              <div>
                <Coffee className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-avenir font-medium text-slate-800 mb-2">In-Room Coffee</h4>
                <p className="text-sm text-slate-600 font-avenir">Keurig coffee maker in every room</p>
              </div>
              <div>
                <Mountain className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-avenir font-medium text-slate-800 mb-2">Mountain Views</h4>
                <p className="text-sm text-slate-600 font-avenir">Beautiful Idaho mountain scenery</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-slate-50 to-slate-100">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-canela text-slate-800">
              Need Assistance?
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 font-avenir">
              Our team is here to help with your reservation
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-avenir font-medium text-slate-800 mb-2">Phone</h4>
                <a 
                  href="tel:2083927680" 
                  className="text-blue-600 hover:text-blue-800 transition-colors font-avenir"
                >
                  (208) 392-7680
                </a>
              </div>
              
              <div className="text-center">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-avenir font-medium text-slate-800 mb-2">Email</h4>
                <a 
                  href="mailto:info@thespringsid.com" 
                  className="text-blue-600 hover:text-blue-800 transition-colors font-avenir"
                >
                  info@thespringsid.com
                </a>
              </div>
              
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-avenir font-medium text-slate-800 mb-2">Check-in</h4>
                <p className="text-slate-600 font-avenir">3:00 PM</p>
              </div>
              
              <div className="text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-avenir font-medium text-slate-800 mb-2">Address</h4>
                <p className="text-slate-600 text-sm font-avenir">
                  3764 Hwy 21<br />
                  Idaho City, ID 83631
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Policies */}
        <Card className="mt-8 shadow-lg border-0 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-canela text-slate-800">
              Reservation Policies
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 text-slate-700 font-avenir">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Cancellation Policy</h4>
                <p className="text-sm">
                  Cancellations must be made 24 hours in advance for a full refund. 
                  See full policy details during booking.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Pet Policy</h4>
                <p className="text-sm">
                  Pets may be allowed in select rooms. Please inquire when booking 
                  or contact us directly for details.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default InnBooking;

