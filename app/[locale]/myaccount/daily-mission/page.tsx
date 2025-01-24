'use client'

import React from "react";
import { motion } from "framer-motion";
import MissionDiary from "./MissionDiary";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }} // Start slightly below and transparent
      animate={{ opacity: 1, translateY: 0 }} // Animate to full visibility and position
      transition={{
        duration: 0.6, // Animation duration
        ease: "easeOut", // Smooth easing
      }}
    >
      <MissionDiary />
    </motion.div>
  );
};

export default Page;
