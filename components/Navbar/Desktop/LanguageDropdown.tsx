// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { useRouter, usePathname } from "next/navigation";
// import "./style.css";

// const LanguageDropdown = () => {
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState({
//     name: "Region and Language",
//     flag: null as string | null,
//   });

//   const router = useRouter();
//   const pathname = usePathname(); // Current route

//   const languages = [
//     {
//       name: "Thailand",
//       languageOptions: [
//         { name: "English", code: "en-th", link: "/en-th" },
//         { name: "ไทย", code: "th-th", link: "/th-th" },
//       ],
//       flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/th_byfrmv.png",
//     },
//     {
//       name: "Indonesia",
//       languageOptions: [
//         { name: "English", code: "en-id", link: "/en-id" },
//         { name: "Bhs Indonesia", code: "id-id", link: "/id-id" },
//       ],
//       flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/indo_nh6l9k.png",
//     },
//     {
//       name: "Malaysia",
//       languageOptions: [
//         { name: "English", code: "en-my", link: "/en-my" },
//         { name: "简体中文", code: "zh-my", link: "/zh-my" },
//         { name: "Malay", code: "ms-my", link: "/ms-my" },
//       ],
//       flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/malay_ov7mho.svg",
//     },
//     {
//       name: "Vietnam",
//       languageOptions: [
//         { name: "English", code: "en-vn", link: "/en-vn" },
//         { name: "Tiếng Việt", code: "vi", link: "/vi" },
//       ],
//       flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/vietnamese_j0rykn.jpg",
//     },
//     {
//       name: "Cambodia",
//       languageOptions: [
//         { name: "English", code: "en-kh", link: "/en-kh" },
//         { name: "ខ្មែរ", code: "km-kh", link: "/km-kh" },
//         { name: "中文", code: "zh-kh", link: "/zh-kh" },
//       ],
//       flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/kh_ed3tmn.jpg",
//     },
//     {
//       name: "Philippines",
//       languageOptions: [
//         { name: "English", code: "en-ph", link: "/en-ph" },
//         { name: "Tagalog", code: "tl", link: "/tl" },
//         { name: "中文", code: "zh-ph", link: "/zh-ph" },
//       ],
//       flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/philippines_uifhos.png",
//     },
//     {
//       name: "Chinese",
//       languageOptions: [
//         { name: "English", code: "en-zh", link: "/en-zh" },
//         { name: "简体中文", code: "zh-cn", link: "/zh-cn" },
//       ],
//       flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/chinese_dxrdpn.png",
//     },
//     {
//       name: "Singapore",
//       languageOptions: [
//         { name: "English", code: "en-sg", link: "/en-sg" },
//         { name: "中文", code: "zh-sg", link: "/zh-sg" },
//       ],
//       flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/singapore_hk6sy3.png",
//     },
//     {
//       name: "Myanmar",
//       languageOptions: [
//         { name: "English", code: "en-mm", link: "/en-mm" },
//         { name: "မြန်မာ", code: "my-mm", link: "/my-mm" },
//         { name: "中文", code: "zh-mm", link: "/zh-mm" },
//       ],
//       flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/myammar_tf4xwq.webp",
//     },
//     {
//       "name": "Laos",
//       "languageOptions": [
//         { name: "English", code: "en-la", link: "/en-la" },
//         { name: "ລາວ", code: "lo-la", link: "/lo-la" },
//         { name: "中文", code: "zh-la", link: "/zh-la" },
//       ],
//       "flag": "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/lao_r5l6yz.png",
//     },
//     {
//       "name": "Hindi",
//       "languageOptions": [
//         { name: "English", code: "en-in", link: "/en-in" },
//         { name: "हिन्दी", code: "hi-in", link: "/hi-in" },
//         { name: "中文", code: "zh-in", link: "/zh-in" },
//       ],
//       "flag": "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/hindi_fw5lqd.webp",
//     },
//     {
//       "name": "Urdu",
//       "languageOptions": [
//         { name: "English", code: "en-pk", link: "/en-pk" },
//         { name: "اردو", code: "ur-pk", link: "/ur-pk" },
//         { name: "中文", code: "zh-pk", link: "/zh-pk" },
//       ],
//       "flag": "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/urdu_l7ptk8.jpg",
//     },
//     {
//       "name": "Bengali",
//       "languageOptions": [
//         { name: "English", code: "en-bd", link: "/en-bd" },
//         { name: "বাংলা", code: "bn-bd", link: "/bn-bd" },
//         { name: "中文", code: "zh-bd", link: "/zh-bd" },
//       ],
//       "flag": "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/bengali_bzgmaw.png",
//     },
//     {
//       "name": "Taiwanese",
//       "languageOptions": [
//         { name: "English", code: "en-tw", link: "/en-tw" },
//         { name: "中文", code: "zh-tw", link: "/zh-tw" },
//       ],
//       "flag": "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/Taiwan_iv5pjf.webp",
//     },
//     {
//       "name": "Hong Kong",
//       "languageOptions": [
//         { name: "English", code: "en-hk", link: "/en-hk" },
//         { name: "中文", code: "zh-hk", link: "/zh-hk" },
//       ],
//       "flag": "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/hongkong_kycia1.png",
//     },
//     {
//       "name": "Korean",
//       "languageOptions": [
//         { name: "English", code: "en-kr", link: "/en-kr" },
//         { name: "한국어", code: "ko-kr", link: "/ko-kr" },
//         { name: "中文", code: "zh-kr", link: "/zh-kr" },
//       ],
//       "flag": "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/korea_s08db8.webp",
//     },
//     {
//       "name": "Portuguese",
//       "languageOptions": [
//         { name: "English", code: "en-br", link: "/en-br" },
//         { name: "Português", code: "pt-br", link: "/pt-br" },
//         { name: "中文", code: "zh-br", link: "/zh-br" },
//       ],
//       "flag": "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/portugal_lep9my.png",
//     },
//     {
//       "name": "Australia",
//       "languageOptions": [
//         { name: "English", code: "en-au", link: "/en-au" },
//         { name: "中文", code: "zh-au", link: "/zh-au" },
//       ],
//       "flag": "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/australia_qh975e.webp",
//     },
//     {
//       "name": "Canada",
//       "languageOptions": [
//         { name: "English", code: "en-ca", link: "/en-ca" },
//         { name: "中文", code: "zh-ca", link: "/zh-ca" },
//       ],
//       "flag": "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/canada_rrkhgu.webp",
//     }
//   ];

//   // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   // Handle language change
//   const handleLanguageChange = (
//     language: { name: string; flag: string },
//     link: string
//   ) => {
//     setSelectedLanguage({ name: language.name, flag: language.flag });
//     router.push(link);
//     setIsDropdownOpen(false);
//   };

//   // Determine the active language based on the current pathname
//   useEffect(() => {
//     const findActiveLanguage = () => {
//       for (const lang of languages) {
//         for (const option of lang.languageOptions) {
//           if (pathname?.startsWith(option.link)) {
//             setSelectedLanguage({ name: lang.name, flag: lang.flag });
//             return;
//           }
//         }
//       }
//       // Default if no match
//       setSelectedLanguage({ name: "Region and Language", flag: null });
//     };

//     findActiveLanguage();
//   }, [pathname]);

//   // Close the dropdown when clicking outside
//   useEffect(() => {
//     const handleOutsideClick = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <div ref={dropdownRef} className="relative">
//       {/* Dropdown Toggle */}
//       <button
//         onClick={toggleDropdown}
//         aria-label="Region and Language Selector"
//         className="flex items-center space-x-2 py-2 px-4 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
//       >
//         {selectedLanguage.flag ? (
//           <Image
//             src={selectedLanguage.flag}
//             alt={selectedLanguage.name}
//             width={24}
//             height={24}
//             className="rounded-full"
//           />
//         ) : (
//           <FontAwesomeIcon icon={faGlobe} className="text-blue-500" />
//         )}
//         <span>{selectedLanguage.name}</span>
//         <FontAwesomeIcon icon={faChevronDown} className="text-gray-400" />
//       </button>

//       {/* Dropdown Menu */}
//       {isDropdownOpen && (
//         <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg w-64 z-10 max-h-96 overflow-y-auto custom-scrollbar">
//           <ul>
//             {languages.map((lang) => (
//               <li key={lang.name} className="p-4">
//                 <div className="flex items-center space-x-3">
//                   <Image
//                     src={lang.flag}
//                     alt={lang.name}
//                     width={24}
//                     height={24}
//                     className="rounded-full"
//                   />
//                   <div>
//                     <h4 className="text-sm font-medium">{lang.name}</h4>
//                     <div className="text-xs text-gray-500">
//                       {lang.languageOptions.map((option, index) => (
//                         <span key={option.code}>
//                           <a
//                             onClick={() =>
//                               handleLanguageChange(lang, option.link)
//                             }
//                             className={`hover:text-blue-500 cursor-pointer ${pathname?.startsWith(option.link)
//                                 ? "text-blue-600 font-semibold"
//                                 : ""
//                               }`}
//                           >
//                             {option.name}
//                           </a>
//                           {index < lang.languageOptions.length - 1 && " | "}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageDropdown;




"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useRouter, usePathname } from "next/navigation"
import "./style.css"

const LanguageDropdown = () => {
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "Region and Language",
    flag: null as string | null,
  })

  const router = useRouter()
  const pathname = usePathname() // Current route

  const languages = [
    {
      name: "Thailand",
      languageOptions: [
        { name: "English", code: "en-th", link: "/en-th" },
        { name: "ไทย", code: "th-th", link: "/th-th" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/th_byfrmv.png",
    },
    {
      name: "Indonesia",
      languageOptions: [
        { name: "English", code: "en-id", link: "/en-id" },
        { name: "Bhs Indonesia", code: "id-id", link: "/id-id" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/indo_nh6l9k.png",
    },
    {
      name: "Malaysia",
      languageOptions: [
        { name: "English", code: "en-my", link: "/en-my" },
        { name: "简体中文", code: "zh-my", link: "/zh-my" },
        { name: "Malay", code: "ms-my", link: "/ms-my" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/malay_ov7mho.svg",
    },
    {
      name: "Vietnam",
      languageOptions: [
        { name: "English", code: "en-vn", link: "/en-vn" },
        { name: "Tiếng Việt", code: "vi", link: "/vi" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/vietnamese_j0rykn.jpg",
    },
    {
      name: "Cambodia",
      languageOptions: [
        { name: "English", code: "en-kh", link: "/en-kh" },
        { name: "ខ្មែរ", code: "km-kh", link: "/km-kh" },
        { name: "中文", code: "zh-kh", link: "/zh-kh" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/kh_ed3tmn.jpg",
    },
    {
      name: "Philippines",
      languageOptions: [
        { name: "English", code: "en-ph", link: "/en-ph" },
        { name: "Tagalog", code: "tl", link: "/tl" },
        { name: "中文", code: "zh-ph", link: "/zh-ph" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/philippines_uifhos.png",
    },
    {
      name: "Chinese",
      languageOptions: [
        { name: "English", code: "en-zh", link: "/en-zh" },
        { name: "简体中文", code: "zh-cn", link: "/zh-cn" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/chinese_dxrdpn.png",
    },
    {
      name: "Singapore",
      languageOptions: [
        { name: "English", code: "en-sg", link: "/en-sg" },
        { name: "中文", code: "zh-sg", link: "/zh-sg" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/singapore_hk6sy3.png",
    },
    {
      name: "Myanmar",
      languageOptions: [
        { name: "English", code: "en-mm", link: "/en-mm" },
        { name: "မြန်မာ", code: "my-mm", link: "/my-mm" },
        { name: "中文", code: "zh-mm", link: "/zh-mm" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/myammar_tf4xwq.webp",
    },
    {
      name: "Laos",
      languageOptions: [
        { name: "English", code: "en-la", link: "/en-la" },
        { name: "ລາວ", code: "lo-la", link: "/lo-la" },
        { name: "中文", code: "zh-la", link: "/zh-la" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/lao_r5l6yz.png",
    },
    {
      name: "Hindi",
      languageOptions: [
        { name: "English", code: "en-in", link: "/en-in" },
        { name: "हिन्दी", code: "hi-in", link: "/hi-in" },
        { name: "中文", code: "zh-in", link: "/zh-in" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/hindi_fw5lqd.webp",
    },
    {
      name: "Urdu",
      languageOptions: [
        { name: "English", code: "en-pk", link: "/en-pk" },
        { name: "اردو", code: "ur-pk", link: "/ur-pk" },
        { name: "中文", code: "zh-pk", link: "/zh-pk" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/urdu_l7ptk8.jpg",
    },
    {
      name: "Bengali",
      languageOptions: [
        { name: "English", code: "en-bd", link: "/en-bd" },
        { name: "বাংলা", code: "bn-bd", link: "/bn-bd" },
        { name: "中文", code: "zh-bd", link: "/zh-bd" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/bengali_bzgmaw.png",
    },
    {
      name: "Taiwanese",
      languageOptions: [
        { name: "English", code: "en-tw", link: "/en-tw" },
        { name: "中文", code: "zh-tw", link: "/zh-tw" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/Taiwan_iv5pjf.webp",
    },
    {
      name: "Hong Kong",
      languageOptions: [
        { name: "English", code: "en-hk", link: "/en-hk" },
        { name: "中文", code: "zh-hk", link: "/zh-hk" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/hongkong_kycia1.png",
    },
    {
      name: "Korean",
      languageOptions: [
        { name: "English", code: "en-kr", link: "/en-kr" },
        { name: "한국어", code: "ko-kr", link: "/ko-kr" },
        { name: "中文", code: "zh-kr", link: "/zh-kr" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640313/korea_s08db8.webp",
    },
    {
      name: "Portuguese",
      languageOptions: [
        { name: "English", code: "en-br", link: "/en-br" },
        { name: "Português", code: "pt-br", link: "/pt-br" },
        { name: "中文", code: "zh-br", link: "/zh-br" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640312/portugal_lep9my.png",
    },
    {
      name: "Australia",
      languageOptions: [
        { name: "English", code: "en-au", link: "/en-au" },
        { name: "中文", code: "zh-au", link: "/zh-au" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/australia_qh975e.webp",
    },
    {
      name: "Canada",
      languageOptions: [
        { name: "English", code: "en-ca", link: "/en-ca" },
        { name: "中文", code: "zh-ca", link: "/zh-ca" },
      ],
      flag: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1733640311/canada_rrkhgu.webp",
    },
  ]

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  // Handle language change
  const handleLanguageChange = (language: { name: string; flag: string }, link: string) => {
    setSelectedLanguage({ name: language.name, flag: language.flag })
    router.push(link)
    setIsDropdownOpen(false)
  }

  // Determine the active language based on the current pathname
  useEffect(() => {
    const findActiveLanguage = () => {
      for (const lang of languages) {
        for (const option of lang.languageOptions) {
          if (pathname?.startsWith(option.link)) {
            setSelectedLanguage({ name: lang.name, flag: lang.flag })
            return
          }
        }
      }
      // Default if no match
      setSelectedLanguage({ name: "Region and Language", flag: null })
    }

    findActiveLanguage()
  }, [pathname])

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      {/* Dropdown Toggle */}
      <button
        onClick={toggleDropdown}
        aria-label="Region and Language Selector"
        className="flex items-center space-x-2 py-2 px-3 sm:px-4 bg-white border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
      >
        {selectedLanguage.flag ? (
          <Image
            src={selectedLanguage.flag || "/placeholder.svg"}
            alt={selectedLanguage.name}
            width={24}
            height={24}
            className="rounded-full"
          />
        ) : (
          <FontAwesomeIcon icon={faGlobe} className="text-blue-500" />
        )}
        <span>{selectedLanguage.name}</span>
        <FontAwesomeIcon icon={faChevronDown} className="text-gray-400" />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg w-48 sm:w-64 z-10 max-h-80 sm:max-h-96 overflow-y-auto custom-scrollbar">
          <ul>
            {languages.map((lang) => (
              <li key={lang.name} className="p-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={lang.flag || "/placeholder.svg"}
                    alt={lang.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-sm font-medium">{lang.name}</h4>
                    <div className="text-xs text-gray-500">
                      {lang.languageOptions.map((option, index) => (
                        <span key={option.code}>
                          <a
                            onClick={() => handleLanguageChange(lang, option.link)}
                            className={`hover:text-blue-500 cursor-pointer ${
                              pathname?.startsWith(option.link) ? "text-blue-600 font-semibold" : ""
                            }`}
                          >
                            {option.name}
                          </a>
                          {index < lang.languageOptions.length - 1 && " | "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default LanguageDropdown

