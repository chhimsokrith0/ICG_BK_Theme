'use client'
import React from "react";
import { motion } from "framer-motion";
import ReferralSection from "./ReferralSection";
import ImportantNotice from "../ImportantNotice";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }} // Initial state: slightly below and transparent
      animate={{ opacity: 1, translateY: 0 }} // Animate to full opacity and position
      transition={{
        duration: 0.6, // Animation duration
        ease: "easeOut", // Smooth easing
      }}
    >
      <motion.div
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          delay: 0.2, // Delayed start for cascading effect
          duration: 0.6,
        }}
      >
        <ReferralSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          delay: 0.4, // Delayed start for cascading effect
          duration: 0.6,
        }}
      >
        <ImportantNotice />
      </motion.div>
    </motion.div>
  );
};

export default Page;
