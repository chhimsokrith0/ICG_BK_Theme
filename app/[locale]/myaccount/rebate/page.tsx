'use client';

import React from "react";
import { motion } from "framer-motion";
import RebateSection from "./RebateSection";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }} // Start slightly smaller and transparent
      animate={{ opacity: 1, scale: 1 }} // Animate to full size and opacity
      transition={{
        duration: 0.6, // Animation duration
        ease: "easeOut", // Smooth easing for the animation
      }}
    >
      <RebateSection />
    </motion.div>
  );
};

export default Page;
