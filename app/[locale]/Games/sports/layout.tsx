"use client";

import React from "react";
import SportsTab from "./SportsTab";
import Header from "./Header";

const GmaeSportsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <>
            <div className="relative w-full">
                <Header />
                <br />
                <SportsTab />

                <div>
                    {children}
                </div>
            </div>
        </>

    );
};

export default GmaeSportsLayout;
