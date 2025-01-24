"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import UserProfileCard from "./UserProfileCard";
import { signOut, useSession } from "next-auth/react";

const MobileMenu = ({ onClose }: { onClose: () => void }) => {

    const handleLogOut = () => {
        signOut({
            redirect: true,
            callbackUrl: "/", // Redirect to the home page or login page
        });
    };

    const { data: session } = useSession();
    const menuItems = [
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737719914/Sponsors_ogwoiu.gif",
            label: "Sponsors",
            link: "/sponsors",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737719970/vip_mw97x5.gif",
            label: "VIP",
            link: "/vip",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737720124/leaderboard_dch30e.gif",
            label: "Leaderboard",
            badge: "Win",
            link: "/leaderboard",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737720630/download_u6pemj.gif",
            label: "Download",
            link: "/download",
        },
    ];

    const mainMenu = [
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737720689/home_o01z9m.gif",
            label: "Home",
            link: "/",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737720788/language_gqnpf6.gif",
            label: "Language",
            link: "/language",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737720840/promotion_wyxaws.gif",
            label: "Promotion",
            link: "/promotion",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737720920/Sports_fh9dxo.gif",
            label: "Sports",
            link: "/sports",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737720994/E-Sports_n95dne.gif",
            label: "E-Sports",
            link: "/esports",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737721056/Casino_xyutyp.gif",
            label: "Casino",
            link: "/casino",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737721119/Slots_k4exgh.gif",
            label: "Slots",
            badge: "2",
            link: "/slots",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737721176/Fishing_hzb23p.gif",
            label: "Fishing",
            badge: "1",
            link: "/fishing",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737721232/4D_x0yn2w.gif",
            label: "4D",
            link: "/4d",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737721280/Lottery_ffi9q6.gif",
            label: "Lottery",
            link: "/lottery",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737721355/Fast_Games_ydygzw.gif",
            label: "Fast Games",
            link: "/fast-games",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737721404/lucky-wheel_mi8agp.gif",
            label: "Lucky Wheel",
            link: "/lucky-wheel",
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737721448/More_nondcq.gif",
            label: "More",
            link: "/more",
        },
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

                {/* User Profile Card */}
                {session ? <UserProfileCard /> : ""}



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
                                    <img
                                        src={item.icon}
                                        alt={item.label}
                                        className="w-14 h-14"
                                    />
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
                                    <img
                                        src={item.icon}
                                        alt={item.label}
                                        className="w-12 h-12"
                                    />
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
                <br />
                <button
                    className="block w-full bg-blue-500 text-white text-center py-2 rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-all duration-300 ease-in-out"
                    onClick={handleLogOut}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center"
                    >
                        Log Out
                    </motion.div>
                </button>
            </div>
        </motion.div>
    );
};

export default MobileMenu;
