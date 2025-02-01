import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("Fishing.Footer");
    return (
        <footer className="bg-white">
            {/* App Download Section */}
            <div className="w-full">
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736856001/app-download_qcvnq7.jpg"
                    alt="App Download"
                    className="w-full object-cover rounded-lg"
                />
            </div>

            {/* Bonus Section */}
            <div className="bg-gray-100 py-6 mt-6 flex flex-wrap justify-between items-center px-6 rounded-lg shadow-md space-y-4 sm:space-y-0 sm:flex-nowrap">
                {/* Bonus Details */}
                <div className="flex flex-wrap sm:flex-nowrap sm:space-x-10 items-center justify-center space-y-4 sm:space-y-0 w-full sm:w-auto">
                    {/* Welcome Bonus */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">{t('bonusSection.welcomeBonus.amount')}</h2>
                        <p className="text-orange-500 text-lg">{t('bonusSection.welcomeBonus.label')}</p>
                    </div>

                    {/* Weekly Rescue Bonus */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">{t('bonusSection.weeklyRescueBonus.amount')}</h2>
                        <p className="text-orange-500 text-lg">{t('bonusSection.weeklyRescueBonus.label')}</p>
                    </div>

                    {/* Crypto Casino */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">{t('bonusSection.cryptoCasino.amount')}</h2>
                        <p className="text-orange-500 text-lg">{t('bonusSection.cryptoCasino.label')}</p>
                    </div>
                </div>

                {/* Join Now Button */}
                <div className="w-full sm:w-auto flex justify-center">
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-orange-600 transition duration-300">
                        {t('joinNow')}
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
