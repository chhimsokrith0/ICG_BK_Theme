"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function page() {
    const t = useTranslations("E-sports.TF-Gaming");

    const FeaturesList = t.raw("features");
    const features = FeaturesList.map((features: any) => ({
        icon: features.icon,
        descriptions: features.descriptions,
    }))


    return (
        <div className="relative bg-[#1A1B41] text-center py-16 px-6 max-w-[1400px] mx-auto">
            {/* Header Section */}
            <div className="mb-10">
                <h1 className="text-5xl font-bold text-white mb-4">{t("title")}</h1>
                <p className="text-xl text-gray-300 mb-4">
                    {t("subtitle")}
                </p>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    {t("description")}
                </p>
                <div className="mt-8">
                    <button className="bg-orange-500 text-white font-semibold text-xl py-3 px-12 rounded-full hover:bg-orange-600 transition duration-300">
                        {t("button.text")}
                    </button>
                </div>
            </div>

            {/* Features Grid */}
            <div className="relative">
                {/* Background Image */}
                <img
                    src={t("backgroundImage")}
                    alt=""
                    className="w-full h-auto"
                />

                {/* Features Grid */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-[1200px] mx-auto">
                        {features.map((feature: any, index: number) => (
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
                                    {feature.descriptions.map((desc: string, i: number) => (
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
