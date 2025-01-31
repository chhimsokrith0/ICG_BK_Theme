"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios"; // Import Axios
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

    // Fetch winners from API using Axios
    const fetchWinners = async () => {
        try {
            const response = await axios.get("/api/winners"); // Axios GET request
            setWinners(response.data);
            setVisibleWinners(response.data.slice(0, 4));
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

                setVisibleWinners(
                    nextVisibleWinners.length < 4
                        ? [...nextVisibleWinners, ...winners.slice(0, 4 - nextVisibleWinners.length)]
                        : nextVisibleWinners
                );
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
