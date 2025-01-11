"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MobileMenu({ closeMenu }: { closeMenu: () => void }) {
    const menuItemsMain = [
        { icon: "📥", label: "Download", color: "text-orange-500" },
        { icon: "⭐", label: "VIP", color: "text-gray-700" },
        { icon: "👑", label: "Leaderboard", color: "text-gray-700" },
        {
            icon: "🤝",
            label: "Sponsors",
            color: "text-gray-700",
            badge: { text: "New", color: "bg-red-500 text-white" },
        },
    ];

    const menuItemsLinks = [
        "About Us",
        "Live Chat",
        "Info Centre",
        "Contact Us",
        "Responsible Gaming",
        "Terms & Conditions",
        "Affiliate",
    ];

    const menuItemsGrid = [
        { icon: "🏠", label: "Home" },
        { icon: "📱", label: "Mobile" },
        { icon: "⚽", label: "Sports" },
        { icon: "🎮", label: "E-Sports" },
        { icon: "🎲", label: "Casino" },
        { icon: "🎰", label: "Slots" },
        { icon: "🎣", label: "Fishing" },
        { icon: "🃏", label: "3D Games" },
        { icon: "🎟️", label: "Lottery" },
        { icon: "🚀", label: "Fast Games" },
        { icon: "🎉", label: "Promos" },
        { icon: "🎡", label: "Lucky Wheel" },
    ];

    return (
        <motion.div
            className="bg-white shadow-md p-4 mt-20 ml-10 w-[653px] fixed top-0 left-0 z-50 overflow-y-auto rounded-lg grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -200 }} // Initial animation state
            animate={{ opacity: 1, x: 0 }} // Animation on load
            exit={{ opacity: 0, x: -200 }} // Animation on exit
            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
        >
            {/* Left Section */}
            <div className="text-gray-700 text-sm font-medium">
                {/* Main Section */}
                <div className="space-y-6 mb-6">
                    {menuItemsMain.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`flex items-center space-x-2 text-base font-medium ${item.color}`}
                            whileHover={{ scale: 1.05 }} // Slight scaling on hover
                            whileTap={{ scale: 0.95 }} // Shrink slightly on tap
                        >
                            <span className="mr-2 text-3xl">{item.icon}</span>
                            <span>{item.label}</span>
                            {item.badge && (
                                <span
                                    className={`ml-2 ${item.badge.color} text-xs px-2 py-0.5 rounded-full`}
                                >
                                    {item.badge.text}
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Additional Links Section */}
                <ul className="space-y-2 pl-4 text-sm list-disc text-gray-500 mb-6">
                    {menuItemsLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            className="text-base"
                            whileHover={{ x: 10, color: "#FFA500" }} // Slide effect and color change on hover
                        >
                            {link}
                        </motion.li>
                    ))}
                </ul>

                {/* Log in Button */}
                <motion.button
                    onClick={closeMenu}
                    className="bg-orange-500 text-white text-base font-medium px-4 py-2 rounded-md w-full shadow-md hover:bg-orange-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Log in
                </motion.button>
            </div>

            {/* Right Section */}
            <div className="text-gray-700 text-sm font-medium grid grid-cols-1 gap-4 border-l pl-4 justify-items-center">
                {menuItemsGrid.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center space-x-2 text-base font-medium"
                        whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect for a playful rotation
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span className="text-3xl text-blue-500">{item.icon}</span>
                        <span>{item.label}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
