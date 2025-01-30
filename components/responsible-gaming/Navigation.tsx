import React from "react";

const Navigation = () => {
    return (
        <div className="py-4">
            <div className="container mx-auto flex items-center space-x-8">
                {/* Active Button */}
                <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-orange-600 transition duration-300">
                    BK8 Play
                </button>

                {/* Menu Items */}
                <nav className="flex space-x-6 text-gray-500 text-sm font-medium">
                    <a href="#" className="hover:text-gray-900 transition duration-200">Gaming Tips</a>
                    <a href="#" className="hover:text-gray-900 transition duration-200">Quiz & Support</a>
                    <a href="#" className="hover:text-gray-900 transition duration-200">Guide</a>
                    <a href="#" className="hover:text-gray-900 transition duration-200">Cash Out Tool</a>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;
