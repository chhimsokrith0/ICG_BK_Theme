import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

const TransferModal = ({
    isOpen,
    onClose,
    game,
}: {
    isOpen: boolean;
    onClose: () => void;
    game: any;
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = ""; // Enable scrolling
        }
        return () => {
            document.body.style.overflow = ""; // Cleanup on unmount
        };
    }, [isOpen]);

    if (!isOpen || !game) return null;

    // Animation Variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return ReactDOM.createPortal(
        <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8 relative"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={modalVariants}
                transition={{ duration: 0.3 }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center justify-center mb-6 space-x-6">
                    <p className="text-lg font-medium text-gray-700">Transfer To</p>
                    <span className="text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </span>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <img
                                src={game.img}
                                alt={game.name}
                                className="w-10 h-10 rounded-md shadow-md"
                            />
                        </div>
                        <div>
                            <p className="text-lg font-medium text-gray-800">{game.name}</p>
                            <p className="text-blue-600 text-lg font-semibold">
                                {game.turnover.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Amount Section */}
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2 text-lg">
                        Amount <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center w-full bg-white border border-gray-300 rounded-lg p-2 shadow-sm">
                        <input
                            type="number"
                            placeholder="0.00"
                            className="w-full text-lg bg-transparent border-none focus:ring-0 focus:outline-none text-gray-700"
                        />
                        <button className="whitespace-nowrap px-4 py-2 bg-blue-600 text-white rounded-md text-lg font-semibold hover:bg-blue-700 transition">
                            All In
                        </button>
                    </div>
                    <div className="mt-3 h-4 bg-blue-600 rounded-full"></div>
                </div>

                {/* Promo Code Section */}
                <div className="mb-6">
                    <label className="block text-gray-500 font-medium mb-2 text-sm">
                        Promo Code (optional)
                    </label>
                    <select className="w-full border border-gray-300 p-2 rounded-md text-gray-700 text-sm focus:ring-2 focus:ring-blue-500">
                        <option value="">--- Please Select ---</option>
                    </select>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-6">
                    <button className="w-1/2 mr-2 bg-orange-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-orange-600">
                        Confirm
                    </button>
                    <button className="w-1/2 ml-2 bg-blue-100 text-blue-600 py-2 rounded-md text-sm font-semibold hover:bg-blue-200">
                        Clear
                    </button>
                </div>

                {/* Footer */}
                <div className="mt-4 text-center text-sm text-gray-500">
                    Not enough credit?{" "}
                    <a href="#" className="text-blue-600 font-semibold hover:underline">
                        Deposit Now
                    </a>
                </div>
            </motion.div>
        </motion.div>,
        document.body
    );
};

export default TransferModal;
