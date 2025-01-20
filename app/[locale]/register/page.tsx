"use client";

import React, { useState } from "react";
import GetUsernameModal from "@/components/ModalForgotUsernamePassword/GetUsernameModal";
import Link from "next/link";

const Page: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [preferredCurrency, setPreferredCurrency] = useState("USD");

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center p-6 lg:p-10 bg-gray-100 min-h-screen">
            <div className="flex w-full lg:max-w-[1500px] rounded-lg overflow-hidden shadow-lg bg-white">
                {/* Left Section */}
                <div className="flex-1 px-6 py-8 lg:px-12 lg:py-16">
                    <h1 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-8">Create Account</h1>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-2 mb-8">
                        {/* Telegram Button */}
                        <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 hover:from-blue-100 hover:to-blue-200 transition duration-300">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927711/telegram_2504941_vweah7.png"
                                alt="Telegram"
                                className="inline w-5 h-5 mr-2"
                            />
                            <span className="font-medium text-sm lg:text-base">Telegram</span>
                        </button>

                        {/* Google Button */}
                        <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-red-50 to-red-100 text-red-600 hover:from-red-100 hover:to-red-200 transition duration-300">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927710/google_2504914_oi4est.png"
                                alt="Google"
                                className="inline w-5 h-5 mr-2"
                            />
                            <span className="font-medium text-sm lg:text-base">Google</span>
                        </button>

                        {/* WhatsApp Button */}
                        <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-green-50 to-green-100 text-green-600 hover:from-green-100 hover:to-green-200 transition duration-300">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927711/whatsapp_2504957_aakbdh.png"
                                alt="WhatsApp"
                                className="inline w-5 h-5 mr-2"
                            />
                            <span className="font-medium text-sm lg:text-base">WhatsApp</span>
                        </button>
                    </div>


                    <div className="flex items-center mb-6">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-2 text-sm text-gray-500">OR</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    {/* Form */}
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Username <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Contact number <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-lg">
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
                            Already have an account?{" "}
                            <Link href="/login" className="text-blue-500 underline">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="hidden lg:flex flex-1 bg-gray-50 justify-center items-center">
                    <div className="text-center">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
