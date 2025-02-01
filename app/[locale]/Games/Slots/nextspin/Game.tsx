"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
interface Game {
    id: number;
    title: string;
    rtp: string;
    image: string;
    badge?: string; // For badges like "Progressive Multiplier" or "Buy Bonus"
}

const TopGames: React.FC = () => {

    const t = useTranslations("Slots.nextspin.TopGames");

    const games: Game[] = t.raw("games");

    return (
        <div className="max-w-[1400px] mx-auto py-8 px-4 sm:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
                {t("title")}
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
                                    {t("buttons.play")}
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
                                        {t("buttons.demo")}
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
                                {t("labels.rtp")} {game.rtp}
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
