import React from 'react';
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/hooks/use-analytics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Download, ExternalLink } from "lucide-react";

const Press = () => {
    useAnalytics('press');

    const mediaCoverage = [
        { title: "Visit Idaho – Hot Springs Guide", url: "https://visitidaho.org/things-to-do/hot-springs/the-springs/" },
        { title: "Visit Southwest Idaho – The Springs at Idaho City", url: "https://www.visitsouthwestidaho.org/things-to-do/the-springs-at-idaho-city/" },
        { title: "The Mandagies – The Springs Idaho City Review", url: "https://www.themandagies.com/the-springs-idaho-city/" },
        { title: "We Know Boise – Hot Springs Near Boise, ID", url: "https://www.weknowboise.com/blog/hot-springs-near-boise-id.html" },
        { title: "TopHotSprings – The Springs Idaho", url: "https://www.tophotsprings.com/the-springs-idaho/" },
        { title: "500 Experiences – The Springs Hot Springs Soak", url: "https://www.500experiences.com/idaho-city-the-springs-hot-springs-soak" },
        { title: "Northwest Travel Magazine – The Springs Idaho City", url: "https://www.nwtravelmag.com/archives/the-springs-idaho-city/article_4c399789-eafe-51a4-839f-05d258a1b1ee.html" }
    ];

    return (
        <div className="min-h-screen bg-background font-avenir">
            <LuxuryNavigation />

            {/* Hero Section */}
            <section className="relative py-20 bg-secondary">
                <div className="luxury-container">
                    <div className="text-center">
                        <h1 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
                            Press
                        </h1>
                        <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="luxury-section bg-background">
                <div className="luxury-container">
                    <div className="max-w-4xl mx-auto space-y-16">

                        {/* About Section */}
                        <div>
                            <h2 className="font-canela text-3xl mb-8">About The Springs</h2>
                            <p className="font-avenir text-lg text-muted-foreground font-light leading-relaxed">
                                The Springs is a destination for soaking, recovery, and relaxation in Idaho City, Idaho, offering hot and cold experiences designed to help guests reset and reconnect.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Press Contact */}
                            <Card className="border-0 bg-secondary/50">
                                <CardHeader>
                                    <CardTitle className="font-canela text-2xl flex items-center">
                                        <Mail className="mr-3 text-luxury w-6 h-6" />
                                        Press Contact
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-avenir text-muted-foreground mb-4">
                                        For press inquiries, media requests, or partnerships, contact:
                                    </p>
                                    <p className="font-avenir font-medium text-primary">
                                        <a href="mailto:press@thespringsid.com" className="hover:text-luxury transition-colors">
                                            press@thespringsid.com
                                        </a>
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Logos & Assets */}
                            <Card className="border-0 bg-secondary/50">
                                <CardHeader>
                                    <CardTitle className="font-canela text-2xl flex items-center">
                                        <Download className="mr-3 text-luxury w-6 h-6" />
                                        Logos & Media Assets
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-avenir text-muted-foreground mb-4">
                                        Approved logos and media assets will be available here soon. If you need them immediately, contact us.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Media & Coverage */}
                        <div className="pt-12 border-t border-slate-100">
                            <h2 className="font-canela text-3xl mb-8">Media & Coverage</h2>
                            <p className="font-avenir text-muted-foreground mb-8">
                                Below are select listings, travel guides, and articles featuring The Springs:
                            </p>
                            <div className="grid grid-cols-1 gap-4">
                                {mediaCoverage.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-lg hover:border-luxury hover:shadow-sm transition-all group"
                                    >
                                        <span className="font-avenir text-primary group-hover:text-luxury transition-colors">
                                            {item.title}
                                        </span>
                                        <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-luxury transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Press;
