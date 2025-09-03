import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Phone, Mail, MapPin, Clock, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const BookeoIntegration = () => {
  const navigate = useNavigate();

  const handleBookeoRedirect = () => {
    window.open('https://www-14p.bookeo.com/bookeo/b_springs_start.html', '_blank');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://bookeo.com/widget.js?a=2146MJM3N198CFAA0706';
    script.async = true;
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
          
          <h1 className="text-4xl font-light text-slate-800 mb-4">
            Book Your Experience
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Reserve your perfect mountain getaway - from relaxing soaks to exclusive private tubs
          </p>
        </div>

        {/* Primary Booking Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Direct Bookeo Redirect */}
          <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ExternalLink className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-slate-800">
                Book Online
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                Use our secure online booking system
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8 text-center">
              <p className="text-slate-600 mb-6">
                Click below to access our secure online booking system powered by Bookeo. 
                You'll be able to select dates, times, and book soaks and private tubs.
              </p>
              
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={handleBookeoRedirect}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Book Soaks & Private Tubs
              </Button>
              
              <p className="text-sm text-slate-500 mt-4">
                Opens in a new tab for secure booking
              </p>
            </CardContent>
          </Card>

          {/* Widget Information */}
          <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-slate-800">
                Embedded Widget
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                Book directly on this page
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8 text-center">
              <p className="text-slate-600 mb-6">
                The Bookeo widget is automatically loaded below. You can book soaks and private tubs 
                directly on this page without leaving our website.
              </p>
              
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  ✅ Widget automatically loaded
                </p>
                <p className="text-green-700 text-xs mt-1">
                  Script: https://bookeo.com/widget.js?a=2146MJM3N198CFAA0706
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bookeo Widget Container */}
        <Card className="shadow-xl border-0 mb-8">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-slate-800">
              Book Your Soaks & Private Tubs
            </CardTitle>
            <CardDescription className="text-lg text-slate-600">
              Select your preferred date, time, and experience below
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <div id="bookeo-widget-container" className="min-h-[600px]">
              <div className="text-center text-slate-500 py-12">
                <Calendar className="h-16 w-16 mx-auto mb-4 text-slate-300" />
                <p className="text-lg">Loading Bookeo booking widget...</p>
                <p className="text-sm">Please wait while the booking system initializes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fallback Notice */}
        <Card className="mb-8 shadow-lg border-0 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-800">
              Having Trouble with the Widget?
            </CardTitle>
            <CardDescription className="text-lg text-slate-600">
              Use our alternative booking method above
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8 text-center">
            <div className="text-center">
              <ExternalLink className="h-16 w-16 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-medium text-slate-800 mb-3">Bookeo Hosted Page</h4>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                If the embedded widget doesn't work properly, use Bookeo's hosted booking page 
                for the most reliable experience. This opens in a new tab and provides full 
                access to all booking features.
              </p>
              <Button
                size="lg"
                onClick={handleBookeoRedirect}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Open Bookeo Hosted Page
              </Button>
              <p className="text-sm text-slate-500 mt-3">
                Opens https://www-14p.bookeo.com/bookeo/b_springs_start.html in new tab
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-800">
              Need Help with Your Booking?
            </CardTitle>
            <CardDescription className="text-lg text-slate-600">
              Our team is here to assist you with reservations and answer any questions
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-medium text-slate-800 mb-2">Phone</h4>
                <a 
                  href="tel:2083927680" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  (208) 392-7680
                </a>
              </div>
              
              <div className="text-center">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-medium text-slate-800 mb-2">Email</h4>
                <a 
                  href="mailto:info@thespringsid.com" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  info@thespringsid.com
                </a>
              </div>
              
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-medium text-slate-800 mb-2">Hours</h4>
                <p className="text-slate-600">Daily 9:00 AM - 9:00 PM</p>
              </div>
              
              <div className="text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-medium text-slate-800 mb-2">Address</h4>
                <p className="text-slate-600 text-sm">
                  3764 Hwy 21<br />
                  Idaho City, ID 83631
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card className="mt-8 shadow-lg border-0 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-800">
              What You Can Book
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-medium text-slate-800 mb-2">Public Soaks</h4>
                <p className="text-slate-600">
                  Relax in our natural hot springs pools. Multiple temperature options available.
                </p>
                <p className="text-amber-700 font-medium mt-2">From $35 per person</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-medium text-slate-800 mb-2">Private Tubs</h4>
                <p className="text-slate-600">
                  Exclusive access to private hot springs tubs. Perfect for couples or small groups.
                </p>
                <p className="text-orange-700 font-medium mt-2">From $85 per session</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookeoIntegration;
