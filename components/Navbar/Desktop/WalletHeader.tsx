import React, { useState } from 'react';
import SyncIcon from '@mui/icons-material/Sync';
import Link from 'next/link';

const WalletHeader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex items-center justify-between rounded-lg relative">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                {/* User Avatar */}
                <div className="relative group">
                    {/* Icon */}
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        <span>
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554111/Personal_lpq7zb.gif"
                                alt="Profile Icon"
                            />
                        </span>
                    </div>

                    {/* Dropdown Menu */}
                    <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-72 p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition-all duration-300 ease-in-out">
                        {/* User Information */}
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full text-blue-600 font-bold">
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554111/Personal_lpq7zb.gif"
                                    alt="Profile Small Icon"
                                />
                            </div>
                            <div>
                                <p className="text-sm text-gray-800 font-semibold">Hi, ssgighuy7y8sh</p>
                                <p className="text-xs text-gray-500">Your VIP tier is <span className="font-bold text-blue-500">NORMAL</span></p>
                            </div>
                        </div>

                        {/* Progress Section */}
                        <div className="bg-gray-100 p-3 rounded-lg mb-4">
                            <p className="text-xs text-gray-500 mb-2">0 / 15000</p>
                            <div className="w-full h-2 bg-gray-300 rounded-full relative">
                                <div className="h-2 bg-blue-500 rounded-full w-1/6"></div>
                            </div>
                            <a href="#" className="text-xs text-blue-500 mt-2 inline-block">View More</a>
                        </div>

                        {/* KYC Level */}
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm text-gray-800 font-semibold">KYC Level</p>
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 font-bold rounded-full">
                                0
                            </div>
                        </div>

                        {/* Menu Sections */}
                        <div className="space-y-4">
                            {/* Cashier */}
                            <div>
                                <p className="text-sm text-gray-700 font-semibold">CASHIER</p>
                                <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-600">
                                    <li className="hover:text-blue-500 cursor-pointer">Deposit</li>
                                    <li className="hover:text-blue-500 cursor-pointer">Withdraw</li>
                                    <li className="hover:text-blue-500 cursor-pointer">Transfer / Promo</li>
                                    <li className="hover:text-blue-500 cursor-pointer">Withdrawal Details</li>
                                </ul>
                            </div>

                            {/* Reward */}
                            <div>
                                <p className="text-sm text-gray-700 font-semibold">REWARD</p>
                                <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-600">
                                    <li className="hover:text-blue-500 cursor-pointer">Reward Overview</li>
                                </ul>
                            </div>

                            {/* Profile */}
                            <div>
                                <p className="text-sm text-gray-700 font-semibold">PROFILE</p>
                                <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-600">
                                    <li className="hover:text-blue-500 cursor-pointer">View Profile</li>
                                    <li className="hover:text-blue-500 cursor-pointer">Change Password</li>
                                </ul>
                            </div>

                            {/* History */}
                            <div>
                                <p className="text-sm text-gray-700 font-semibold">HISTORY</p>
                                <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-600">
                                    <li className="hover:text-blue-500 cursor-pointer">Transaction History</li>
                                    <li className="hover:text-blue-500 cursor-pointer">Game History</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Message Icon */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Message Icon */}
                    <button className="relative">
                        <div className="w-10 h-10 bg-white rounded-full border border-blue-500 flex items-center justify-center">
                            <span>
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554069/email-file_zpdjcv.gif"
                                    alt="Message Icon"
                                    className="w-6 h-6"
                                />
                            </span>
                        </div>
                    </button>

                    {/* Dropdown */}
                    {isHovered && (
                        <div className="relative">
                            {/* Triangle Pointer */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-md"></div>

                            {/* Dropdown Content */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 w-48">
                                <div className="flex justify-between items-center border-b pb-2 mb-2">
                                    <span className="text-sm text-gray-700">Promotions</span>
                                    <span className="text-sm text-gray-500">0</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2 mb-2">
                                    <span className="text-sm text-gray-700">Payment</span>
                                    <span className="text-sm text-gray-500">0</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2 mb-2">
                                    <span className="text-sm text-gray-700">System</span>
                                    <span className="text-sm text-gray-500">0</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-700">Notification</span>
                                    <span className="text-sm text-gray-500">0</span>
                                </div>
                            </div>
                        </div>

                    )}
                </div>

                {/* Wallet Info */}
                <div>
                    <p className="text-gray-500 text-sm">Main Wallet</p>
                    <p className="text-blue-600 text-lg font-bold">USD 0.00</p>
                </div>

                {/* Refresh Icon */}
                <button className="flex items-center justify-center w-6 h-6 text-blue-500">
                    <SyncIcon />
                </button>
            </div>

            {/* Right Section */}
            <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
            >
                <Link href="/myaccount/deposit" className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300">
                    Deposit
                </Link>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                        <button className="w-full flex items-center px-4 py-3 text-white font-medium bg-orange-500 rounded-t-xl hover:bg-orange-600 transition duration-200">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737557763/profit_iqgfmu.gif"
                                alt="Deposit"
                                className="w-10 h-10 mr-3"
                            />
                            Deposit
                        </button>
                        <button className="w-full flex items-center px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition duration-200">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737557808/promotion_sgoivq.gif"
                                alt="Transfer / Promo"
                                className="w-10 h-10 mr-3"
                            />
                            Transfer / Promo
                        </button>
                        <button className="w-full flex items-center px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition duration-200">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737557865/atm_syn2yf.gif"
                                alt="Withdrawal"
                                className="w-10 h-10 mr-3"
                            />
                            Withdrawal
                        </button>
                        <button className="w-full flex items-center px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition duration-200 rounded-b-xl">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737557928/file_bbjx9v.gif"
                                alt="History"
                                className="w-10 h-10 mr-3"
                            />
                            History
                        </button>
                    </div>

                )}
            </div>
        </div>
    );
};

export default WalletHeader;
