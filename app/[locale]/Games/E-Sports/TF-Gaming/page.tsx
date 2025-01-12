"use client";

import React from "react";

export default function page() {
    const features = [
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736663245/tfg-icon-1_qd4oqq.png",
            descriptions: ["Unbeatable Odds", "Speedy Settlement"],
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736663251/tfg-icon-2_sbwrsm.png",
            descriptions: [
                "Vastly Experienced",
                "and Skilled",
                "Esports Traders",
            ],
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736663274/tfg-icon-3_vdp25m.png",
            descriptions: ["Extensive Choice of", "Esports Markets"],
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736663277/tfg-icon-4_xk6zfz.png",
            descriptions: [
                "Fast and Stable",
                "System Double",
                "Betting Speed",
            ],
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736663294/tfg-icon-5_xni8zs.png",
            descriptions: [
                "Supports PCs, Mobile",
                "Phones and Tablets",
            ],
        },
        {
            icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736663298/tfg-icon-6_tm6mr9.png",
            descriptions: ["Industry Leading", "Betting Experience"],
        },
    ];

    return (
        <div className="relative bg-[#1A1B41] text-center py-16 px-6 max-w-[1400px] mx-auto">
            {/* Header Section */}
            <div className="mb-10">
                <h1 className="text-5xl font-bold text-white mb-4">TF Gaming</h1>
                <p className="text-xl text-gray-300 mb-4">
                    Unbeatable Odds &amp; Speedy Settlement
                </p>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    TF Gaming is developed by a team of dedicated Esports
                    Developers and Vastly Experienced Bookmakers. Our goal is
                    to offer a Unique and Convenient Esports Platform for All,
                    covering Major and Minor Esports events in the world.
                </p>
                <div className="mt-8">
                    <button className="bg-orange-500 text-white font-semibold text-xl py-3 px-12 rounded-full hover:bg-orange-600 transition duration-300">
                        Play Now
                    </button>
                </div>
            </div>

            {/* Features Grid */}
            <div className="relative">
                {/* Background Image */}
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736663217/esport-tfg-features-bg_uv9dcb.png"
                    alt=""
                    className="w-full h-auto"
                />

                {/* Features Grid */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-[1200px] mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                                style={{
                                    background: "linear-gradient(180deg,rgb(195, 5, 243) 0%,rgb(84, 22, 85) 100%)", // Top-to-bottom gradient
                                }}
                            >
                                <img
                                    src={feature.icon}
                                    alt={`Feature ${index + 1}`}
                                    className="w-16 h-16 mb-4"
                                    loading="lazy"
                                />
                                <div className="text-center space-y-1">
                                    {feature.descriptions.map((desc, i) => (
                                        <p
                                            key={i}
                                            className="text-sm font-medium leading-relaxed"
                                        >
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </div>
    );
}
