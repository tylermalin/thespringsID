import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/hooks/use-analytics";

const Packages = () => {
    useAnalytics('packages');
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-avenir">
            <LuxuryNavigation />

            <div className="container mx-auto px-4 py-max max-w-4xl pt-32">
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="mb-8 hover:bg-transparent pl-0 group"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back
                </Button>

                <div className="text-center py-20">
                    <h1 className="text-5xl md:text-7xl font-canela text-primary mb-6">
                        Packages
                    </h1>
                    <div className="inline-block px-8 py-4 bg-luxury/10 rounded-lg border border-luxury/20">
                        <p className="text-2xl font-canela text-luxury">
                            Coming Soon
                        </p>
                    </div>
                    <p className="text-lg text-muted-foreground mt-8 max-w-2xl mx-auto">
                        We're crafting exclusive packages to enhance your mountain retreat experience.
                        Check back soon for curated combinations of accommodations, spa treatments, and hot springs access.
                    </p>
                    <div className="mt-12">
                        <Button
                            size="lg"
                            onClick={() => navigate('/book-the-springs')}
                            className="font-avenir tracking-wide"
                        >
                            Book Individual Services
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Packages;
