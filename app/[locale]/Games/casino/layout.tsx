"use client";

import React from "react";

import Header from "./Header";
import CasinoTab from "./CasinoTab";

const casinoLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="relative w-full">
                <Header />
                <br />
                <CasinoTab />

                <div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default casinoLayout;
