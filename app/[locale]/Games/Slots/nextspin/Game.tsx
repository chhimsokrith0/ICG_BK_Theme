"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
interface Game {
    id: number;
    title: string;
    rtp: string;
    image: string;
    badge?: string; // For badges like "Progressive Multiplier" or "Buy Bonus"
}

const TopGames: React.FC = () => {
    const games: Game[] = [
        {
            id: 1,
            title: "Pac-Man's Glory",
            rtp: "96.95",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736773785/sPac_Man1_fvid9f.png",

        },
        {
            id: 2,
            title: "Candy Bonanza",
            rtp: "97.93",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736773785/sRoma_icxqqo.png",

        },
        {
            id: 3,
            title: "Candy Bonanza Xmas",
            rtp: "97.93",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736773784/sHG0001_ls6w1s.png",

        },
        {
            id: 4,
            title: "Roma",
            rtp: "96.75",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736773784/sGuanGong_b3o7q9.png",

        },
        {
            id: 5,
            title: "Giant Tossakan",
            rtp: "96.92",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736773784/sCandyXmas_iwl0is.png",
        },
        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736773783/sCandyBona_iu75ki.png",
        },

        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736777870/s7Dragons_ghpdg1.png",
        },
        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736777870/sAztecGolT_lyjgn6.png",
        },
        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736777871/sCleopaFor_aabspa.png",
        },
        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736777870/sCaiShen_raijgu.png",
        },
        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736777871/sLightnDrg_lr10v2.png",
        },
        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736777872/sLongX3_o1rnvk.png",
        },
        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736777873/sLuckyGems_bsbefw.png",
        },
        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736777874/sMahDrg_xu6p1s.png",
        },
        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736777874/sMahPhe_ealtac.png",
        },
        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736777875/sPrincessR_g0ywj0.png",
        },
        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736777876/sProsDrg_zioomf.png",
        },
        {
            id: 6,
            title: "Legend Of Guan Gong",
            rtp: "96.99",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736777877/sRomaII_bz1ora.png",
        },
    ];

    return (
        <div className="max-w-[1400px] mx-auto py-8 px-4 sm:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
                Top Games
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                {games.map((game) => (
                    <motion.div
                        key={game.id}
                        className="relative overflow-hidden rounded-lg bg-white transition-shadow duration-200"
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Game Image */}
                        <div className="relative">
                            <motion.img
                                src={game.image}
                                alt={game.title}
                                className="w-full object-cover sm:h-40 md:h-48 lg:h-52 rounded-t-lg"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Hover Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.button
                                    className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full mb-2"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Play
                                </motion.button>
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <Link
                                        href="/demo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-center block"
                                    >
                                        Demo
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Game Details */}
                        <div className="px-4 py-2 text-center">
                            <h3 className="text-sm sm:text-base font-bold text-gray-800 truncate">
                                {game.title}
                            </h3>
                            <div className="mt-2 flex justify-center items-center space-x-2">
                                <span className="text-xs sm:text-sm font-bold bg-blue-500 text-white px-2 py-1 rounded">
                                    RTP {game.rtp}
                                </span>
                                <button className="text-gray-400 hover:text-black">
                                    <i className="fas fa-info-circle" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

    );
};

export default TopGames;
