

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const winners = Array.from({ length: 10 }, (_, index) => ({
            id: index + 1,
            game: `${["WM Casino", "Game Play", "Dream Gaming", "Big Gaming"][Math.floor(Math.random() * 4)]} / ${["Baccarat", "Roulette", "Blackjack"][Math.floor(Math.random() * 3)]}`,
            player: `Player${index + 1}`,
            amount: (Math.random() * 500000).toFixed(2),
            icon: `https://randomuser.me/api/portraits/thumb/men/${index}.jpg`,
        }));

        return res.status(200).json(winners);
    } else {
        return res.status(405).json({ message: "Method Not Allowed" });
    }
}
