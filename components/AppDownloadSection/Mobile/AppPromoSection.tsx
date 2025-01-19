'use client';

import React from 'react';

const AppPromoSection: React.FC = () => {
    return (
        <section
            className="relative bg-cover bg-center rounded-lg shadow-md"
            style={{
                backgroundImage: "url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1737260573/app-download-banner_jil06u.jpg')",
                backgroundSize: 'cover', // Ensure the image covers the section
                backgroundRepeat: 'no-repeat', // Prevent image tiling
                width: '430px', // Set width of the section
                height: '257px', // Set height of the section
            }}
        >
            <div className="p-8">
                {/* Heading */}
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
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
            <div className="flex justify-center space-x-6">
                {/* iOS Button */}
                <div className="text-center">
                    <button
                        className="flex items-center justify-center px-6 py-3 bg-white rounded-full hover:shadow-lg transition"
                    >
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
                    <button
                        className="flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-md border border-gray-300 hover:shadow-lg transition"
                    >
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
