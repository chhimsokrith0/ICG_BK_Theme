'use client';

import React from 'react';

const AppPromoSection: React.FC = () => {
    return (
        <section
            className="relative bg-cover bg-center rounded-lg shadow-md mx-auto max-w-[95%] sm:max-w-md lg:max-w-2xl"
            style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1737260573/app-download-banner_jil06u.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: 'auto',
            }}
        >
            <div className="p-6 md:p-8 lg:p-10 text-center">
                {/* Heading */}
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    The future of gaming is here.
                    <br />
                    Great games on all devices. New BK8 App
                </h2>
                {/* Subtext */}
                <p className="text-sm text-gray-600 mt-2">
                    Sign up today for never-ending rewards, promotions, and lots of freebies.
                </p>
            </div>
            {/* App Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 p-4">
                {/* iOS Button */}
                <div className="text-center">
                    <button className="flex items-center justify-center px-6 py-3 bg-white rounded-full hover:shadow-lg transition">
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507978/apple_qwfbyd.png"
                            alt="Apple iOS"
                            className="w-5 h-5 mr-2"
                        />
                        <span className="text-sm font-medium text-gray-800">Apple iOS</span>
                    </button>
                    <a
                        href="#"
                        className="block mt-2 text-blue-500 text-sm font-medium hover:underline"
                    >
                        Instructions
                    </a>
                </div>

                {/* Android Button */}
                <div className="text-center">
                    <button className="flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-md border border-gray-300 hover:shadow-lg transition">
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507976/android_u67fvg.png"
                            alt="Android"
                            className="w-5 h-5 mr-2"
                        />
                        <span className="text-sm font-medium text-gray-800">Android</span>
                    </button>
                    <a
                        href="#"
                        className="block mt-2 text-blue-500 text-sm font-medium hover:underline"
                    >
                        Instructions
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AppPromoSection;
