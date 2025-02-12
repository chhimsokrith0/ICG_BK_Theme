// OddsSection.tsx
import React from "react";
import { Match } from "@/types";

const OddsSection: React.FC<{ match: Match }> = ({ match }) => (
    <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-around text-center">
        <div>
            <p className="text-xs font-medium text-gray-600">HDP</p>
            <p className="text-sm font-bold text-gray-800">{match.homeHDP}</p>
        </div>
        <div>
            <p className="text-xs font-medium text-gray-600">Odds</p>
            <p className="text-sm font-bold text-blue-500">{match.homeOdds}</p>
        </div>
        <div>
            <p className="text-xs font-medium text-gray-600">HDP</p>
            <p className="text-sm font-bold text-gray-800">{match.awayHDP}</p>
        </div>
        <div>
            <p className="text-xs font-medium text-gray-600">Odds</p>
            <p className="text-sm font-bold text-blue-500">{match.awayOdds}</p>
        </div>
    </div>
);

export default OddsSection;
