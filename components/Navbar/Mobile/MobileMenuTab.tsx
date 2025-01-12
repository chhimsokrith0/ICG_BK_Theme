"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SportsContent from "./Tab/SportsContent";

const MobileMenuTab = () => {
    const menuItems = [
        { id: 0, name: "Sports", code: "S", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590705/sports_nioesv.svg", content: <SportsContent /> },
        { id: 1, name: "E-Sports", code: "ES", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590703/esports_lbqv98.svg", content: <p>No content available for E-Sports.</p> },
        { id: 2, name: "Casino", code: "C", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590703/casino_nkeejm.svg", content: <p>No content available for Casino.</p> },
        { id: 3, name: "Slots", code: "SL", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590705/slots_rppgdx.svg", content: <p>No content available for Slots.</p> },
        { id: 4, name: "Fishing", code: "F", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590703/fishing_efjefg.svg", content: <p>No content available for Fishing.</p> },
        { id: 5, name: "4D", code: "FD", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736590703/four-d_s01yx9.svg", content: <p>No content available for 4D.</p> },
    ];

    const [activeItem, setActiveItem] = useState(0); // Default active item is "Sports"

    const handleItemClick = (id: number) => {
        setActiveItem(id);
    };

    return (
        <div className="p-4">
            {/* Tabs */}
            <div className="mobile-menu-tab flex items-center space-x-4 overflow-x-scroll bg-gray-100 rounded-full shadow-md px-4 py-2 scrollbar-hide">
                {menuItems.map((item) => (
                    <motion.div
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`menu-item relative flex items-center space-x-2 px-4 py-2 rounded-full cursor-pointer whitespace-nowrap ${activeItem === item.id ? "text-white" : "text-gray-600"
                            }`}
                        initial={{ scale: 1 }}
                        animate={activeItem === item.id ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeItem === item.id && (
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                                layoutId="active-background"
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                }}
                            />
                        )}
                        <motion.img
                            src={item.icon}
                            alt={item.name}
                            className={`w-5 h-5 z-10 ${activeItem === item.id ? "opacity-100" : "opacity-50"
                                }`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.p
                            className="standard-SmallsubContent-font-size text-sm z-10 pr-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {item.name}
                        </motion.p>
                    </motion.div>
                ))}
            </div>

            {/* Content Section */}
            <div className="mt-6">
                {menuItems[activeItem]?.content || (
                    <div className="text-gray-600 text-center">
                        <p>No content available.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileMenuTab;
