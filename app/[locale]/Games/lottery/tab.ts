export interface Tab {
    id: number;
    label: string;
    icon: string;
    tag: string;
    link: string;
}

export const tabs: Tab[] = [
    {
        id: 1,
        label: "QQKeno",
        icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736747778/casino_2130241_oax4se.png",
        tag: "",
        link: "/Games/lottery/qqkeno",
    },
    {
        id: 2,
        label: "Funky Games",
        icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736747778/casino_2130241_oax4se.png",
        tag: "",
        link: "/Games/lottery/funkygames",
    },
    {
        id: 3,
        label: "TC Gaming",
        icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736747778/casino_2130241_oax4se.png",
        tag: "",
        link: "/Games/lottery/tcg",
    },
    
];
