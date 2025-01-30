import React from "react";
import Navigation from "./Navigation";
import ResponsibleGamingSection from "./ResponsibleGamingSection";
import GamingTips from "./GamingTips";
import SelfAssessmentQuiz from "./SelfAssessmentQuiz";
import GamblingAssessment from "./GamblingAssessment";
import OnlineGamingGuide from "./OnlineGamingGuide";
import CashOutTool from "./CashOutTool";

const ResponsibleGaming = () => {
    return (
        <div className="container mx-auto px-6 py-16 ">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Left Content (Text) */}
                <div className="lg:w-1/2 text-left">
                    <h1 className="text-5xl font-extrabold text-gray-900">Responsible <br /> Gaming</h1>
                    <p className="text-gray-700 text-lg mt-6 leading-relaxed">
                        At BK8 we are dedicated to providing a fun and safe gaming platform and
                        understand that gambling may carry potential risks involving addiction.
                        Having said that, we are fully committed to making sure that our members
                        understand the potential risks involved.
                    </p>
                    <p className="text-gray-700 text-lg mt-4 leading-relaxed">
                        What seems to be a leisure activity can quickly turn into a problem,
                        affecting your health, relationships, and finances. Quickly seek assistance
                        or professional help if you think you or someone you know is facing a problem
                        with gambling or is at risk of developing a gambling problem.
                    </p>
                </div>

                {/* Right Content (Image) */}
                <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1738148386/top-banner_waoilj.jpg"
                        alt="Responsible Gaming"
                        className="w-full  object-contain"
                    />
                </div>
            </div>


            {/* Navigation */}
            <Navigation />
            
            {/* Responsible Gaming Section */}
            <ResponsibleGamingSection />

            {/* Gaming Tips */}
            <GamingTips />

            {/* Self-assessment Quiz */}
            <SelfAssessmentQuiz />

            {/* Gambling Assessment */}
            <GamblingAssessment />

            {/* Online Gaming Guide */}
            <OnlineGamingGuide />

            {/* Cash Out Tool */}
            <CashOutTool />
        </div>
    );
};

export default ResponsibleGaming;
