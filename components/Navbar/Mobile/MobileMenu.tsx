"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
    const menuItems = [
        { icon: "💰", label: "Sponsors", link: "/sponsors" },
        { icon: "👑", label: "VIP", link: "/vip" },
        { icon: "🏆", label: "Leaderboard", badge: "Win", link: "/leaderboard" },
        { icon: "⬇️", label: "Download", link: "/download" },
    ];

    const mainMenu = [
        { icon: "🏠", label: "Home", link: "/" },
        {
            icon: (
                <motion.img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/th_byfrmv.png"
                    alt="Language"
                    className="w-8 h-8 rounded-full"
                    whileHover={{ scale: 1.2 }} // Animation on hover
                    transition={{ type: "spring", stiffness: 300 }}
                />
            ),
            label: "Language",
            link: "/language",
        },
        { icon: "🎁", label: "Promotion", link: "/promotion" },
        { icon: "⚽", label: "Sports", link: "/sports" },
        { icon: "🎮", label: "E-Sports", link: "/esports" },
        { icon: "🎰", label: "Casino", link: "/casino" },
        { icon: "🎲", label: "Slots", badge: "2", link: "/slots" },
        { icon: "🎣", label: "Fishing", badge: "1", link: "/fishing" },
        { icon: "📅", label: "4D", link: "/4d" },
        { icon: "🎟️", label: "Lottery", link: "/lottery" },
        { icon: "⚡", label: "Fast Games", link: "/fast-games" },
        { icon: "🎡", label: "Lucky Wheel", link: "/lucky-wheel" },
        { icon: "🔵", label: "More", link: "/more" },
    ];

    // Add `no-scroll` to body when the menu is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    // Handle outside click to close the menu
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!(event.target as HTMLElement).closest(".mobile-menu")) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex"
        >
            {/* Mobile Menu */}
            <div className="mobile-menu bg-white shadow-md w-80 h-full overflow-auto p-4 relative">
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 text-2xl"
                        aria-label="Close Menu"
                    >
                        ✕
                    </button>
                </div>

                {/* Top Section */}
                <div className="top-menu space-y-4 mb-6">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="block"
                            onClick={onClose} // Close menu on link click
                        >
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <motion.div
                                    className="flex items-center space-x-3"
                                    whileHover={{ scale: 1.1 }} // Animation on hover
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <p className="text-gray-800 font-medium">{item.label}</p>
                                </motion.div>
                                {item.badge && (
                                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                                <span className="text-gray-500 text-lg">›</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Main Menu */}
                <div className="main-menu grid grid-cols-3 gap-4 text-center">
                    {mainMenu.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="block"
                            onClick={onClose} // Close menu on link click
                        >
                            <motion.div
                                className="flex flex-col items-center space-y-2"
                                whileHover={{ scale: 1.1 }} // Animation on hover
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="relative">
                                    <motion.span
                                        whileHover={{ rotate: 15 }} // Add rotation effect on hover
                                        transition={{ duration: 0.3 }}
                                        className="text-3xl"
                                    >
                                        {item.icon}
                                    </motion.span>
                                    {item.badge && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-700 text-sm">{item.label}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default MobileMenu;
