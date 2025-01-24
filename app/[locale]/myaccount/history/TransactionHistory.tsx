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
        <div className="bg-white">
            {/* Filter Section */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div>
                    <label htmlFor="transactionType" className="block text-sm font-medium text-gray-700">
                        Transaction Type
                    </label>
                    <select
                        id="transactionType"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        <option value="Betting Summary">Betting Summary</option>
                        <option value="Deposit">Deposit</option>
                        <option value="Withdraw">Withdraw</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="transactionDate" className="block text-sm font-medium text-gray-700">
                        Transaction Date
                    </label>
                    <select
                        id="transactionDate"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        <option value="Today">Today</option>
                        <option value="Yesterday">Yesterday</option>
                        <option value="Last 7 Days">Last 7 Days</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700">
                        From <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        id="fromDate"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div>
                    <label htmlFor="toDate" className="block text-sm font-medium text-gray-700">
                        To <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        id="toDate"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="md:col-span-4 flex justify-center mt-4">
                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border-spacing-0">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-4 py-3 text-gray-700 font-medium">Game Provider</th>
                            <th className="px-4 py-3 text-gray-700 font-medium">Bet Count</th>
                            <th className="px-4 py-3 text-gray-700 font-medium">Bet Amount</th>
                            <th className="px-4 py-3 text-gray-700 font-medium">Valid Bet Amount</th>
                            <th className="px-4 py-3 text-gray-700 font-medium">Bonus Turnover</th>
                            <th className="px-4 py-3 text-gray-700 font-medium">Turnover Without Bonus</th>
                            <th className="px-4 py-3 text-gray-700 font-medium">Total Bonus</th>
                            <th className="px-4 py-3 text-gray-700 font-medium">Total Rebate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                colSpan={8}
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
                <p className="text-sm">Showing 1 - of items.</p>
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
