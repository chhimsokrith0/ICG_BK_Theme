'use client';

import { useState } from "react";
import TabContent from "./TabContent";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface Tab {
    name: string;
    id: string;
}

const Tabs = () => {
    const t = useTranslations("promotion.Tabs");
    const [activeTab, setActiveTab] = useState(t('tabs.0.id'));

    const tabs: Tab[] = t.raw("tabs");

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
