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
    
        // Stop animation and loading state after 5 seconds
        setTimeout(() => {
          setIsAnimating(false);
          setIsLoading(false);
        }, 1000);
      };

    return (
        <>
            <div className="bg-white ml-2 p-4 rounded-lg shadow-md flex items-center w-full">
                {/* Wallet Info */}
                <div className="flex items-center">
                    <div className="mr-2">
                        <p className="text-sm text-gray-500">Main Wallet</p>
                        <div className="flex items-center space-x-2">
                            {/* USD Text with Loading Animation */}
                            <p className={`text-2xl font-bold ${isLoading ? "text-gray-400 animate-pulse" : "text-blue-600"}`}>
                                {isLoading ? "USD" : "USD 0.00"}
                            </p>
                            {isLoading && (
                                <div className="flex items-center mt-3 space-x-2">
                                    {/* Animated Dots with Smooth Transitions */}
                                    <span className="w-1 h-1 bg-orange-500 rounded-full animate-bounce shadow-lg"></span>
                                    <span className="w-1 h-1 bg-orange-500 rounded-full animate-bounce shadow-md" style={{ animationDelay: "0.2s" }}></span>
                                    <span className="w-1 h-1 bg-orange-500 rounded-full animate-bounce shadow-sm" style={{ animationDelay: "0.4s" }}></span>
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
                            animate={isAnimating ? { rotate: 360 } : { rotate: 0 }} // Animate when isAnimating is true
                            transition={{
                                duration: 0.2, // Duration of one spin
                                repeat: isAnimating ? Infinity : 0, // Loop animation when true
                                ease: "linear", // Smooth linear spin
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
                    className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center shadow-md hover:bg-blue-700 transition duration-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 mr-2"
                    >
                        <path d="M20.69 4.89l-2.18-2.18c-.39-.39-1.02-.39-1.41 0L12 7.91 6.9 2.71c-.39-.39-1.02-.39-1.41 0l-2.18 2.18c-.39.39-.39 1.02 0 1.41l5.09 5.09-5.09 5.09c-.39.39-.39 1.02 0 1.41l2.18 2.18c.39.39 1.02.39 1.41 0l5.1-5.1 5.09 5.09c.39.39 1.02.39 1.41 0l2.18-2.18c.39-.39.39-1.02 0-1.41l-5.09-5.09 5.09-5.09c.39-.39.39-1.02 0-1.41z" />
                    </svg>
                    Restore
                </button>

            </div>

            <AccountProfile />
        </>
    )
}

export default Page