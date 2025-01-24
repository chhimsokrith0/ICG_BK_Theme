'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DepositTabs from './DepositTabs';
import DepositOptions from './DepositOptions';
import ActionButtons from './ActionButtons';
import FastDeposit from './FastDeposit';

const DepositTab = () => {
    const [selectedTab, setSelectedTab] = useState('Normal Deposit');

    const tabContentVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
        exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: 'easeIn' } },
    };

    return (
        <motion.div
            className="bg-white p-6 ml-2 mt-2 rounded-lg shadow-md w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div>
                <div className="max-w-lg">
                    {/* Tabs */}
                    <DepositTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                </div>

                {/* Tab Content with Motion */}
                <AnimatePresence mode="wait">
                    {selectedTab === 'Normal Deposit' && (
                        <motion.div
                            key="NormalDeposit"
                            variants={tabContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <DepositOptions />
                        </motion.div>
                    )}

                    {selectedTab === 'Fast Deposit' && (
                        <motion.div
                            key="FastDeposit"
                            variants={tabContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <FastDeposit />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <ActionButtons />
            </motion.div>
        </motion.div>
    );
};

export default DepositTab;
