'use client';

import React, { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const BankWithdrawal = () => {
    const [activeTab, setActiveTab] = useState("Bank Withdrawal");

    const tabs = [
        { name: "Bank Withdrawal" },
        { name: "Crypto Address" },
        { name: "E-Wallet Details" },
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
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                            : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                            }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* PIN Code Warning */}
            {activeTab === "Bank Withdrawal" && (
                <div className="mb-4 flex items-center border border-red-200 bg-red-50 p-4 rounded-md">
                    <ExclamationCircleIcon className="w-8 h-8 text-red-500 mr-3" />
                    <p className="text-gray-700">
                        Your 6 digit pin code has not been set up yet. Kindly set your PIN{" "}
                        <a
                            href="/set-pin"
                            className="text-blue-500 underline hover:text-blue-700"
                        >
                            here
                        </a>
                        .
                    </p>
                </div>
            )}

            {/* Content for Active Tab */}
            {activeTab === "Bank Withdrawal" && (
                <div className="overflow-x-auto">
                    <table className="w-full rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left font-medium text-gray-700">
                                    Bank
                                </th>
                                <th className="px-6 py-3 text-left font-medium text-gray-700">
                                    Account Holder
                                </th>
                                <th className="px-6 py-3 text-left font-medium text-gray-700">
                                    Account No
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    colSpan={3}
                                    className="px-6 py-8 text-center text-gray-400 font-medium"
                                >
                                    No Bank Account Yet!
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === "Crypto Address" && (
                <div className="text-gray-700">
                    {/* Table for Crypto Addresses */}
                    <div className="overflow-x-auto">
                        <table className="w-full rounded-lg">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left font-medium text-gray-700">Coin</th>
                                    <th className="px-6 py-3 text-left font-medium text-gray-700">Network</th>
                                    <th className="px-6 py-3 text-left font-medium text-gray-700">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        colSpan={3}
                                        className="px-6 py-8 text-center text-gray-400 font-medium"
                                    >
                                        No Crypto Address Yet!
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Divider */}
                    <hr className="my-8 border-gray-300" />

                    {/* Add Crypto Address Button */}
                    <div className="text-center">
                        <button
                            className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition"
                        >
                            Add Crypto Address
                        </button>
                    </div>
                </div>
            )}


            {activeTab === "E-Wallet Details" && (
                <div className="text-gray-700">
                    {/* PIN Code Warning */}
                    <div className="mb-4 flex items-center border border-red-200 bg-red-50 p-4 rounded-md">
                        <ExclamationCircleIcon className="w-8 h-8 text-red-500 mr-3" />
                        <p className="text-gray-700">
                            Your 6 digit pin code has not been set up yet. Kindly set your PIN{" "}
                            <a
                                href="/set-pin"
                                className="text-blue-500 underline hover:text-blue-700"
                            >
                                here
                            </a>
                            .
                        </p>
                    </div>

                    {/* E-Wallet Details Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full rounded-lg">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-6 py-3 text-left font-medium text-gray-700">
                                        E-Wallet
                                    </th>
                                    <th className="px-6 py-3 text-left font-medium text-gray-700">
                                        Wallet Name
                                    </th>
                                    <th className="px-6 py-3 text-left font-medium text-gray-700">
                                        Wallet No
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        colSpan={3}
                                        className="px-6 py-8 text-center text-gray-400 font-medium"
                                    >
                                        No Wallet Account Yet!
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

        </div>
    );
};

export default BankWithdrawal;
