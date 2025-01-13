"use client";

import React from "react";
import HeaderTabs from "./HeaderTabs";
const evolutiongamingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

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

export default evolutiongamingLayout;
