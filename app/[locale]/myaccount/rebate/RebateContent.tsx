'use client';

import React from "react";

const RebateContent = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
                <p className="text-sm text-gray-500">Total Pending Claim</p>
                <p className="text-blue-500 font-bold text-2xl">USD 0</p>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
                Claim All
            </button>
            <p className="text-sm text-gray-500 mt-4 lg:mt-0">Last update -</p>
        </div>
    )
}

export default RebateContent;