'use client';
import { useState } from "react";
import TabContent from "./TabContent";

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
        <div className="max-w-[1400px] mx-auto">
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex space-x-4 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`text-gray-500 font-medium ${
                                activeTab === tab.id
                                    ? "text-black border-b-2 border-orange-500"
                                    : "hover:text-gray-700"
                            } transition-all`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                <TabContent activeTab={activeTab} />
            </div>
        </div>
    );
};

export default Tabs;
