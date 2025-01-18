"use client";

import React from "react";
import HeaderTabs from "./HeaderTabl";

const spbLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="relative w-full">
                <br />
                <HeaderTabs />
                <br />

                <div className="max-w-[1400px] mx-auto">
                    {children}
                </div>
            </div>
        </>
    );
};

export default spbLayout;
