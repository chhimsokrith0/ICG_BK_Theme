'use client'
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const faqs = [
    {
        category: "General",
        questions: [
            "Why join BK8.com?",
            "Currencies accepted by BK8",
            "How to access BK8 mobile version site?",
        ],
    },
    {
        category: "My Account",
        questions: ["How to create an account?", "How to reset my password?"],
    },
    // Add more categories here
];

const InfoCentre = () => {
    const [activeCategory, setActiveCategory] = useState("General");
    const [openQuestion, setOpenQuestion] = useState(null);

    const handleToggleQuestion = (index: any) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className="p-6 container mx-auto">
            <div className="border-b pb-2 flex space-x-6 text-gray-600 text-sm">
                <span className="font-bold text-black border-b-2 border-orange-500 pb-1">FAQ</span>
                <span>Rules & Regulations</span>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>

            <div className="flex space-x-4 my-4">
                {faqs.map((faq) => (
                    <button
                        key={faq.category}
                        className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${activeCategory === faq.category
                            ? "bg-orange-500 text-white"
                            : "bg-gray-200 text-gray-700"
                            }`}
                        onClick={() => setActiveCategory(faq.category)}
                    >
                        {faq.category}
                    </button>
                ))}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg">
                {faqs
                    .find((faq) => faq.category === activeCategory)
                    ?.questions.map((question, index) => (
                        <div
                            key={index}
                            className="border-b last:border-0"
                        >
                            <button
                                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
                                onClick={() => handleToggleQuestion(index)}
                            >
                                {question}
                                <span>
                                    {openQuestion === index ? <FaChevronDown /> : <FaChevronRight />}
                                </span>
                            </button>
                            {openQuestion === index && (
                                <div className="px-4 py-3 bg-white text-gray-600">
                                    This is the answer to the question. Replace this with actual content.
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default InfoCentre;
