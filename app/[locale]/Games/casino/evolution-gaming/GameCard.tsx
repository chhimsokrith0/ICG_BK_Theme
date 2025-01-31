"use client";

import React from "react";
import { useTranslations } from "next-intl";

interface GameCard {
    id: number;
    title: string;
    image: string;
    description: string;
}



const GameCardList: React.FC = () => {
    const t = useTranslations("LiveCasino.GameCardList");

    const gameCards: GameCard[] = t.raw("gameCards");
    
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {gameCards.map((game) => (
                <div
                    key={game.id}
                    className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border-2 border-red-600"
                >
                    <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-[226px] object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 px-4 py-2">
                        <h3 className="text-lg font-bold text-white">{game.title}</h3>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 rounded-full p-1">
                        <i className="text-white text-xs">i</i>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GameCardList;
