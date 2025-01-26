'use client';

import React from "react";
import { motion } from "framer-motion";
import RebateSection from "./RebateSection";
import HeaderBarWithMenu from "../HeaderBarWithMenu";

const Page = () => {
  return (
    <>
      <div className="hidden lg:block">
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
      </div>

      <div className="lg:hidden">
        <HeaderBarWithMenu />
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
      </div>
    </>
  );
};

export default Page;
