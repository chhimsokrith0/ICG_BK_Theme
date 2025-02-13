'use client';
import React from "react";
import { motion } from "framer-motion";
import BankWithdrawal from "./BankWithdrawal";
import HeaderBarWithMenu from "../HeaderBarWithMenu";


const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state: transparent and slightly below
      animate={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
      transition={{
        duration: 0.6, // Animation duration
        ease: "easeOut", // Smooth easing for the animation
      }}
    >
      <div className="block md:hidden">
        <HeaderBarWithMenu />
      </div>

      <BankWithdrawal />
    </motion.div>
  );
};

export default Page;
