"use client";

import React from "react";

const AppDownloadSection = () => {
    return (
        <section className="app-landing-section mx-auto max-w-[1400px] py-12 px-8">
            <div className="flex flex-wrap md:flex-nowrap">
                {/* Left Container */}
                <div className="left-container flex-1">
                    <div className="header-container">
                        <div>
                            <h1 className="text-2xl font-bold">App Download</h1><br /><br />
                        </div>
                        <div className="header-1 flex items-start">

                            <div className="header-1-title">
                                <p className="text-3xl font-bold leading-snug">
                                    The future of gaming is here.
                                </p>
                                <p className="text-3xl font-bold leading-snug">
                                    Great games on all devices.
                                </p>
                                <p className="text-3xl font-bold text-blue-500">
                                    New BK8 App
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
                                Sign up today for never-ending rewards, promotions, and lots of freebies.
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
                                Apple iOS
                            </p>
                            <a
                                href="#"
                                className="instruction-btn text-blue-500 hover:underline text-sm mt-1"
                            >
                                Instructions
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
                                Android
                            </p>
                            <a
                                href="#"
                                className="instruction-btn text-blue-500 hover:underline text-sm mt-1"
                            >
                                Instructions
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
                                <p className="text-white font-bold text-center">Referral Made Easy</p>
                                <p className="text-white text-sm text-center">
                                    Share your referral link and earn money
                                </p>
                            </div>

                            {/* Security Assured */}
                            <div
                                className="app-install-box bg-[url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507983/higher-security_i9lujp.jpg')] bg-cover bg-center w-[240px] h-[320px] rounded-lg shadow-md p-4"
                            >
                                <p className="text-white font-bold text-center">Security Assured</p>
                                <p className="text-white text-sm text-center">
                                    Access account via facial recognition or fingerprint
                                </p>
                            </div>

                            {/* Seamless Wallet Transfer */}
                            <div
                                className="app-install-box bg-[url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507995/seamless-wallet-transfer_ysnoga.jpg')] bg-cover bg-center w-[240px] h-[320px] rounded-lg shadow-md p-4"
                            >
                                <p className="text-white font-bold text-center">
                                    Seamless Wallet Transfer
                                </p>
                                <p className="text-white text-sm text-center">
                                    Transfer money in seconds
                                </p>
                            </div>

                            {/* Express Login */}
                            <div
                                className="app-install-box bg-[url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507980/express-login_pmlwbd.jpg')] bg-cover bg-center w-[240px] h-[320px] rounded-lg shadow-md p-4"
                            >
                                <p className="text-white font-bold text-center">Express Login</p>
                                <p className="text-white text-sm text-center">
                                    Fast and secure way to keep you logged in
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
