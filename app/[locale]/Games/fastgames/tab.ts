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
        label: "Spribe",
        icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736747778/casino_2130241_oax4se.png",
        tag: "Hot",
        link: "/Games/fastgames/spb",
    },
    {
        id: 2,
        label: "T1Games",
        icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736747778/casino_2130241_oax4se.png",
        tag: "New",
        link: "/Games/casino/ae-casino",
    },
    {
        id: 3,
        label: "Jili",
        icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736747778/casino_2130241_oax4se.png",
        tag: "New",
        link: "/Games/casino/bk8-casino",
    },
    {
        id: 4,
        label: "Motivation",
        icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736747778/casino_2130241_oax4se.png",
        tag: "Hot",
        link: "/Games/casino/pragmatic-play",
    }
];