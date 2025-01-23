'use client';
import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

const ImportantNotice = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="bg-white mt-2 ml-2 rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-2">
                    {/* Replace SVG with Heroicons ExclamationTriangleIcon */}
                    <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />
                    <p className="text-gray-700 font-medium">Important Notice</p>
                </div>
                <button onClick={() => setIsExpanded(!isExpanded)} className="focus:outline-none">
                    {isExpanded ? (
                        <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    )}
                </button>
            </div>
            {isExpanded && (
                <ul className="list-disc pl-6 text-sm text-gray-600">
                    <li>
                        Kindly check with our <span className="font-semibold text-black">24/7 LIVECHAT</span> if your transaction is pending for more than 10 minutes.
                    </li>
                    <li>
                        Withdrawal bank account name must match with the registered full name; members are not allowed to withdraw to 3rd party bank accounts.
                    </li>
                    <li>
                        Some game providers require 15 to 30 minutes of report sync time. Kindly bear with us during the required sync time.
                    </li>
                    <li>
                        <a
                            href="/read-more"
                            className="text-blue-500 hover:underline"
                        >
                            Read More
                        </a>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default ImportantNotice;
