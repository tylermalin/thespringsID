import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/hooks/use-analytics";

const Careers = () => {
    useAnalytics('careers');

    const openPositions = [
        {
            title: "Poolside Server",
            type: "Full-Time",
            details: [
                "32–40 hours per week",
                "Customer service and serving experience a plus",
                "Must be 19 years of age or older",
                "Must be available for days, nights, and weekends"
            ]
        },
        {
            title: "Front Desk",
            type: "Full-Time",
            details: [
                "32–40 hours per week",
                "Customer service experience a plus",
                "Basic computer skills required",
                "Must be available for days, nights, and weekends"
            ]
        },
        {
            title: "Prep Cook",
            type: "Full-Time",
            details: [
                "40 hours per week",
                "General commercial kitchen knowledge a plus"
            ]
        },
        {
            title: "Attendant Positions",
            type: "Variable",
            details: [
                "20–40 hours per week",
                "Responsibilities include locker rooms, facility cleaning, prep assistance, and general guest support"
            ]
        },
        {
            title: "Maintenance",
            type: "Part-Time",
            details: [
                "Support multiple properties",
                "General maintenance tasks",
                "Seasonal responsibilities include snow shoveling (winter) and landscaping (summer)"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background font-avenir">
            <LuxuryNavigation />

            {/* Hero Section */}
            <section className="relative py-20 bg-secondary">
                <div className="luxury-container">
                    <div className="text-center">
                        <h1 className="font-canela text-4xl md:text-6xl font-normal text-primary mb-8 tracking-tight">
                            Join the Springs Team
                        </h1>
                        <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
                        <p className="font-avenir text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
                            Hiring at The Springs
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="luxury-section bg-background">
                <div className="luxury-container">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="font-avenir text-lg text-muted-foreground font-light leading-relaxed tracking-wide mb-12">
                            As we head into our busy season, The Springs is looking for friendly, dependable team members to join us across several roles. We value great customer service, teamwork, and a strong sense of responsibility in a relaxed but professional environment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {openPositions.map((position) => (
                            <Card key={position.title} className="border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="font-canela text-2xl text-primary">{position.title}</CardTitle>
                                        <span className="text-xs font-avenir uppercase tracking-widest text-luxury bg-luxury/10 px-2 py-1 rounded">
                                            {position.type}
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {position.details.map((detail, index) => (
                                            <li key={index} className="font-avenir text-muted-foreground flex items-start">
                                                <span className="mr-2 text-luxury">•</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Section */}
            <section className="luxury-section bg-secondary">
                <div className="luxury-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-canela text-3xl md:text-4xl font-normal text-primary mb-12 tracking-tight">
                            How to Apply
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-white p-10 rounded-lg shadow-sm">
                                <h3 className="font-canela text-2xl mb-6">In Person</h3>
                                <p className="font-avenir text-muted-foreground leading-relaxed">
                                    The Springs Administrative Office<br />
                                    3742 Hwy 21<br />
                                    Idaho City, ID 83631
                                </p>
                            </div>

                            <div className="bg-white p-10 rounded-lg shadow-sm flex flex-col items-center justify-center">
                                <h3 className="font-canela text-2xl mb-6">Online</h3>
                                <Button
                                    asChild
                                    size="xl"
                                    className="font-avenir tracking-wide"
                                >
                                    <a
                                        href="https://thespringsid.wufoo.com/forms/apply-online-to-join-the-team-at-the-springs/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Apply Online
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Careers;
