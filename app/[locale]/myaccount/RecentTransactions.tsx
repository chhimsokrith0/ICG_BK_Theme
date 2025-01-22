import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const RecentTransactions = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="bg-white mt-2 ml-2 rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
                <p className="text-gray-700 font-medium">My Recent Transactions</p>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="focus:outline-none"
                >
                    {isExpanded ? (
                        <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    )}
                </button>
            </div>
            {isExpanded && (
                <div className="text-center">
                    <div className="grid grid-cols-4 text-gray-700 text-sm font-semibold bg-gray-100 rounded-md p-2 mb-4">
                        <span className="text-center">Transaction Date</span>
                        <span className="text-center">Amount</span>
                        <span className="text-center">Method</span>
                        <span className="text-center">Status</span>
                    </div>

                    <p className="text-gray-700">No transaction yet</p>
                    <button
                        className="mt-4 text-blue-500 hover:underline focus:outline-none"
                    >
                        Read More
                    </button>
                </div>
            )}
        </div>
    );
};

export default RecentTransactions;
