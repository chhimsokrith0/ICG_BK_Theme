"use client";

import React, { useState } from "react";
import Tabs from "./Tabs";
import TabContent from "./TabContent";

const Page: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("BK8 App");

    return (
        <div
            className="flex flex-col items-center justify-center"
            style={{
                backgroundColor: "#f0f1f3", // Light gray background
            }}
        >
            {/* Tabs Section */}
            <div className="p-4 rounded-lg w-full max-w-4xl">
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabContent activeTab={activeTab} />
            </div>
        </div>
    );
};

export default Page;
