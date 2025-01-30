import React, { useState } from "react";

const tabs = ["Our Mission", "Built To Entertain", "BK8 Story", "Our Providers"];

const TabNavigation: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Our Mission");

    return (
        <div className="flex space-x-6 p-4">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                        activeTab === tab
                            ? "bg-orange-500 text-white"
                            : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default TabNavigation;
