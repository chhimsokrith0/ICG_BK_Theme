'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ChangePassword from './ChangePassword';

const Page = () => {
    const pageVariants = {
        hidden: { opacity: 0, y: 50 }, // Initial state: invisible and slightly below
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }, // Animate to visible
        exit: { opacity: 0, y: 50, transition: { duration: 0.3 } } // Exit animation
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-screen bg-white p-6 rounded-lg ml-2 shadow-lg"
        >
            <ChangePassword />
        </motion.div>
    );
};

export default Page;
