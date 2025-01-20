"use client";

import React from "react";
import Header from "./Header";
import FastTop from "./fastTop";
import ProviderSelector from "./ProviderSelectorMobile";

const fastgamesLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="relative w-full">
                <div className="hidden md:block">
                    <Header />
                    <br />
                    <FastTop />
                </div>

                <br />

                <div className="block md:hidden">
                    <ProviderSelector />
                    <br />
                </div>

                <div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default fastgamesLayout;
