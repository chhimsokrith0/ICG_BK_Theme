import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

interface PromotionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PromotionModal: React.FC<PromotionModalProps> = ({ isOpen, onClose }) => {
    // Prevent page scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = ""; // Reset overflow when component unmounts
        };
    }, [isOpen]);

    // If modal is not open, do not render anything
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <motion.div
                className="bg-white rounded-lg shadow-lg max-w-6xl w-full p-6 overflow-y-auto scrollbar-hide max-h-[90vh]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {/* Close Button */}
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-2">
                        <svg
                            width="20"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 8.81858 8.81858"
                            className="fill-current"
                        >
                            <g>
                                <path d="M0.26095,8.81701c-0.06982,0-0.13379-0.02734-0.18506-0.07715    C-0.01541,8.64806-0.0203,8.4879,0.06857,8.38732l8.3042-8.30566c0.05273-0.05371,0.11426-0.08008,0.18555-0.08008    c0.07031,0,0.13477,0.02734,0.18555,0.07813c0.09961,0.10059,0.10059,0.2666-0.00098,0.36719l-8.354,8.3457    c0.00049-0.00098,0.00049-0.00098,0-0.00098C0.38449,8.79162,0.33029,8.81701,0.26095,8.81701z"></path>
                                <path d="M8.55832,8.81701c-0.07324,0-0.1377-0.02637-0.18555-0.07422L0.02756,0.38927    C-0.0159,0.33849-0.0159,0.17443,0.08224,0.0758c0.0459-0.0459,0.10986-0.07227,0.17871-0.07227    c0.06348,0,0.12158,0.02148,0.16309,0.05859l8.31592,8.31055c0.05078,0.0498,0.07715,0.11328,0.07715,0.18457    c0,0.07227-0.02637,0.13574-0.0752,0.18457S8.62961,8.81701,8.55832,8.81701z"></path>
                            </g>
                        </svg>
                    </button>
                </div>

                {/* Modal Content */}
                <div className="text-center">
                    {/* Promotion Image */}
                    <img
                        src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737183975/20240723044519-b482ae48-a353-4d8d-9597-d074a75c2e4f_uvotup.jpg"
                        alt="Promotion Banner"
                        className="w-full rounded-lg mb-4"
                    />

                    {/* Join Button */}
                    <div className="flex items-start justify-between mt-4">
                        <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-400 text-sm font-medium">
                            Join now
                        </button>

                        {/* Countdown */}
                        <Countdown />

                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-gray-900 mt-4 text-left">288% "Have You BK8?" Welcome Bonus</h2>

                    {/* Promotion Period */}
                    <p className="text-sm text-gray-600 mt-2 text-left">
                        Promotion Period: 1st January 00:00:00 (GMT+8) to 31st March 2025 23:59:59 (GMT+8)
                    </p>

                </div>


                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-4">Event Details:</h3>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-200 text-sm">
                            <thead>
                                <tr>
                                    <th className="bg-orange-500 text-white px-4 py-2">Min. Deposit</th>
                                    <th className="bg-orange-500 text-white px-4 py-2">Bonus</th>
                                    <th className="bg-orange-500 text-white px-4 py-2">Max. Bonus</th>
                                    <th className="bg-orange-500 text-white px-4 py-2">Turnover</th>
                                    <th className="bg-orange-500 text-white px-4 py-2">Validity Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2 text-center">MYR 50</td>
                                    <td className="border px-4 py-2 text-center">288%</td>
                                    <td className="border px-4 py-2 text-center">MYR 2,880</td>
                                    <td className="border px-4 py-2 text-center">35x</td>
                                    <td className="border px-4 py-2 text-center">30 days</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-4">How to Apply:</h3>
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
                        <li>
                            Register an account with BK8. Not yet a member?{" "}
                            <a href="/register" className="text-blue-500 hover:underline">
                                Sign up here!
                            </a>
                        </li>
                        <li>All first deposit MYR account members are entitled to this promotion.</li>
                        <li>
                            Members are required to{" "}
                            <strong>transfer a minimum amount of MYR 50</strong> in selected slots
                            provider wallet to claim bonus.
                        </li>
                        <li>
                            Go to <span className="font-semibold">[Transfer]</span> page, select{" "}
                            <span className="font-semibold">“Transfer”</span>.
                        </li>
                        <li>
                            Enter the amount you would like to transfer from{" "}
                            <span className="font-semibold">“Main Wallet”</span> to the applicable{" "}
                            <span className="font-semibold">[Provider]</span> wallet.
                        </li>
                        <li>
                            Select the applicable <span className="font-semibold">[Promo Code]</span>{" "}
                            from the promo code dropdown menu.
                        </li>
                    </ol>
                </div>



                <div className="mt-6">
                    {/* Applicable Providers */}
                    <h3 className="text-lg font-bold mb-4">Applicable Providers:</h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-orange-500 text-white">
                                <th className="py-2 px-4 text-left">Product</th>
                                <th className="py-2 px-4 text-left">Applicable Providers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 py-2 px-4">Slots</td>
                                <td className="border border-gray-300 py-2 px-4">
                                    Pragmatic Play, Habanero, RedTiger, GoldenBay, CQ9, Fa Chai, Spribe, Relax Gaming,
                                    YGGDrasil, Advantplay, BBIN, Expanse Studio, V-Power, Evoplay
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Terms & Conditions */}
                    <div className="mt-8">
                        <h3 className="text-lg font-bold mb-4">Terms & Conditions:</h3>
                        <p className="text-sm text-gray-700 mb-4">
                            Members are required to fulfil the aforementioned turnover/winover requirements of the
                            [deposit + bonus] amount in order to transfer or withdraw. Please refer to the following
                            example:
                        </p>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-orange-500 text-white">
                                    <th className="py-2 px-4 text-left">Deposit</th>
                                    <th className="py-2 px-4 text-left">Bonus (288%)</th>
                                    <th className="py-2 px-4 text-left">Turnover</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 py-2 px-4">MYR 100</td>
                                    <td className="border border-gray-300 py-2 px-4">+ MYR 288</td>
                                    <td className="border border-gray-300 py-2 px-4">MYR 13,580</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>





                <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4">Terms & Conditions:</h3>
                    <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
                        <li>
                            Promotion is subject to availability. Applicable to all Slot Providers except JDB, PlayStar,
                            Nextspin, Spadegaming, YesGetRich, Joker, JiLi, Funky Games, PlayTech, Dragoon Soft,
                            FastSpin, GamePlay, AsiaGaming, Microgaming, 918Kiss and Mega888.
                        </li>
                        <li>
                            Bonus will be credited to your chosen Provider Wallet after a successful fund transfer.
                        </li>
                        <li>
                            Bonuses are valid for thirty (30) days upon issuance unless stated otherwise. Money won using
                            bonus funds will be removed from the member’s account if prerequisites are not fulfilled
                            within the given time frame.
                        </li>
                        <li>
                            Any bets resulting in void, tie, cancelled, or made on opposite sides with the same outcome
                            will not be counted as a valid turnover.
                        </li>
                        <li>
                            Turnover on all types of non-live table games (e.g. Blackjack, Video Poker, Craps, American
                            Roulette, Baccarat, and other non-live table games), non-slot games, and arcade games will
                            not count towards this turnover requirement unless SPECIFICALLY stated.
                        </li>
                        <li>
                            Members who claimed the promotion for a certain provider are not allowed to make a second
                            transfer to the same provider while the promotion is active,{" "}
                            <strong>EXCEPT FOR</strong> members who achieved the turnover requirement or the promotion
                            is cancelled.
                        </li>
                        <li>
                            All customer offers are limited to one per person. Meaning one per family, household address,
                            IP address, email address, telephone number, credit or debit card and/or e-payment account,
                            or shared computer (e.g. school, public library or workplace).
                        </li>
                        <li>
                            This promotion cannot be used in conjunction with other BK8 promotions.
                        </li>
                        <li>
                            BK8 reserves the right to modify, cancel, suspend or terminate the promotion and/or change
                            the terms of the promotion at any time without prior notice.
                        </li>
                        <li>
                            BK8 reserves the right to confiscate all the winning/bonus from any customer or group of
                            customers if found to be a breach of any clause at any time and at our sole and absolute
                            discretion.
                        </li>
                        <li>BK8 is the sole arbiter of the promotion, and its decision is final.</li>
                        <li>
                            Participating members must accept and comply with all the terms mentioned above as well as
                            all relevant and rules and regulations stated on the BK8 website.
                        </li>
                        <li>
                            <a href="/info-centre/tnc" className="text-blue-500 hover:underline">
                                General BK8 Terms & Conditions apply.
                            </a>
                        </li>
                    </ol>
                </div>
            </motion.div>
        </div>,
        document.body
    );
};

export default PromotionModal;
