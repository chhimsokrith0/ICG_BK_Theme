"use client";

import React from "react";
import Slider from "react-slick";

const InstantGamesToPlay = () => {
    const games = [
        { id: 1, name: "Mines", type: "Scribe", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736505457/imgame12001_xpsrbr.png", label: "New" },
        { id: 2, name: "Goal", type: "Scribe", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736505458/imgame12002_iojuox.png", label: "New" },
        { id: 3, name: "Dice", type: "Scribe", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736505460/imgame12005_xs9taf.png", label: "New" },
        { id: 4, name: "Plinko", type: "Scribe", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736505462/imgame12006_zhyivn.png", label: "New" },
        { id: 5, name: "Keno", type: "Scribe", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736505464/imgame12007_hrrofy.png", label: "New" },
        { id: 6, name: "Mini Roulette", type: "Scribe", image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736505466/imgame12008_pyx0zr.png", label: "New" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4, slidesToScroll: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    return (
        <section className="instant-games-section mx-auto max-w-[1400px] px-4 md:px-8 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Instant Games To Play</h2>
                <a href="#" className="text-blue-500 hover:underline text-sm md:text-base font-medium">
                    See all
                </a>
            </div>
            <Slider {...settings} className="instant-games-slider">
                {games.map((game) => (
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
                                <button
                                    className="bg-yellow-500 text-black px-5 py-2 rounded-full mb-2 shadow-md hover:bg-yellow-600 transform hover:scale-105 transition duration-200 text-sm"
                                    aria-label={`Play ${game.name}`}
                                >
                                    Play
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-200 text-sm"
                                    aria-label={`Demo ${game.name}`}
                                >
                                    Demo
                                </button>
                            </div>
                        </div>
                        <div className="instant-game-content mt-4 text-center">
                            <h3 className="text-base md:text-lg font-semibold text-gray-900">{game.name}</h3>
                            <p className="text-sm text-gray-500">{game.type}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default InstantGamesToPlay;
