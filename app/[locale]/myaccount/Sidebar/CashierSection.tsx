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

// const routes = [
//     { label: 'Deposit', path: '/myaccount/deposit' },
//     { label: 'Withdraw', path: '/myaccount/withdraw' },
//     { label: 'Transfer / Promo', path: '/myaccount/transfer' },
//     { label: 'Withdrawal Details', path: '/myaccount/bankdetails' }
// ];

const CashierSection = () => {
    const t = useTranslations('myaccount.Sidebar.CashierSection');
    const router = useRouter();
    const pathname = usePathname();
    const [isCashierOpen, setIsCashierOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<string | null>(null);

    const routes: Route[] = t.raw('routes');

    useEffect(() => {
        // Set active tab based on current route
        const currentRoute = routes.find((route) => pathname?.includes(route.path));
        setActiveTab(currentRoute ? currentRoute.label : null);
    }, [pathname]);

    const handleTabClick = (route: { label: string; path: string }) => {
        setActiveTab(route.label);
        router.push(route.path); // Navigate to the route
    };

    return (
        <div>
            <button
                onClick={() => setIsCashierOpen(!isCashierOpen)}
                className="flex items-center justify-between w-full text-gray-700 font-bold mb-2"
            >
                <div className="flex items-center">
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737521114/CASHIER_wbrocc.gif"
                        alt="Cashier Icon"
                        className="w-10 h-10 mr-3"
                    />
                    <span className="uppercase text-black tracking-wide">{t('title')}</span>
                </div>
                <motion.div
                    initial={{ rotate: isCashierOpen ? 180 : 0 }}
                    animate={{ rotate: isCashierOpen ? 0 : 180 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    {isCashierOpen ? (
                        <ChevronUpIcon className="w-5 h-5 text-gray-800" />
                    ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-800" />
                    )}
                </motion.div>
            </button>
            {isCashierOpen && (
                <motion.div
                    initial={{ opacity: 0, translateY: -20, scale: 0.95 }}
                    animate={{ opacity: 1, translateY: 0, scale: 1 }}
                    exit={{ opacity: 0, translateY: -20, scale: 0.95 }}
                    transition={{
                        duration: 0.5,
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

export default CashierSection;
