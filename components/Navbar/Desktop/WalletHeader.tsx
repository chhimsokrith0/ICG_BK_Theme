import React, { useState } from 'react';
import SyncIcon from '@mui/icons-material/Sync';

const WalletHeader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="flex items-center justify-between rounded-lg relative">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                {/* User Avatar */}
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    <span>👤</span>
                </div>

                {/* Message Icon */}
                <button className="relative">
                    <div className="w-10 h-10 bg-white rounded-full border border-blue-500 flex items-center justify-center">
                        <span>✉️</span>
                    </div>
                </button>

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
                <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300">
                    Deposit
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                        <button className="w-full flex items-center px-4 py-3 text-white font-medium bg-orange-500 rounded-t-xl hover:bg-orange-600 transition duration-200">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737468120/Deposit_wru1oo.svg"
                                alt="Deposit"
                                className="w-5 h-5 mr-3"
                            />
                            Deposit
                        </button>
                        <button className="w-full flex items-center px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition duration-200">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737468121/Transfer_Promo_pqahje.svg"
                                alt="Transfer / Promo"
                                className="w-5 h-5 mr-3"
                            />
                            Transfer / Promo
                        </button>
                        <button className="w-full flex items-center px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition duration-200">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737468120/Withdrawal_sljg79.svg"
                                alt="Withdrawal"
                                className="w-5 h-5 mr-3"
                            />
                            Withdrawal
                        </button>
                        <button className="w-full flex items-center px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition duration-200 rounded-b-xl">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737468120/History_iwixti.svg"
                                alt="History"
                                className="w-5 h-5 mr-3"
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
