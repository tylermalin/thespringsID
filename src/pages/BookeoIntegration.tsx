import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

const BookeoIntegration = () => {
  useAnalytics('booking');
  const navigate = useNavigate();

  useEffect(() => {
    // Remove any existing Bookeo scripts first
    const existingScripts = document.querySelectorAll('script[src*="bookeo.com"]');
    existingScripts.forEach(s => s.remove());
    
    // Create and inject the Bookeo widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://bookeo.com/widget.js?a=2137PFYJL13C84C48F96';
    script.async = true;
    
    // Find the widget container and insert script right after it
    const widgetContainer = document.getElementById('bookeoWidgetContainer');
    if (widgetContainer && widgetContainer.parentNode) {
      widgetContainer.parentNode.insertBefore(script, widgetContainer.nextSibling);
    } else {
      // Fallback: append to body
      document.body.appendChild(script);
    }
    
    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      const bookeoFrames = document.querySelectorAll('iframe[src*="bookeo.com"]');
      bookeoFrames.forEach(frame => frame.remove());
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
            className="mb-4 font-avenir"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-canela text-slate-800 mb-4">
            Book Your Springs Experience
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-avenir">
            Reservations for natural hot springs soaks and private tubs
          </p>
        </div>

        {/* Hours & Important Information */}
        <Card className="shadow-xl border-0 mb-8 bg-white">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-canela text-slate-800">
              Reservations & Hours
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="max-w-4xl mx-auto space-y-6 font-avenir">
              {/* Operating Hours */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-canela text-blue-900 mb-4 text-center">
                  OPEN 5 DAYS A WEEK ALL DAY!
                </h3>
                <div className="text-center space-y-2">
                  <p className="text-xl font-semibold text-slate-800">Thursday - Monday</p>
                  <p className="text-slate-600">(Closed Monday's in October)</p>
                  <p className="text-2xl font-bold text-blue-700">10:30 AM - 10:00 PM</p>
                  <p className="text-lg text-red-600 font-semibold mt-4">
                    Closed on Tuesday and Wednesday each week
                  </p>
                </div>
              </div>

              {/* Age Restrictions */}
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-canela text-amber-900 mb-3">Age Policy</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Monday, Thursday & Friday:</strong> Adults only (18+ years)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Saturday & Sunday:</strong> All ages welcome until 7:00 PM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Saturday & Sunday 7:30 PM - 10:00 PM:</strong> Adults only (18+)</span>
                  </li>
                </ul>
              </div>

              {/* Reservation Times */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-canela text-green-900 mb-3">Reservation Times</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>General Soaks:</strong> 2.5 hours from your reservation time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Private Tubs:</strong> 1 hour from your reservation time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span className="italic">Please arrive promptly and ready to soak!</span>
                  </li>
                </ul>
              </div>

              {/* Private Tubs Info */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-canela text-purple-900 mb-3">Private Tubs</h3>
                <p className="text-slate-700 mb-2">
                  <strong>Adults 18+ only</strong> • Available 10:30 AM - 10:00 PM (beginning November 3rd)
                </p>
                <p className="text-slate-700 mb-2">
                  <strong>Booking Instructions:</strong> Leave "Adults" at 1 to book a tub for up to 4 people (18+ only)
                </p>
                <p className="text-slate-600 text-sm italic">
                  If booking a private tub and plan to enjoy the rest of our facilities, you will need to make a separate soak reservation.
                </p>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-canela text-red-900 mb-3">Cancellation Policy</h3>
                <p className="text-slate-700 mb-3">
                  <strong>Cancellation fees apply</strong> to all reservations not cancelled (online or by phone) <strong>12 hours prior</strong> to reservation time.
                </p>
                <p className="text-slate-600 mb-3">
                  Our space is limited and last-minute no-shows hurt our business, especially when other guests have been turned away for the same time.
                </p>
                <p className="text-slate-600 text-sm">
                  If you called to cancel and have concerns about a no-show charge, please provide the date/time and name of the associate you spoke to so we can look into it.
                </p>
              </div>

              {/* Important Reminders */}
              <div className="bg-slate-100 p-6 rounded-lg">
                <h3 className="text-xl font-canela text-slate-800 mb-3">Important Reminders</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">✓</span>
                    <span>Make sure you receive your <strong>confirmation email</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">✓</span>
                    <span>Hit the <strong>confirm button</strong> when making online reservations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">✓</span>
                    <span>Arrive a little <strong>early and ready to soak!</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">✓</span>
                    <span>Thank you for <strong>advanced notice</strong> of any cancellations!</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bookeo Widget Container */}
        <Card className="shadow-xl border-0 mb-8">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-canela text-slate-800">
              Make Your Reservation
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 font-avenir">
              Select your preferred date, time, and experience below
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            {/* Bookeo widget container - script will inject iframe here */}
            <div id="bookeoWidgetContainer" className="w-full">
              <div className="text-center text-slate-500 py-12">
                <p className="text-lg font-avenir">Loading booking calendar...</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-canela text-slate-800">
              Need Help?
            </CardTitle>
            <CardDescription className="text-lg text-slate-600 font-avenir">
              Contact us for assistance with your reservation
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h4 className="font-avenir font-medium text-slate-800 mb-2">Hours</h4>
                <p className="text-slate-600 font-avenir text-sm">
                  Thu-Mon<br />
                  10:30 AM - 10:00 PM
                </p>
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
      </div>
      
      <Footer />
    </div>
  );
};

export default BookeoIntegration;
