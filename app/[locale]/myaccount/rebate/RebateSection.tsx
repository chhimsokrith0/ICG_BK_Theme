'use client';

import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
const RebateSection = () => {
    const [activeTab, setActiveTab] = useState('Rebate');

    const tabs = [
        { name: 'Rebate' },
        { name: 'History' },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md p-6 ml-2 h-screen">
            {/* Tabs */}
            <div className="flex border-b gap-2 border-gray-300 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-6 py-2 rounded-t-md font-medium ${activeTab === tab.name
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                            : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                            }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Content */}
            {activeTab === 'Rebate' && (
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Total Pending Claim</p>
                        <p className="text-blue-500 font-bold text-2xl">USD 0</p>
                    </div>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                        Claim All
                    </button>
                    <p className="text-sm text-gray-500">Last update -</p>
                </div>
            )}

            {activeTab === 'History' && (
                <div className="mt-10">
                    {/* Transaction Date Filters */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Transaction Date</label>
                            <select className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500">
                                <option value="Today">Today</option>
                                <option value="Yesterday">Yesterday</option>
                                <option value="Last 7 Days">Last 7 Days</option>
                                <option value="Last Month">Last Month</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">From *</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">To *</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mb-6">
                        <button className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400">
                            Submit
                        </button>
                    </div>

                    {/* Table Section */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse border-spacing-0">
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

                    <div className="flex justify-between items-center mt-4 text-gray-500">
                        <p className="text-sm">Showing 1 - of 1 items.</p>
                        <div className="flex items-center space-x-2">
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
            )}

        </div>
    );
};

export default RebateSection;
