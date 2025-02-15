"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";


interface GameCardProps {
    id: number;
    title: string;
    image: string;
}

const GameCards = () => {
    const t = useTranslations("fastgames.spb.GameCards");

    const { data: session } = useSession();

    const games : GameCardProps[] = t.raw("games");


    return (
        <div className=" mx-auto py-8 px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {games.map((game) => (
                    <div
                        key={game.id}
                        className="relative group flex flex-col items-center text-center"
                    >
                        {/* Game Image */}
                        <img
                            src={game.image}
                            alt={game.title}
                            className="w-full h-36 sm:h-40 object-cover rounded-lg shadow-md"
                        />

                        {/* Hover Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <motion.button
                                className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full mb-2 shadow-md"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                <Link href={ session ? "" : "/login"}>Play</Link>
                            </motion.button>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link
                                    href="/demo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-md"
                                >
                                    Demo
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Game Title */}
                        <p className="mt-2 text-gray-700 font-medium text-sm sm:text-base">
                            {game.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default GameCards;
