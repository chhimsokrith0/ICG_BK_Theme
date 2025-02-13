// "use client";

// import React, { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import SportsDropdown from "./Dropdown/SportsDropdown";
// import E_SportsDropdown from "./Dropdown/E_SportsDropdown";
// import CasinoDropdown from "./Dropdown/CasinoDropdown";
// import SlotsDropdown from "./Dropdown/SlotsDropdown";
// import FishingDropdown from "./Dropdown/FishingDropdown";
// import FourDDropdown from "./Dropdown/4DDropdown";
// import LotteryDropdown from "./Dropdown/LotteryDropdown";
// import FastGamesDropdown from "./Dropdown/FastGamesDropdown";
// import { useTranslations } from "next-intl";
// import Link from "next/link";
// import "./style.css";

// export default function DesktopMenu({ locale }: { locale: string }) {
//     const pathname = usePathname();
//     const t = useTranslations("navbar");

//     const menuItems = [
//         { key: "sports", name: t("Sports"), link: `/${locale}/Games/sports/BK8Sports` },
//         { key: "esports", name: t("E-Sports"), link: `/${locale}/Games/E-Sports/TF-Gaming` },
//         { key: "casino", name: t("Casino"), link: `/${locale}/Games/casino/evolution-gaming` },
//         { key: "slots", name: t("Slots"), link: `/${locale}/Games/Slots/nextspin` },
//         { key: "fishing", name: t("Fishing"), link: `/${locale}/Games/Fishing/Spadegaming` },
//         { key: "4d", name: t("4DGames"), link: `/${locale}/Games/4d/granddragon` },
//         { key: "lottery", name: t("Lottery"), link: `/${locale}/Games/lottery` },
//         { key: "fastgames", name: t("FastGames"), link: `/${locale}/Games/fastgames`, isNew: true },
//         { key: "promos", name: t("Promos"), link: `/${locale}/promotion` },
//         { key: "vip", name: t("VIP"), link: `/${locale}/vip` },
//     ];

//     const [activeItem, setActiveItem] = useState<string>("");
//     const [hoveredItem, setHoveredItem] = useState<string | null>(null);

//     // Dynamically set active item based on the current pathname
//     useEffect(() => {
//         const matchedItem = menuItems.find((item) => pathname?.startsWith(item.link));
//         setActiveItem(matchedItem ? matchedItem.key : "");
//     }, [pathname, menuItems]);

//     const handleMouseEnter = (key: string) => {
//         setHoveredItem(key);
//     };

//     const handleMouseLeave = () => {
//         setHoveredItem(null);
//     };

//     const renderDropdown = (key: string) => {
//         switch (key) {
//             case "sports":
//                 return <SportsDropdown />;
//             case "esports":
//                 return <E_SportsDropdown />;
//             case "casino":
//                 return <CasinoDropdown />;
//             case "slots":
//                 return <SlotsDropdown />;
//             case "fishing":
//                 return <FishingDropdown />;
//             case "4d":
//                 return <FourDDropdown />;
//             case "lottery":
//                 return <LotteryDropdown />;
//             case "fastgames":
//                 return <FastGamesDropdown />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="relative">
//             <ul className="menu-wrapper hidden md:flex items-center h-[80px] text-sm font-medium text-gray-700">
//                 {menuItems.map((item) => (
//                     <li
//                         key={item.key}
//                         className={`navbar-item relative flex items-center h-full px-4 cursor-pointer ${activeItem === item.key
//                             ? "text-blue-500 font-bold border-b-2 border-blue-500"
//                             : "hover:text-blue-500 text-gray-600"
//                             }`}
//                         onMouseEnter={() => handleMouseEnter(item.key)}
//                         onMouseLeave={handleMouseLeave}
//                     >
//                         <Link href={item.link} title={item.name}>
//                             <div className="menu-item-title">
//                                 <p className="menu-text m-0 whitespace-nowrap">{item.name}</p>
//                             </div>
//                         </Link>
//                         {item.isNew && (
//                             <div className="icon-container absolute top-[-20px] right-[-5px]">
//                                 <img
//                                     src="https://www.bk33best88.asia/public/html/images/drawer_img/menu_icon_new.svg"
//                                     alt="New"
//                                     className="w-6 h-6"
//                                 />
//                             </div>
//                         )}
//                         {hoveredItem === item.key && (
//                             <div
//                                 className="absolute top-full left-0 w-screen bg-white shadow-lg z-50"
//                             >
//                                 {renderDropdown(item.key)}
//                             </div>

//                         )}
//                     </li>
//                 ))}

//             </ul>
//         </div>
//     );
// }




"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import SportsDropdown from "./Dropdown/SportsDropdown"
import E_SportsDropdown from "./Dropdown/E_SportsDropdown"
import CasinoDropdown from "./Dropdown/CasinoDropdown"
import SlotsDropdown from "./Dropdown/SlotsDropdown"
import FishingDropdown from "./Dropdown/FishingDropdown"
import FourDDropdown from "./Dropdown/4DDropdown"
import LotteryDropdown from "./Dropdown/LotteryDropdown"
import FastGamesDropdown from "./Dropdown/FastGamesDropdown"
import { useTranslations } from "next-intl"
import Link from "next/link"
import "./style.css"

export default function DesktopMenu({ locale }: { locale: string }) {
  const pathname = usePathname()
  const t = useTranslations("navbar")

  const menuItems = [
    {
      key: "sports",
      name: t("Sports"),
      link: `/${locale}/Games/sports/BK8Sports`,
      categoryName: "Sportsbook",
      categoryCode: "S",
    },
    {
      key: "esports",
      name: t("E-Sports"),
      link: `/${locale}/Games/E-Sports/TF-Gaming`,
      categoryName: "ESportsbook",
      categoryCode: "ES",
    },
    {
      key: "casino",
      name: t("Casino"),
      link: `/${locale}/Games/casino/evolution-gaming`,
      categoryName: "Casino",
      categoryCode: "C",
    },
    {
      key: "slots",
      name: t("Slots"),
      link: `/${locale}/Games/Slots/nextspin`,
      categoryName: "Slot",
      categoryCode: "SL",
    },
    {
      key: "fishing",
      name: t("Fishing"),
      link: `/${locale}/Games/Fishing/Spadegaming`,
      categoryName: "Fishing",
      categoryCode: "F",
    },
    {
      key: "4d",
      name: t("4DGames"),
      link: `/${locale}/Games/4d/granddragon`,
      categoryName: "FourD",
      categoryCode: "FD",
    },
    {
      key: "lottery",
      name: t("Lottery"),
      link: `/${locale}/Games/lottery`,
      categoryName: "Lottery",
      categoryCode: "L",
    },
    {
      key: "fastgames",
      name: t("FastGames"),
      link: `/${locale}/Games/fastgames`,
      isNew: true,
      categoryName: "FastGames",
      categoryCode: "FG",
    },
    {
      key: "promos",
      name: t("Promos"),
      link: `/${locale}/promotion`,
      categoryName: "Promotions",
    },
    {
      key: "vip",
      name: t("VIP"),
      link: `/${locale}/vip`,
      categoryName: "VIP",
    },
  ]

  const [activeItem, setActiveItem] = useState<string>("")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const matchedItem = menuItems.find((item) => pathname?.startsWith(item.link))
    setActiveItem(matchedItem ? matchedItem.key : "")
  }, [pathname, menuItems]) // Added menuItems to dependencies

  const handleMouseEnter = (key: string) => {
    setHoveredItem(key)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  const renderDropdown = (key: string) => {
    switch (key) {
      case "sports":
        return <SportsDropdown />
      case "esports":
        return <E_SportsDropdown />
      case "casino":
        return <CasinoDropdown />
      case "slots":
        return <SlotsDropdown />
      case "fishing":
        return <FishingDropdown />
      case "4d":
        return <FourDDropdown />
      case "lottery":
        return <LotteryDropdown />
      case "fastgames":
        return <FastGamesDropdown />
      default:
        return null
    }
  }

  return (
    <div className="navMenu-container">
      <ul className="menu-wrapper hidden md:flex items-center h-[80px] text-sm font-medium text-gray-700">
        {menuItems.map((item) => (
          <li
            key={item.key}
            className={`navbar-item relative flex items-center h-full px-4 cursor-pointer ${
              hoveredItem === item.key ? "hovered" : ""
            } ${
              activeItem === item.key
                ? "text-blue-500 font-bold border-b-2 border-blue-500"
                : "hover:text-blue-500 text-gray-600"
            }`}
            data-category-name={item.categoryName}
            data-category-code={item.categoryCode}
            onMouseEnter={() => handleMouseEnter(item.key)}
            onMouseLeave={handleMouseLeave}
          >
            {item.isNew && (
              <div className="icon-container absolute top-[-20px] right-[-5px]">
                <span
                  className="lazy-load-image-background opacity lazy-load-image-loaded"
                  style={{ color: "transparent", display: "inline-block" }}
                >
                  <img
                    loading="lazy"
                    src="/public/html/images/drawer_img/menu_icon_new.svg"
                    alt="New"
                    className="w-6 h-6"
                  />
                </span>
              </div>
            )}
            <Link href={item.link} className="headerLink" title={item.name}>
              <div className="menu-item-title">
                <p className="m-0">{item.name}</p>
              </div>
            </Link>
            {hoveredItem === item.key && (
              <div className="fixed left-0 right-0 top-[80px]">{renderDropdown(item.key)}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

