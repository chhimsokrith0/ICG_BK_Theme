"use client";

import React from "react";
import Header from "./Header";
import Tab4d from "./4dTab";
import FourDDrawContainer from "./FourDDrawContainer/FourDDrawContainer";
import Footer from "./Footer";

const FishingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="relative w-full">

                <Header />
                <br />
                <Tab4d />


                <div className="max-w-[1400px] mx-auto">
                    {children}
                </div>

                <FourDDrawContainer />
                <div className="max-w-[1400px] mx-auto">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default FishingLayout;
