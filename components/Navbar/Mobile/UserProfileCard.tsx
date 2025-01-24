import React from "react";
import { motion } from "framer-motion";

const UserProfileCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 w-full rounded-lg"
        >
            {/* Top Section */}
            <div className="flex items-center justify-between mb-6">
                {/* Bitcoin Icon */}
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="border rounded-full flex items-center justify-center text-white shadow-md p-2"
                >
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737722060/bitcoin_zmdvyl.gif"
                        alt="Bitcoin Icon"
                        className="w-16 h-16"
                    />
                </motion.div>
                {/* Welcome Section */}
                <div className="flex-grow ml-4">
                    <p className="text-sm text-gray-500">Welcome</p>
                    <h3 className="text-lg font-bold text-blue-600">ssgighuy7y8sh</h3>
                </div>
                {/* Crown Badge */}
                <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shadow-md"
                >
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737722164/crown_cn0wt2.gif"
                        alt="Crown Icon"
                        className="w-10 h-10"
                    />
                </motion.div>
            </div>

            {/* Milestone Section */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737722266/social-page_nz6njj.gif"
                            alt="Milestone Icon"
                            className="w-8 h-8"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-700">Next Milestone</p>
                        <p className="text-xs text-gray-500">Bronze</p>
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="relative w-full bg-gray-300 rounded-full h-2">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "30%" }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
                    ></motion.div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">0 / 15000</p>
            </div>
        </motion.div>
    );
};

export default UserProfileCard;
