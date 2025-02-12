// MatchCard.tsx
import React from "react";
import { Match } from "@/types";
import TeamInfo from "./TeamInfo";
import OddsSection from "./OddsSection";

const MatchCard: React.FC<{ match: Match }> = ({ match }) => (
    <div className="rounded-lg shadow-lg overflow-hidden border bg-white">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 flex justify-between text-white">
            <p className="text-sm font-medium">{match.league}</p>
            <div className="flex items-center space-x-2">
                <p className="text-xs">{match.time}</p>
            </div>
        </div>
        <div className="flex justify-between p-4">
            <TeamInfo label="H" team={match.homeTeam} logo="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736494097/soccer-default-home_y8r3bt.svg" />
            <div className="text-sm font-bold text-gray-400 self-center">VS</div>
            <TeamInfo label="A" team={match.awayTeam} logo="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736494097/soccer-default-away_uc8ffe.svg" />
        </div>
        <OddsSection match={match} />
    </div>
);

export default MatchCard;
