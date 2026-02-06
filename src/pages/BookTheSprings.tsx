import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { useAnalytics } from "@/hooks/use-analytics";
import { Checkbox } from "@/components/ui/checkbox";

const BookTheSprings = () => {
    useAnalytics('booking');
    const navigate = useNavigate();
    const [waiverAccepted, setWaiverAccepted] = useState(false);
    const [showBooking, setShowBooking] = useState(false);

    // Scroll to booking section when shown
    useEffect(() => {
        if (showBooking) {
            setTimeout(() => {
                const element = document.getElementById('booking-section');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 200);
        }
    }, [showBooking]);

    const handleAgreeAndContinue = () => {
        if (waiverAccepted) {
            setShowBooking(true);
            // Simulate data capture
            console.log("Waiver Accepted:", {
                acceptance: true,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                ip: "captured-at-server"
            });

            // Scroll to booking widget
            setTimeout(() => {
                document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
            }, 200);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-avenir">
            <LuxuryNavigation />

            <div className="container mx-auto px-4 py-max max-w-6xl pt-32">
                {/* Header */}
                <div className="mb-12">
                    <Button
                        variant="ghost"
                        onClick={() => navigate(-1)}
                        className="mb-8 hover:bg-transparent pl-0 group"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back
                    </Button>

                    <h1 className="text-4xl md:text-6xl font-canela text-primary mb-6">
                        Make Your Reservation
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                        Please review our latest rates and policies before confirming your booking.
                    </p>
                </div>

                {/* Essential Information Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <Card className="border-0 shadow-sm bg-white overflow-hidden">
                        <CardHeader className="bg-secondary/30 pb-4">
                            <CardTitle className="font-canela text-2xl">General Soaks</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-4">
                            <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                                <span className="text-lg">Adults</span>
                                <span className="text-2xl font-canela text-luxury">$30</span>
                            </div>
                            <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                                <span className="text-lg">Children (12 & under)</span>
                                <span className="text-2xl font-canela text-luxury">$27</span>
                            </div>
                            <p className="text-muted-foreground italic text-sm mt-4">
                                General soaks are for a 2.5 hour session in the large pool and hot tub.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-sm bg-white overflow-hidden">
                        <CardHeader className="bg-secondary/30 pb-4">
                            <CardTitle className="font-canela text-2xl">Private Tubs</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8 space-y-4">
                            <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                                <span className="text-lg">Couple (per hour)</span>
                                <span className="text-2xl font-canela text-luxury">$65</span>
                            </div>
                            <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                                <span className="text-lg">Extra Person (up to 4 total)</span>
                                <span className="text-2xl font-canela text-luxury">$5</span>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg mt-4 text-sm space-y-2 text-amber-900">
                                <p><strong>Note:</strong> Private tubs are 18+ only and clothing optional.</p>
                                <p><strong>Booking:</strong> Please add only 1 adult to your online reservation; we will update the total at check-in.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Important Policies */}
                <Card className="border-0 shadow-sm bg-secondary/10 mb-16">
                    <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-4 border-r border-slate-200 pr-8">
                                <h3 className="font-canela text-2xl text-primary">Arrival Policy</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Please arrive <strong>15 minutes prior</strong> to your reservation time to allow for check-in. This ensures you receive your full scheduled time in the water.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-canela text-2xl text-primary">12-Hour Cancellation Policy</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We do not charge your credit card at the time of booking. However, if we are not notified of any cancellations <strong>12 hours prior</strong> to your scheduled booking, credit card charges will be incurred for the <strong>full price</strong> of your reservation.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Required Waiver Checkbox Section */}
                {!showBooking && (
                    <Card className="border-2 border-luxury/20 shadow-xl bg-white mb-16 overflow-hidden">
                        <CardHeader className="bg-luxury/5 border-b border-luxury/10">
                            <CardTitle className="font-canela text-2xl text-primary">Required Acknowledgment</CardTitle>
                            <CardDescription>Please read and accept the following waiver to proceed with your booking.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="space-y-6">
                                <div className="bg-slate-50 p-6 rounded-lg text-sm text-slate-700 leading-relaxed max-h-60 overflow-y-auto border border-slate-100">
                                    <p>
                                        I acknowledge that I am voluntarily using the facilities and services of The Springs at 3742 Highway 21, Idaho City, Idaho. I confirm that I am in good physical condition and have no medical conditions that would make use of hot or cold pools, steam rooms, soaking tubs, or related facilities unsafe for me. I understand these activities involve inherent risks, including exposure to hot and cold temperatures, steam, wet and slippery surfaces, and the risk of injury. I knowingly and voluntarily assume all such risks. I agree to release and waive claims against The Springs and its owners, employees, contractors, and affiliates, to the fullest extent permitted by Idaho law. I agree to follow all posted rules and policies and understand The Springs may refuse service or remove guests for unsafe or inappropriate behavior without refund.
                                    </p>
                                </div>

                                <div className="flex items-start space-x-3 p-4 bg-secondary/20 rounded-lg">
                                    <Checkbox
                                        id="waiver"
                                        checked={waiverAccepted}
                                        onCheckedChange={(checked) => setWaiverAccepted(checked === true)}
                                        className="mt-1"
                                    />
                                    <label
                                        htmlFor="waiver"
                                        className="text-sm leading-relaxed cursor-pointer select-none"
                                    >
                                        By checking this box, I acknowledge that I have read and agree to the{" "}
                                        <a href="/waiver" target="_blank" className="text-luxury underline hover:text-luxury/80">Waiver</a>,{" "}
                                        <a href="/privacy" target="_blank" className="text-luxury underline hover:text-luxury/80">Privacy Policy</a>, and{" "}
                                        <a href="/terms" target="_blank" className="text-luxury underline hover:text-luxury/80">Terms & Conditions</a>.
                                    </label>
                                </div>

                                <div className="flex justify-center pt-4">
                                    <Button
                                        size="xl"
                                        onClick={handleAgreeAndContinue}
                                        disabled={!waiverAccepted}
                                        className="px-12 font-avenir tracking-wide shadow-lg transition-all active:scale-95"
                                    >
                                        I Agree & Continue
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Booking Widget Section */}
                <div id="booking-section" className={`transition-opacity duration-1000 ${showBooking ? 'opacity-100' : 'opacity-0 pointer-events-none h-0 p-0 overflow-hidden'}`}>
                    <div className="mb-20">
                        <div className="flex items-center justify-center space-x-2 text-green-600 mb-6 font-medium animate-luxury-fade">
                            <CheckCircle2 className="w-5 h-5" />
                            <span>Waiver Accepted</span>
                        </div>

                        <div className="text-center mb-10">
                            <h2 className="font-canela text-3xl text-primary mb-2">Reservation System</h2>
                            <p className="text-muted-foreground">Select your preferences below</p>
                        </div>

                        <div id="bookeo_widget" className="w-full bg-white rounded-xl shadow-lg h-[800px] overflow-hidden">
                            <iframe
                                src="https://www-13p.bookeo.com/bookeo/b_thesprings_start.html"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                title="The Springs Booking System"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Help & Support Footer */}
                <div className="grid md:grid-cols-4 gap-8 mb-20 border-t border-slate-200 pt-12">
                    <div className="flex items-start space-x-4">
                        <Phone className="w-5 h-5 text-luxury shrink-0 mt-1" />
                        <div>
                            <p className="font-medium text-primary">Need Help?</p>
                            <a href="tel:2083927680" className="text-sm text-muted-foreground hover:text-luxury transition-colors">(208) 392-7680</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Mail className="w-5 h-5 text-luxury shrink-0 mt-1" />
                        <div>
                            <p className="font-medium text-primary">Support Email</p>
                            <a href="mailto:info@thespringsid.com" className="text-sm text-muted-foreground hover:text-luxury transition-colors">info@thespringsid.com</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Clock className="w-5 h-5 text-luxury shrink-0 mt-1" />
                        <div>
                            <p className="font-medium text-primary">Hours</p>
                            <p className="text-sm text-muted-foreground">Thu-Mon, 10:30am - 10pm</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <MapPin className="w-5 h-5 text-luxury shrink-0 mt-1" />
                        <div>
                            <p className="font-medium text-primary">Location</p>
                            <p className="text-sm text-muted-foreground">3764 Hwy 21, Idaho City, ID</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BookTheSprings;
