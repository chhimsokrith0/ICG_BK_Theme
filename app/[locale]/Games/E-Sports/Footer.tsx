import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("E-sports.footer");
    return (
        <div className="relative bg-[#1A1B41] text-center py-16 px-6">
            {/* Header Section */}
            <div className="mb-10">
                <h1 className="text-5xl font-bold text-white mb-4">
                    {t("header.title")}
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                    {t("header.subtitle")}
                </p>
            </div>

            {/* Game Logos */}
            <div className="flex flex-wrap justify-center mb-10">
                <img
                    src= {t("gameLogos.image")}
                    alt={t("gameLogos.alt")}
                    className="mx-auto max-w-[80%] h-auto"
                />
            </div>

            {/* Background and Bottom Image */}
            <div className="relative">
                {/* Bottom Character and Effects */}
                <img
                    src={t("backgroundImage.image")}
                    alt={t("backgroundImage.alt")}
                    className="mx-auto w-full h-auto object-contain"
                />
            </div>
        </div>
    );
};

export default Footer;
