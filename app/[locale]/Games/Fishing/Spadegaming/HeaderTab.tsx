"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";



const HeaderTabs = () => {
    const t = useTranslations("Fishing.Spadegaming.HeaderTabs");

    const tabsList = t.raw("tabs");

    const tabs = tabsList.map((tab: any) => ({
        id: tab.id,
        label: tab.label,
        active: tab.active,
    }));
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
    };

    return (
        <div className="flex items-center justify-between px-4 py-2 max-w-[1400px] mx-auto">
            {/* Tabs Section */}
            <div className="flex space-x-4">
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

            {/* Right Section: Sort and Search */}
            <div className="flex items-center space-x-4">
                {/* Sort Dropdown */}
                <div className="relative">
                    <select
                        className="border border-gray-300 rounded-full px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        <option value="popularity">{t("sortOptions.popularity")}</option>
                        <option value="newest">{t("sortOptions.newest")}</option>
                        <option value="featured">{t("sortOptions.featured")}</option>
                    </select>
                </div>

                {/* Search Input */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder={t("searchPlaceholder")}
                        className="border border-gray-300 rounded-full px-4 py-2 pr-10 text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <i className="absolute right-3 top-2 text-gray-500 fas fa-search"></i>
                </div>
            </div>
        </div>
    );
};

export default HeaderTabs;
