'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';

interface Route {
    label: string;
    path: string;
}

const HistorySection = () => {
    const t = useTranslations('myaccount.Sidebar.HistorySection');
    const router = useRouter();
    const pathname = usePathname();
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>(null);

    // Fetch routes dynamically from translations
    const routes: Route[] = t.raw('routes');

    useEffect(() => {
        const currentRoute = routes.find((route) => pathname?.includes(route.path));
        setActiveTab(currentRoute ? currentRoute.label : null);
    }, [pathname]);

    const handleTabClick = (route: Route) => {
        setActiveTab(route.label);
        router.push(route.path);
    };

    return (
        <div className="mt-4">
            <button
                onClick={() => setIsHistoryOpen(!isHistoryOpen)}
                className="flex items-center justify-between w-full text-gray-700 font-bold mb-2"
            >
                <div className="flex items-center">
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737521113/HISTORY_kptw9q.gif"
                        alt="History Icon"
                        className="w-10 h-10 mr-3"
                    />
                    <span className="uppercase text-black tracking-wide">{t('title')}</span>
                </div>
                <motion.div
                    initial={{ rotate: isHistoryOpen ? 180 : 0 }}
                    animate={{ rotate: isHistoryOpen ? 0 : 180 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    {isHistoryOpen ? (
                        <ChevronUpIcon className="w-5 h-5 text-gray-800" />
                    ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-800" />
                    )}
                </motion.div>
            </button>
            {isHistoryOpen && (
                <motion.div
                    initial={{ opacity: 0, translateY: -10 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: -10 }}
                    transition={{
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="space-y-3 bg-white rounded-lg p-4"
                >
                    {routes.map((route) => (
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

export default HistorySection;
