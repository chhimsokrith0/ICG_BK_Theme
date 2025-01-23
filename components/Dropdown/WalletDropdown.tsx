import React, { useState } from "react";
import { ChevronDownIcon, PlusIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

// Wallet Dropdown Component
const WalletDropdown: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState("Main Wallet (0.00)");

    const wallets = [
        { name: "Main Wallet", amount: "0.00" },
        { name: "Sports", amount: "0.00" },
        { name: "E-Sports", amount: "0.00" },
        { name: "Casino", amount: "0.00" },
        { name: "Slots", amount: "0.00" },
        { name: "Fishing", amount: "0.00" },
        { name: "Lottery", amount: "0.00" },
        { name: "3D Games", amount: "0.00" },
        { name: "Fast Games", amount: "0.00" },
    ];

    const handleSelect = (wallet: string) => {
        setSelectedWallet(wallet);
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative">
            <button
                type="button" // Prevent default form submission
                className="w-full border border-gray-300 p-2 rounded-md flex items-center justify-between focus:ring-2 focus:ring-blue-500"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
                <span>{selectedWallet}</span>
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            </button>

            {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    {wallets.map((wallet, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(`${wallet.name} (${wallet.amount})`)}
                        >
                            <div className="flex items-center">
                                <span>{wallet.name}</span>
                                <span className="ml-2 text-gray-500">{wallet.amount}</span>
                            </div>

                            <div className="flex items-center space-x-2">
                                {wallet.name === "Main Wallet" && (
                                    <ArrowPathIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                                )}
                                <PlusIcon className="w-5 h-5 text-blue-500 hover:text-blue-700" />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// Transfer Form Component
const TransferForm: React.FC = () => {
    return (
        <div className="bg-white rounded-lg p-6 mt-2 ml-2 max-w-4xl mx-auto">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* From Section */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">From *</label>
                    <WalletDropdown />
                </div>

                {/* To Section */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">To *</label>
                    <WalletDropdown />
                </div>

                {/* Amount Section */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Amount *</label>
                    <input
                        type="number"
                        step="0.01"
                        className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="0.00"
                    />
                </div>

                {/* Special Code Section */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Special Code</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                        placeholder="Special Code"
                    />
                </div>

                {/* Promo Code Section */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Promo Code</label>
                    <select
                        className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Promo Code</option>
                        {/* Add other promo code options as needed */}
                    </select>
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2">
                    <button
                        className="w-full bg-orange-500 text-white font-medium py-2 rounded-md hover:bg-orange-600 transition duration-200"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TransferForm;
