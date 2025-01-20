"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SportsContent from "./Tab/SportsContent";
import ESports from "./Tab/E-Sports";
import Casino from "./Tab/Casino";
import Slots from "./Tab/Slots";
import Fishing from "./Tab/Fishing";
import FourD from "./Tab/FourD";

const MobileMenuTab = () => {
    const menuItems = [
        { id: 0, name: "Sports", code: "S", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590705/sports_nioesv.svg", content: <SportsContent /> },
        { id: 1, name: "E-Sports", code: "ES", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590703/esports_lbqv98.svg", content: <ESports /> },
        { id: 2, name: "Casino", code: "C", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590703/casino_nkeejm.svg", content: <Casino /> },
        { id: 3, name: "Slots", code: "SL", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590705/slots_rppgdx.svg", content: <Slots /> },
        { id: 4, name: "Fishing", code: "F", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590703/fishing_efjefg.svg", content: <Fishing /> },
        { id: 5, name: "4D", code: "FD", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590703/four-d_s01yx9.svg", content: <FourD /> },
        { id: 6, name: "Lottery", code: "LT", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590703/four-d_s01yx9.svg", content: <p>Lottery</p>},
        { id: 7, name: "Fast Games", code: "FG", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590703/four-d_s01yx9.svg", content: <p>Fast Games</p>},
    ];

    const [activeItem, setActiveItem] = useState(0); // Default active item is "Sports"

    const handleItemClick = (id: number) => {
        setActiveItem(id);
    };

    return (
        <div className="p-4 bg-gray-50">
            {/* Tabs */}
            <div className="mobile-menu-tab flex items-center space-x-3 sm:space-x-4 overflow-x-auto bg-white rounded-full shadow-lg px-4 py-3 scrollbar-hide">
                {menuItems.map((item) => (
                    <motion.div
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`menu-item relative flex items-center space-x-3 px-5 py-2 rounded-full cursor-pointer whitespace-nowrap transition-all ${activeItem === item.id
                            ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            duration: 0.4,
                            type: "spring",
                            stiffness: 250,
                            damping: 15,
                        }}
                    >
                        <motion.img
                            src={item.icon}
                            alt={item.name}
                            className={`w-4 h-4 transition-opacity ${activeItem === item.id ? "opacity-100" : "opacity-50"
                                }`}
                            initial={{ opacity: 0, rotate: -15 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            whileHover={{ scale: 1.2 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.p
                            className="text-sm font-medium z-10"
                            initial={{ x: -15, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            whileHover={{ x: 2 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                        >
                            {item.name}
                        </motion.p>
                    </motion.div>
                ))}
            </div>


            {/* Content Section */}
            <motion.div
                key={activeItem} // Key to trigger animation on change
                className="mt-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }} // Start with content faded out and slightly below
                animate={{ opacity: 1, y: 0 }} // Fade in and slide to position
                exit={{ opacity: 0, y: -20 }} // Exit animation for smoother transitions
                transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth timing
            >
                {menuItems[activeItem]?.content || (
                    <div className="text-gray-600 text-center">
                        <p>No content available.</p>
                    </div>
                )}
            </motion.div>

        </div>
    );
};

export default MobileMenuTab;
