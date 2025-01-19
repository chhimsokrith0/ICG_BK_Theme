'use client';

import { useState } from "react";
import TabContent from "./TabContent";
import { motion } from "framer-motion";

const tabs = [
    { name: "New member", id: "new_member" },
    { name: "Slots", id: "slots" },
    { name: "Casino", id: "casino" },
    { name: "Esport", id: "esport" },
    { name: "Sports", id: "sports" },
    { name: "Fishing", id: "fishing" },
    { name: "Vip", id: "vip" },
    { name: "Lottery", id: "lottery" },
    { name: "Special", id: "special" },
    { name: "Crypto", id: "crypto" },
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("new_member");

    return (
        <div className="max-w-[1400px] mx-auto overflow-x-auto scrollbar-hide">
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex space-x-4 overflow-x-auto relative">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative text-gray-500 font-medium whitespace-nowrap ${activeTab === tab.id
                                    ? "text-black font-semibold"
                                    : "hover:text-gray-700"
                                } transition-all`}
                        >
                            {tab.name}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-orange-500 rounded-full"
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 20,
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>


            {/* Tab Content */}
            <div className="mt-6">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <TabContent activeTab={activeTab} />
                </motion.div>
            </div>
        </div>
    );
};

export default Tabs;
