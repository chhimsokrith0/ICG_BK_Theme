"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function MobileMenu({ closeMenu }: { closeMenu: () => void }) {

    const t = useTranslations("MobileMenu");


    const [clones, setClones] = useState<number[]>([]);

    const handleLogOut = () => {
        signOut({
            redirect: true,
            callbackUrl: "/", // Redirect to the home page or login page
        });
    };

    const MenuItemsMainList = t.raw("menuItemsMain");

    const menuItemsMain = MenuItemsMainList.map((menuItemsMain: any) => ({
        icon: menuItemsMain.icon,
        label: menuItemsMain.label,
        color: menuItemsMain.color,
        link: menuItemsMain.link,
        badge: menuItemsMain.badge,
    }));


    const MenuItemsLinksList = t.raw("menuItemsLinks");

    const menuItemsLinks = MenuItemsLinksList.map((menuItemsLinks: any) => ({
        label: menuItemsLinks.label,
        link: menuItemsLinks.link,
    }));

    

    const MenuItemsGridList = t.raw("menuItemsGrid");

    const menuItemsGrid = MenuItemsGridList.map((menuItemsGrid: any) => ({
        icon: menuItemsGrid.icon,
        label: menuItemsGrid.label,
        link: menuItemsGrid.link,
    }));

    const renderMenu = (key: number) => (
        <motion.div
            key={key}
            className="bg-white shadow-md p-4 mt-20 ml-10 w-[653px] fixed top-0 left-0 z-50 overflow-y-auto rounded-lg grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {/* Left Section */}
            <div className="text-gray-700 text-sm font-medium">
                {/* Main Section */}
                <div className="space-y-6 mb-6">
                    {menuItemsMain.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center space-x-2 text-base font-medium ${item.color}`}
                        >
                            <Link href={item.link}>
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <span className="mr-2 text-3xl">{item.icon}</span>
                                    <span>{item.label}</span>
                                    {item.badge && (
                                        <span
                                            className={`ml-2 ${item.badge.color} text-xs px-2 py-0.5 rounded-full`}
                                        >
                                            {item.badge.text}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Links Section */}
                <ul className="space-y-2 pl-4 text-sm list-disc text-gray-500 mb-6">
                    {menuItemsLinks.map((link: any, index: number) => (
                        <motion.li key={index} whileHover={{ x: 10 }}>
                            <Link href={link.link}>
                                <span className="text-base cursor-pointer">{link.label}</span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Clone Button */}
                <motion.button
                    onClick={handleLogOut}
                    className="bg-orange-500 text-white text-base font-medium px-4 py-2 rounded-md w-full shadow-md hover:bg-orange-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {t("logoutButton.label")}
                </motion.button>
            </div>

            {/* Right Section */}
            <div className="text-gray-700 text-sm font-medium grid grid-cols-1 gap-4 border-l pl-4 justify-items-center">
                {menuItemsGrid.map((item: any, index: number) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center space-x-2 text-base font-medium"
                    >
                        <Link href={item.link}>
                            <div className="flex items-center space-x-2 cursor-pointer">
                                <span className="text-3xl text-blue-500">{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );

    return (
        <>
            {renderMenu(0)}
            {clones.map((cloneKey) => renderMenu(cloneKey))}
        </>
    );
}
