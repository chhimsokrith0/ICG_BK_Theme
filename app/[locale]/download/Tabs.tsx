"use client";

import React from "react";
import { motion } from "framer-motion";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ["BK8 App", "Android Games", "iOS Games"];

  return (
    <div className="flex items-center space-x-6 relative">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative px-4 py-2 text-sm font-medium transition-all ${
            activeTab === tab
              ? "text-orange-500 font-semibold"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <motion.div
              layoutId="active-tab-indicator"
              className="absolute inset-x-0 -bottom-1 h-[2px] bg-orange-500 rounded-full"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
