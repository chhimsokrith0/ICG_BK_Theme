"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
const HeaderTabs = () => {
    const t = useTranslations("LiveCasino.HeaderTabs");



    const TabList = t.raw("tabs");
    const tabs = TabList.map((tab: any) => ({
        id: tab.id,
        label: tab.label,
        active: tab.active,
    }));
    
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
    };

    return (
        <div className="flex space-x-4 px-4 py-2 max-w-[1400px] mx-auto">
            {tabs.map((tab: any) => (
                <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`px-4 py-2 rounded-full font-medium transition ${
                        activeTab === tab.id
                            ? "bg-orange-500 text-white"
                            : "text-gray-500 hover:text-orange-500"
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default HeaderTabs;
