"use client";

import React, { useState } from "react";

const ProviderSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState("Nextspin");

    const providers = [
        {
            id: 1,
            name: "Nextspin",
            logo: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736768340/nextspin_logo.png",
        },
        {
            id: 2,
            name: "Spadegaming",
            logo: "https://via.placeholder.com/24",
        },
        {
            id: 3,
            name: "Pragmatic Play",
            logo: "https://via.placeholder.com/24",
        },
        {
            id: 4,
            name: "Jili",
            logo: "https://via.placeholder.com/24",
        },
        {
            id: 5,
            name: "YesGetRich",
            logo: "https://via.placeholder.com/24",
        },
        {
            id: 6,
            name: "Fa Chai",
            logo: "https://via.placeholder.com/24",
        },
        {
            id: 7,
            name: "Mega888",
            logo: "https://via.placeholder.com/24",
        },
        {
            id: 8,
            name: "918Kiss",
            logo: "https://via.placeholder.com/24",
        },
        {
            id: 9,
            name: "Funky Games",
            logo: "https://via.placeholder.com/24",
        },
        {
            id: 10,
            name: "Joker",
            logo: "https://via.placeholder.com/24",
        },
        {
            id: 11,
            name: "Habanero",
            logo: "https://via.placeholder.com/24",
        },
        {
            id: 12,
            name: "Red Tiger",
            logo: "https://via.placeholder.com/24",
        },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (providerName: string) => {
        setSelectedProvider(providerName);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full">
            <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-2 shadow-sm">
                {/* Provider Logo (Always Visible) */}
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736768340/nextspin_logo.png"
                    alt="Provider Logo"
                    className="h-6 w-auto object-contain"
                />
                {/* Dropdown Trigger */}
                <div
                    className="relative flex items-center bg-white px-3 py-2 rounded-full shadow-sm cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <span className="text-sm font-medium text-gray-700">
                        {selectedProvider}
                    </span>
                    <i
                        className={`fas fa-chevron-${
                            isOpen ? "up" : "down"
                        } text-gray-500 ml-2`}
                    ></i>
                </div>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg z-10">
                    <ul className="py-2">
                        {providers.map((provider) => (
                            <li
                                key={provider.id}
                                className={`flex items-center px-4 py-2 space-x-2 cursor-pointer hover:bg-gray-100 ${
                                    selectedProvider === provider.name
                                        ? "bg-orange-100"
                                        : ""
                                }`}
                                onClick={() => handleSelect(provider.name)}
                            >
                                <img
                                    src={provider.logo}
                                    alt={provider.name}
                                    className="h-5 w-auto object-contain"
                                />
                                <span className="text-sm font-medium text-gray-700">
                                    {provider.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProviderSelector;
