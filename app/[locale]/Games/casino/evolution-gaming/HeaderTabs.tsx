"use client";

import React, { useState } from "react";

const HeaderTabs = () => {
    const tabs = [
        { id: 1, label: "ALL", active: true },
        { id: 2, label: "Baccarat", active: false },
        { id: 3, label: "Sic Bo", active: false },
        { id: 4, label: "Roulette", active: false },
        { id: 5, label: "Dragon Tiger", active: false },
        { id: 6, label: "Blackjack", active: false },
        { id: 7, label: "Others", active: false },
    ];

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
    };

    return (
        <div className="flex space-x-4 px-4 py-2 max-w-[1400px] mx-auto">
            {tabs.map((tab) => (
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
