"use client";

import React from "react";
import { useTranslations } from "next-intl";

const AppDownloadSection = () => {
    const t = useTranslations("AppDownloadSection");
    return (
        <section className="app-landing-section mx-auto max-w-[1400px] py-12 px-8">
            <div className="flex flex-wrap md:flex-nowrap">
                {/* Left Container */}
                <div className="left-container flex-1">
                    <div className="header-container">
                        <div>
                            <h1 className="text-2xl font-bold">{t("appDownloadTitle")}</h1><br /><br />
                        </div>
                        <div className="header-1 flex items-start">

                            <div className="header-1-title">
                                <p className="text-3xl font-bold leading-snug">
                                    {t("futureOfGaming")}
                                </p>
                                <p className="text-3xl font-bold leading-snug">
                                    {t("greatGamesAllDevices")}
                                </p>
                                <p className="text-3xl font-bold text-blue-500">
                                    {t("newBK8App")}
                                </p>
                            </div>
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507572/bk8-app-icon_n8ubdo.png"
                                alt="BK8 App Icon"
                                className="w-12 h-12 ml-4"
                            />
                        </div>
                        <div className="header-2 mt-4">
                            <p className="text-gray-600">
                                {t("signUpToday")}
                            </p>
                        </div>
                    </div>

                    {/* App Download Section */}
                    <div className="app-download-container flex space-x-6 mt-6">
                        {/* Apple iOS */}
                        <div className="download-item text-center">
                            <div className="qr-code mb-3">
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507990/qrios_dunlep.png"
                                    alt="Apple QR Code"
                                    className="w-32 h-32 border border-gray-300 rounded-lg shadow-md"
                                />
                            </div>
                            <p className="os-name flex items-center justify-center text-gray-700 font-semibold">
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507978/apple_qwfbyd.png"
                                    alt="Apple Logo"
                                    className="w-5 h-5 mr-2"
                                />
                                {t("appleIOS")}
                            </p>
                            <a
                                href="#"
                                className="instruction-btn text-blue-500 hover:underline text-sm mt-1"
                            >
                                {t("instructions")}
                            </a>
                        </div>

                        {/* Android */}
                        <div className="download-item text-center">
                            <div className="qr-code mb-3">
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507987/qrandroid_bpk5ke.png"
                                    alt="Android QR Code"
                                    className="w-32 h-32 border border-gray-300 rounded-lg shadow-md"
                                />
                            </div>
                            <p className="os-name flex items-center justify-center text-gray-700 font-semibold">
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507976/android_u67fvg.png"
                                    alt="Android Logo"
                                    className="w-5 h-5 mr-2"
                                />
                                {t("android")}
                            </p>
                            <a
                                href="#"
                                className="instruction-btn text-blue-500 hover:underline text-sm mt-1"
                            >
                                {t("instructions")}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Container */}
                <div className="right-container flex-1 ml-[-250px]">
                    <div className="relative bg-[url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507985/mobile_nvbjep.png')] bg-cover bg-center w-[466px] h-[715px]">
                        {/* Features */}
                        <div className="absolute top-0 -right-[350px] grid grid-cols-2 gap-6">
                            {/* Referral Made Easy */}
                            <div
                                className="app-install-box bg-[url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507992/referral-made-easy_mmc59e.jpg')] bg-cover bg-center w-[240px] h-[320px] rounded-lg shadow-md p-4"
                            >
                                <p className="text-white font-bold text-center">{t("features.referralMadeEasy.title")}</p>
                                <p className="text-white text-sm text-center">
                                    {t("features.referralMadeEasy.description")}
                                </p>
                            </div>

                            {/* Security Assured */}
                            <div
                                className="app-install-box bg-[url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507983/higher-security_i9lujp.jpg')] bg-cover bg-center w-[240px] h-[320px] rounded-lg shadow-md p-4"
                            >
                                <p className="text-white font-bold text-center">{t("features.securityAssured.title")}</p>
                                <p className="text-white text-sm text-center">
                                    {t("features.securityAssured.description")}
                                </p>
                            </div>

                            {/* Seamless Wallet Transfer */}
                            <div
                                className="app-install-box bg-[url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507995/seamless-wallet-transfer_ysnoga.jpg')] bg-cover bg-center w-[240px] h-[320px] rounded-lg shadow-md p-4"
                            >
                                <p className="text-white font-bold text-center">
                                    {t("features.seamlessWalletTransfer.title")}
                                </p>
                                <p className="text-white text-sm text-center">
                                    {t("features.seamlessWalletTransfer.description")}
                                </p>
                            </div>

                            {/* Express Login */}
                            <div
                                className="app-install-box bg-[url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507980/express-login_pmlwbd.jpg')] bg-cover bg-center w-[240px] h-[320px] rounded-lg shadow-md p-4"
                            >
                                <p className="text-white font-bold text-center">{t("features.expressLogin.title")}</p>
                                <p className="text-white text-sm text-center">
                                    {t("features.expressLogin.description")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AppDownloadSection;



