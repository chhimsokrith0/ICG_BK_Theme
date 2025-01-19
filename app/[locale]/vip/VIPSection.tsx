'use client';

import React, { useState, useEffect } from 'react';

const VIPSection = () => {
    const [bgImage, setBgImage] = useState(
        'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737193449/about-background_wl7rdv.jpg'
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                // Mobile
                setBgImage(
                    'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737287622/m-about-background_fpklmz.jpg'
                );
            } else {
                // Desktop
                setBgImage(
                    'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737193449/about-background_wl7rdv.jpg'
                );
            }
        };

        // Set the initial background image
        handleResize();

        // Add event listener for resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-[#0b2134] p-4 md:p-10">
            <section
                className="relative bg-cover bg-center max-w-[1400px] rounded-3xl mx-auto bg-no-repeat py-10 px-6 md:py-16 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center shadow-2xl"
                style={{
                    backgroundImage: `url('${bgImage}')`,
                    height: 'auto',
                }}
            >
                <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                {/* Content */}
                <div className="relative z-10 w-full flex flex-col items-start text-center lg:flex-row">
                    {/* Left Side: Text Content */}
                    <div className="text-white w-full lg:w-1/2 space-y-4 md:space-y-6">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400 tracking-wide">
                            Be a BK8 VIP
                        </h2>
                        <h3 className="text-lg md:text-xl lg:text-3xl font-bold leading-snug lg:leading-tight">
                            Experience Exclusivity Like None Other — Special Promotions, Gifts, and Rebates.
                            <span className="text-yellow-400"> More than you expect!</span>
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-6 md:leading-8">
                            As Cambodia’s most innovative and all-inclusive online gaming website, BK8 never stops trying to give members the best. From game options to service standards, BK8 provides the latest and the finest.
                        </p>
                        <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-6 md:leading-8">
                            To take it up a notch, BK8 is introducing an exclusive VIP program designed to give loyal members more reasons to continue trusting us as their entertainment provider. The five tiers that form the backbone of BK8 VIP Program are Bronze, Silver, Gold, Platinum & Diamond.
                        </p>
                        <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-6 md:leading-8">
                            The purpose of having a tier-based program is to give members the incentives needed to upgrade progressively. Although we encourage members to achieve VIP tier requirements and keep moving up, our focus is always on members’ satisfaction, especially VIP members.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VIPSection;
