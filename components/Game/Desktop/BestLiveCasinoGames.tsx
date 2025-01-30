"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
const BestLiveCasinoGames = () => {
    const { data: session } = useSession(); // Fetch session data
    const t = useTranslations("Games.BestLiveCasinoGames");

    const gamesList = t.raw('GamesList')

    const games = gamesList.map((game: any) => ({
        id: game.id,
        name: game.name,
        type: game.type,
        image: game.image,
        label: game.label,
        link: game.link
    }));


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
                    {t("bestLiveCasinoGamesTitle")}
                </h2>
                <Link href="/games/livecasino" className="text-blue-500 hover:underline text-sm font-medium">
                    {t("seeAll")}
                </Link>
            </div>
            {isMobile ? (
                <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                    {games.map((game: any) => (
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
                    {games.map((game: any) => (
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
