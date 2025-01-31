import React from "react";
import { useTranslations } from "next-intl";

const Header = () => {
    const t = useTranslations("E-sports.header");
    return (
        <div className="relative">
            {/* Background Image */}
            <img
                src={t("backgroundImage.image")}
                alt={t("backgroundImage.alt")}
                className="w-full h-auto"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col left-60 justify-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    {t("textOverlay.title")}
                </h1>
            </div>
        </div>
    );
};

export default Header;
