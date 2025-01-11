"use client";

import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

const PopularGames = () => {
    const games = [
        {
            id: 1,
            name: "Pac Man Glory",
            type: "Nextspin",
            rtp: "96.95",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736497775/ns-pacman_xtorka.jpg",
            label: "Hot",
        },
        {
            id: 2,
            name: "Cleopetra Fortune",
            type: "Nextspin",
            rtp: "96.97",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736497774/ns-candy-bonanza_qiiu1l.jpg",
            label: "Hot",
        },
        {
            id: 3,
            name: "BK8 Roma",
            type: "Nextspin",
            rtp: "96.75",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736497776/ns-roma_crzcl9.jpg",
            label: "Hot",
        },
        {
            id: 4,
            name: "BK8 Gates Of Olympus",
            type: "Pragmatic Play",
            rtp: "97.6",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736497778/sCleopaFor_mrcdws.jpg",
            label: "Hot",
        },
        {
            id: 5,
            name: "BK8 Candy Bonanza",
            type: "Nextspin",
            rtp: "97.93",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736497780/vs20bk8gates_sqy4q9.jpg",
            label: "Hot",
        },
        {
            id: 6,
            name: "BK8 Sweet Blaster",
            type: "Nextspin",
            rtp: "97.93",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736497782/vs20fruitsbk8_qznodc.png",
            label: "Hot",
        },
    ];

    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

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
            className="hot-games-section mx-auto max-w-[1400px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Popular Games We Love</h2>
                <a href="#" className="text-blue-500 hover:underline text-sm font-medium">
                    See all
                </a>
            </div>
            <Slider {...settings} className="hot-games-slider">
                {games.map((game, index) => (
                    <motion.div
                        key={game.id}
                        className="hot-game-container p-2"
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <div className="hot-game-img-wrapper relative group overflow-hidden rounded-lg shadow-lg">
                            <img
                                src={game.image}
                                alt={game.name}
                                className="w-full h-[160px] object-cover transition-transform transform group-hover:scale-105 duration-300"
                            />
                            {game.label && (
                                <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                                    {game.label}
                                </div>
                            )}
                            <div className="btn-container  absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-yellow-500 text-black px-5 py-2 rounded-full mb-2 shadow-md hover:bg-yellow-600 transform hover:scale-105 transition duration-200 text-sm">
                                    Play
                                </button>
                                <button className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-200 text-sm">
                                    Demo
                                </button>
                            </div>
                        </div>
                        <div className="hot-game-content mt-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-900">{game.name}</h3>
                            <p className="text-sm text-gray-600">{game.type}</p>
                            <p className="text-sm text-blue-600 font-bold">
                                RTP <span>{game.rtp}</span>
                            </p>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </motion.section>
    );
};

export default PopularGames;
