import React from "react";

const gamingTips = [
    {
        icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738148385/success_zmfnue.svg",
        title: "Understand the game before betting",
        description:
            "Although you might already know how to play a specific game, different platforms and providers may have different odds and rules.",
    },
    {
        icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738148385/success_zmfnue.svg",
        title: "Utilize betting tools",
        description:
            "BK8 has integrated one of the most popular sports betting features, the Cash Out feature into its sportsbooks.",
    },
    {
        icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1738148385/success_zmfnue.svg",
        title: "Make use of promotions & seasonal bonuses",
        description:
            "Most gaming platforms offer bonuses and promotions. This could be useful for online gaming beginners to test their skills before investing too much.",
    },
];

const OnlineGamingGuide = () => {
    return (
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-36 text-center">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900">Online Gaming Guide</h2>
            <p className="text-gray-600 text-lg mt-4">
                People often ask for gambling tips, hoping to find a method that will guarantee big wins. Well, sorry to break your bubble — there's no such tip. However, we have a few tips that can help you gamble responsibly:
            </p>

            {/* Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {gamingTips.map((tip, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        {/* Icon */}
                        <img src={tip.icon} alt={tip.title} className="w-12 h-12" />
                        
                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-900 mt-3">
                            {tip.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mt-2">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnlineGamingGuide;
