"use client";

import React from "react";
import Header from "./Header";
import FastTop from "./fastTop";

const fastgamesLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="relative w-full">
               
                <Header />
                <br />
                <FastTop />

                <div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default fastgamesLayout;
