'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ChangePassword = () => {
    const [activeTab, setActiveTab] = useState('Login Password'); // For active tab management
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });
    const [provider, setProvider] = useState('Dream Gaming');

    const tabs = [
        { name: 'Login Password' },
        { name: 'Game Password' },
    ];

    const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
        setShowPassword((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    return (
        <div className="bg-white p-6 mt-2 ml-2 max-w-md">
            {/* Tabs */}
            <div className="flex  gap-2 border-gray-300 mb-6">
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

            {/* Login Password Tab Content */}
            {activeTab === 'Login Password' && (
                <div className="space-y-4">
                    {/* Current Password */}
                    <div className="relative">
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                            Current Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="currentPassword"
                            type={showPassword.current ? 'text' : 'password'}
                            placeholder="Current Password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('current')}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                        >
                            <FontAwesomeIcon icon={showPassword.current ? faEyeSlash : faEye} />
                        </button>
                    </div>

                    {/* New Password */}
                    <div className="relative">
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                            New Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="newPassword"
                            type={showPassword.new ? 'text' : 'password'}
                            placeholder="New Password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('new')}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                        >
                            <FontAwesomeIcon icon={showPassword.new ? faEyeSlash : faEye} />
                        </button>
                    </div>

                    {/* Confirm New Password */}
                    <div className="relative">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm New Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="confirmPassword"
                            type={showPassword.confirm ? 'text' : 'password'}
                            placeholder="Confirm New Password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('confirm')}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                        >
                            <FontAwesomeIcon icon={showPassword.confirm ? faEyeSlash : faEye} />
                        </button>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}

            {activeTab === 'Game Password' && (
                <div className="space-y-6">
                    {/* Provider Dropdown */}
                    <div>
                        <label htmlFor="provider" className="block text-sm font-medium text-gray-700">
                            Provider <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="provider"
                            value={provider}
                            onChange={(e) => setProvider(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            <option value="Dream Gaming">Dream Gaming</option>
                            <option value="Evolution Gaming">Evolution Gaming</option>
                            <option value="Pragmatic Play">Pragmatic Play</option>
                        </select>
                    </div>

                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Username"
                            value="ssa00140112664@ZT8"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            readOnly
                        />
                    </div>

                    {/* New Password */}
                    <div className="relative">
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                            New Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="newPassword"
                            type={showPassword.new ? 'text' : 'password'}
                            placeholder="New Password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('new')}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                        >
                            <FontAwesomeIcon icon={showPassword.new ? faEyeSlash : faEye} />
                        </button>
                    </div>

                    {/* Confirm New Password */}
                    <div className="relative">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm New Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="confirmPassword"
                            type={showPassword.confirm ? 'text' : 'password'}
                            placeholder="Confirm New Password"
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('confirm')}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                        >
                            <FontAwesomeIcon icon={showPassword.confirm ? faEyeSlash : faEye} />
                        </button>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChangePassword;
