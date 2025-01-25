'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeaderBarWithMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

    const menuItems = [
        {
            label: 'CASHIER',
            icon: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737521114/CASHIER_wbrocc.gif',
            subItems: [
                { label: 'Deposit', link: '/myaccount/deposit' },
                { label: 'Withdraw', link: '/cashier/withdraw' },
                { label: 'Transfer / Promo', link: '/cashier/transfer' },
                { label: 'Withdrawal Details', link: '/cashier/details' },
            ],
        },
        {
            label: 'REWARD',
            icon: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737521114/REWARD_hckb5c.gif',
            subItems: [
                { label: 'Reward Overview', link: '/reward/overview' },
                { label: 'Reward History', link: '/reward/history' },
            ],
        },
        {
            label: 'PROFILE',
            icon: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737521114/PROFILE_ju1pyh.gif',
            subItems: [
                { label: 'View Profile', link: '/profile/view' },
                { label: 'Change Password', link: '/profile/change-password' },
            ],
        },
        {
            label: 'HISTORY',
            icon: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1737521113/HISTORY_kptw9q.gif',
            subItems: [
                { label: 'Transaction History', link: '/history/transactions' },
                { label: 'Game History', link: '/history/games' },
            ],
        },
    ];

    const toggleSubMenu = (index: number) => {
        setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    };

    return (
        <div className="relative">
            {/* Header Bar */}
            <div className="flex justify-between items-center bg-white p-4">
                {/* Back Arrow and Title */}
                <div className="flex items-center space-x-2">
                    <motion.button
                        whileHover={{ x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-blue-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </motion.button>
                    <p className="text-sm font-medium text-gray-700">Funds</p>
                </div>

                {/* Dots */}
                <div
                    className="flex space-x-1 cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={index}
                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                        ></div>
                    ))}
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-[100]"
                    onClick={() => setIsMenuOpen(false)}
                ></motion.div>
            )}

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6 z-[200]"
                >
                    {/* Close Button */}
                    <div className="flex justify-end mb-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-500 hover:text-gray-800"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            ✕
                        </motion.button>
                    </div>

                    {/* Menu Items */}
                    {menuItems.map((item, index) => (
                        <div key={index} className="mb-6">
                            {/* Menu Label */}
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleSubMenu(index)}
                            >
                                <p className="text-sm font-bold text-blue-700 flex items-center">
                                    <img
                                        src={item.icon}
                                        alt={`${item.label} Icon`}
                                        className="w-10 h-10 mr-2"
                                    />
                                    {item.label}
                                </p>
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{
                                        rotate: openSubMenuIndex === index ? 90 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-4 h-4 text-gray-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </motion.div>
                            </div>
                            {/* Sub-items */}
                            {openSubMenuIndex === index && item.subItems.length > 0 && (
                                <ul className="mt-2 pl-8 space-y-2 text-sm text-gray-600">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                            <Link href={subItem.link}>
                                                {subItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default HeaderBarWithMenu;
