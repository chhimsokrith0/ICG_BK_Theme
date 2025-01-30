import React from "react";

const features = [
    {
        letter: "F",
        title: "Fast",
        description:
            "BK8 has one of the fastest transaction processes. Transactions are completed within 15 minutes or less, as we continuously work to decrease wait times and increase fun.",
    },
    {
        letter: "I",
        title: "Innovative",
        description:
            "Our products are among the newest and most exciting. We continuously enhance and update our website to ensure a seamless and feature-rich gaming experience.",
    },
    {
        letter: "R",
        title: "Rewarding",
        description:
            "We make sure our players always get something back. With the best rebates and rewards, we appreciate your trust in BK8 as your go-to entertainment provider.",
    },
    {
        letter: "S",
        title: "Secure",
        description:
            "Security is our top priority. We implement top-tier protection and encryption to keep your personal information safe while you enjoy your favorite games.",
    },
    {
        letter: "T",
        title: "Transparent",
        description:
            "Honesty is our policy. We maintain a clear and fair gaming environment with no hidden fees or misleading terms – just a straightforward experience.",
    },
];

const BuiltToEntertain: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16 bg-gray-50 rounded-lg shadow-lg">
            {/* Title Section */}
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Built To Entertain</h2>
                <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                    Our members' entertainment is our top priority. It’s simple, really.
                </p>
                <p className="text-gray-600 text-md max-w-3xl mx-auto mt-2 leading-relaxed">
                    We want our members to have endless fun here at BK8. To do so, we provide only the best by following a simple guideline – putting our members 
                    <strong className="text-blue-500"> F.I.R.S.T</strong>.
                </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                {features.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-md transition-all duration-300"
                    >
                        {/* Gradient Letter Circle */}
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white text-2xl font-bold shadow-md">
                            {item.letter}
                        </div>

                        {/* Feature Content */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 text-md mt-1 leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuiltToEntertain;
