"use client";

import React from "react";

const Casino = () => {
    const cards = [
        {
            title: "TFGAMING",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173651/allbet_tniw6e.png", // Replace with your image URL
            label: "Hot",
            labelClass: "bg-orange-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173651/casino-gp_wj4hdk.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },



        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173652/casino-ag_vuccon.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173652/casino-sa_yliyyi.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173652/casino-mg_px4edh.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173653/casino-vc_reuquc.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173654/casino-w_qpm7zj.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },


        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173655/casino-we_d1b65g.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173660/casino-wm_w7ltn1.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173678/dg_ig2wy6.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },

        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173700/evo_b0vqsw.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173708/submenu-casino-pp_dwkb7x.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736173709/ug_qtn9ic.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },

    ];

    return (
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-100 rounded-lg">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="relative w-full rounded-lg overflow-hidden"
                >
                    {/* Badge */}
                    <div
                        className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded-full ${card.labelClass}`}
                    >
                        {card.label}
                    </div>
                    {/* Image */}
                    <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Title */}
                    <div className="absolute bottom-2 left-2 right-2 bg-white bg-opacity-90 py-1 px-2 rounded-md shadow-sm">
                        <p className="text-center text-sm font-medium text-gray-800">
                            {card.title}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Casino;
