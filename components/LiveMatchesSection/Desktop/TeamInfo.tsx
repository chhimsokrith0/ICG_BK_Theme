// TeamInfo.tsx
import React from "react";
import { TeamInfoProps } from "@/types";

const TeamInfo: React.FC<TeamInfoProps> = ({ label, team, logo }) => (
    <div className="flex flex-col items-center">
        <span className={`text-sm font-bold ${label === "H" ? "text-green-600" : "text-red-600"}`}>{label}</span>
        <p className="text-sm text-gray-800">{team}</p>
        <img src={logo} alt={`${label} Team Logo`} className="w-10 h-10 mt-2" />
    </div>
);

export default TeamInfo;
