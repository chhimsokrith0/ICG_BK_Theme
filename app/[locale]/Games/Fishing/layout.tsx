"use client";

import React from "react";
import Header from "./Header";
import TopGames from "./TopGames";
import FishingTab from "./FishingTab";
import Footer from "./Footer";

const FishingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="relative w-full">
                <Header />
                <br />
                <TopGames />
                <br />
                <FishingTab />

                <div className="max-w-[1400px] mx-auto">
                    {children}
                </div>
                <div className="max-w-[1400px] mx-auto">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default FishingLayout;
