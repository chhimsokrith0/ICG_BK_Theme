'use client';
import React, { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import FAQList from "./FAQList";

const InfoCentre: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("General");
    const [activeTab, setActiveTab] = useState("FAQ");

    return (
        <div className="p-6 container mx-auto">
            {/* Navigation Tabs */}
            <div className="border-b pb-2 flex space-x-6 text-gray-600 text-sm">
                {["FAQ", "Rules & Regulations", "Terms & Conditions", "Privacy Policy"].map((tab) => (
                    <span
                        key={tab}
                        className={`cursor-pointer ${
                            activeTab === tab ? "font-bold text-black border-b-2 border-orange-500 pb-1" : ""
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </span>
                ))}
            </div>

            {/* FAQ Section */}
            {activeTab === "FAQ" && (
                <>
                    <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                    <FAQList activeCategory={activeCategory} />
                </>
            )}
        </div>
    );
};

export default InfoCentre;
