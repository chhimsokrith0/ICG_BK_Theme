import React from "react";

const ResponsibleGamingSection = () => {
    return (
        <div className="py-16 px-6">
            {/* Container */}
            <div className="max-w-5xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl font-semibold text-gray-900">
                    BK8 Playing a Part in Responsible Gaming
                </h2>

                {/* Description */}
                <p className="text-gray-700 text-lg mt-6 leading-relaxed">
                    As one of Asia’s largest gaming platforms, we feel responsible for all activities 
                    occurring on our gaming websites. We ensure all players' responsible gambling 
                    principles are understood and respected by all related parties including game 
                    providers and platform regulators.
                </p>

                {/* Supporting Details */}
                <p className="text-gray-500 text-md mt-6 leading-relaxed">
                    Meanwhile, we commit to providing a safe and secure gaming platform to ensure 
                    a fair gaming experience. Even though we might not be in direct contact with our users, 
                    we have created a platform that offers the necessary tools to manage:
                </p>

                {/* Bullet Points */}
                <div className="text-gray-500 text-md mt-4 leading-relaxed">
                    <p>- Underage gambling problems by verifying players’ age.</p>
                    <p>- Gambling habits by providing a self-assessment tool to help users determine risk levels.</p>
                    <p>- Criminal activities and online threats by including security tools to ensure data privacy.</p>
                </div>
            </div>
        </div>
    );
};

export default ResponsibleGamingSection;
