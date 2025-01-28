"use client";

import React from "react";
import "./style.css";
import WinnerList from "./WinnerList";
import PrizeDisplay from "./PrizeDisplay";
import TermsAndConditions from "./TermsAndConditions";
import { useSession } from "next-auth/react";
import Link from "next/link";
import PrizeDisplayMobile from "./PrizeDisplayMobile";
import WinnerListMobile from "./WinnerListMobile";

const LuckyWheelLanding = () => {
    const { data: session } = useSession();
    return (
        <>
            <div className="hidden md:block">
                <div className="min-h-screen"
                    style={{
                        backgroundImage: `url("https://res.cloudinary.com/dfxqagrkk/image/upload/v1737973867/background_zvobxe.png")`,
                    }}>
                    <div className="flex flex-row justify-between p-4 relative">
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
                                        href=""
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
            </div>

            <div className="block lg:hidden"
                style={{
                    backgroundImage: `url("https://res.cloudinary.com/dfxqagrkk/image/upload/v1737973867/background_zvobxe.png")`,
                }}>
                <div className="relative flex flex-col items-center min-h-screen p-4">

                    {/* Banners */}
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838572/flag-1_trnknt.png"
                        className="absolute top-10 left-[0%] w-[104px]"
                        alt="Daily Spin Banner"
                    />
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838572/flag-2_astkip.png"
                        className="absolute top-10 right-[0%] w-[104px]"
                        alt="Lucky Spin Banner"
                    />


                    {/* Floating Crystals */}
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838571/crystal-1_xvhkgj.png"
                        className="absolute top-56 left-[-5%] w-[100px] animate-pulse"
                        alt="Floating Crystal"
                    />
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838571/crystal-2_w2c2zc.png"
                        className="absolute top-56 right-[-5%] w-[100px] animate-pulse"
                        alt="Floating Crystal"
                    />

                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838572/crystal-3_tkoc7m.png"
                        className="absolute bottom-[55%] z-20 left-4 w-[140px] animate-pulse"
                        alt="Floating Crystal"
                    />
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838571/crystal-4_yfera5.png"
                        className="absolute bottom-[55%] z-20 right-4 w-[140px] animate-pulse"
                        alt="Floating Crystal"
                    />

                    {/* Lucky Wheel Frame */}
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838575/lucky-wheel-outer-frame_t5qkcm.gif"
                        className="w-full top-4 max-w-[320px] relative z-10"
                        alt="Lucky Wheel Frame"
                    />

                    {/* Inner Wheel */}
                    <div className="absolute top-[-50%] inset-0 flex items-center justify-center">
                        <div className="relative">
                            {/* Inner Wheel Image */}
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737957963/inner-wheel-6_fplizy.png"
                                className="w-[250px]"
                                alt="Inner Wheel"
                            />

                            {/* Prize Name List */}
                            <ul className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                                <li
                                    style={{
                                        transform: "rotate(0deg) translateY(-90px)",
                                        transformOrigin: "center",
                                    }}
                                    className="absolute text-center text-white text-xs font-bold"
                                >
                                    25 Activity <br /> Points
                                </li>
                                <li
                                    style={{
                                        transform: "rotate(60deg) translateY(-90px)",
                                        transformOrigin: "center",
                                    }}
                                    className="absolute text-center text-orange-400 text-xs font-bold"
                                >
                                    USD 1 - 3 <br /> Angpao
                                </li>
                                <li
                                    style={{
                                        transform: "rotate(120deg) translateY(-90px)",
                                        transformOrigin: "center",
                                    }}
                                    className="absolute text-center text-white text-xs font-bold"
                                >
                                    50G Gold Bar
                                </li>
                                <li
                                    style={{
                                        transform: "rotate(180deg) translateY(-90px)",
                                        transformOrigin: "center",
                                    }}
                                    className="absolute text-center text-orange-400 text-xs font-bold"
                                >
                                    USD 10 - 20 <br /> Angpao
                                </li>
                                <li
                                    style={{
                                        transform: "rotate(240deg) translateY(-90px)",
                                        transformOrigin: "center",
                                    }}
                                    className="absolute text-center text-white text-xs font-bold"
                                >
                                    USD 5 - 10 <br /> Angpao
                                </li>
                                <li
                                    style={{
                                        transform: "rotate(300deg) translateY(-90px)",
                                        transformOrigin: "center",
                                    }}
                                    className="absolute text-orange-400 text-xs font-bold"
                                >
                                    Special Prize
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Spin Button */}
                    <div className="absolute bottom-[70%] flex items-center justify-center">
                        <img
                            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838580/spin-button_ldvjot.png"
                            alt="Spin Button"
                            className="hover:scale-105 transition-transform w-[112px] h-[125px]"
                        />
                    </div>

                    <img src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838573/lucky-wheel-bottom_jsezhy.png" alt=""
                        className="absolute bottom-[43%] w-[322px]" />

                    {/* Spin Action */}
                    {session ? (
                        <Link
                            href=""
                            className="absolute bottom-[44%] bg-orange-500 text-center text-white text-sm font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-orange-700 w-[260px]"
                        >
                            Spin Here
                        </Link>
                    ) : (
                        <Link
                            href="/login"
                            className="absolute bottom-[44%] bg-orange-500 text-center text-white text-sm font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-orange-700 w-[260px]"
                        >
                            Spin Here
                        </Link>
                    )}

                    {/* Spins Remaining */}
                    <p className="absolute bottom-[41%] text-white text-xs font-medium text-center">
                        You have 0 spin(s) available
                    </p>
                </div>

                <PrizeDisplayMobile />

                <div
                    className="bg-opacity-50 rounded-lg p-4 mt-[-350px] lg:mt-[-300px]"
                    style={{
                        backgroundImage: `url("https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838581/winner-bg_kktabj.png")`,
                        width: "100%",
                        maxWidth: "420px",
                        height: "auto",
                        maxHeight: "688px",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Title */}
                    <h2 className="text-white text-lg lg:text-2xl font-bold mt-2 mb-4 lg:mb-6 text-center">Winners</h2>

                    {/* Buttons */}
                    <div className="flex flex-row justify-center space-x-2 lg:space-x-4 mb-4 lg:mb-6">
                        <button className="bg-orange-500 text-white py-2 px-3 lg:px-6 rounded-full shadow-md hover:bg-orange-600 focus:outline-none text-xs lg:text-base">
                            Winner's List
                        </button>

                        {session ? (
                            <button className="bg-white text-orange-500 py-2 px-3 lg:px-6 rounded-full shadow-md hover:bg-gray-200 focus:outline-none text-xs lg:text-base">
                                Winning Record
                            </button>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-white text-orange-500 py-2 px-3 lg:px-6 rounded-full shadow-md hover:bg-gray-200 focus:outline-none text-xs lg:text-base"
                            >
                                Winning Record
                            </Link>
                        )}
                    </div>

                    {/* Winners List */}
                    <div className="overflow-y-auto pt-4 w-[230px] ml-20 mb-6">
                        <WinnerListMobile />
                    </div>
                </div>

                <br />

            </div>
        </>
    );
};

export default LuckyWheelLanding;
