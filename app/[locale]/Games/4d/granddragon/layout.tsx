"use client";

import React from "react";

const GranddragonLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <>
            <div className="relative w-full">
                
                <div className="max-w-[1400px] mx-auto">
                    {children}
                </div>
            </div>
        </>

    );
};

export default GranddragonLayout;
