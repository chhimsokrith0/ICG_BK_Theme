"use client";

import React from "react";
import HotMatch from "./HotMatch";

const SportsContent = () => {
    const sportsContent = [
        {
            id: 1,
            title: "BK8-Sports",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736595583/bk8_a9ofys.svg",
            background: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736595583/bk8_fc8j3v.jpg",
        },
        {
            id: 2,
            title: "Saba-Sports",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736595584/maxbet_obpylv.svg",
            background: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736595584/maxbet_dpp7g4.jpg",
        },
        {
            id: 3,
            title: "Cmd-Sports",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736595583/cmd368_fxasua.svg",
            background: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736595584/cmd368_bpudjb.jpg",
        },
    ];

    return (
        <div>
            <ul id="mProvider-S" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sportsContent.map((card) => (
                    <li
                        key={card.id}
                        className="submenu-item rounded-lg p-4 flex flex-col justify-between shadow-md"
                        style={{
                            backgroundImage: `url(${card.background})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="submenu-img w-12 h-12 mb-4 sm:w-16 sm:h-16"
                        />
                        <p className="standard-SecondSubtitle-font-size font-semibold text-lg sm:text-xl text-white mb-4">
                            {card.title}
                        </p>
                        <div className="btn-container flex space-x-2 sm:space-x-4">
                            <button className="btnBetNow bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-orange-600">
                                Bet Now
                            </button>
                            <button className="btnDesktop bg-gray-200 text-gray-800 px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-gray-300">
                                Desktop
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <HotMatch />
        </div>
    );
};

export default SportsContent;
