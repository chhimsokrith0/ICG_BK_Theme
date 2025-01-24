import React, { useState } from "react";
import Link from "next/link";

const ActionButtonsDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
        >
            <Link
                href="/myaccount/deposit"
                className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-300"
            >
                Deposit
            </Link>
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
                </div>
            )}
        </div>
    );
};

export default ActionButtonsDropdown;
