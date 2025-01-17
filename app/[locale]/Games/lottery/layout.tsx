"use client";

import React from "react";
import Header from "./Header";
import LotteryTab from "./LotteryTab";
import Footer from "./Footer";

const LotteryLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="relative w-full">
                <Header />
                <br />
                <LotteryTab />

                <div className="max-w-[1400px] mx-auto">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default LotteryLayout;
