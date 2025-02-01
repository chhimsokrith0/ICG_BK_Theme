'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
const BackgroundImageSection = () => {
    const t = useTranslations('vip.BackgroundImageSection');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWindowSize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        // Check window size on component mount
        checkWindowSize();

        // Add event listener for resize
        window.addEventListener('resize', checkWindowSize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', checkWindowSize);
    }, []);

    return (
        <div
            className={`relative ${isMobile ? 'h-[337px] w-[430px]' : 'h-screen'} bg-cover bg-center`}
            style={{
                backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1737192276/top-banner_mb0hvr.jpg')`, // Replace with your actual image URL
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Text Content */}
            <div className="absolute bottom-16 md:bottom-32 lg:bottom-60 inset-0 flex flex-col items-start justify-center px-6 md:px-16 lg:pl-60 text-white space-y-3 md:space-y-4">
                <h2 className="text-xs sm:text-sm md:text-lg font-medium uppercase">{t('title')}</h2>
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold">{t('mainTitle')}</h1>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-lg leading-relaxed">
                    {t('description')}
                </p>
            </div>

            {/* Footer Navigation */}
            <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 lg:bottom-[300px] left-6 sm:left-8 md:left-16 lg:left-60">
                <div className="flex flex-wrap space-x-2 sm:space-x-3 md:space-x-4 text-gray-300">
                    <a
                        href="#about"
                        className="bg-yellow-600 text-white py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 rounded-full hover:bg-yellow-500 transition text-[10px] sm:text-xs md:text-sm"
                    >
                        {t('navigation.about')}
                    </a>
                    <a
                        href="#upgrade"
                        className="hover:text-white transition text-[10px] sm:text-xs md:text-sm"
                    >
                         {t('navigation.upgrade')}
                    </a>
                    <a
                        href="#benefits"
                        className="hover:text-white transition text-[10px] sm:text-xs md:text-sm"
                    >
                        {t('navigation.benefits')}
                    </a>
                    <a
                        href="#faq"
                        className="hover:text-white transition text-[10px] sm:text-xs md:text-sm"
                    >
                        {t('navigation.faq')}
                    </a>
                    <a
                        href="#referral"
                        className="hover:text-white transition text-[10px] sm:text-xs md:text-sm"
                    >
                        {t('navigation.referral')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BackgroundImageSection;
