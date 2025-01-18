const VIPTierSection = () => {
    return (
        <section
            className="bg-[#0b2134] py-16"
            style={{
                backgroundImage: `url('https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195402/upgrade-background_zfgwpa.jpg')`,
                backgroundSize: "120%",
                backgroundPosition: "center bottom",
            }}
        >
            <div className="max-w-[1400px] mx-auto px-6 text-center">
                {/* Header */}
                <h2 className="text-lg font-semibold text-yellow-500 mb-4">
                    Minimum Deposit Within A Month
                </h2>

                {/* Tier Icons */}
                <div className="flex justify-center items-center space-x-8 mt-8">
                    {/* Bronze */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-[106px] h-[120px] flex items-end justify-center">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195398/bronze_x0vh3t.png"
                                alt="Bronze"
                                className="h-full"
                            />
                        </div>
                        <p className="text-gray-400 text-sm mt-2">Bronze</p>
                        <p className="text-yellow-500 font-medium text-lg">15,000</p>
                    </div>

                    {/* Silver */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-[138px] h-[163px] flex items-end justify-center">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195401/silver_ws9l97.png"
                                alt="Silver"
                                className="h-full"
                            />
                        </div>
                        <p className="text-gray-400 text-sm mt-2">Silver</p>
                        <p className="text-yellow-500 font-medium text-lg">60,000</p>
                    </div>

                    {/* Gold */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-[175px] h-[214px] flex items-end justify-center">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195398/diamond_xrygod.png"
                                alt="Gold"
                                className="h-full"
                            />
                        </div>
                        <p className="text-gray-400 text-sm mt-2">Gold</p>
                        <p className="text-yellow-500 font-medium text-lg">150,000</p>
                    </div>

                    {/* Diamond */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-[137px] h-[163px] flex items-end justify-center">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195400/platinum_qqtwun.png"
                                alt="Diamond"
                                className="h-full"
                            />
                        </div>
                        <p className="text-gray-400 text-sm mt-2">Diamond</p>
                        <p className="text-yellow-500 font-medium text-lg">By Invitation</p>
                    </div>

                    {/* Platinum */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-[106px] h-[118px] flex items-end justify-center">
                            <img
                                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737195401/silver_ws9l97.png"
                                alt="Platinum"
                                className="h-full"
                            />
                        </div>
                        <p className="text-gray-400 text-sm mt-2">Platinum</p>
                        <p className="text-yellow-500 font-medium text-lg">250,000</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VIPTierSection;
