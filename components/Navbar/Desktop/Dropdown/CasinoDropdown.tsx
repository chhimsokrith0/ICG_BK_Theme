

import React from "react";

export default function CasinoDropdown() {
    const sportsOptions = [
        { name: "ESPRTS", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173709/ug_qtn9ic.png", badge: "Hot" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173708/submenu-casino-pp_dwkb7x.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173700/evo_b0vqsw.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173678/dg_ig2wy6.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173660/casino-wm_w7ltn1.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173655/casino-we_d1b65g.png", badge: "New" },

        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173654/casino-w_qpm7zj.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173653/casino-vc_reuquc.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173652/casino-mg_px4edh.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173652/casino-sa_yliyyi.png", badge: "New" },

        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173651/casino-gp_wj4hdk.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173652/casino-ag_vuccon.png", badge: "New" },
        { name: "TFGAMAING", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173651/allbet_tniw6e.png", badge: "New" },
    ];

    return (
        <div className="absolute top-0 left-[-19.3%] w-full bg-blue-900 bg-opacity-90 shadow-lg py-6 px-8 justify-items-center">
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
