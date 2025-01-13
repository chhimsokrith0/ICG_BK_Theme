"use client";

import React from "react";

interface GameCard {
    id: number;
    title: string;
    image: string;
    description: string;
}

const gameCards: GameCard[] = [
    {
        id: 1,
        title: "First Person Baccarat",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736758588/speed-roulette_qoqhms.jpg",
        description: "Experience Baccarat like never before!",
    },
    {
        id: 2,
        title: "Super Sic Bo",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736758588/salon-prive-baccarat_yx0cmr.jpg",
        description: "Enjoy the thrill of Super Sic Bo!",
    },
    {
        id: 3,
        title: "Roulette",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736758588/thai-baccarat_zedyhe.jpg",
        description: "Spin the wheel and win big!",
    },
    {
        id: 4,
        title: "Speed Roulette",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736758588/korean-speed-baccarat_qptywv.jpg",
        description: "Fast-paced Roulette action!",
    },
    {
        id: 5,
        title: "Dragon Tiger",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736758588/lightning-baccarat_pr3jcz.jpg",
        description: "Who wins: Dragon or Tiger?",
    },
    {
        id: 3,
        title: "Roulette",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736758587/french-gold-roulette_ly6i5n.jpg",
        description: "Spin the wheel and win big!",
    },
    {
        id: 4,
        title: "Speed Roulette",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736758587/super-sic-bo_ajtnky.jpg",
        description: "Fast-paced Roulette action!",
    },
    {
        id: 5,
        title: "Dragon Tiger",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736758587/first-person-roulette_lxdvjz.jpg",
        description: "Who wins: Dragon or Tiger?",
    },
    {
        id: 4,
        title: "Speed Roulette",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736758587/dragon-tiger_ubw1pl.jpg",
        description: "Fast-paced Roulette action!",
    },
    {
        id: 5,
        title: "Dragon Tiger",
        image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736758587/first-person-baccarat_cqw7pb.jpg",
        description: "Who wins: Dragon or Tiger?",
    },
];

const GameCardList: React.FC = () => {
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
