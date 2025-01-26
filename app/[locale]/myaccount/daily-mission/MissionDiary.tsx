'use client';

import React, { useState } from 'react';
import { ArrowPathIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';

const dailyMissions = [
    { completion: 0, name: 'Daily member deposit', target: 'USD 10 or more', date: '2025-01-23', progress: 0, maxProgress: 10, reward: 'Daily Member Deposit 15 Points' },
    { completion: 0, name: 'Daily member deposit', target: 'USD 20 or more', date: '2025-01-23', progress: 0, maxProgress: 20, reward: 'Daily Member Deposit 20 Points' },
    { completion: 0, name: 'Daily member deposit', target: 'USD 30 or more', date: '2025-01-23', progress: 0, maxProgress: 30, reward: 'Daily Member Deposit 30 Points' },
    { completion: 0, name: 'Daily member deposit', target: 'USD 40 or more', date: '2025-01-23', progress: 0, maxProgress: 40, reward: 'Daily Member Deposit 40 Points' },
    { completion: 0, name: 'Daily member deposit', target: 'USD 50 or more', date: '2025-01-23', progress: 0, maxProgress: 50, reward: 'Daily Member Deposit 50 Points' },
    { completion: 0, name: 'Daily member deposit', target: 'USD 100 or more', date: '2025-01-23', progress: 0, maxProgress: 100, reward: 'Daily Member Deposit 100 Points' },
    { completion: 0, name: 'Daily member deposit', target: 'USD 150 or more', date: '2025-01-23', progress: 0, maxProgress: 150, reward: 'Daily Member Deposit 150 Points' },
    { completion: 0, name: 'Daily member deposit', target: 'USD 200 or more', date: '2025-01-23', progress: 0, maxProgress: 200, reward: 'Daily Member Deposit 200 Points' },
    { completion: 0, name: 'Daily member deposit', target: 'USD 500 or more', date: '2025-01-23', progress: 0, maxProgress: 500, reward: 'Daily Member Deposit 500 Points' },
    { completion: 0, name: 'Daily member deposit', target: 'USD 25 or more', date: '2025-01-23', progress: 0, maxProgress: 25, reward: 'Daily Member Deposit 25 Points' },
];

const MissionDiary = () => {
    return (
        <div className="bg-white mx-2 sm:mx-4 rounded-lg shadow-md p-4 sm:p-6 h-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="flex flex-col">
                        <p className="text-gray-700 font-medium text-sm sm:text-base">
                            Daily Missions: 
                            <span className="bg-gray-100 px-2 py-1 rounded-full text-gray-500 ml-2">
                                00:00 - 23:59 GMT+0
                            </span>
                        </p>
                        <p className="text-sm text-gray-500">
                            Last updated 2025-01-23 10:23:03
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="text-gray-700 font-medium text-sm sm:text-base">
                            Countdown:
                        </p>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-gray-500">
                            13:35:17
                        </span>
                    </div>
                </div>
                <button className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    <ArrowPathIcon className="w-5 h-5" />
                    <span className="text-sm sm:text-base">Spin Now</span>
                </button>
            </div>

            {/* Total Points */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div className="flex items-center space-x-2">
                    <p className="text-gray-700 font-medium text-sm sm:text-base">
                        Total (Point):
                    </p>
                    <p className="text-blue-600 font-bold text-lg sm:text-2xl flex items-center space-x-2">
                        <span>0</span>
                        <button className="text-blue-500 hover:text-blue-700">
                            <ArrowRightCircleIcon className="w-5 h-5" />
                        </button>
                    </p>
                </div>
            </div>

            {/* Table for Larger Screens */}
            <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-gray-700">Completion</th>
                            <th className="px-4 py-2 text-gray-700">Mission Name</th>
                            <th className="px-4 py-2 text-gray-700">Target</th>
                            <th className="px-4 py-2 text-gray-700">Mission Date</th>
                            <th className="px-4 py-2 text-gray-700">Mission Progress</th>
                            <th className="px-4 py-2 text-gray-700">Reward</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dailyMissions.map((mission, index) => (
                            <tr key={index} className="border-b h-20">
                                <td className="px-4 py-2 text-center">{mission.completion}</td>
                                <td className="px-4 py-2 text-center">{mission.name}</td>
                                <td className="px-4 py-2 text-center">{mission.target}</td>
                                <td className="px-4 py-2 text-center">{mission.date}</td>
                                <td className="px-4 py-2">
                                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="absolute h-full bg-blue-500"
                                            style={{
                                                width: `${(mission.progress / mission.maxProgress) * 100}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        {mission.progress}/{mission.maxProgress}
                                    </p>
                                </td>
                                <td className="px-4 py-2 text-center">{mission.reward}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Stacked Layout for Mobile */}
            <div className="block sm:hidden">
                {dailyMissions.map((mission, index) => (
                    <div key={index} className="border-b py-4">
                        <p className="text-gray-700 font-medium text-sm">{mission.name}</p>
                        <p className="text-xs text-gray-500">Target: {mission.target}</p>
                        <p className="text-xs text-gray-500">Date: {mission.date}</p>
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden my-2">
                            <div
                                className="absolute h-full bg-blue-500"
                                style={{
                                    width: `${(mission.progress / mission.maxProgress) * 100}%`,
                                }}
                            ></div>
                        </div>
                        <p className="text-xs text-gray-500">
                            Progress: {mission.progress}/{mission.maxProgress}
                        </p>
                        <p className="text-gray-700 font-medium text-sm mt-2">Reward: {mission.reward}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MissionDiary;
