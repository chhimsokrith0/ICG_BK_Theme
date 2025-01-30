"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

const InstantGamesToPlay = () => {
    const { data: session } = useSession(); // Get session data
    const t = useTranslations("Games.InstantGamesToPlay");

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

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <section className="instant-games-section mx-auto max-w-[1400px] px-4 md:px-8 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("instantGamesTitle")}</h2>
                <Link href="/Games/fastgames" className="text-blue-500 hover:underline text-sm md:text-base font-medium">
                    {t("seeAll")}
                </Link>
            </div>
            {isMobile ? (
                <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                    {games.map((game: any) => (
                        <div key={game.id} className="flex-none w-[40%] sm:w-[50%] md:w-[33%] lg:w-[20%]">
                            <div className="instant-game-img-wrapper relative group overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={game.image}
                                    alt={`Play ${game.name} from ${game.type}`}
                                    className="w-full h-[140px] object-cover"
                                />
                                {game.label && (
                                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                        {game.label}
                                    </div>
                                )}
                                <div className="btn-container absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {session ? (
                                        <>
                                            <Link href={game.link}>
                                                <button
                                                    className="bg-yellow-500 text-black px-5 py-2 rounded-full mb-2 shadow-md hover:bg-yellow-600 transform hover:scale-105 transition duration-200 text-sm"
                                                    aria-label={`Play ${game.name}`}
                                                >
                                                    {t("play")}
                                                </button>
                                            </Link>
                                            <Link href={`${game.link}/demo`}>
                                                <button
                                                    className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-200 text-sm"
                                                    aria-label={`Demo ${game.name}`}
                                                >
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
                            <div className="instant-game-content mt-4 text-center">
                                <h3 className="text-base font-semibold text-gray-900">{game.name}</h3>
                                <p className="text-sm text-gray-500">{game.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Slider {...sliderSettings} className="instant-games-slider">
                    {games.map((game: any) => (
                        <div key={game.id} className="instant-game-container p-2">
                            <div className="instant-game-img-wrapper relative group overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={game.image}
                                    alt={`Play ${game.name} from ${game.type}`}
                                    className="w-full h-[160px] md:h-[200px] object-cover"
                                />
                                {game.label && (
                                    <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                        {game.label}
                                    </div>
                                )}
                                <div className="btn-container absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {session ? (
                                        <>
                                            <Link href={game.link}>
                                                <button
                                                    className="bg-yellow-500 text-black px-5 py-2 rounded-full mb-2 shadow-md hover:bg-yellow-600 transform hover:scale-105 transition duration-200 text-sm"
                                                    aria-label={`Play ${game.name}`}
                                                >
                                                    {t("play")}
                                                </button>
                                            </Link>
                                            <Link href={`${game.link}/demo`}>
                                                <button
                                                    className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-200 text-sm"
                                                    aria-label={`Demo ${game.name}`}
                                                >
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
                            <div className="instant-game-content mt-4 text-center">
                                <h3 className="text-base font-semibold text-gray-900">{game.name}</h3>
                                <p className="text-sm text-gray-500">{game.type}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </section>
    );
};

export default InstantGamesToPlay;
