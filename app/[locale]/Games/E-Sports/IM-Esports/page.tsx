'use client'

import React from 'react'
import { useTranslations } from 'next-intl'


export default function page() {
    const t = useTranslations("E-sports.IM-Esports");


    return (
        <div className="relative bg-[#1A1B41] text-center py-16 px-6 max-w-[1400px] mx-auto">
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
            <div className="relative bg-[#1A1B41] max-w-[1400px] mx-auto">
                {/* Background Image */}
                <img
                    src={t("backgroundImage")}
                    alt="Background"
                    className="w-full h-full object-cover"
                />

                {/* Features Grid */}
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="relative max-w-[600px] mx-auto"> {/* Reduced max-width */}
                        <img
                            src={t("featuresGrid.image")}
                            className="w-full h-auto mx-auto"
                            alt="Features Grid"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}