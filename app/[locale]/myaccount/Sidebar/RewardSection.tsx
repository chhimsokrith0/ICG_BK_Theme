'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

interface Props {
    activeItem: string;
    setActiveItem: (item: string) => void;
}

const RewardSection: React.FC<Props> = ({ activeItem, setActiveItem }) => {
    const [isRewardOpen, setIsRewardOpen] = useState(true);

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
                    <p
                        className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 ${
                            activeItem === 'Instant Rebate'
                                ? 'bg-gray-100 text-blue-600 font-bold'
                                : 'hover:text-blue-600'
                        }`}
                        onClick={() => setActiveItem('Instant Rebate')}
                    >
                        Instant Rebate
                    </p>
                    <p
                        className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 ${
                            activeItem === 'Mission Diary'
                                ? 'bg-gray-100 text-blue-600 font-bold'
                                : 'hover:text-blue-600'
                        }`}
                        onClick={() => setActiveItem('Mission Diary')}
                    >
                        Mission Diary
                    </p>
                    <p
                        className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 ${
                            activeItem === 'Referral'
                                ? 'bg-gray-100 text-blue-600 font-bold'
                                : 'hover:text-blue-600'
                        }`}
                        onClick={() => setActiveItem('Referral')}
                    >
                        Referral
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default RewardSection;
