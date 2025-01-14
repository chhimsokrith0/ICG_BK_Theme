"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const GameCards = () => {
    const games = [
        {
            id: 1,
            title: "Zombie Party",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736855697/F-AH01_irz1hv.jpg",
        },
        {
            id: 2,
            title: "Fishing God",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736855697/F-SF01_ygbpkj.jpg",
        },
        {
            id: 3,
            title: "Fishing War",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736855698/F-SF02_cif5n1.jpg",
        },
        {
            id: 4,
            title: "Alien Hunter",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736855698/F-ZP01_guvs3z.jpg",
        },
    ];

    return (
        <div className="max-w-screen-lg py-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {games.map((game) => (
                    <div
                        key={game.id}
                        className="relative group flex flex-col items-center text-center"
                    >
                        {/* Game Image */}
                        <img
                            src={game.image}
                            alt={game.title}
                            className="w-full h-40 object-cover rounded-lg shadow-md"
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
                                Play
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
                        <p className="mt-2 text-gray-700 font-medium">{game.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameCards;
