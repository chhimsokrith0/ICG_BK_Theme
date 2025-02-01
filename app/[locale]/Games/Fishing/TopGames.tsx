"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Game {
    id: number;
    title: string;
    provider: string;
    image: string;
    demoLink: string; // Added demoLink property
}

const TopGames: React.FC = () => {

    const t = useTranslations("Fishing.TopGames");

    const games: Game[] = t.raw("games");


    return (
        <div className="max-w-[1400px] mx-auto py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t("title")}</h2>
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
                                    {t("buttons.play")}
                                </button>
                                {/* Demo Button with Link */}
                                <Link
                                    href={game.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-center block"
                                >
                                    {t("buttons.demo")}
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
