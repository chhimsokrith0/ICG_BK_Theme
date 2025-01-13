"use client";

import React from "react";
import Header from "./Header";
import TopGames from "./TopGames";
import SlotsTab from "./SlotsTab";

const GmaeSportsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="relative w-full">
                <Header />
                <br />
                <TopGames />
                <br />
                <SlotsTab />
                <div className="max-w-[1400px] mx-auto">
                    {children}
                </div>
            </div>
        </>
    );
};

export default GmaeSportsLayout;
