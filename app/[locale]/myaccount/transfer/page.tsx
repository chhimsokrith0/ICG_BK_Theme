'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import TransferForm from "./TransferForm";
import WeeklyTurnover from "./WeeklyTurnover";

const Page = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleAnimation = () => {
        setIsAnimating(true);
        setIsLoading(true);

        // Stop animation and loading state after 1 second
        setTimeout(() => {
            setIsAnimating(false);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            <motion.div
                className="bg-white ml-2 p-4 rounded-lg shadow-md flex items-center w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Wallet Info */}
                <div className="flex items-center">
                    <div className="mr-2">
                        <p className="text-sm text-gray-500">Main Wallet</p>
                        <div className="flex items-center space-x-2">
                            {/* USD Text with Loading Animation */}
                            <motion.p
                                className={`text-2xl font-bold ${isLoading ? "text-gray-400 animate-pulse" : "text-blue-600"}`}
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isLoading ? "USD" : "USD 0.00"}
                            </motion.p>
                            {isLoading && (
                                <div className="flex items-center mt-3 space-x-2">
                                    {/* Animated Dots with Smooth Transitions */}
                                    <motion.span
                                        className="w-1 h-1 bg-orange-500 rounded-full shadow-lg"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.6 }}
                                    ></motion.span>
                                    <motion.span
                                        className="w-1 h-1 bg-orange-500 rounded-full shadow-md"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                                    ></motion.span>
                                    <motion.span
                                        className="w-1 h-1 bg-orange-500 rounded-full shadow-sm"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                                    ></motion.span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Refresh Button with Animation */}
                    <button
                        className="text-blue-500 hover:text-blue-700 flex items-center ml-2"
                        onClick={handleAnimation}
                        disabled={isLoading}
                    >
                        <motion.div
                            animate={isAnimating ? { rotate: 360 } : { rotate: 0 }}
                            transition={{
                                duration: 0.5,
                                repeat: isAnimating ? Infinity : 0,
                                ease: "linear",
                            }}
                        >
                            <ArrowPathIcon className="w-5 h-5" />
                        </motion.div>
                    </button>
                </div>

                {/* Restore Button */}
                <motion.button
                    onClick={handleAnimation}
                    disabled={isLoading}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center shadow-md hover:bg-blue-700 transition duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-2"
                    >
                        <path d="M20.69 4.89l-2.18-2.18c-.39-.39-1.02-.39-1.41 0L12 7.91 6.9 2.71c-.39-.39-1.02-.39-1.41 0l-2.18 2.18c-.39.39-.39 1.02 0 1.41l5.09 5.09-5.09 5.09c-.39.39-.39 1.02 0 1.41l2.18 2.18c.39.39 1.02.39 1.41 0l5.1-5.1 5.09 5.09c.39.39 1.02.39 1.41 0l2.18-2.18c.39-.39.39-1.02 0-1.41l-5.09-5.09 5.09-5.09c.39-.39.39-1.02 0-1.41z" />
                    </svg>
                    Restore
                </motion.button>
            </motion.div>

            {/* Transfer Form */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <TransferForm />
            </motion.div>

            {/* Weekly Turnover */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
                <WeeklyTurnover />
            </motion.div>
        </>
    );
};

export default Page;
