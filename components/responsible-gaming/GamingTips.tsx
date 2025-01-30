import React from "react";

const tips = [
    {
        category: "Tips & Advice",
        color: "text-green-700 bg-green-100",
        title: "It's just a game",
        description: "Understand that gambling is a form of entertainment and know when to detach from it. Play without expecting too much from the game. Gambling is not a way to become rich and can never replace a steady income from your career. Play for fun, not to make money.",
    },
    {
        category: "Time",
        color: "text-red-700 bg-red-100",
        title: "Know when to leave",
        description: "You are on a winning streak and you are not ready to break that streak, or you are on a losing streak and you keep playing in hopes to cover the losses. Always be ready to walk away and set win/loss limits before playing.",
    },
    {
        category: "Finance",
        color: "text-blue-700 bg-blue-100",
        title: "Manage your gaming bankroll",
        description: "Never bet with money meant for necessary living expenses. Set a gambling budget and ensure you can afford to lose before playing.",
    },
    {
        category: "Relationships",
        color: "text-orange-700 bg-orange-100",
        title: "Better late than never",
        description: "It is never too late to ask for help. If you feel gambling is affecting your relationships, seek help from trusted friends, family, or support groups.",
    },
    {
        category: "Accountability",
        color: "text-purple-700 bg-purple-100",
        title: "Embrace your loss",
        description: "Gambling has two outcomes: winning or losing. Always gamble knowing there is a chance of loss. Learn from it and focus on responsible play.",
    },
    {
        category: "Accountability",
        color: "text-purple-700 bg-purple-100",
        title: "Don't (over)drink and bet",
        description: "Gambling under the influence can lead to reckless decisions. Stay in control and never let emotions or alcohol affect your gameplay.",
    },
    {
        category: "Support",
        color: "text-yellow-700 bg-yellow-100",
        title: "There is no shame in seeking help",
        description: "If you feel you have a gambling problem, seek support early on. Joining a responsible gambling group can provide guidance and help you maintain control.",
    },
];

const GamingTips = () => {
    return (
        <div className="bg-white py-12 px-6 rounded-xl shadow-lg max-w-8xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 text-center">
                Responsible Gaming Tips
            </h2>

            {/* Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-6xl mx-auto">
                {tips.map((tip, index) => (
                    <div key={index} className="border-b pb-4">
                        {/* Category Tag */}
                        <div className={`inline-block px-3 py-1 text-xs font-bold rounded-md ${tip.color}`}>
                            {tip.category}
                        </div>

                        {/* Tip Title */}
                        <h3 className="text-lg font-semibold text-gray-900 mt-2">{tip.title}</h3>

                        {/* Tip Description */}
                        <p className="text-gray-600 mt-2">{tip.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GamingTips;
