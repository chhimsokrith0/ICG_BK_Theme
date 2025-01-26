'use client';

import React, { useState } from 'react';

const TransactionHistory = () => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Transaction History Submitted');
    };

    return (
        <div className="bg-white px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            {/* Filter Section */}
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6"
            >
                {/* Transaction Type */}
                <div>
                    <label
                        htmlFor="transactionType"
                        className="block text-xs sm:text-sm font-medium text-gray-700"
                    >
                        Transaction Type
                    </label>
                    <select
                        id="transactionType"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-xs sm:text-sm"
                    >
                        <option value="Betting Summary">Betting Summary</option>
                        <option value="Deposit">Deposit</option>
                        <option value="Withdraw">Withdraw</option>
                    </select>
                </div>

                {/* Transaction Date */}
                <div>
                    <label
                        htmlFor="transactionDate"
                        className="block text-xs sm:text-sm font-medium text-gray-700"
                    >
                        Transaction Date
                    </label>
                    <select
                        id="transactionDate"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-xs sm:text-sm"
                    >
                        <option value="Today">Today</option>
                        <option value="Yesterday">Yesterday</option>
                        <option value="Last 7 Days">Last 7 Days</option>
                    </select>
                </div>

                {/* From Date */}
                <div>
                    <label
                        htmlFor="fromDate"
                        className="block text-xs sm:text-sm font-medium text-gray-700"
                    >
                        From <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        id="fromDate"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-xs sm:text-sm"
                    />
                </div>

                {/* To Date */}
                <div>
                    <label
                        htmlFor="toDate"
                        className="block text-xs sm:text-sm font-medium text-gray-700"
                    >
                        To <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        id="toDate"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-xs sm:text-sm"
                    />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md focus:outline-none text-sm sm:text-base"
                    >
                        Submit
                    </button>
                </div>
            </form>


            {/* Table Section */}
            <div className="overflow-x-auto w-full">
                <table className="min-w-full text-left border-collapse border-spacing-0 text-xs sm:text-sm md:text-base">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium whitespace-nowrap">
                                Game Provider
                            </th>
                            <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium whitespace-nowrap">
                                Bet Count
                            </th>
                            <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium whitespace-nowrap">
                                Bet Amount
                            </th>
                            <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium whitespace-nowrap">
                                Valid Bet Amount
                            </th>
                            <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium whitespace-nowrap">
                                Bonus Turnover
                            </th>
                            <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium whitespace-nowrap">
                                Turnover Without Bonus
                            </th>
                            <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium whitespace-nowrap">
                                Total Bonus
                            </th>
                            <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium whitespace-nowrap">
                                Total Rebate
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                colSpan={8}
                                className="px-2 sm:px-4 py-6 text-center text-gray-400 font-medium"
                            >
                                No transaction yet
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-gray-500">
                <p className="text-xs sm:text-sm mb-2 sm:mb-0">
                    Showing 1 - of items.
                </p>
                <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                        &laquo;
                    </button>
                    <button className="px-2 py-1 rounded-md bg-blue-500 text-white">1</button>
                    <button className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
                        &raquo;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;
