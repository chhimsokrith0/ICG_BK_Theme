'use client';

import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar/page";

export default function Layout({ children }: { children: React.ReactNode }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
    };

    const sidebarVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const mainContentVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
    };

    return (
        <motion.div
            className="container max-w-[1400px] mx-auto flex mt-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div variants={sidebarVariants}>
                <Sidebar />
            </motion.div>
            <motion.main className="flex-grow" variants={mainContentVariants}>
                {children}
            </motion.main>
        </motion.div>
    );
}
