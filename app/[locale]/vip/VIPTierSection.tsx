import React from "react";
import { useTranslations } from "next-intl";

const VIPTierSection = () => {
    const t = useTranslations("vip.VIPTierSection");
    return (
        <section
            className="bg-[#0b2134] py-10 md:py-16"
            style={{
                backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195402/upgrade-background_zfgwpa.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center bottom",
            }}
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
                {/* Header */}
                <h2 className="text-sm md:text-lg font-semibold text-yellow-500 mb-6">
                    {t("title")}
                </h2>

                {/* Tier Icons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
                    {/* Bronze */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-[80px] h-[90px] sm:w-[106px] sm:h-[120px] flex items-end justify-center">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195398/bronze_x0vh3t.png"
                                alt="Bronze"
                                className="h-full"
                            />
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm mt-2">Bronze</p>
                        <p className="text-yellow-500 font-medium text-sm sm:text-lg">15,000</p>
                    </div>

                    {/* Silver */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-[90px] h-[110px] sm:w-[138px] sm:h-[163px] flex items-end justify-center">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195401/silver_ws9l97.png"
                                alt="Silver"
                                className="h-full"
                            />
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm mt-2">Silver</p>
                        <p className="text-yellow-500 font-medium text-sm sm:text-lg">60,000</p>
                    </div>

                    {/* Gold */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-[100px] h-[120px] sm:w-[175px] sm:h-[214px] flex items-end justify-center">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195398/diamond_xrygod.png"
                                alt="Gold"
                                className="h-full"
                            />
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm mt-2">Gold</p>
                        <p className="text-yellow-500 font-medium text-sm sm:text-lg">150,000</p>
                    </div>

                    {/* Diamond */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-[90px] h-[110px] sm:w-[137px] sm:h-[163px] flex items-end justify-center">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195400/platinum_qqtwun.png"
                                alt="Diamond"
                                className="h-full"
                            />
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm mt-2">Diamond</p>
                        <p className="text-yellow-500 font-medium text-sm sm:text-lg">By Invitation</p>
                    </div>

                    {/* Platinum */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-[80px] h-[90px] sm:w-[106px] sm:h-[118px] flex items-end justify-center">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195401/silver_ws9l97.png"
                                alt="Platinum"
                                className="h-full"
                            />
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm mt-2">Platinum</p>
                        <p className="text-yellow-500 font-medium text-sm sm:text-lg">250,000</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VIPTierSection;
