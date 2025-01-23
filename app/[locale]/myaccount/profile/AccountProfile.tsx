'use client';

import React, { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

const AccountProfile = () => {
    const [activeTab, setActiveTab] = useState('Account Profile');

    const tabs = [
        { name: 'Account Profile' },
        { name: 'KYC Submission' },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mt-2 ml-2">
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

            {/* Account Profile Content */}
            {activeTab === 'Account Profile' && (
                <>
                    <div className="bg-white rounded-lg p-6 mt-2 ml-2">
                        {/* Personal Information */}
                        <div className="mb-6">
                            <h2 className="text-gray-700 font-bold mb-4">Personal Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-gray-500">Username</p>
                                    <p className="text-gray-700">ssgighuy7y8sh</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-500">Date of Birth</p>
                                    <button className="p-1 bg-gray-100 rounded hover:bg-gray-200">
                                        <PencilIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                                    </button>
                                </div>
                                <div>
                                    <p className="text-gray-500">Full Name</p>
                                    <p className="text-gray-700">chhim sokrith</p>
                                </div>
                                <div>
                                    <p className="text-gray-500">Currency</p>
                                    <p className="text-gray-700">USD</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="mb-6">
                            <h2 className="text-gray-700 font-bold mb-4">Contact Info</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-500">Email</p>
                                    <div className="flex items-center">
                                        <p className="text-gray-700">so********m@gmail.com</p>
                                        <button className="p-1 bg-gray-100 rounded hover:bg-gray-200 ml-2">
                                            <PencilIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-500">Contact</p>
                                    <div className="flex items-center">
                                        <p className="text-gray-700">+85******284</p>
                                        <button className="p-1 bg-gray-100 rounded hover:bg-gray-200 ml-2">
                                            <PencilIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Auto Transfer */}
                        <div className="mb-6">
                            <h2 className="text-gray-700 font-bold mb-4">Auto Transfer</h2>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-orange-500"
                                        checked
                                        readOnly
                                    />
                                    <span className="text-gray-700 font-medium">Active</span>
                                </label>
                                <p className="text-gray-500">
                                    Automatically transfer funds from your main wallet to your preferred provider wallet when you launch the games.
                                </p>
                            </div>
                        </div>

                        {/* Banking Details */}
                        <div className="mb-6">
                            <h2 className="text-gray-700 font-bold">Banking Details</h2>
                            <p className="text-gray-500">No banking details added yet.</p>
                        </div>

                        {/* User Verification */}
                        <div className="mt-6 bg-gray-50 p-4 rounded-md">
                            <h2 className="text-gray-700 font-bold mb-4">User Verification</h2>
                            <div className="flex space-x-4">
                                <button className="flex items-center justify-center bg-gray-100 p-3 rounded-md hover:bg-gray-200">
                                    <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737631294/user_efdctu.gif" alt="User Icon" className="w-14 h-14" />
                                </button>
                                <button className="flex items-center justify-center bg-gray-100 p-3 rounded-md hover:bg-gray-200">
                                    <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737631294/forward-mail_zypo8j.gif" alt="Email Icon" className="w-14 h-14" />
                                </button>
                                <button className="flex items-center justify-center bg-gray-100 p-3 rounded-md hover:bg-gray-200">
                                    <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737631294/phone_xmvot8.gif" alt="Phone Icon" className="w-14 h-14" />
                                </button>
                                <button className="flex items-center justify-center bg-gray-100 p-3 rounded-md hover:bg-gray-200">
                                    <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737631294/verified_eielt4.gif" alt="Document Icon" className="w-14 h-14" />
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* KYC Submission Content */}
            {activeTab === 'KYC Submission' && (
                <div className="bg-white rounded-lg p-6 mt-2 ml-2">
                    <h2 className="text-gray-700 font-bold text-lg mb-6">Know Your Customers</h2>
                    {/* KYC Levels */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-50 p-4 rounded-md flex items-center justify-between w-full md:w-48">
                            <div className="flex flex-col items-center space-y-2">
                                <div className="relative">
                                    <div className="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center">
                                        <span className="text-gray-600 text-xl font-bold">0</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm font-medium text-center">KYC Level</p>
                            </div>
                        </div>

                        <div>
                            <table className="table-auto w-full text-sm text-gray-700">
                                <thead>
                                    <tr>
                                        <th className="text-left pb-2">KYC Level</th>
                                        <th className="text-left pb-2">Requirements</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2">Starter</td>
                                        <td>Bankbook only</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">Verified</td>
                                        <td>ID/Passport only</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">Verified Plus</td>
                                        <td>ID/Passport + Bankbook</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">Verified Plus+</td>
                                        <td>ID/Passport + Real Time OR ID/Passport + Real Time + Bankbook</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* File Uploads */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <p className="text-gray-700 font-medium mb-2">ID/Passport (Front)</p>
                            <div className="flex items-center space-x-2">
                                <input type="file" className="hidden" id="id-passport" />
                                <label
                                    htmlFor="id-passport"
                                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer text-sm hover:bg-gray-200"
                                >
                                    Choose file
                                </label>
                                <span className="text-gray-500">No file chosen</span>
                                <button className="w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                                    <span className="text-gray-500 text-xs">i</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-700 font-medium mb-2">Selfie with ID/Passport</p>
                            <div className="flex items-center space-x-2">
                                <input type="file" className="hidden" id="selfie-id" />
                                <label
                                    htmlFor="selfie-id"
                                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer text-sm hover:bg-gray-200"
                                >
                                    Choose file
                                </label>
                                <span className="text-gray-500">No file chosen</span>
                                <button className="w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                                    <span className="text-gray-500 text-xs">i</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-700 font-medium mb-2">Bankbook</p>
                            <div className="flex items-center space-x-2">
                                <input type="file" className="hidden" id="bankbook" />
                                <label
                                    htmlFor="bankbook"
                                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer text-sm hover:bg-gray-200"
                                >
                                    Choose file
                                </label>
                                <span className="text-gray-500">No file chosen</span>
                                <button className="w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                                    <span className="text-gray-500 text-xs">i</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-700 font-medium mb-2">Real Time</p>
                            <div className="flex items-center space-x-2">
                                <input type="file" className="hidden" id="real-time" />
                                <label
                                    htmlFor="real-time"
                                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md cursor-pointer text-sm hover:bg-gray-200"
                                >
                                    Choose file
                                </label>
                                <span className="text-gray-500">No file chosen</span>
                                <button className="w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                                    <span className="text-gray-500 text-xs">i</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Warning and Submit */}
                    <p className="text-red-500 text-sm mb-4">
                        Only user with deposit record allowed to submit KYC
                    </p>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default AccountProfile;
