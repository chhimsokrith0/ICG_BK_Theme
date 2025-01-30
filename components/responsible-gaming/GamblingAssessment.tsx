import React from "react";

const supportLinks = [
    { url: "https://www.ncpgambling.org", text: "National Council on Problem Gambling" },
    { url: "http://www.wecare.org.sg", text: "We Care" },
    { url: "https://www.solaceasia.org", text: "Solace Asia" },
    { url: "https://www.miraclesasia.com", text: "Miracles Asia" },
    { url: "https://sereneretreat.com.my", text: "Serene Retreat Malaysia" },
    { url: "http://www.kayarehab.com", text: "Kaya Rehab" },
    { url: "https://www.helpguide.org", text: "Help Guide" },
];

const questions = [
    "Do you gamble for longer than you intend to?",
    "Do you lose track of time when you are gambling?",
    "Do you find it difficult to stop gambling after a loss?",
    "Do you devote time to gambling when you really should be doing something else?",
    "Does your gambling cause any financial problems to you or your household?",
    "Does your gambling cause you any health problems, including stress or anxiety?",
    "Do you become restless if you are not gambling?",
    "Do you feel that you might have a gambling problem?",
];

const GamblingAssessment = () => {
    return (
        <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row gap-10">
            {/* Left Section - Info & Resources */}
            <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Do you have a gambling problem?
                </h2>
                <p className="text-gray-700 mt-4">
                    Find out through this quick and easy test. It only takes a few minutes, and it's free and anonymous.
                </p>
                <p className="text-gray-700 mt-4">
                    Did you answer "yes" to any of the questions?
                </p>
                <p className="text-gray-700 mt-4">
                    If so, we recommend that you seek assistance immediately from the available support and resources. 
                    They will welcome you with open arms and are ready to help you get back on your feet.
                </p>

                {/* Support Links */}
                <div className="mt-4">
                    {supportLinks.map((link, index) => (
                        <p key={index} className="text-blue-600 hover:text-blue-800 transition">
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.text}
                            </a>
                        </p>
                    ))}
                </div>
            </div>

            {/* Right Section - Gambling Problem Questions */}
            <div className="md:w-1/2">
                {questions.map((question, index) => (
                    <div key={index} className={`py-3 border-gray-300 ${index < questions.length - 1 ? "border-b" : ""}`}>
                        <p className="text-gray-900 font-medium">{question}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamblingAssessment;
