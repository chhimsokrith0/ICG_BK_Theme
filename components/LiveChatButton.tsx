"use client";

import React from "react";

const LiveChatButton = () => {
    const handleOpenChat = () => {
        // Open the live chat window in a new popup
        window.open(
            "https://vue.livesupportbs.com/chatwindow.aspx?siteId=5000379&chatGroup=1&planId=03040000-0000-0000-0000-008e004c4cbb#",
            "LiveChat",
            "width=400,height=600,resizable=yes,scrollbars=yes,status=yes"
        );
    };

    return (
        <div
            className="chatButtonContainer online fixed bottom-4 right-4"
            style={{ zIndex: 2147483642 }}
        >
            <div></div>
            <button
                aria-label="Open Live Chat window"
                role="button"
                onClick={handleOpenChat}
                className="chatButton--ripple chatButton flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-blue-800"
            >
                <div className="svg-container moveOut">
                    <svg
                        x="0px"
                        y="0px"
                        width="32px"
                        height="32px"
                        viewBox="0 0 32 32"
                        enableBackground="new 0 0 32 32"
                        focusable="false"
                        aria-hidden="true"
                        className="outIcon"
                    >
                        <g>
                            <defs>
                                <linearGradient id="linear">
                                    <stop offset="0%" stopColor="#0760DE"></stop>
                                    <stop
                                        offset="100%"
                                        stopColor="rgb(0,81,197)"
                                    ></stop>
                                </linearGradient>
                            </defs>
                            <path
                                fill="#fff"
                                d="M16.007 0c-8.299 0-14.023 6.836-14.023 14.024 0 5.88 2.982 8.636 4.107 9.916 0 0 4.093 4.585 12.068 8.060v-4.121c4.783-0.563 11.858-5.289 11.858-13.855-0.001-8.271-6.794-14.024-14.010-14.024z"
                                className="chatButton__svg-chat-path"
                            ></path>
                            <path
                                fill="url(#linear)"
                                d="M18.035 22.372v3.657c-0.014 0-2.729-1.364-4.276-2.574-2.926-2.236-6.498-4.416-6.498-9.438 0-4.993 4.149-8.622 8.622-8.622 0.005 0 0.011-0 0.017-0 4.744 0 8.591 3.838 8.605 8.579v0.043c0 5.162-4.164 7.779-6.47 8.355z"
                                className="innerIcon"
                            ></path>
                        </g>
                    </svg>
                    <div className="innerDotContainer"></div>
                </div>
            </button>
        </div>
    );
};

export default LiveChatButton;
