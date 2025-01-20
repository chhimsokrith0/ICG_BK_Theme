"use client";

import React from "react";
import Header from "./Header";
import TopGames from "./TopGames";
import SlotsTab from "./SlotsTab";
import ProviderSelector from "./ProviderSelectorMobile";

const GmaeSportsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="relative w-full">
                <div className="hidden md:block">
                    <Header />
                </div>
                <br />
                <div className="block md:hidden">
                    <ProviderSelector />
                </div>
                <br />
                <TopGames />
                <br />
                <div className="hidden md:block">
                    <SlotsTab />
                </div>

                <div className="max-w-[1400px] mx-auto">
                    {children}
                </div>
            </div>
        </>
    );
};

export default GmaeSportsLayout;
