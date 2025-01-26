'use client';

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const HistoryContent = () => {
    return (
        <div className="mt-10">
            {/* Transaction Date Filters */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        Transaction Date
                    </label>
                    <select className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 text-sm sm:text-base">
                        <option value="Today">Today</option>
                        <option value="Yesterday">Yesterday</option>
                        <option value="Last 7 Days">Last 7 Days</option>
                        <option value="Last Month">Last Month</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        From *
                    </label>
                    <div className="relative">
                        <input
                            type="date"
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        To *
                    </label>
                    <div className="relative">
                        <input
                            type="date"
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                        />
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mb-6">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 text-sm sm:text-base">
                    Submit
                </button>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border-spacing-0 text-sm sm:text-base">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-4 py-3 text-gray-700 font-medium">Transaction Date</th>
                            <th className="px-4 py-3 text-gray-700 font-medium">Rebate Period</th>
                            <th className="px-4 py-3 text-gray-700 font-medium">Total Valid Bet</th>
                            <th className="px-4 py-3 text-gray-700 font-medium">Total Promo Turnover</th>
                            <th className="px-4 py-3 text-gray-700 font-medium">Total Eligible Turnover</th>
                            <th className="px-4 py-3 text-gray-700 font-medium">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                colSpan={6}
                                className="px-4 py-8 text-center text-gray-400 font-medium"
                            >
                                No transaction yet
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-center mt-4 text-gray-500">
                <p className="text-xs sm:text-sm text-center sm:text-left">
                    Showing 1 - of 1 items.
                </p>
                <div className="flex justify-center sm:justify-end items-center space-x-2">
                    {/* Previous Button */}
                    <button
                        className="flex items-center px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                        aria-label="Previous Page"
                    >
                        <ChevronLeftIcon className="w-5 h-5 text-gray-500" />
                    </button>
                    {/* Current Page */}
                    <button
                        className="px-2 py-1 rounded-md bg-blue-500 text-white font-medium"
                        aria-label="Current Page"
                    >
                        1
                    </button>
                    {/* Next Button */}
                    <button
                        className="flex items-center px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
                        aria-label="Next Page"
                    >
                        <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HistoryContent;
