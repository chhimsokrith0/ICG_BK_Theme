import React from "react";

export default function FourDDropdown() {
    const sportsOptions = [
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736481725/4d-gdl_vbtf9e.png", badge: "Hot" },
    ];

    return (
        <div className="absolute top-0 left-[-30.5%] w-full bg-blue-900 bg-opacity-90 shadow-lg py-6 px-8 justify-items-center">
            <div className="grid grid-cols-6 gap-6">
                {sportsOptions.map((option, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center space-y-3 text-white hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={option.image}
                            alt={option.name}
                            className="w-30 h-32 rounded-lg shadow-lg object-cover"
                        />
                        <div className="font-medium text-white text-center">{option.name}</div>
                        {option.badge && (
                            <span
                                className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full ${
                                    option.badge === "New"
                                        ? "bg-red-500 text-white"
                                        : "bg-yellow-500 text-black"
                                }`}
                            >
                                {option.badge}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
