'use client';
import { useState } from "react";
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
import AccountProfile from "./AccountProfile";

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
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                initial={{ opacity: 0, translateY: -10 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white ml-2 p-4 rounded-lg shadow-md flex items-center w-full"
            >
                {/* Wallet Info */}
                <div className="flex items-center">
                    <div className="mr-2">
                        <p className="text-sm text-gray-500">Main Wallet</p>
                        <div className="flex items-center space-x-2">
                            {/* USD Text with Loading Animation */}
                            <p
                                className={`text-2xl font-bold ${isLoading ? "text-gray-400 animate-pulse" : "text-blue-600"
                                    }`}
                            >
                                {isLoading ? "USD" : "USD 0.00"}
                            </p>
                            {isLoading && (
                                <div className="flex items-center mt-3 space-x-2">
                                    {/* Animated Dots */}
                                    <motion.span
                                        className="w-1 h-1 bg-orange-500 rounded-full shadow-lg"
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.6 }}
                                    ></motion.span>
                                    <motion.span
                                        className="w-1 h-1 bg-orange-500 rounded-full shadow-md"
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                                    ></motion.span>
                                    <motion.span
                                        className="w-1 h-1 bg-orange-500 rounded-full shadow-sm"
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                                    ></motion.span>
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        className="text-blue-500 hover:text-blue-700 flex items-center ml-2"
                        onClick={handleAnimation}
                        disabled={isLoading} // Disable button while loading
                    >
                        <motion.div
                            animate={isAnimating ? { rotate: 360 } : { rotate: 0 }} // Animate rotation
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
                <button
                    onClick={handleAnimation}
                    disabled={isLoading}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center shadow-md hover:bg-blue-700 transition duration-200"
                >
                    <ArrowPathIcon className="w-5 h-5 mr-2" />
                    Restore
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
                <AccountProfile />
            </motion.div>
        </motion.div>
    );
};

export default Page;
