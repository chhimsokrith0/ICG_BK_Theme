"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const BestLiveCasinoGames = () => {
    const { data: session } = useSession(); // Fetch session data

    const games = [
        {
            id: 1,
            name: "BK8 CN Red 1",
            type: "BK8 Casino",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736498983/sbc2_asqzgx.jpg",
            label: "New",
            link: "/games/bk8-cn-red-1",
        },
        {
            id: 2,
            name: "BK8 CN Red 5",
            type: "BK8 Casino",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736498981/sbc1_uembyf.jpg",
            label: "New",
            link: "/games/bk8-cn-red-5",
        },
        {
            id: 3,
            name: "BK8 Baccarat 1",
            type: "PPLiveCasino",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736498978/salon-prive-baccarat_l6w2df.jpg",
            label: "Hot",
            link: "/games/bk8-baccarat-1",
        },
        {
            id: 4,
            name: "BK8 One BlackJack",
            type: "PPLiveCasino",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736498976/PP-Roulette_zbpkru.jpg",
            label: "Hot",
            link: "/games/bk8-one-blackjack",
        },
        {
            id: 5,
            name: "BK8 Roulette",
            type: "PPLiveCasino",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736498974/PP-blackjack_vpupvs.jpg",
            label: "Hot",
            link: "/games/bk8-roulette",
        },
        {
            id: 6,
            name: "Lightning Roulette",
            type: "Evolution Gaming",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736498973/PP-baccarat-1_w3pk5c.jpg",
            link: "/games/lightning-roulette",
        },
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.section
            className="best-live-casino-section mx-auto max-w-[1400px] px-4 md:px-8 py-8"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 1 } },
            }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Best Live Casino Games
                </h2>
                <Link href="/games/livecasino" className="text-blue-500 hover:underline text-sm font-medium">
                    See all
                </Link>
            </div>
            {isMobile ? (
                <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                    {games.map((game) => (
                        <motion.div
                            key={game.id}
                            className="flex-none w-[40%] sm:w-[50%] md:w-[33%] lg:w-[20%]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <div className="live-game-img-wrapper relative group rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={game.image}
                                    alt={game.name}
                                    className="w-full h-[140px] object-cover transition-transform duration-300 transform group-hover:scale-105"
                                />
                                {game.label && (
                                    <div
                                        className={`absolute top-2 left-2 ${game.label === "New" ? "bg-red-500" : "bg-orange-500"
                                            } text-white px-3 py-1 rounded-full text-xs font-bold shadow`}
                                    >
                                        {game.label}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {session ? (
                                        <Link href={game.link}>
                                            <button
                                                aria-label={`Play ${game.name}`}
                                                className="bg-white text-black w-10 h-10 rounded-full shadow-md flex items-center justify-center transform hover:scale-110 transition-transform"
                                            >
                                                <FontAwesomeIcon icon={faPlay} className="w-5 h-5" />
                                            </button>
                                        </Link>
                                    ) : (
                                        <Link href="/login">
                                            <button
                                                aria-label="Log in to play"
                                                className="bg-gray-400 text-white w-10 h-10 rounded-full shadow-md flex items-center justify-center transform hover:scale-110 transition-transform"
                                            >
                                                <FontAwesomeIcon icon={faPlay} className="w-5 h-5" />
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <div className="live-game-content mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">{game.name}</h3>
                                <p className="text-sm text-gray-500">{game.type}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <Slider
                    autoplay
                    autoplaySpeed={5000}
                    infinite
                    speed={500}
                    slidesToShow={4}
                    slidesToScroll={1}
                    responsive={[
                        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                    ]}
                >
                    {games.map((game) => (
                        <motion.div
                            key={game.id}
                            className="live-casino-game-container p-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: game.id * 0.1 },
                                },
                            }}
                        >
                            <div className="live-game-img-wrapper relative group rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={game.image}
                                    alt={game.name}
                                    className="w-full h-[160px] md:h-[200px] object-cover transition-transform duration-300 transform group-hover:scale-105"
                                />
                                {game.label && (
                                    <div
                                        className={`absolute top-2 left-2 ${game.label === "New" ? "bg-red-500" : "bg-orange-500"
                                            } text-white px-3 py-1 rounded-full text-xs font-bold shadow`}
                                    >
                                        {game.label}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {session ? (
                                        <Link href={game.link}>
                                            <button
                                                aria-label={`Play ${game.name}`}
                                                className="bg-white text-black w-10 h-10 rounded-full shadow-md flex items-center justify-center transform hover:scale-110 transition-transform"
                                            >
                                                <FontAwesomeIcon icon={faPlay} className="w-5 h-5" />
                                            </button>
                                        </Link>
                                    ) : (
                                        <Link href="/login">
                                            <button
                                                aria-label="Log in to play"
                                                className="bg-gray-400 text-white w-10 h-10 rounded-full shadow-md flex items-center justify-center transform hover:scale-110 transition-transform"
                                            >
                                                <FontAwesomeIcon icon={faPlay} className="w-5 h-5" />
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <div className="live-game-content mt-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">{game.name}</h3>
                                <p className="text-sm text-gray-500">{game.type}</p>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            )}
        </motion.section>
    );
};

export default BestLiveCasinoGames;
