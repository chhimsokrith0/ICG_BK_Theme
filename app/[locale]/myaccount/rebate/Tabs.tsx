'use client';

import React from "react";

interface TabsProps {
    tabs: { name: string }[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className="flex border-b gap-2 border-gray-300 mb-6 overflow-x-auto">
            {tabs.map((tab) => (
                <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`px-4 sm:px-6 py-2 rounded-t-md font-medium whitespace-nowrap ${activeTab === tab.name
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                        }`}
                >
                    {tab.name}
                </button>
            ))}
        </div>
    )
}
export default Tabs;