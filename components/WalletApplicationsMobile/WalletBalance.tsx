import React, { useState } from "react";
import { motion } from "framer-motion";

const WalletBalance = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const toggleVisibility = () => {
        setIsHidden((prev) => !prev);
    };

    const handleRefresh = () => {
        setIsLoading(true);

        // Simulate a loading duration (e.g., 2 seconds)
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="flex justify-between items-center mb-6">
            {/* Main Wallet Section */}
            <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-700 font-medium">Main Wallet</p>
                <button
                    className="text-pink-500 focus:outline-none"
                    onClick={toggleVisibility}
                    disabled={isLoading} // Disable visibility toggle while loading
                >
                    <i className={`fas ${isHidden ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
            </div>

            {/* Balance Display */}
            <div className="flex items-center space-x-2">
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={isLoading ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
                    transition={{ duration: 0.8, repeat: isLoading ? Infinity : 0 }}
                    className="text-lg font-bold text-blue-600"
                >
                    {isLoading ? (
                        <span className="flex items-center space-x-2">
                            <span className="animate-pulse text-blue-500">Loading</span>
                            <span className="flex space-x-1">
                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
                                <span
                                    className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.2s" }}
                                ></span>
                                <span
                                    className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                                    style={{ animationDelay: "0.4s" }}
                                ></span>
                            </span>
                        </span>
                    ) : isHidden ? (
                        "USD *****"
                    ) : (
                        "USD 0.00"
                    )}
                </motion.div>
                <button
                    className="text-blue-500 focus:outline-none"
                    onClick={handleRefresh}
                    disabled={isLoading}
                >
                    <motion.div
                        animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
                        transition={{
                            duration: 0.1, // Smooth animation duration
                            repeat: isLoading ? Infinity : 0, // Loop animation during loading
                            ease: "linear", // Smooth linear spin
                        }}
                    >
                        <i className="fas fa-sync-alt"></i>
                    </motion.div>
                </button>
            </div>
        </div>
    );
};

export default WalletBalance;