import React from "react";

const PrizeDisplay = () => {
    const prizes = [
        {
            id: "I",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838574/lw20240430143412201_hd5z0g.png",
            label: "25 Activity Points",
            bgImg: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838576/prize-level1_snyueg.png",
        },
        {
            id: "II",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737974268/lw20240531111628628_iuyig8.png",
            label: "USD 1 - 3 Angpao",
            bgImg: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838576/prize-level2_qbz8zx.png",
        },
        {
            id: "III",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737974268/lw20240531111628628_iuyig8.png",
            label: "50G Gold Bar",
            bgImg: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838577/prize-level3_rccbtw.png",
        },
        {
            id: "IV",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838573/lw20240430143412163_jys5qv.png",
            label: "USD 10 - 20 Angpao",
            bgImg: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838578/prize-level4_lppjrm.png",
        },
        {
            id: "V",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838573/lw20240430143412163_jys5qv.png",
            label: "USD 5 - 10 Angpao",
            bgImg: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838578/prize-level5_spdoij.png",
        },
        {
            id: "VI",
            image: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838574/lw20240430143412206_qq4dzv.png",
            label: "Special Prize",
            bgImg: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736838579/prize-level6_ukpmws.png",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center items-center gap-6 p-6">
            {prizes.map((prize) => (
                <div
                    key={prize.id}
                    className="flex flex-col items-center bg-cover bg-center rounded-lg p-4 w-[150px] h-[270px] shadow-md relative"
                    style={{
                        backgroundImage: `url(${prize.bgImg})`, // Dynamically setting the background image
                    }}
                >
                    {/* Prize Image */}
                    <img
                        src={prize.image}
                        alt={prize.label}
                        className="w-26 h-26 object-contain mb-4 mt-16"
                    />

                    {/* Prize Label */}
                    <p className="text-white text-center text-sm font-semibold">{prize.label}</p>
                </div>
            ))}
        </div>
    );
};

export default PrizeDisplay;
