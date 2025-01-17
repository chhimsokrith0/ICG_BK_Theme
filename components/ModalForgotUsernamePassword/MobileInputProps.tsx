import React, { useState } from "react";

interface MobileInputProps {
    onClose: () => void;
}

const MobileInput: React.FC<MobileInputProps> = ({ onClose }) => {
    const [contactNumber, setContactNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [selectedCountry, setSelectedCountry] = useState({ code: "+60", flag: "MY", name: "Malaysia" });

    const countries = [
        {
            code: "+60",
            flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/MY_jrcgpc.png",
            name: "Malaysia"
        },
        {
            code: "+66",
            flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/TH_uwz8wy.png",
            name: "Thailand"
        },
        {
            code: "+62",
            flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/ID_ngtub3.png",
            name: "Indonesia"
        },
        {
            code: "+65",
            flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/SG_flag.png",
            name: "Singapore"
        },
        {
            code: "+91",
            flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/IN_flag.png",
            name: "India"
        },
        {
            code: "+63",
            flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/PH_flag.png",
            name: "Philippines"
        },
    ];

    // https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/MY_jrcgpc.png
    // https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/ID_ngtub3.png
    // https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/TH_uwz8wy.png
    return (
        <div className="mb-6">
            <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
            >
                Enter your mobile number <span className="text-red-500">*</span>
            </label>
            <div className="relative mb-4">
                <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                    {/* Country Code Dropdown */}
                    <div className="relative group">
                        <button
                            type="button"
                            className="flex items-center px-3 bg-gray-200 rounded-l-md focus:outline-none"
                        >
                            <img
                                src={selectedCountry.flag}
                                alt={selectedCountry.name}
                                className="h-4 w-4 mr-2"
                            />
                            <span className="text-sm text-gray-600">{selectedCountry.code}</span>
                            <svg
                                className="ml-2 w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        {/* Dropdown List */}
                        <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-md w-56 z-10 hidden group-hover:block">
                            <ul className="py-2 text-sm">
                                {countries.map((country) => (
                                    <li
                                        key={country.code}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                        onClick={() => setSelectedCountry(country)}
                                    >
                                        <img
                                            src={country.flag}
                                            alt={country.name}
                                            className="h-4 w-4 mr-2"
                                        />
                                        {`${country.code} ${country.name}`}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Contact Number Input */}
                    <input
                        id="contactNumber"
                        type="text"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className="flex-1 px-4 py-2 border-l border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                        placeholder="Contact Number"
                    />
                </div>

            </div>

            <div className="mb-4">
                <label htmlFor="sendTo" className="block text-sm font-medium text-gray-700 mb-2">
                    Send to
                </label>
                <select
                    id="sendTo"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                >
                    <option>Please Select</option>
                    <option>Phone</option>
                    <option>WhatsApp</option>
                </select>
            </div>

            <div className="mb-6">
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter the OTP
                </label>
                <div className="flex items-center">
                    <input
                        id="otp"
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                        placeholder="Enter OTP"
                    />
                    <button
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-r-md hover:bg-gray-300"
                        disabled
                    >
                        Send OTP
                    </button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                    Did not receive OTP? Contact{" "}
                    <a href="#" className="text-blue-500 underline hover:text-blue-600">
                        Customer Service
                    </a>{" "}
                    for assistance.
                </p>
            </div>

            <div className="flex justify-between gap-4">
                <button className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600">
                    Confirm
                </button>
                <button
                    className="flex-1 px-4 py-2 bg-blue-200 text-blue-800 rounded-md font-medium hover:bg-blue-300"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>

            <p className="text-sm text-center text-gray-500 mt-4">
                or return to{" "}
                <a href="/login" className="text-blue-500 underline hover:text-blue-600">
                    Log in
                </a>
            </p>
        </div>
    );
};

export default MobileInput;
