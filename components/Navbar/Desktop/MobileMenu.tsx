"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MobileMenu({ closeMenu }: { closeMenu: () => void }) {
    const [clones, setClones] = useState<number[]>([]);

    const handleClone = () => {
        setClones((prevClones) => [...prevClones, clones.length + 1]);
    };

    const menuItemsMain = [
        { icon: "📥", label: "Download", color: "text-orange-500", link: "/download" },
        { icon: "⭐", label: "VIP", color: "text-gray-700", link: "/vip" },
        { icon: "👑", label: "Leaderboard", color: "text-gray-700", link: "/leaderboard" },
        {
            icon: "🤝",
            label: "Sponsors",
            color: "text-gray-700",
            link: "/sponsors",
            badge: { text: "New", color: "bg-red-500 text-white" },
        },
    ];

    const menuItemsLinks = [
        { label: "About Us", link: "/about" },
        { label: "Live Chat", link: "/chat" },
        { label: "Info Centre", link: "/info" },
        { label: "Contact Us", link: "/contact" },
        { label: "Responsible Gaming", link: "/responsible-gaming" },
        { label: "Terms & Conditions", link: "/terms" },
        { label: "Affiliate", link: "/affiliate" },
    ];

    const menuItemsGrid = [
        { icon: "🏠", label: "Home", link: "/" },
        { icon: "📱", label: "Mobile", link: "/mobile" },
        { icon: "⚽", label: "Sports", link: "/sports" },
        { icon: "🎮", label: "E-Sports", link: "/esports" },
        { icon: "🎲", label: "Casino", link: "/casino" },
        { icon: "🎰", label: "Slots", link: "/slots" },
        { icon: "🎣", label: "Fishing", link: "/fishing" },
        { icon: "🃏", label: "3D Games", link: "/3d-games" },
        { icon: "🎟️", label: "Lottery", link: "/lottery" },
        { icon: "🚀", label: "Fast Games", link: "/fast-games" },
        { icon: "🎉", label: "Promos", link: "/promos" },
        { icon: "🎡", label: "Lucky Wheel", link: "/lucky-wheel" },
    ];

    const renderMenu = (key: number) => (
        <motion.div
            key={key}
            className="bg-white shadow-md p-4 mt-20 ml-10 w-[653px] fixed top-0 left-0 z-50 overflow-y-auto rounded-lg grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {/* Left Section */}
            <div className="text-gray-700 text-sm font-medium">
                {/* Main Section */}
                <div className="space-y-6 mb-6">
                    {menuItemsMain.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center space-x-2 text-base font-medium ${item.color}`}
                        >
                            <Link href={item.link}>
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <span className="mr-2 text-3xl">{item.icon}</span>
                                    <span>{item.label}</span>
                                    {item.badge && (
                                        <span
                                            className={`ml-2 ${item.badge.color} text-xs px-2 py-0.5 rounded-full`}
                                        >
                                            {item.badge.text}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Links Section */}
                <ul className="space-y-2 pl-4 text-sm list-disc text-gray-500 mb-6">
                    {menuItemsLinks.map((link, index) => (
                        <motion.li key={index} whileHover={{ x: 10 }}>
                            <Link href={link.link}>
                                <span className="text-base cursor-pointer">{link.label}</span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Clone Button */}
                <motion.button
                    onClick={handleClone}
                    className="bg-orange-500 text-white text-base font-medium px-4 py-2 rounded-md w-full shadow-md hover:bg-orange-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Clone Menu
                </motion.button>
            </div>

            {/* Right Section */}
            <div className="text-gray-700 text-sm font-medium grid grid-cols-1 gap-4 border-l pl-4 justify-items-center">
                {menuItemsGrid.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center space-x-2 text-base font-medium"
                    >
                        <Link href={item.link}>
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <span className="text-3xl text-blue-500">{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );

    return (
        <>
            {renderMenu(0)}
            {clones.map((cloneKey) => renderMenu(cloneKey))}
        </>
    );
}
