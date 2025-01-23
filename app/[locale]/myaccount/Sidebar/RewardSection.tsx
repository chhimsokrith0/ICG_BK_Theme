'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const rewardRoutes = [
    { label: 'Instant Rebate', path: '/myaccount/rebate' },
    { label: 'Mission Diary', path: '/myaccount/daily-mission' },
    { label: 'Referral', path: '/myaccount/referral' },
];

const RewardSection = () => {
    const [isRewardOpen, setIsRewardOpen] = useState(true);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Set active tab based on current route
        const currentRoute = rewardRoutes.find((route) => pathname?.includes(route.path));
        setActiveTab(currentRoute ? currentRoute.label : null);
    }, [pathname]);

    const handleTabClick = (route: { label: string; path: string }) => {
        setActiveTab(route.label);
        router.push(route.path); // Navigate to the route
    };

    return (
        <div>
            <button
                onClick={() => setIsRewardOpen(!isRewardOpen)}
                className="flex items-center justify-between w-full text-gray-700 font-bold mb-2"
            >
                <div className="flex items-center">
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737521114/REWARD_hckb5c.gif"
                        alt="Reward Icon"
                        className="w-10 h-10 mr-3"
                    />
                    REWARD
                </div>
                <motion.div
                    initial={{ rotate: isRewardOpen ? 180 : 0 }}
                    animate={{ rotate: isRewardOpen ? 0 : 180 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    {isRewardOpen ? (
                        <ChevronUpIcon className="w-5 h-5 text-gray-800" />
                    ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-800" />
                    )}
                </motion.div>
            </button>
            {isRewardOpen && (
                <motion.div
                    initial={{ opacity: 0, translateY: -10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: -10 }}
                    transition={{
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1], // Smooth, bouncy easing
                    }}
                    className="space-y-3 bg-white rounded-lg p-4"
                >
                    {rewardRoutes.map((route) => (
                        <p
                            key={route.label}
                            onClick={() => handleTabClick(route)}
                            className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 ${
                                activeTab === route.label
                                    ? 'bg-blue-50 text-blue-600 font-bold shadow-sm'
                                    : 'hover:bg-gray-100 hover:text-blue-600'
                            }`}
                        >
                            {route.label}
                        </p>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default RewardSection;
