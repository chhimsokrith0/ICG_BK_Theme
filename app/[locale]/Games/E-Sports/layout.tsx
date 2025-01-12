"use client";

import React from "react";
import ESportsTab from "./ESportsTab";
import Header from "./Header";
import Footer from "./Footer";

const GmaeSportsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="relative w-full" style={{ backgroundColor: "#1A1B41", minHeight: "100vh" }}>
                <Header />
                <br />
                <ESportsTab />

                <div>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default GmaeSportsLayout;
