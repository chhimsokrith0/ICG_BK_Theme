"use client";

import React, { useState } from "react";
import SportsDropdown from "./Dropdown/SportsDropdown"; // Assume this component renders the sports cards as shown in the image
import E_SportsDropdown from "./Dropdown/E_SportsDropdown";
import CasinoDropdown from "./Dropdown/CasinoDropdown";
import SlotsDropdown from "./Dropdown/SlotsDropdown";
import FishingDropdown from "./Dropdown/FishingDropdown";
import FourDDropdown from "./Dropdown/4DDropdown";
import LotteryDropdown from "./Dropdown/LotteryDropdown";
import FastGamesDropdown from "./Dropdown/FastGamesDropdown";
import { useTranslations } from "next-intl";

export default function DesktopMenu() {
    const t = useTranslations("navbar");
    const menuItems = [
        { name: t("Sports"), categoryCode: "S", title: "Sports" },
        { name: t("E-Sports"), categoryCode: "ES", title: "E-Sports" },
        { name: t("Casino"), categoryCode: "C", title: "Casino" },
        { name: t("Slots"), categoryCode: "SL", title: "Slots" },
        { name: t("Fishing"), categoryCode: "F", title: "Fishing" },
        { name: t("4DGames"), categoryCode: "G", title: "4D Games" },
        { name: t("Lottery"), categoryCode: "L", title: "Lottery" },
        { name: t("FastGames"), categoryCode: "FG", title: "Fast Games", isNew: true },
        { name: t("Promos"), categoryCode: "Promotions", title: "Promos" },
        { name: t("VIP"), categoryCode: "VIP", title: "VIP" },
    ];

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (item: any) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <div className="relative">
            <ul className="menu-wrapper hidden md:flex items-center h-[80px] text-sm font-medium text-gray-700">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={`navbar-item relative flex items-center h-full px-4 hover:text-blue-500 cursor-pointer ${
                            hoveredItem === item.name ? "text-blue-500" : "text-black"
                        }`}
                        data-category-name={item.name}
                        data-category-code={item.categoryCode}
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a className="headerLink flex items-center h-full" title={item.title}>
                            <div className="menu-item-title">
                                <p className="m-0">{item.name}</p>
                            </div>
                        </a>
                        {item.isNew && (
                            <div className="icon-container absolute top-[-20px] right-[-5px]">
                                <img
                                    src="https://www.bk33best88.asia/public/html/images/drawer_img/menu_icon_new.svg"
                                    alt="New"
                                    className="w-6 h-6"
                                />
                            </div>
                        )}
                        {/* Render the dropdown only for the 'Sports' menu item */}
                        {item.name === t("Sports") && hoveredItem === t("Sports") && (
                            <div className="absolute top-full left-0 w-screen bg-white shadow-lg z-50">
                                <SportsDropdown />
                            </div>
                        )}
                        {item.name === t("E-Sports") && hoveredItem === t("E-Sports") && (
                            <div className="absolute top-full left-0 w-screen bg-white shadow-lg z-50">
                                <E_SportsDropdown />
                            </div>
                        )}
                        {item.name === t("Casino") && hoveredItem === t("Casino") && (
                            <div className="absolute top-full left-0 w-screen bg-white shadow-lg z-50">
                                <CasinoDropdown />
                            </div>
                        )}
                        {item.name === t("Slots") && hoveredItem === t("Slots") && (
                            <div className="absolute top-full left-0 w-screen bg-white shadow-lg z-50">
                                <SlotsDropdown />
                            </div>
                        )}
                        {item.name === t("Fishing") && hoveredItem === t("Fishing") && (
                            <div className="absolute top-full left-0 w-screen bg-white shadow-lg z-50">
                                <FishingDropdown />
                            </div>
                        )}
                        {item.name === t("4DGames") && hoveredItem === t("4DGames") && (
                            <div className="absolute top-full left-0 w-screen bg-white shadow-lg z-50">
                                <FourDDropdown />
                            </div>
                        )}
                        {item.name === t("Lottery") && hoveredItem === t("Lottery") && (
                            <div className="absolute top-full left-0 w-screen bg-white shadow-lg z-50">
                                <LotteryDropdown />
                            </div>
                        )}
                        {item.name === t("FastGames") && hoveredItem === t("FastGames") && (
                            <div className="absolute top-full left-0 w-screen bg-white shadow-lg z-50">
                                <FastGamesDropdown />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
