"use client";

import React from "react";

const LuckyWheelLanding = () => {
    return (
        <div
            className="flex flex-col items-center justify-center p-4 min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 relative"
        >
            {/* Lucky Wheel Wrapper */}
            <div className="lucky-wheel-wrapper relative flex flex-col items-center">
                {/* Flags */}
                <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838572/flag-2_astkip.png"
                    className="icon-1 absolute top-[-60px] left-[-120px] w-24"
                    alt="floating-prize"
                />
                <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838572/flag-1_trnknt.png"
                    className="icon-2 absolute top-[-60px] right-[-120px] w-24"
                    alt="floating-prize"
                />
                {/* Crystals */}
                <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838571/crystal-1_xvhkgj.png"
                    className="icon-3 absolute left-[80px] top-[300px] w-10 h-10 animate-pulse"
                    alt="floating-prize"
                />
                <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838571/crystal-2_w2c2zc.png"
                    className="icon-4 absolute right-[80px] top-[300px] w-10 h-10 animate-pulse"
                    alt="floating-prize"
                />
                <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838572/crystal-3_tkoc7m.png"
                    className="icon-5 absolute bottom-[-100px] left-[20px] w-8 h-8 animate-pulse"
                    alt="floating-prize"
                />
                <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838571/crystal-4_yfera5.png"
                    className="icon-6 absolute bottom-[-100px] right-[20px] w-8 h-8 animate-pulse"
                    alt="floating-prize"
                />
                {/* Wheel */}
                <div id="spin" className="relative flex items-center justify-center">
                    <img
                        loading="lazy"
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838580/spin-button_ldvjot.png"
                        className="inner-wheel w-[300px] h-[300px] rounded-full"
                        alt="inner-wheel"
                    />
                    <ul className="prize-name-list absolute text-center text-white text-sm font-bold">
                        <li style={{ transform: "rotate(0deg)" }}>250 Activity Points</li>
                        <li style={{ transform: "rotate(60deg)" }}>Special Prize</li>
                        <li style={{ transform: "rotate(120deg)" }}>Kawasaki Ninja 650 ABS</li>
                        <li style={{ transform: "rotate(180deg)" }}>MYR 8 - 18 Angpao</li>
                        <li style={{ transform: "rotate(240deg)" }}>MYR 18 - 28 Angpao</li>
                        <li style={{ transform: "rotate(300deg)" }}>MYR 128 Angpao</li>
                    </ul>
                </div>

                {/* Wheel Frame */}
                <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838575/lucky-wheel-outer-frame_t5qkcm.gif"
                    className="lucky-wheel-frame absolute w-[340px] h-[340px]"
                    alt="lucky-wheel-frame"
                />

                {/* Spin Button */}
                <button className="spin-icon bg-orange-500 text-white py-2 px-4 rounded-full absolute bottom-[-40px] shadow-lg hover:bg-orange-600">
                    <img
                        loading="lazy"
                        src="/public/html/default_whitelabel/shared-image/lucky_wheel/s2/spin-button.png"
                        alt="spin-icon"
                        className="w-12 h-12"
                    />
                </button>

                {/* Spin Content */}
                <div className="spin-content mt-16 text-center">
                    <button className="spin-content-btn bg-orange-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-orange-700">
                        Spin Here
                    </button>
                    <p className="spin-content-reminder-title mt-4 text-gray-200">
                        You have 0 spin(s) available
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LuckyWheelLanding;
