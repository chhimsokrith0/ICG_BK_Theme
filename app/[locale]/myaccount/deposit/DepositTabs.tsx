'use client';

import React from "react";
import { motion } from "framer-motion";

const DepositTabs = ({
    selectedTab,
    setSelectedTab,
}: {
    selectedTab: string;
    setSelectedTab: (tab: string) => void;
}) => {
    const tabs = [
        { name: "Normal Deposit", time: "5 minutes" },
        { name: "Fast Deposit", time: "1 minute" },
        { name: "Crypto Deposit", time: "15 minutes" },
    ];

    const indicatorVariants = {
        hidden: { opacity: 0, width: 0 },
        visible: { opacity: 1, width: "100%", transition: { duration: 0.3 } },
    };

    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
                <motion.button
                    key={tab.name}
                    className={`relative flex-1 flex flex-col items-center justify-center py-2 px-4 rounded-md transition-all duration-300 ${
                        selectedTab === tab.name
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold shadow-lg"
                            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
                    onClick={() => setSelectedTab(tab.name)}
                    initial="initial"
                    animate={selectedTab === tab.name ? "active" : "inactive"}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="flex items-center space-x-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-4 h-4 ${
                                selectedTab === tab.name ? "text-white" : "text-gray-600"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 50 50"
                        >
                            <circle cx="25" cy="25" r="23" stroke="currentColor" strokeWidth="2" fill="none" />
                            <line x1="25" y1="13" x2="25" y2="25" stroke="currentColor" strokeWidth="2" />
                            <line x1="25" y1="25" x2="33" y2="29" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <span className="text-sm whitespace-nowrap">{tab.name}</span>
                    </div>
                    <span className="text-xs font-normal whitespace-nowrap">{tab.time}</span>
                    {selectedTab === tab.name && (
                        <motion.div
                            className="absolute bottom-0 left-0 h-1 bg-white rounded-t-md"
                            variants={indicatorVariants}
                            initial="hidden"
                            animate="visible"
                        />
                    )}
                </motion.button>
            ))}
        </div>
    );
};

export default DepositTabs;
