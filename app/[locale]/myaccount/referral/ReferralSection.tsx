'use client';

import React, { useState } from 'react';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import InviteFriendButton from './InviteFriendButton';

const ReferralSection = () => {
    const [activeTab, setActiveTab] = useState('My Referral');

    const tabs = [
        { name: 'My Referral' },
        { name: 'My Bonus' },
    ];

    return (
        <div className="bg-white mx-2 sm:mx-4 rounded-lg shadow-md p-4 sm:p-6 h-full">
            {/* Tabs */}
            <div className="flex flex-wrap border-b gap-2 border-gray-300 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-4 sm:px-6 py-2 rounded-t-md font-medium ${activeTab === tab.name
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                            : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                            }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Content */}
            {activeTab === 'My Referral' && (
                <div>
                    {/* Referral Status */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-50 p-4 rounded-md border">
                            <p className="text-gray-700 font-medium">Invitation Accepted</p>
                            <p className="text-xl font-bold text-blue-500">0</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md border">
                            <p className="text-gray-700 font-medium">Mission Complete</p>
                            <p className="text-xl font-bold text-blue-500">0</p>
                        </div>
                    </div>

                    {/* Referral Code and Link */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                            <p className="text-gray-700 font-medium mb-2">Referral Code</p>
                            <div className="flex items-center border border-gray-300 p-2 rounded-md">
                                <p className="text-gray-700 flex-1 truncate">vodydkkr</p>
                                <button className="text-gray-500 hover:text-gray-700">
                                    <ClipboardIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-700 font-medium mb-2">Referral Link</p>
                            <div className="flex items-center border border-gray-300 p-2 rounded-md">
                                <p className="text-gray-700 flex-1 truncate">
                                    https://www.bk33best88.asia/en-kh/register...
                                </p>
                                <button className="text-gray-500 hover:text-gray-700">
                                    <ClipboardIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Offer Section */}
                    <div className="mb-6">
                        <p className="text-gray-700 font-medium mb-4">
                            Share your favourite offers to your friends!
                        </p>
                        <div className="border border-orange-500 rounded-md p-4 mb-4">
                            <p className="text-orange-500 font-bold text-lg mb-2">FREE USD 8</p>
                            <p className="text-gray-500">Turnover 5x</p>
                            <p className="text-gray-500">Deposit USD 10</p>
                        </div>
                        <InviteFriendButton />
                    </div>
                </div>
            )}

            {activeTab === 'My Bonus' && (
                <div className="p-4 sm:p-6">
                    {/* Date Filters */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 mb-6">
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
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 text-sm sm:text-base">
                            Submit
                        </button>
                    </div>

                    {/* Table Section */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse border-spacing-0 text-xs sm:text-sm md:text-base">
                            <thead className="bg-gray-100 border-b">
                                <tr>
                                    <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium">Member Login</th>
                                    <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium">Register Time</th>
                                    <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium">Currency</th>
                                    <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium">Total Deposit</th>
                                    <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium">Bonus Amount</th>
                                    <th className="px-2 sm:px-4 py-2 text-gray-700 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="px-2 sm:px-4 py-6 text-center text-gray-400 font-medium"
                                    >
                                        No transaction yet
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/* Pagination */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                        <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-0">
                            Showing 1 - of 1 items.
                        </p>
                        <div className="flex items-center space-x-2">
                            <button className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-xs sm:text-sm">
                                &laquo;
                            </button>
                            <button className="px-2 py-1 rounded-md bg-blue-500 text-white text-xs sm:text-sm">
                                1
                            </button>
                            <button className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-xs sm:text-sm">
                                &raquo;
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default ReferralSection;
