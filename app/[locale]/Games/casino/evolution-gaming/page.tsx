"use client";

import React, { useEffect, useRef, useState } from "react";
import WinnerList from "../WinnerList";
import VideoSection from "../VideoSection";
import GameCardList from "./GameCard";

interface Winner {
    id: number;
    game: string;
    player: string;
    amount: string;
    icon: string;
}

const Page = () => {
    const [winners, setWinners] = useState<Winner[]>([]);
    const [visibleWinners, setVisibleWinners] = useState<Winner[]>([]);
    const currentIndex = useRef(0);

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
                currentIndex.current = (currentIndex.current + 4) % winners.length;

                const startIndex = currentIndex.current;
                const nextVisibleWinners = winners.slice(startIndex, startIndex + 4);

                if (nextVisibleWinners.length < 4) {
                    setVisibleWinners([
                        ...nextVisibleWinners,
                        ...winners.slice(0, 4 - nextVisibleWinners.length),
                    ]);
                } else {
                    setVisibleWinners(nextVisibleWinners);
                }
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [winners]);

    return (
        <div className="flex flex-col lg:flex-row gap-6 mx-auto">
            {/* Left Section */}
            <div className="flex-[3] max-w-[700px]">
                <div className="bg-gray-50 py-6 px-4 rounded-lg shadow-lg">
                    <VideoSection />
                    <WinnerList visibleWinners={visibleWinners} />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex-[2]">
                <GameCardList />
            </div>
        </div>
    );
};

export default Page;
