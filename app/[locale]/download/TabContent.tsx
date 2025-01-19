"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabContentProps {
    activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
    return (
        <div className="mt-6">
            <AnimatePresence mode="wait">
                {activeTab === "BK8 App" && (
                    <motion.div
                        key="BK8 App"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737276074/download-page_va4wuj.jpg" alt="" />
                        {/* Hero Section */}
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-gray-800">
                                The future of gaming is here. <br /> Great games on all devices.
                                <br /> New BK8 App
                            </h1>
                            <p className="text-gray-600 mt-4">
                                Sign up today for never ending rewards, promotion and lots of freebies.
                            </p>
                        </div>

                        {/* Instructions Section */}
                        <div className="flex items-center space-x-6 mb-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Apple_logo_black.svg"
                                        alt="Apple iOS"
                                        className="h-6 w-6"
                                    />
                                    <span className="ml-2 text-gray-800 font-medium">Apple iOS</span>
                                </div>
                                <a
                                    href="#ios-instructions"
                                    className="text-blue-500 hover:underline mt-2 block text-sm"
                                >
                                    Instructions
                                </a>
                            </div>

                            <div className="text-center">
                                <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                                        alt="Android"
                                        className="h-6 w-6"
                                    />
                                    <span className="ml-2 text-gray-800 font-medium">Android</span>
                                </div>
                                <a
                                    href="#android-instructions"
                                    className="text-blue-500 hover:underline mt-2 block text-sm"
                                >
                                    Instructions
                                </a>
                            </div>
                        </div>

                        {/* App Features Section */}
                        <div className="mx-auto mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">App Features</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                                <div
                                    className="app-install-box bg-cover bg-center text-white p-6 rounded-lg shadow-lg flex flex-col justify-end"
                                    style={{
                                        backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1737276889/referral-made-easy_igkls2.jpg')`,
                                        height: "280px",
                                    }}
                                >
                                    <h3 className="app-install-title text-lg font-bold mb-2">Referral Made Easy</h3>
                                    <p className="app-install-desc text-sm">Share your referral link and earn money.</p>
                                </div>
                                <div
                                    className="app-install-box bg-cover bg-center text-white p-6 rounded-lg shadow-lg flex flex-col justify-end"
                                    style={{
                                        backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1737276891/seamless-wallet-transfer_ra0h4g.jpg')`,
                                        height: "280px",
                                    }}
                                >
                                    <h3 className="app-install-title text-lg font-bold mb-2">Seamless Wallet Transfer</h3>
                                    <p className="app-install-desc text-sm">Transfer money in seconds.</p>
                                </div>
                                <div
                                    className="app-install-box bg-cover bg-center text-white p-6 rounded-lg shadow-lg flex flex-col justify-end"
                                    style={{
                                        backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1737276888/higher-security_lbn4ie.jpg')`,
                                        height: "280px",
                                    }}
                                >
                                    <h3 className="app-install-title text-lg font-bold mb-2">Security Assured</h3>
                                    <p className="app-install-desc text-sm">Access account via facial recognition or fingerprint.</p>
                                </div>
                                <div
                                    className="app-install-box bg-cover bg-center text-white p-6 rounded-lg shadow-lg flex flex-col justify-end"
                                    style={{
                                        backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1737276888/express-login_b78lcy.jpg')`,
                                        height: "280px",
                                    }}
                                >
                                    <h3 className="app-install-title text-lg font-bold mb-2">Express Login</h3>
                                    <p className="app-install-desc text-sm">Fast and secure way to keep you logged in.</p>
                                </div>
                            </div>

                        </div>





                    </motion.div>
                )}
                {activeTab === "Android Games" && (
                    <motion.div
                        key="Android Games"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mt-6">
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                                {/* Game Card 1 */}
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <img
                                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737277419/SCR_SL_xvxfyc.png" // Replace with actual image URL
                                        alt="918 Kiss"
                                        className="w-full h-auto mb-3 rounded-lg"
                                    />
                                    <h3 className="text-sm font-bold">918 Kiss</h3>
                                    <p className="text-xs text-gray-600 mb-3">Slots</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600">
                                        Download
                                    </button>
                                </div>
                                {/* Game Card 2 */}
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <img
                                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737277416/GP_C_wkvchv.png" // Replace with actual image URL
                                        alt="Gameplay"
                                        className="w-full h-auto mb-3 rounded-lg"
                                    />
                                    <h3 className="text-sm font-bold">Gameplay</h3>
                                    <p className="text-xs text-gray-600 mb-3">Casino</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600">
                                        Download
                                    </button>
                                </div>
                                {/* Game Card 3 */}
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <img
                                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737277418/MEGA_SL_vtdczc.png" // Replace with actual image URL
                                        alt="Mega888"
                                        className="w-full h-auto mb-3 rounded-lg"
                                    />
                                    <h3 className="text-sm font-bold">Mega888</h3>
                                    <p className="text-xs text-gray-600 mb-3">Slots</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600">
                                        Download
                                    </button>
                                </div>
                                {/* Game Card 4 */}
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <img
                                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737277421/WM_C_gtjhqg.png" // Replace with actual image URL
                                        alt="WM Casino"
                                        className="w-full h-auto mb-3 rounded-lg"
                                    />
                                    <h3 className="text-sm font-bold">WM Casino</h3>
                                    <p className="text-xs text-gray-600 mb-3">Casino</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600">
                                        Download
                                    </button>
                                </div>
                                {/* Game Card 5 */}
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <img
                                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737277416/JKR_SL_ads7qw.png" // Replace with actual image URL
                                        alt="Joker"
                                        className="w-full h-auto mb-3 rounded-lg"
                                    />
                                    <h3 className="text-sm font-bold">Joker</h3>
                                    <p className="text-xs text-gray-600 mb-3">Slots</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600">
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                )}
                {activeTab === "iOS Games" && (
                    <motion.div
                        key="iOS Games"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mt-6">
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                                {/* Game Card 1 */}
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <img
                                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737277419/SCR_SL_xvxfyc.png" // Replace with actual image URL
                                        alt="918 Kiss"
                                        className="w-full h-auto mb-3 rounded-lg"
                                    />
                                    <h3 className="text-sm font-bold">918 Kiss</h3>
                                    <p className="text-xs text-gray-600 mb-3">Slots</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600">
                                        Download
                                    </button>
                                </div>
                                {/* Game Card 2 */}
                                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                                    <img
                                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737277416/GP_C_wkvchv.png" // Replace with actual image URL
                                        alt="Gameplay"
                                        className="w-full h-auto mb-3 rounded-lg"
                                    />
                                    <h3 className="text-sm font-bold">Gameplay</h3>
                                    <p className="text-xs text-gray-600 mb-3">Casino</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600">
                                        Download
                                    </button>
                                </div>
                                {/* Game Card 3 */}
                                
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TabContent;
