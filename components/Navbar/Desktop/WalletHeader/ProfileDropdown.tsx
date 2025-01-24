import React, { useState } from "react";

const ProfileDropdown = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Profile Icon */}
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer">
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554111/Personal_lpq7zb.gif"
                    alt="Profile Icon"
                    className="w-8 h-8"
                />
            </div>

            {/* Dropdown Menu */}
            {isHovered && (
                <div className="absolute top-13.5 left-[-125px] bg-white shadow-lg rounded-lg w-72 p-4 opacity-100 scale-100 transform transition-all duration-300 ease-in-out">
                    {/* Triangle Pointer */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow"></div>

                    {/* User Information */}
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554111/Personal_lpq7zb.gif"
                                alt="Small Profile Icon"
                                className="w-6 h-6"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-800 font-semibold">Hi, ssgighuy7y8sh</p>
                            <p className="text-xs text-gray-500">
                                Your VIP tier is <span className="font-bold text-blue-500">NORMAL</span>
                            </p>
                        </div>
                    </div>

                    {/* Progress Section */}
                    <div className="bg-gray-100 p-3 rounded-lg mb-4">
                        <p className="text-xs text-gray-500 mb-2">0 / 15000</p>
                        <div className="w-full h-2 bg-gray-300 rounded-full relative">
                            <div className="h-2 bg-blue-500 rounded-full w-1/6"></div>
                        </div>
                        <a href="#" className="text-xs text-blue-500 mt-2 inline-block hover:underline">
                            View More
                        </a>
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
            )}
        </div>
    );
};

export default ProfileDropdown;
