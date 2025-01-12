"use client";

import React from "react";
import "./style.css"

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="text-center">
                {/* Spinner */}
                <div className="relative flex items-center justify-center min-h-screen ">
                    

                    {/* Enhanced Middle Glow */}
                    <div className="absolute w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 animate-ping"></div>

                    {/* Spinner */}
                    <div className="relative w-20 h-20 border-t-4 border-b-4 border-purple-500 border-opacity-75 rounded-full animate-spin">
                        {/* Rotating Gradient Effect */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30 blur-sm"></div>
                    </div>

                    {/* Inner Glow */}
                    <div className="absolute w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-50"></div>

                    {/* Logo */}
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736680213/favicon_hsdwji.png"
                        alt="Logo"
                        className="absolute w-12 h-12 z-10"
                    />
                </div>



            </div>
        </div>
    );
};

export default LoadingPage;
