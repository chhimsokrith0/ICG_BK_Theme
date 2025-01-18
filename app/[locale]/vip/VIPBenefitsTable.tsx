const VIPBenefitsTable = () => {
    return (
        <section className="bg-[#0b2134] py-16 px-4">
            <div className="max-w-[1400px] mx-auto">
                <div className="overflow-auto">
                    {/* Table Header */}
                    <div className="grid grid-cols-6 items-center text-center font-semibold text-gray-500 bg-[#0d1f2c] py-4 border-b border-yellow-600">
                        <div className="text-left pl-4 text-yellow-500">VIP Benefits</div>
                        <div>Bronze</div>
                        <div>Silver</div>
                        <div>Gold</div>
                        <div>Platinum</div>
                        <div>Diamond</div>
                    </div>

                    {/* Table Rows */}
                    <div className="bg-gradient-to-r from-[#0d1f2c80] to-[#0b1b27] shadow-md text-gray-300">
                        {[
                            {
                                benefit: "Designated Account Manager",
                                values: ["-", "-", "-", "Yes", "Yes"],
                            },
                            {
                                benefit: "Maximum Daily Withdrawal Limits",
                                values: ["20,000", "25,000", "35,000", "45,000", "By Invitation"],
                            },
                            {
                                benefit: "Daily Bank Withdrawal Limit",
                                values: ["15,000", "20,000", "30,000", "40,000", "By Invitation"],
                            },
                            {
                                benefit: "Daily Crypto Withdrawal Limit",
                                values: ["20,000", "25,000", "35,000", "45,000", "By Invitation"],
                            },
                            {
                                benefit: "Daily Transaction Counts",
                                values: ["10", "15", "15", "15", "By Invitation"],
                            },
                            {
                                benefit: "Tier Upgrade Bonus",
                                values: ["50", "150", "300", "500", "1,000"],
                            },
                            {
                                benefit: "Weekly Rescue Bonus",
                                values: ["288", "388", "588", "688", "1,288"],
                            },
                            {
                                benefit: "Birthday Bonus",
                                values: ["188", "288", "388", "588", "888"],
                            },
                            {
                                benefit: "Sport Rebate",
                                values: ["0.30%", "0.40%", "0.50%", "0.60%", "0.70%"],
                            },
                            {
                                benefit: "BK8 Sports Rebate",
                                values: ["0.40%", "0.50%", "0.60%", "0.70%", "0.80%"],
                            },
                            {
                                benefit: "Live Casino Rebate - Baccarat",
                                values: ["0.30%", "0.40%", "0.50%", "0.60%", "0.70%"],
                            },
                            {
                                benefit:
                                    "Live Casino Rebate - Roulette, Blackjack, Dragon Tiger, Sicbo",
                                values: ["0.20%", "0.30%", "0.40%", "0.50%", "0.60%"],
                            },
                            {
                                benefit: "Slot Rebate",
                                values: ["0.50%", "0.60%", "0.70%", "0.80%", "1.00%"],
                            },
                            {
                                benefit: "Virtual Sport Rebate",
                                values: ["0.50%", "0.60%", "0.70%", "0.80%", "0.90%"],
                            },
                            {
                                benefit: "Monthly Tier Upgrade Requirement",
                                values: ["-", "-", "-", "-", "-"],
                            },
                            {
                                benefit: "Minimum Deposit",
                                values: ["15,000", "60,000", "150,000", "250,000", "By Invitation"],
                            },
                            {
                                benefit: "Membership Renewal",
                                values: ["Lifetime", "Lifetime", "3 Months", "3 Months", "3 Months"],
                            },
                        ].map((row, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-6 items-center text-center py-3 ${
                                    index % 2 === 0 ? "bg-[#0d1f2c]" : "bg-[#0b1b27]"
                                }`}
                            >
                                <div className="text-left pl-4">{row.benefit}</div>
                                {row.values.map((value, i) => (
                                    <div
                                        key={i}
                                        className={`${
                                            i < row.values.length - 1
                                                ? "border-r border-yellow-600"
                                                : ""
                                        }`}
                                    >
                                        {value}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Last Updated */}
                <div className="text-gray-500 text-sm mt-4 text-right">
                    Last Updated Time: (2024-12-06)
                </div>
            </div>
        </section>
    );
};

export default VIPBenefitsTable;
