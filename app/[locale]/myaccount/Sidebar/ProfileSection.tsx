'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

interface Props {
    activeItem: string;
    setActiveItem: (item: string) => void;
}

const ProfileSection: React.FC<Props> = ({ activeItem, setActiveItem }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(true);

    return (
        <div>
            <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center justify-between w-full text-gray-700 font-bold mb-2"
            >
                <div className="flex items-center">
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737521114/PROFILE_ju1pyh.gif"
                        alt="Profile Icon"
                        className="w-10 h-10 mr-3"
                    />
                    PROFILE
                </div>
                <motion.div
                    initial={{ rotate: isProfileOpen ? 180 : 0 }}
                    animate={{ rotate: isProfileOpen ? 0 : 180 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    {isProfileOpen ? (
                        <ChevronUpIcon className="w-5 h-5 text-gray-800" />
                    ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-800" />
                    )}
                </motion.div>
            </button>
            {isProfileOpen && (
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
                            activeItem === 'My Profile'
                                ? 'bg-gray-100 text-blue-600 font-bold'
                                : 'hover:text-blue-600'
                        }`}
                        onClick={() => setActiveItem('My Profile')}
                    >
                        My Profile
                    </p>
                    <p
                        className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 ${
                            activeItem === 'Messaging'
                                ? 'bg-gray-100 text-blue-600 font-bold'
                                : 'hover:text-blue-600'
                        }`}
                        onClick={() => setActiveItem('Messaging')}
                    >
                        Messaging
                    </p>
                    <p
                        className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 ${
                            activeItem === 'Change Password'
                                ? 'bg-gray-100 text-blue-600 font-bold'
                                : 'hover:text-blue-600'
                        }`}
                        onClick={() => setActiveItem('Change Password')}
                    >
                        Change Password
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default ProfileSection;
