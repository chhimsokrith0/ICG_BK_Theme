'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const ReferralSection = () => {
    const t = useTranslations('vip.ReferralSection');
    const [bgImage, setBgImage] = useState(
        'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737196446/referral-background_or2lxz.jpg'
    );

    const description = t.raw('description');

    const howToReferSteps = t.raw('howToReferSteps');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                // Mobile
                setBgImage(
                    'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737288774/m-referral-background_jxj0d7.jpg'
                );
            } else {
                // Desktop
                setBgImage(
                    'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737196446/referral-background_or2lxz.jpg'
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
        <section
            className="bg-[#0b2134] py-16"
            style={{
                backgroundImage: `url('${bgImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 'auto', // Adjusted for responsive behavior
            }}
        >
            <div className="max-w-[1341px] mx-auto flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 px-6 relative">
                {/* Left Content */}
                <div className="lg:w-1/2 text-gray-300 p-6 rounded-md relative z-10 bg-opacity-90">
                    <h2 className="text-yellow-500 text-xl font-semibold mb-4">{t('title')}</h2>
                    <h3 className="text-white font-bold mb-2">{t('subtitle')}</h3>
                    {description.map((step: string, index: number) => (
                        <p key={index} className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-7">
                            {step}
                        </p>
                    ))}
                    <h4 className="text-white font-bold mb-2">{t('howToReferTitle')}</h4>
                    <ul className="list-disc list-inside space-y-2">
                        {howToReferSteps.map((step: string, index: number) => (
                            <li key={index} className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-7">
                                {step}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ReferralSection;
