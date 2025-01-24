

import React from "react";

export default function FishingDropdown() {
    const sportsOptions = [
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736481309/fishing-ygr_e8z6bt.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736481309/fishing-fs_rsufvf.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736481309/fishing-jl_ktjqar.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736481309/fishing-r88_ezxpwb.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736481308/fishing-fc_duw8dt.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736481308/fishing-sg_ut7ere.png", badge: "New" },

        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736481308/fishing-cq9_cdtgnm.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736481308/fishing-dragoon-soft_uzabnu.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736481308/fishing-jdb_hmfqa6.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736481308/fishing-vp_xqswfh.png", badge: "New" },
    ];

    return (
        <div className="absolute top-0 left-0 w-full bg-blue-900 bg-opacity-90 shadow-lg py-6 px-8 justify-items-center">
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
