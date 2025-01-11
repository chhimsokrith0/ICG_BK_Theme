"use client";

import React from "react";
import { motion } from "framer-motion";

const HowToRegister = () => {
    const steps = [
        {
            id: 0,
            title: "Create account",
            description: "Click Join Now. Fill in your login info",
            iconColor: "#FF0000",
            svgPath: (
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736496922/alert_9977426_mickzn.svg"
                    alt="Create Account Icon"
                    className="w-full h-full"
                />
            ),
        },
        {
            id: 1,
            title: "Make a deposit",
            description: "Make your first deposit using money or crypto transfer",
            iconColor: "#67E59E",
            svgPath: (
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736497055/bitcoin-transfer_16822876_ve7dmk.svg"
                    alt="Make a Deposit Icon"
                    className="w-full h-full"
                />
            ),
        },
        {
            id: 2,
            title: "Start winning",
            description: "Start winning while playing on your favourite games",
            iconColor: "#F7921A",
            svgPath: (
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736497113/love-badge_9432975_fagx0s.svg"
                    alt="Start Winning Icon"
                    className="w-full h-full"
                />
            ),
        },
        {
            id: 3,
            title: "Get reward",
            description: "Don't forget to claim your bonuses",
            iconColor: "#FCB813",
            svgPath: (
                <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736497126/philanthropy_11152583_ji2eln.svg"
                    alt="Get Reward Icon"
                    className="w-full h-full"
                />
            ),
        },
    ];

    return (
        <section className="register-guide-section py-12 px-8 mx-auto max-w-[1400px]">
            <motion.h1
                className="guide-title text-3xl font-bold text-center mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Welcome to BK8 - Trusted Online Casino in Asia
            </motion.h1>
            <motion.h2
                className="guide-title2 text-xl font-medium text-center mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                How to Register
            </motion.h2>

            <motion.div
                className="step-container grid grid-cols-4 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delayChildren: 0.3,
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {steps.map((step) => (
                    <motion.div
                        key={step.id}
                        className="guide-box flex flex-col items-center text-center p-6 border rounded-lg shadow-md"
                        style={{ borderColor: step.iconColor }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="icon-container w-16 h-16 mb-4">{step.svgPath}</div>
                        <div className="guide-content">
                            <p className="font-medium">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736494896/gradient-bar_v8g1eg.jpg"
                alt="Progress bar"
                className="progress-bar-img mt-6 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            />

            <motion.div
                className="step-title-container flex justify-between mt-4"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            delayChildren: 1,
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {steps.map((step) => (
                    <motion.div
                        key={step.id}
                        className="step-title text-xl text-center font-semibold text-sm"
                        style={{ color: step.iconColor }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        {step.title}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default HowToRegister;
