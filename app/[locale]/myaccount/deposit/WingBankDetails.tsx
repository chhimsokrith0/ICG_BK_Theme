'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { InformationCircleIcon, PlusIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const WingBankDetails = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const scaleUpVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="mt-6 p-4 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
        >
            <motion.p className="text-gray-700 font-medium mb-3" variants={fadeInVariants}>
                Deposit Bank Account <span className="text-red-500">*</span>
            </motion.p>
            <motion.div
                className="flex items-center space-x-4 mb-3"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
            >
                <div className="flex-1 flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md">
                    <span className="text-gray-700">RATHA SEM</span>
                    <button className="text-blue-500 hover:text-blue-700">
                        <i className="fa-regular fa-copy text-blue-500 text-lg hover:text-blue-700"></i>
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md">
                    <span className="text-gray-700">03379934</span>
                    <button className="text-blue-500 hover:text-blue-700">
                        <i className="fa-regular fa-copy text-blue-500 text-lg hover:text-blue-700"></i>
                    </button>
                </div>
            </motion.div>

            <motion.div
                className="flex justify-center items-center mb-4 relative"
                variants={scaleUpVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="border-2 border-gray-300 rounded-lg p-2">
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737538057/mbqr20240217053258926_srchj5.jpg"
                        alt="QR Code"
                        className="w-60 h-60 rounded-lg"
                    />
                </div>
            </motion.div>

            <motion.div className="mb-4" variants={fadeInVariants}>
                <label className="text-gray-700 font-medium block mb-2">
                    Deposit Amount <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-2 mb-2">
                    <input
                        type="number"
                        placeholder="Amount MIN: 5.00 / MAX: 50,000.00"
                        className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="text-gray-500 hover:text-gray-700">
                        <InformationCircleIcon className="w-5 h-5" />
                    </button>
                    <span className="text-sm text-gray-500">Min/Max Limit: 5.00/50,000.00</span>
                </div>
                <p className="text-sm text-red-500 mt-1">
                    Deposit amount must be greater than the minimum deposit amount.
                </p>
                <div className="flex space-x-2 mt-2">
                    {['5', '10', '20', '50', '100'].map((value) => (
                        <motion.button
                            key={value}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {value}
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            <motion.div className="mb-4" variants={fadeInVariants}>
                <label className="text-gray-700 font-medium block mb-2">
                    Sender Bank <span className="text-red-500">*</span>
                    <button className="ml-2 text-gray-500 hover:text-gray-700">
                        <InformationCircleIcon className="w-4 h-4 inline" />
                    </button>
                </label>
                <div className="flex items-center space-x-2">
                    <select
                        className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Please select</option>
                        <option value="Wing Bank">Wing Bank</option>
                        <option value="ABA Bank">ABA Bank</option>
                        <option value="Acleda Bank">Acleda Bank</option>
                    </select>
                    <motion.button
                        className="text-blue-500 hover:text-blue-700 bg-gray-100 p-2 rounded-md shadow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <PlusIcon className="w-5 h-5" />
                    </motion.button>
                </div>
                <p className="text-xs text-red-500 mt-1">Please add your bank account</p>
                <p className="text-xs text-gray-500 mt-1 flex items-center">
                    <ArrowUpTrayIcon className="w-4 h-4 inline mr-1" />
                    Upload your deposit receipt for faster processing
                </p>
            </motion.div>
        </motion.div>
    );
};

export default WingBankDetails;
