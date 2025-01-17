'use client';
import React, { useState } from 'react';
import GetUsernameModal from '@/components/ModalForgotUsernamePassword/GetUsernameModal';
import Link from 'next/link';

const page: React.FC = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [username, setUsername] = useState(""); // State for username
    const [password, setPassword] = useState(""); // State for password
    const [contactNumber, setContactNumber] = useState(""); // State for contact number
    const [email, setEmail] = useState(""); // State for email
    const [fullName, setFullName] = useState(""); // State for full name
    const [preferredCurrency, setPreferredCurrency] = useState("USD"); // State for preferred currency

    const handleLogin = () => {
        // Handle form submission logic here
        console.log({ username, password, contactNumber, email, fullName, preferredCurrency });
    };

    return (
        <div className="flex justify-center items-center p-10">
            <div className="flex w-[100%] max-w-[1500px] rounded-lg overflow-hidden shadow-lg bg-white">
                {/* Left Section */}
                <div className="flex-1 lg:max-w-lg px-8 py-12">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-8">Log in</h1>

                    <div className="flex space-x-4 mb-8">
                        {/* Telegram Button */}
                        <button className="flex-1 flex items-center justify-center px-5 py-3 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 hover:from-blue-100 hover:to-blue-200 transition duration-300">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927711/telegram_2504941_vweah7.png"
                                alt="Telegram"
                                className="inline w-6 h-6 mr-3"
                            />
                            <span className="font-medium text-base">Telegram</span>
                        </button>

                        {/* Google Button */}
                        <button className="flex-1 flex items-center justify-center px-5 py-3 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-red-50 to-red-100 text-red-600 hover:from-red-100 hover:to-red-200 transition duration-300">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927710/google_2504914_oi4est.png"
                                alt="Google"
                                className="inline w-6 h-6 mr-3"
                            />
                            <span className="font-medium text-base">Google</span>
                        </button>

                        {/* WhatsApp Button */}
                        <button className="flex-1 flex items-center justify-center px-5 py-3 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-green-50 to-green-100 text-green-600 hover:from-green-100 hover:to-green-200 transition duration-300">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927711/whatsapp_2504957_aakbdh.png"
                                alt="WhatsApp"
                                className="inline w-6 h-6 mr-3"
                            />
                            <span className="font-medium text-base">WhatsApp</span>
                        </button>
                    </div>


                    <div className="flex items-center mb-6">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-2 text-sm text-gray-500">OR</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        {/* Username Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Username <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                                placeholder="Enter your username"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                                placeholder="Enter your password"
                            />
                            <ul className="text-sm text-red-500 mt-2">
                                <li className="flex items-center">
                                    <span className="mr-2">❌</span> 8 to 20 characters
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">❌</span> Uppercase and lowercase alphabet (a-z)
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">❌</span> Number (0-9)
                                </li>
                            </ul>
                        </div>

                        {/* Contact Number Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Contact number <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
                                <button
                                    type="button"
                                    className="flex items-center px-3 bg-gray-200 rounded-l-lg focus:outline-none"
                                >
                                    <img
                                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/KH.png"
                                        alt="Cambodia"
                                        className="h-4 w-4 mr-2"
                                    />
                                    <span className="text-sm text-gray-600">+855</span>
                                </button>
                                <input
                                    type="number"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    className="flex-1 px-4 py-3 border-l border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                    placeholder="Contact Number"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Full Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">np
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Preferred Currency Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Preferred Currency <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={preferredCurrency}
                                onChange={(e) => setPreferredCurrency(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="USD">Cambodia - US Dollar (USD)</option>
                                {/* Add more currency options here */}
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg shadow-lg font-medium hover:from-orange-600 hover:to-orange-700 focus:ring-2 focus:ring-orange-400 transition duration-300"
                        >
                            Register
                        </button>
                    </form>

                    <div className="mt-6 text-sm text-gray-500">
                        <p>
                            By clicking the Register button, I hereby acknowledge that I am above 18 years old and have read and accepted your terms & conditions.
                        </p>
                        <p>
                        Already have an account?{' '}
                            <Link href="/login" className="text-blue-500 underline">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="hidden lg:flex flex-1 bg-gray-50 justify-center items-center">
                    <div className="text-center">
                        {/* Apply rounded-lg and overflow-hidden on the parent container */}
                        <div className="overflow-hidden rounded-lg mx-auto">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736925743/bfc_fmuppp.jpg"
                                alt="Burnley F.C. Partner"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <h3 className="mt-4 text-lg font-semibold text-gray-800">
                            OFFICIAL PARTNER OF <br /> BURNLEY F.C.
                        </h3>
                        <div className="mt-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 34.77543 25.80945"
                                className="w-32 h-8 mx-auto"
                            >
                                <style>
                                    {`
                                        .st0 { fill: #BA1F63; }
                                        .st1 { fill: #FBB41C; }
                                        .st2 { fill: #358FCD; }
                                        .st3 { fill: #EB1F26; }
                                        .st4 { fill: #691E5B; }
                                        .st5 { fill: #FFFFFF; }
                                    `}
                                </style>
                                <path className="st0" d="M..."></path>
                                <path className="st1" d="M..."></path>
                            </svg>
                            <p className="text-sm text-gray-600 mt-2">
                                Regulated & Licensed <br /> by the Government of Curacao
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Get Username Modal */}
            <GetUsernameModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default page;
