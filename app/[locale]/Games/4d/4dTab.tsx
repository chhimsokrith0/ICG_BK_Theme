"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
interface Tab {
    id: number;
    label: string;
    icon: string;
    tag: string;
    link: string;
}
const Tab4d = () => {
    const t = useTranslations("4d.Tab4d");
    const router = useRouter();
    const pathname = usePathname();

    const [activeTab, setActiveTab] = useState<number | null>(null);


    const tabs: Tab[] = t.raw("tabs");


    useEffect(() => {
        const currentTab = tabs.find((tab) => pathname?.includes(tab.link));
        setActiveTab(currentTab ? currentTab.id : null);
    }, [pathname]);

    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab.id);
        router.push(tab.link);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gray-100 py-4 rounded-lg shadow-md px-4 max-w-[1400px] mx-auto"
        >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                {tabs.map((tab) => (
                    <motion.button
                        key={tab.id}
                        onClick={() => handleTabClick(tab)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition ${
                            activeTab === tab.id
                                ? "border border-orange-500 text-orange-500 bg-white shadow"
                                : "bg-white text-gray-500 hover:text-orange-500 hover:border-orange-500"
                        }`}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
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

export default Tab4d;
