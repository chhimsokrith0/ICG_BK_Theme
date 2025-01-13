"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
    interface Winner {
        id: number;
        game: string;
        player: string;
        amount: string;
        icon: string;
    }
    
    const [winners, setWinners] = useState<Winner[]>([]);
    const [visibleWinners, setVisibleWinners] = useState<Winner[]>([]);
    const currentIndex = useRef(0);

    // Fetch data from the Random User API
    const fetchWinners = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/?results=10");
            const data = await response.json();
            const formattedWinners = data.results.map((user: any, index: number) => ({
                id: index + 1,
                game: `${["WM Casino", "Game Play", "Dream Gaming", "Big Gaming"][Math.floor(Math.random() * 4)]} / ${["Baccarat", "Roulette", "Blackjack"][Math.floor(Math.random() * 3)]}`,
                player: `${user.name.first[0]}***${user.name.last[0]}`,
                amount: (Math.random() * 500000).toFixed(2),
                icon: user.picture.thumbnail,
            }));
            setWinners(formattedWinners);
            setVisibleWinners(formattedWinners.slice(0, 3));
        } catch (error) {
            console.error("Failed to fetch winners:", error);
        }
    };

    useEffect(() => {
        fetchWinners();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (winners.length > 0) {
                currentIndex.current = (currentIndex.current + 1) % winners.length;
                const startIndex = currentIndex.current;
                const nextVisibleWinners = winners.slice(startIndex, startIndex + 3);

                if (nextVisibleWinners.length < 3) {
                    setVisibleWinners([
                        ...nextVisibleWinners,
                        ...winners.slice(0, 3 - nextVisibleWinners.length),
                    ]);
                } else {
                    setVisibleWinners(nextVisibleWinners);
                }
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [winners]);

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -30, scale: 0.95 },
    };

    return (
        <div className="bg-gray-50 py-6 px-4 rounded-lg shadow-lg max-w-[600px]">
            {/* Video Section */}
            <div
                className="mb-6"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                }}
            >
                <iframe
                    allow="fullscreen; autoplay"
                    allowFullScreen
                    src="https://streamable.com/e/kof02y?autoplay=1&muted=1&controls=0"
                    style={{
                        border: "none",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        overflow: "hidden",
                    }}
                />
            </div>

            {/* Title Section */}
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                Top winners of the month
            </h2>

            {/* Winners List */}
            <div className="p-4 overflow-hidden">
                <AnimatePresence mode="wait">
                    {visibleWinners.map((winner) => (
                        <motion.div
                            key={winner.id}
                            className="flex items-center justify-between py-4 border-b last:border-b-0"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{
                                duration: 0.6,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                        >
                            <div className="flex items-center space-x-4">
                                <motion.img
                                    src={winner.icon}
                                    alt={winner.game}
                                    className="w-12 h-12 rounded-full shadow-md"
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <div>
                                    <p className="font-medium text-gray-700">
                                        {winner.game}
                                    </p>
                                    <p className="text-sm text-orange-500 font-bold">
                                        {winner.player}
                                    </p>
                                </div>
                            </div>
                            <p className="font-bold text-gray-800 text-lg">
                                {winner.amount}
                            </p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Page;
