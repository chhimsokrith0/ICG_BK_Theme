import React, { useState } from "react";
import FAQItem from "./FAQItem";
import { faqs } from "./faqData";

interface FAQListProps {
    activeCategory: string;
}

const FAQList: React.FC<FAQListProps> = ({ activeCategory }) => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);

    const handleToggleQuestion = (index: number) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const selectedFAQ = faqs.find((faq) => faq.category === activeCategory);

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg">
            {selectedFAQ?.questions.length ? (
                selectedFAQ.questions.map((item, index) => (
                    <FAQItem
                        key={index}
                        index={index}
                        question={item.question}
                        answer={item.answer}
                        openQuestion={openQuestion}
                        handleToggleQuestion={handleToggleQuestion}
                    />
                ))
            ) : (
                <p className="text-gray-500 text-center">No questions available for this category.</p>
            )}
        </div>
    );
};

export default FAQList;
