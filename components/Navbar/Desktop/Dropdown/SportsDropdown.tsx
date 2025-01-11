

import React from "react";

export default function SportsDropdown() {
    const sportsOptions = [
        { name: "BK8 Sports", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736166007/sports1_xsnjcx.png", badge: "New" },
        { name: "Saba Sports", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736166007/sports2_pld0ht.png" },
        { name: "CMD368", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736166006/sports3_czrtsc.png", badge: "Hot" },
        { name: "SBOBET", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736166008/sports4_vepapb.png" },
    ];

    return (
        <div className="absolute w-screen top-[0px] left-[-268px] w-full bg-blue-900 bg-opacity-90 shadow-lg py-6 px-8  justify-items-center">
            <div className="grid grid-cols-4 gap-6">
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
                                className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full ${option.badge === "New"
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
