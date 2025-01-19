'use client';

import React, { useState, useEffect } from 'react';

const ReferralSection = () => {
    const [bgImage, setBgImage] = useState(
        'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737196446/referral-background_or2lxz.jpg'
    );

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
                    <h2 className="text-yellow-500 text-xl font-semibold mb-4">Spread the Word - Share the Reward</h2>
                    <h3 className="text-white font-bold mb-2">Be rewarded for referring!</h3>
                    <p className="mb-4">
                        Our referral program gives existing VIP members even more for inviting friends and family to be a part of our VIP program.
                    </p>
                    <p className="mb-4">
                        The BK8 Referral Program is constructed to give existing members extra incentives for sharing the benefits of being a VIP member. This is to show our appreciation for your loyalty and your contribution in helping us grow the BK8 VIP community. Know someone who will love to join you in the VIP lounge? Hurry up and refer someone today - Exciting rewards and bonuses await!
                    </p>
                    <p className="mb-4">
                        For more information on how to refer, please follow the instructions below:
                    </p>
                    <h4 className="text-white font-bold mb-2">How to Refer?</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Refer a friend or relative.</li>
                        <li>
                            Both the referrer and referee will each receive a referral bonus of USD 300 after the referee becomes a valid VIP member.
                        </li>
                        <li>
                            Referee/referred member is required to make a deposit of USD 15,000 within 30 days to be considered as a valid VIP member.
                        </li>
                        <li>Only referrals for first-time VIP applicants are entitled to the referral bonus.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ReferralSection;
