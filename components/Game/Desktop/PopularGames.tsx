"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";



const PopularGames = () => {
    const t = useTranslations("Games.PopularGames");
    const { data: session } = useSession(); // Get the session data

    const gamesList = t.raw('GamesList')

    const games = gamesList.map((game: any) => ({
        id: game.id,
        name: game.name,
        type: game.type,
        rtp: game.rtp,
        image: game.image,
        label: game.label,
        link: game.link
    }));

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2,
                duration: 0.5,
            },
        }),
    };

    return (
        <motion.section
            className="popular-games-section mx-auto max-w-[1400px] px-4 md:px-8 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900"> {t("popularGamesTitle")} </h2>
                <Link href="/Games/Slots/nextspin" className="text-blue-500 hover:underline text-sm font-medium">
                    {t("seeAll")}
                </Link>
            </div>
            {isMobile ? (
                <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                    {games.map((game : any, index: number) => (
                        <motion.div
                            key={game.id}
                            className="flex-none w-[40%] sm:w-[50%] md:w-[33%] lg:w-[20%]"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <div className="game-img-wrapper relative group overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={game.image}
                                    alt={game.name}
                                    className="w-full h-[140px] object-cover transition-transform transform group-hover:scale-105 duration-300"
                                />
                                {game.label && (
                                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                                        {game.label}
                                    </div>
                                )}
                                <div className="btn-container absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {session ? (
                                        <>
                                            <Link href={game.link}>
                                                <button className="bg-yellow-500 text-black px-4 py-2 rounded-full mb-2 shadow-md hover:bg-yellow-600 transform hover:scale-105 transition duration-200 text-sm">
                                                    {t("play")}
                                                </button>
                                            </Link>
                                            <Link href={`${game.link}/demo`}>
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-200 text-sm">
                                                    {t("demo")}
                                                </button>
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link href="/login">
                                                <button className="bg-yellow-500 text-black px-4 py-2 rounded-full mb-2 shadow-md hover:bg-yellow-600 transform hover:scale-105 transition duration-200 text-sm">
                                                    {t("play")}
                                                </button>
                                            </Link>
                                            <Link
                                                href="https://play.2umdjcuk.com/gen3/sPac_Man1/202411250258/index.html?brand=NEXTSPIN&merchantCode=SS001&game=sPac_Man1&language=en_US"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-200 text-sm">
                                                    {t("demo")}
                                                </button>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="game-content mt-4 text-center">
                                <h3 className="text-base font-semibold text-gray-900">{game.name}</h3>
                                <p className="text-sm text-gray-600">{game.type}</p>
                                <p className="text-sm text-blue-600 font-bold">
                                    RTP <span>{game.rtp}%</span>
                                </p>
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
                    slidesToShow={5}
                    slidesToScroll={1}
                    responsive={[
                        { breakpoint: 1200, settings: { slidesToShow: 4 } },
                        { breakpoint: 992, settings: { slidesToShow: 3 } },
                        { breakpoint: 768, settings: { slidesToShow: 2 } },
                    ]}
                >
                    {games.map((game : any, index: number) => (
                        <motion.div
                            key={game.id}
                            className="game-container p-2"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <div className="game-img-wrapper relative group overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={game.image}
                                    alt={game.name}
                                    className="w-full h-[160px] md:h-[200px] lg:h-[240px] object-cover transition-transform transform group-hover:scale-105 duration-300"
                                />
                                {game.label && (
                                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                                        {game.label}
                                    </div>
                                )}
                                <div className="btn-container absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {session ? (
                                        <>
                                            <Link href={game.link}>
                                                <button className="bg-yellow-500 text-black px-4 py-2 rounded-full mb-2 shadow-md hover:bg-yellow-600 transform hover:scale-105 transition duration-200 text-sm">
                                                    {t("play")}
                                                </button>
                                            </Link>
                                            <Link href={`${game.link}/demo`}>
                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-200 text-sm">
                                                    {t("demo")}
                                                </button>
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link href="/login">
                                                <button className="bg-yellow-500 text-black px-4 py-2 rounded-full mb-2 shadow-md hover:bg-yellow-600 transform hover:scale-105 transition duration-200 text-sm">
                                                {t("play")}
                                                </button>
                                            </Link>
                                            <Link
                                                href="https://play.2umdjcuk.com/gen3/sPac_Man1/202411250258/index.html?brand=NEXTSPIN&merchantCode=SS001&game=sPac_Man1&language=en_US"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >

                                                <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-200 text-sm">
                                                {t("demo")}
                                                </button>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="game-content mt-4 text-center">
                                <h3 className="text-base md:text-lg font-semibold text-gray-900">{game.name}</h3>
                                <p className="text-sm text-gray-600">{game.type}</p>
                                <p className="text-sm text-blue-600 font-bold">
                                    RTP <span>{game.rtp}%</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            )}
        </motion.section>
    );
};

export default PopularGames;
