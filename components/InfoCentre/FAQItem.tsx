import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

interface FAQItemProps {
    index: number;
    question: string;
    answer: string;
    openQuestion: number | null;
    handleToggleQuestion: (index: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ index, question, answer, openQuestion, handleToggleQuestion }) => {
    return (
        <div className="border-b last:border-0">
            <button
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
                onClick={() => handleToggleQuestion(index)}
            >
                {question}
                <span>{openQuestion === index ? <FaChevronDown /> : <FaChevronRight />}</span>
            </button>
            {openQuestion === index && (
                <div className="px-4 py-3 bg-white text-gray-600">
                    <ul className="list-disc list-inside">
                        <li>{answer}</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FAQItem;
