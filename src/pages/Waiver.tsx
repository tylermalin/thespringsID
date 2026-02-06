import React from 'react';
import LuxuryNavigation from "@/components/LuxuryNavigation";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/hooks/use-analytics";

const Waiver = () => {
    useAnalytics('waiver');

    return (
        <div className="min-h-screen bg-background font-avenir">
            <LuxuryNavigation />

            {/* Hero Section */}
            <section className="relative py-20 bg-secondary">
                <div className="luxury-container">
                    <div className="text-center">
                        <h1 className="font-canela text-4xl md:text-5xl font-normal text-primary mb-8 tracking-tight">
                            Waiver & Release of Liability
                        </h1>
                        <div className="w-24 h-px bg-primary/30 mx-auto mb-8"></div>
                        <p className="font-avenir text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
                            Effective Date: February 6, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="luxury-section bg-background">
                <div className="luxury-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-slate max-w-none">
                            <h2 className="font-canela text-center text-3xl text-primary mb-12">THE SPRINGS<br />USER AGREEMENT, WAIVER AND RELEASE OF LIABILITY</h2>

                            <p className="mb-8">
                                I desire to use the facilities and services of The Springs (the "Facility"), located at 3742 Highway 21, Idaho City, Idaho, and I agree to the following terms and conditions:
                            </p>

                            <div className="space-y-8">
                                <section>
                                    <h3 className="font-canela text-xl text-primary mb-4">1. Health Representation</h3>
                                    <p>
                                        I acknowledge and affirm that I am in good physical condition and have no medical condition that would limit or prevent my use of the Facility or its services. I further affirm that I do not have any condition that may be adversely affected by exposure to hot or cold temperatures, steam, soaking pools, or related wellness services.
                                    </p>
                                    <p className="mt-4">
                                        The Facility may include, without limitation, hot pools, cold pools, soaking tubs, steam rooms, showers, bodywork, and other spa or wellness services. I have consulted a medical professional as necessary and voluntarily assume responsibility for determining whether participation is appropriate for me.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="font-canela text-xl text-primary mb-4">2. Acknowledgment of Hazards</h3>
                                    <p>
                                        I acknowledge that the Facility contains potentially hazardous conditions inherent to its nature, including but not limited to:
                                    </p>
                                    <ul className="list-disc list-inside mt-2 space-y-1">
                                        <li>Hot and cold temperatures</li>
                                        <li>Steam and humidity</li>
                                        <li>Wet and slippery surfaces due to water, moisture, oils, or soaps</li>
                                        <li>Slippery steps, pool edges, and transitions between surfaces</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="font-canela text-xl text-primary mb-4">3. Inspection and Personal Responsibility</h3>
                                    <p>
                                        Before using any Facility services, I agree to inspect the premises and independently determine whether conditions are safe. If I observe any unsafe condition, I will immediately notify staff and refrain from use until the condition is corrected.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="font-canela text-xl text-primary mb-4">4. Assumption of Risk</h3>
                                    <p className="font-semibold uppercase">
                                        I AM AWARE OF THE RISKS INVOLVED IN USING THE FACILITY AND ITS SERVICES. WITH FULL KNOWLEDGE OF THESE RISKS, I VOLUNTARILY AGREE TO PARTICIPATE AND ASSUME ALL RESPONSIBILITY FOR ANY INJURY, ILLNESS, DISABILITY, OR DEATH THAT MAY RESULT, INCLUDING RISKS THAT MAY NOT BE OBVIOUS OR FORESEEABLE.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="font-canela text-xl text-primary mb-4">5. Release of Liability (Including Ordinary Negligence)</h3>
                                    <p>
                                        In consideration for being permitted to use the Facility, I agree on behalf of myself, my heirs, assigns, and legal representatives that I release and waive any claims against The Springs and its owners, officers, directors, employees, agents, contractors, vendors, affiliates, insurers, and landlords arising from my use of the Facility, including claims arising from the ordinary negligence of the released parties, to the fullest extent permitted by Idaho law.
                                    </p>
                                    <p className="mt-4">
                                        This release includes claims related to injury, illness, death, or property loss, including those arising in or around the Facility and any associated parking areas.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="font-canela text-xl text-primary mb-4">6. Indemnification</h3>
                                    <p>
                                        I agree to indemnify, defend, and hold harmless The Springs and the released parties from any claims, demands, or actions arising out of my use of the Facility, including claims for personal injury, property damage, or other losses, to the fullest extent permitted by Idaho law.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="font-canela text-xl text-primary mb-4">7. Conduct and Removal</h3>
                                    <p>
                                        The Springs reserves the right to refuse service or remove any guest whose behavior is deemed disruptive, unsafe, offensive, inappropriate, or likely to disturb others. Removal for such conduct will be without refund.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="font-canela text-xl text-primary mb-4">8. Governing Law and Venue</h3>
                                    <p>
                                        This agreement shall be governed by the laws of the State of Idaho. Any action arising out of this agreement shall be brought exclusively in a court of competent jurisdiction located in Idaho.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="font-canela text-xl text-primary mb-4">9. Electronic Signature</h3>
                                    <p>
                                        I understand that checking a box, clicking an "I Agree" button, or otherwise indicating acceptance online constitutes my electronic signature and agreement to be bound by this waiver.
                                    </p>
                                </section>
                            </div>

                            <div className="mt-16 p-8 border-2 border-primary/20 rounded-lg text-center bg-secondary/10">
                                <h3 className="font-canela text-2xl mb-4">ACKNOWLEDGMENT</h3>
                                <p className="font-semibold uppercase text-lg leading-relaxed">
                                    I HAVE READ AND UNDERSTAND THIS AGREEMENT. I ACKNOWLEDGE THAT I AM WAIVING IMPORTANT LEGAL RIGHTS AND AGREE VOLUNTARILY.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Waiver;
