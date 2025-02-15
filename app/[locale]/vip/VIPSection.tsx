'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const VIPSection = () => {
    const t = useTranslations('vip.VIPSection');
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
        <div id='upgrade' className="bg-[#0b2134] p-4 md:p-10">
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
                            {t('heading')}
                        </h2>
                        <h3 className="text-lg md:text-xl lg:text-3xl font-bold leading-snug lg:leading-tight">
                            {t('subheading')}
                            <span className="text-yellow-400"> {t('highlight')}</span>
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-6 md:leading-8">
                            {t('description.part1')}
                        </p>
                        <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-6 md:leading-8">
                        {t('description.part2')}
                        </p>
                        <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-6 md:leading-8">
                        {t('description.part3')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VIPSection;
