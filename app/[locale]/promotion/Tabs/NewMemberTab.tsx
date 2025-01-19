'use client';
import React, { useState } from "react";
import PromotionModal from "../PromotionModalProps";
import Link from "next/link";

import Countdown from "../Countdown";

const NewMemberTab = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const promotions = [
        {
            title: '288% "Have You BK8?" Welcome Bonus',
            description: "Power up your play with 288% Have You BK8 Welcome Bonus and receive up to MYR 2,880!",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183976/20240723044632-a93b5695-3fd7-4b1f-b15e-4a7f997ee8bc_orvzie.jpg",
            time: "72 : 09 : 01 : 45",
        },
        {
            title: "150% Welcome Bonus",
            description: "Welcome to BK8! Make your first deposit and get up to MYR 300 bonus credits! (First Promotion Application Only)",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183975/20240723044519-b482ae48-a353-4d8d-9597-d074a75c2e4f_uvotup.jpg",
            time: "72 : 09 : 01 : 45",
        },
        {
            title: "Claim 188 Slots Free Spins",
            description: "Make a deposit and claim up to 188 Free Spins! Exclusive for newly registered members!",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183974/20240723044310-53adf0af-40fc-43c0-9d77-e43afb8954aa_j1k8xz.jpg",
            time: "71 : 09 : 01 : 45",
        },
        {
            title: "CNY 2025 Snake Gold Bar Challenge",
            description: "Give your 2025 a golden start with our Snake Gold Bar! Deposit MYR 500,000 and win a gold bar now!",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183973/20240523104206-4602e816-8930-4704-9981-de9ced8b1367_vmgjsg.jpg",
            time: "71 : 09 : 01 : 45",
        },
        {
            title: "BK8 Sports Free Bet Challenge and Mystery Box",
            description: "Win endless rewards in BK8 Sports! Join challenges for free bets and earn mystery coins for mystery boxes!",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183972/20240520161728-5dd628c7-d3d5-4591-bb51-fae596dd467e_knlaca.jpg",
            time: "71 : 09 : 01 : 45",
        },
        {
            title: "Spadegaming Play & Win Tournament",
            description: "Play Spadegaming slot games for instant wins! Boost your fortunes from the prize pool of MYR 2,568,150 with bets as low as MYR 4.5!",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183918/20240520161610-e338744f-3b1d-4668-bf32-2a895b556f99_jmdxvs.jpg",
            time: "71 : 09 : 01 : 45",
        },
        {
            title: "Spadegaming Fishing Frenzy Tournament",
            description: "Turn your MYR 4.5 bet into a massive win worth up to MYR 2,568,150 in Spadegaming! Get your game on now!",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183917/20240520161407-22522f67-f31c-4ec4-b410-fcc3bebecd3a_iligqy.jpg",
            time: "71 : 09 : 01 : 45",
        },
        {
            title: "BK8 Exclusive Debit Card",
            description: "You are invited to join our BK8 Exclusive Debit Card Program!",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183917/20230614135145-f7767e0f-9f0b-4880-a620-5e95f91511f1_cwf9rp.jpg",
            time: "71 : 09 : 01 : 45",
        },
        {
            title: "BK8 Rewards Club",
            description: "New in BK8! Get active and earn points to exchange for luxury items in our Rewards Club!",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183916/20230531074715-1de8b68f-25f2-4364-a1f7-82fee1f691f4_qgskvu.jpg",
            time: "71 : 09 : 01 : 45",
        },
        {
            title: "Lucky Wheel Spin: Login and Win Special Prizes",
            description: "Want more spins? Complete easy daily mission and earn activity points!",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183915/20230226104118-112daf38-936d-4c12-8401-0838c98f2335_l9ldtm.jpg",
            time: "71 : 09 : 01 : 45",
        },
        {
            title: "Refer A Friend & VIP Program",
            description: "New and improved! Enjoy up to MYR 3,888 bonus for referring friends to join BK8 as VIP!",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183915/20230226104118-112daf38-936d-4c12-8401-0838c98f2335_l9ldtm.jpg",
            time: "71 : 09 : 01 : 45",
        },
        {
            title: "You Play We Pay",
            description: "Here’s MYR 200 for your first bet. Go ahead, make your best bet!",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183915/20221030165241-f9ad1d22-c11a-403a-add1-04dd175a7c8a_ulyqmn.jpg",
            time: "71 : 09 : 01 : 45",
        },
        {
            title: "Baccarat Natural 8 Lose to Natural 9 Cashback",
            description: "Let us share your losses! Up to MYR 888 in cashbacks when you lose natural 8 to natural 9!",
            img: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183914/20220930062421-17b1db40-fa60-472b-8273-798aac143713_xt1qnh.jpg",
            time: "71 : 09 : 01 : 45",
        },

    ];
    return (
        <div className="space-y-4 mt-8">
            {promotions.map((promo, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg flex flex-col md:flex-row items-center overflow-hidden shadow-md"
                >
                    <div className="md:w-1/3 p-4">
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={promo.img}
                                alt={promo.title}
                                className="w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="md:w-2/3 flex justify-between items-center px-6 py-4">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800">{promo.title}</h3>
                            <p className="text-gray-600 mt-2">{promo.description}</p>
                            <div className="mt-4 flex space-x-2">
                                <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white whitespace-nowrap py-2 px-4 rounded hover:bg-blue-400 transition">
                                    More Info
                                </button>
                                <Link href="/register" className="bg-orange-500 whitespace-nowrap text-white py-2 px-4 rounded hover:bg-orange-400 transition">
                                    Join now
                                </Link>
                            </div>
                        </div>
                        <div className="text-center bg-gray-100 p-4 rounded-lg ml-4 hidden md:block">
                            <p className="text-sm text-gray-500">Remaining Time</p>
                            <div className="text-lg font-bold">
                                <span className="text-gray-700">{promo.time.split(":")[0]}</span>
                                <span className="text-sm text-gray-500"> Day</span>
                                <span className="ml-2">{promo.time.split(":").slice(1).join(" : ")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <PromotionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>

    );
};

export default NewMemberTab;
