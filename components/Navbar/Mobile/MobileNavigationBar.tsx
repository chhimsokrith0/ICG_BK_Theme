import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileNavigationBar = () => {
    const navItems = [
        { label: "Home", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737779933/home_tlztbe.gif", link: "/home" },
        { label: "Funds", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737779933/Funds_u9vbdy.gif", link: "/myaccount/funds" },
        { label: "Instant Rebate", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737779933/Instant_Rebate_zrtf5a.gif", link: "/instant-rebate" },
        { label: "Account", icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737779933/Account_cdqdla.gif", link: "/account" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-1  ">
            <div className="w-3/4 grid grid-cols-4 gap-2">
                {navItems.map((item, index) => (
                    <Link key={index} href={item.link} passHref>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col items-center cursor-pointer group"
                        >
                            <img
                                src={item.icon}
                                alt={`${item.label} Icon`}
                                className="w-10 h-10 mb-1 group-hover:animate-bounce"
                            />
                            <span className="text-xs text-gray-700 font-medium group-hover:text-blue-500 transition-colors whitespace-nowrap truncate">
                                {item.label}
                            </span>

                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>


    );
};

export default MobileNavigationBar;
