'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';

interface Route {
    label: string;
    path: string;
}


// const profileRoutes = [
//     { label: 'My Profile', path: '/myaccount/profile' },
//     { label: 'Messaging', path: '/myaccount/messaging' },
//     { label: 'Change Password', path: '/myaccount/changepassword' },
// ];

const ProfileSection = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const t = useTranslations('myaccount.Sidebar.ProfileSection');
    const profileRoutes: Route[] = t.raw('routes');


    useEffect(() => {
        // Set active tab based on current route
        const currentRoute = profileRoutes.find((route) => pathname?.includes(route.path));
        setActiveTab(currentRoute ? currentRoute.label : null);
    }, [pathname]);

    const handleTabClick = (route: { label: string; path: string }) => {
        setActiveTab(route.label);
        router.push(route.path); // Navigate to the route
    };

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
                    {t('title')}
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
                    {profileRoutes.map((route) => (
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

export default ProfileSection;
