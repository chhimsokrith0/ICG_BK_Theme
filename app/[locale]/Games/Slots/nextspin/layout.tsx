"use client";

import React from "react";
import HeaderTabs from "./HeaderTab";
const nextspinLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <>
            <div className="relative w-full">
                <br />
                <HeaderTabs />
                
                <div className="max-w-[1400px] mx-auto">
                    {children}
                </div>
            </div>
        </>

    );
};

export default nextspinLayout;
