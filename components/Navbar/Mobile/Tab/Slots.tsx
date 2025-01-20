"use client";

import React from "react";

const Slots = () => {
    const cards = [
        {
            title: "TFGAMING",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174650/funkygames_eclias.png", // Replace with your image URL
            label: "Hot",
            labelClass: "bg-orange-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174650/joker_tpr2kv.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },



        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174650/nextspin_kkapvz.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174651/pg_ayeutv.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174652/pgsoft_wuiway.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174652/pgsoft_wuiway.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174654/sg_zcbwom.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174655/slot-ag_vqs1z8.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174655/slot-ap_fnyt9h.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174656/slot-cq9_dtzqqs.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },



        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174657/slot-dragoon-soft_dx6m6x.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174658/slot-ep_xdnoj2.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174659/slot-exs_hdmbcd.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174660/slot-fc_vcqegj.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174661/slot-fs_akijjt.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174662/slot-gp_gupzie.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174663/slot-hb_cobu6g.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174664/slot-hc_q7hv87.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174665/slot-jdb_sh4xq3.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174667/slot-jili_rllhe6.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174668/slot-mg_le2dsf.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174669/slot-ps_uzvvi2.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174670/slot-r88_rxi8wk.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174671/slot-rg_qzc7sk.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174683/slot-rt_kxytpf.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },
        {
            title: "ESPORTS",
            image:
                "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736174689/slot-sw_lrztyf.png", // Replace with your image URL
            label: "New",
            labelClass: "bg-red-500",
        },

    ];

    return (
        <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-1 bg-gray-100 rounded-lg">
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

export default Slots;
