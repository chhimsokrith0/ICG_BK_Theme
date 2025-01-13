"use client";

import React from "react";

interface Winner {
    id: number;
    game: string;
    player: string;
    amount: string;
    icon: string;
}

interface WinnerListProps {
    visibleWinners: Winner[];
}

const WinnerList: React.FC<WinnerListProps> = ({ visibleWinners }) => {
    return (
        <div className="p-4 overflow-hidden">
            {visibleWinners.map((winner) => (
                <div
                    key={winner.id}
                    className="flex items-center justify-between py-4 border-b last:border-b-0"
                >
                    <div className="flex items-center space-x-4">
                        <img
                            src={winner.icon}
                            alt={winner.game}
                            className="w-12 h-12 rounded-full shadow-md"
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
                </div>
            ))}
        </div>
    );
};

export default WinnerList;
