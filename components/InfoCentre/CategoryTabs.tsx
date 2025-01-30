import React from "react";
import { faqs } from "./faqData";

interface CategoryTabsProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, setActiveCategory }) => {
    return (
        <div className="flex space-x-4 my-4">
            {faqs.map((faq) => (
                <button
                    key={faq.category}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                        activeCategory === faq.category ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => setActiveCategory(faq.category)}
                >
                    {faq.category}
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;
