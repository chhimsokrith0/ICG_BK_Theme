"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ESportsTab = () => {
    const t = useTranslations("E-sports.EsportsTab");
    const router = useRouter();
    const pathname = usePathname();

    const TabsList = t.raw('tabs');
    const tabs = TabsList.map((tab: any) => ({
        id: tab.id,
        label: tab.label,
        icon: tab.icon,
        tag: tab.tag,
        link: tab.link,
    }));

    const [activeTab, setActiveTab] = useState<number | null>(null);

    useEffect(() => {
        // Update the active tab dynamically based on the current route
        const currentTab = tabs.find((tab: any) => pathname?.includes(tab.link));
        setActiveTab(currentTab ? currentTab.id : null);
    }, [pathname, tabs]);

    const handleTabClick = (tab: typeof tabs[0]) => {
        setActiveTab(tab.id);
        router.push(tab.link); // Navigate to the respective route
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-[#141539] py-4 rounded-full shadow-lg px-6 max-w-[1400px] mx-auto"
        >
            <div className="flex space-x-4 justify-last">
                {tabs.map((tab: any) => (
                    <motion.button
                        key={tab.id}
                        onClick={() => handleTabClick(tab)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all ${
                            activeTab === tab.id
                                ? "border border-orange-500 text-orange-500 bg-white shadow-lg"
                                : "bg-[#23244D] text-gray-300 hover:text-orange-500 hover:border-orange-500 hover:bg-[#2E2F66]"
                        }`}
                        whileTap={{ scale: 0.95 }} // Slight shrink effect when clicked
                        whileHover={{ scale: 1.05 }} // Slight enlarge effect when hovered
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: tab.id * 0.1 }}
                    >
                        <img src={tab.icon} alt={tab.label} className="w-6 h-6" />
                        <span>{tab.label}</span>
                        {tab.tag && (
                            <motion.span
                                className={`text-xs font-bold px-2 py-1 rounded-full ${
                                    tab.tag === "New"
                                        ? "bg-red-500 text-white"
                                        : "bg-orange-500 text-white"
                                }`}
                                whileHover={{ scale: 1.1 }}
                            >
                                {tab.tag}
                            </motion.span>
                        )}
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

export default ESportsTab;
