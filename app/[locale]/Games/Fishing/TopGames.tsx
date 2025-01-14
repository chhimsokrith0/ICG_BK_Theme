"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Game {
    id: number;
    title: string;
    provider: string;
    image: string;
    demoLink: string; // Added demoLink property
}

const TopGames: React.FC = () => {
    const games: Game[] = [
        {
            id: 1,
            title: "Alien Hunter",
            provider: "Spadegaming",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736850287/alien-hunter_rsfkug.png",
            demoLink: "https://play.2umdjcuk.com/gen3/sPac_Man1/202411250258/index.html?brand=NEXTSPIN&merchantCode=SS001&game=sPac_Man1&language=en_US", // Replace with actual link
        },
        {
            id: 2,
            title: "Fishing War",
            provider: "Spadegaming",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736850288/fishing-god_bhawtr.png",
            demoLink: "https://play.2umdjcuk.com/gen3/sHG0001/202501030931/index.html?brand=NEXTSPIN&merchantCode=SS001&game=sHG0001&language=en_US",
        },
        {
            id: 3,
            title: "Fishing God",
            provider: "Spadegaming",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736850289/fishing-war_qhjm70.png",
            demoLink: "https://play.2umdjcuk.com/gen3/sGuanGong/202412260744/index.html?brand=NEXTSPIN&merchantCode=SS001&game=sGuanGong&language=en_US",
        },
        {
            id: 4,
            title: "Zombie Party",
            provider: "Spadegaming",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736850290/royal-fishing_lh7dzi.png",
            demoLink: "https://play.2umdjcuk.com/gen3/sMahPhe/202411250241/index.html?brand=NEXTSPIN&merchantCode=SS001&game=sMahPhe&language=en_US",
        },
        {
            id: 5,
            title: "Royal Fishing",
            provider: "Spadegaming",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736850291/zombie-party_lp1uqw.png",
            demoLink: "https://play.2umdjcuk.com/gen3/sAztecGolT/202411250226/index.html?brand=NEXTSPIN&merchantCode=SS001&game=sAztecGolT&language=en_US",
        },
    ];

    return (
        <div className="max-w-[1400px] mx-auto py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Top Games</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {games.map((game) => (
                    <motion.div
                        key={game.id}
                        className="relative rounded-lg overflow-hidden group"
                    >
                        {/* Image Section */}
                        <div className="relative">
                            <img
                                src={game.image}
                                alt={game.title}
                                className="w-full object-cover rounded-lg"
                            />
                            {/* Hover Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full mb-2">
                                    Play
                                </button>
                                {/* Demo Button with Link */}
                                <Link
                                    href={game.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-center block"
                                >
                                    Demo
                                </Link>
                            </motion.div>
                        </div>

                        {/* Content Section */}
                        <div className="px-4 py-2">
                            <h3 className="text-sm font-bold text-gray-800 truncate">{game.title}</h3>
                            <p className="text-xs text-gray-600">{game.provider}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TopGames;
