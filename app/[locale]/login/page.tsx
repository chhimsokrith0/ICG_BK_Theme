'use client';

import React, { useState, useEffect } from 'react';
import GetUsernameModal from '@/components/ModalForgotUsernamePassword/GetUsernameModal';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter(); // Use router for navigation

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        const result = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });

        if (result?.error) {
            setErrorMessage(result.error);
            toast.error('Invalid username or password. Please try again!', {
                position: 'top-right',
            });
        } else {
            toast.success('Login successful! Redirecting...', {
                position: 'top-right',
            });
            setTimeout(() => {
                router.push('/');
            }, 2000); // Delay for the user to see the toast
        }
    };

    return (
        <div
            className={`flex ${isMobile ? 'flex-col' : 'justify-center items-center'
                } mt-8 px-4`}
        >
             <ToastContainer />
            <div
                className={`flex ${isMobile ? 'flex-col' : 'flex-row'
                    } w-full max-w-[1500px] rounded-lg overflow-hidden shadow-lg bg-white`}
            >
                {/* Left Section */}
                <div className={`flex-1 px-6 py-8 ${isMobile ? '' : 'lg:max-w-lg'}`}>
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
                        Log in
                    </h1>

                    <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
                        {/* Social Media Buttons */}
                        {[
                            {
                                name: 'Telegram',
                                color: 'blue',
                                src: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927711/telegram_2504941_vweah7.png',
                            },
                            {
                                name: 'Google',
                                color: 'red',
                                src: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927710/google_2504914_oi4est.png',
                            },
                            {
                                name: 'WhatsApp',
                                color: 'green',
                                src: 'https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927711/whatsapp_2504957_aakbdh.png',
                            },
                        ].map((item, index) => (
                            <button
                                key={index}
                                className={`flex items-center justify-center px-5 py-3 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 text-${item.color}-600 hover:from-${item.color}-100 hover:to-${item.color}-200 transition duration-300`}
                            >
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    className="inline w-6 h-6 mr-3"
                                />
                                <span className="font-medium text-base">{item.name}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center mb-4">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-2 text-sm text-gray-500">OR</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Username <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition duration-300"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition duration-300"
                                placeholder="Enter your password"
                            />
                        </div>
                        {errorMessage && (
                            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
                        )}
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg shadow-lg font-medium hover:from-orange-600 hover:to-orange-700 focus:ring-2 focus:ring-orange-400 transition duration-300"
                        >
                            Log in
                        </button>
                    </form>

                    <div className="mt-6 text-sm text-gray-500 text-center lg:text-left">
                        <p>
                            Forgot{' '}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="text-blue-500 underline"
                            >
                                username
                            </button>{' '}
                            or{' '}
                            <a href="#" className="text-blue-500 underline">
                                password
                            </a>
                            ?
                        </p>
                        <p>
                            Don't have an account?{' '}
                            <a href="#" className="text-blue-500 underline">
                                Create Account
                            </a>
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                {!isMobile && (
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
                )}
            </div>
            <GetUsernameModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default LoginPage;
