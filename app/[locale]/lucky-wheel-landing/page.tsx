"use client";

import React from "react";
import "./style.css";
import WinnerList from "./WinnerList";
import PrizeDisplay from "./PrizeDisplay";
import TermsAndConditions from "./TermsAndConditions";
import { useSession } from "next-auth/react";
import Link from "next/link";

const LuckyWheelLanding = () => {
    const { data: session } = useSession();
    return (
        <div className="min-h-screen" style={{
            backgroundImage: `url("https://res.cloudinary.com/dfxqagrkk/image/upload/v1737973867/background_zvobxe.png")`,
        }}>
            <div className="flex flex-row justify-between p-4 relative"

            >
                {/* Left Side - Lucky Wheel */}
                <div className="flex flex-col items-center w-2/3 relative">
                    {/* Banners */}
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838572/flag-1_trnknt.png"
                        className="absolute top-10 left-[15%] w-[204px]"
                        alt="Daily Spin Banner"
                    />
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838572/flag-2_astkip.png"
                        className="absolute top-10 right-[15%] w-[204px]"
                        alt="Lucky Spin Banner"
                    />

                    {/* Floating Crystals */}
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838571/crystal-1_xvhkgj.png"
                        className="absolute top-60 left-28 w-[182px] animate-pulse"
                        alt="Floating Crystal"
                    />
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838571/crystal-2_w2c2zc.png"
                        className="absolute top-60 right-28 w-[109  px] animate-pulse"
                        alt="Floating Crystal"
                    />
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838572/crystal-3_tkoc7m.png"
                        className="absolute bottom-2 left-40 w-[292px] animate-pulse"
                        alt="Floating Crystal"
                    />
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838571/crystal-4_yfera5.png"
                        className="absolute bottom-2 right-40 w-[292px] animate-pulse"
                        alt="Floating Crystal"
                    />

                    {/* Lucky Wheel */}
                    <div className="relative flex flex-col items-center">
                        {/* Lucky Wheel Frame */}
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838575/lucky-wheel-outer-frame_t5qkcm.gif"
                            className="w-[620px] relative z-10"
                            alt="Lucky Wheel Frame"
                        />

                        {/* Inner Wheel */}
                        <div className="absolute top-12 inset-0 flex items-center justify-center">
                            <div className="relative">
                                {/* Inner Wheel Image */}
                                <img
                                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737957963/inner-wheel-6_fplizy.png"
                                    className="w-[480px]"
                                    alt="Inner Wheel"
                                />

                                {/* Prize Name List */}
                                <ul className="absolute inset-0 z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-2">
                                    <li
                                        style={{
                                            transform: "rotate(0deg) translateY(-170px)",
                                            transformOrigin: "center",
                                        }}
                                        className="absolute text-white text-lg font-bold"
                                    >
                                        25 Activity Points
                                    </li>
                                    <li
                                        style={{
                                            transform: "rotate(60deg) translateY(-170px)",
                                            transformOrigin: "center",
                                        }}
                                        className="absolute text-orange-400 text-lg font-bold"
                                    >
                                        USD 1 - 3 Angpao
                                    </li>
                                    <li
                                        style={{
                                            transform: "rotate(120deg) translateY(-170px)",
                                            transformOrigin: "center",
                                        }}
                                        className="absolute text-white text-lg font-bold"
                                    >
                                        50G Gold Bar
                                    </li>
                                    <li
                                        style={{
                                            transform: "rotate(180deg) translateY(-170px)",
                                            transformOrigin: "center",
                                        }}
                                        className="absolute text-orange-400 text-lg font-bold"
                                    >
                                        USD 10 - 20 Angpao
                                    </li>
                                    <li
                                        style={{
                                            transform: "rotate(240deg) translateY(-170px)",
                                            transformOrigin: "center",
                                        }}
                                        className="absolute text-white text-lg font-bold"
                                    >
                                        USD 5 - 10 Angpao
                                    </li>
                                    <li
                                        style={{
                                            transform: "rotate(300deg) translateY(-170px)",
                                            transformOrigin: "center",
                                        }}
                                        className="absolute text-orange-400 text-lg font-bold"
                                    >
                                        Special Prize
                                    </li>
                                </ul>
                            </div>
                        </div>



                        <div className="absolute bottom-2 inset-0 flex items-center justify-center">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838580/spin-button_ldvjot.png"
                                alt="Inner Wheel"
                                className="hover:scale-105 transition-transform"
                            />
                        </div>

                        {/* Spin Button */}
                        {session ?
                            <Link
                                href="/[locale]/lucky-wheel-spin"
                                className="absolute z-20 bottom-2 bg-orange-500 text-center text-white text-lg font-bold py-2 px-8 rounded-lg shadow-lg hover:bg-orange-700"
                                style={{ width: "346px" }}
                            >
                                Spin Here
                            </Link>
                            :
                            <Link
                                href="/login"
                                className="absolute z-20 bottom-2 bg-orange-500 text-center text-white text-lg font-bold py-2 px-8 rounded-lg shadow-lg hover:bg-orange-700"
                                style={{ width: "346px" }}
                            >
                                Spin Here
                            </Link>}

                    </div>

                    {/* Spin Availability */}
                    <p className="absolute bottom-[-30px] z-20 text-white text-lg font-medium">
                        You have 0 spin(s) available
                    </p>

                    <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838573/lucky-wheel-bottom_jsezhy.png" alt=""
                        className="absolute bottom-[-250px]" />
                </div>

                {/* Right Side - Winners List */}
                <div
                    className="absolute right-60 top-16 bg-opacity-50 rounded-lg p-6"
                    style={{
                        backgroundImage: `url("https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838581/winner-bg_kktabj.png")`,
                        width: "420px",
                        height: "688px",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Title */}
                    <h2 className="text-white text-2xl font-bold mt-2 mb-6 text-center">Winners</h2>

                    {/* Buttons */}
                    <div className="flex flex-row justify-center space-x-4 mb-6">
                        <button className="bg-orange-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-orange-600 focus:outline-none">
                            Winner's List
                        </button>
                       

                        {session ?
                            <button className="bg-white text-orange-500 py-2 px-6 rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
                                Winning Record
                            </button>
                            :
                            <Link href="/login" className="bg-white text-orange-500 py-2 px-6 rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
                                Winning Record
                            </Link>
                        }
                    </div>

                    {/* Winners List */}
                    <WinnerList />
                </div>


            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <PrizeDisplay />


            <TermsAndConditions />
        </div>
    );
};

export default LuckyWheelLanding;
