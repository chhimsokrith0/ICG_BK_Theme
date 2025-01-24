'use client';
import React from 'react';
import { motion } from 'framer-motion';
import TransactionHistory from '../TransactionHistory';

const Page = () => {
    const pageVariants = {
        hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }, // Fade in and slide up
        exit: { opacity: 0, y: 50, transition: { duration: 0.3 } } // Exit animation
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-lg shadow-md p-6 w-full ml-2 h-screen"
        >
            <TransactionHistory />
        </motion.div>
    );
};

export default Page;
