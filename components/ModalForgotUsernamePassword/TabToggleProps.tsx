import React from "react";

interface TabToggleProps {
    isMobileSelected: boolean;
    setIsMobileSelected: (value: boolean) => void;
}

const TabToggle: React.FC<TabToggleProps> = ({ isMobileSelected, setIsMobileSelected }) => {
    return (
        <div className="flex justify-center gap-4 mb-6">
            <button
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                    isMobileSelected ? "bg-orange-500 text-white shadow-md" : "bg-gray-100 text-gray-800 border border-gray-300"
                }`}
                onClick={() => setIsMobileSelected(true)}
            >
                Mobile
            </button>
            <button
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                    !isMobileSelected ? "bg-orange-500 text-white shadow-md" : "bg-gray-100 text-gray-800 border border-gray-300"
                }`}
                onClick={() => setIsMobileSelected(false)}
            >
                Email
            </button>
        </div>
    );
};

export default TabToggle;
