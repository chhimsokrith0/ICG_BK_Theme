"use client";

import React from "react";
import Link from "next/link";

const JoinLoginButtons = () => {
    return (
        <div className="grid grid-cols-2 w-full mt-[-5.5px]">
            {/* Join Button */}
            <Link href="/register">
                <button
                    className="bg-red-600 text-white font-bold text-lg w-full py-3 hover:bg-red-700"
                    aria-label="Join"
                >
                    JOIN
                </button>
            </Link>

            {/* Login Button */}
            <Link href="/login">
                <button
                    className="bg-blue-600 text-white font-bold text-lg py-3 w-full hover:bg-blue-700"
                    aria-label="Login"
                >
                    LOGIN
                </button>
            </Link>
        </div>
    );
};

export default JoinLoginButtons;
