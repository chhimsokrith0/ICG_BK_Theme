import React from "react";
import VIPSection from "./VIPSection";
import VIPTierSection from "./VIPTierSection";
import HowItWorksSection from "./HowItWorksSection";
import VIPBenefitsTable from "./VIPBenefitsTable";
import FAQAndTerms from "./FAQAndTerms";
import ReferralSection from "./ReferralSection";
import Testimonials from "./Testimonials";

const VIPPage = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <div
                className="relative h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1737192276/top-banner_mb0hvr.jpg')`, // Replace with your actual image URL
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Text Content */}
                <div className="absolute bottom-60 inset-0 flex flex-col items-start justify-center pl-16 md:pl-60 text-white space-y-4">
                    <h2 className="text-lg font-medium uppercase">Supreme</h2>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                        VIP Lounge
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                        BK8 is going to show you how great it is to be our VIP,
                        <br />
                        stay tuned for something awesome.
                    </p>
                </div>

                {/* Footer Navigation */}
                <div className="absolute bottom-[300px] left-60">
                    <div className="flex space-x-4 text-gray-300">
                        <a
                            href="#about"
                            className="bg-yellow-600 text-white py-1 px-4 rounded-full hover:bg-yellow-500 transition text-sm md:text-base"
                        >
                            About
                        </a>
                        <a
                            href="#upgrade"
                            className="hover:text-white transition text-sm md:text-base"
                        >
                            Upgrade
                        </a>
                        <a
                            href="#benefits"
                            className="hover:text-white transition text-sm md:text-base"
                        >
                            Benefits
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-white transition text-sm md:text-base"
                        >
                            FAQ
                        </a>
                        <a
                            href="#referral"
                            className="hover:text-white transition text-sm md:text-base"
                        >
                            Referral
                        </a>
                    </div>
                </div>

            </div>

            {/* VIP Section */}
            <VIPSection />

            {/* VIP Tier Section */}
            <VIPTierSection />

            {/* How It Works Section */}
            <HowItWorksSection />

            {/* VIP Benefits Table */}
            <VIPBenefitsTable />

            {/* FAQ and Terms */}
            <FAQAndTerms />

            {/* Referral Section */}
            <ReferralSection />

            {/* Testimonials */}
            <Testimonials />
        </div>
    );
};

export default VIPPage;
