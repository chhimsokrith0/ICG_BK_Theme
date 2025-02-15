
import React from "react";
import { useTranslations } from "next-intl";

interface Row {
    benefit: string;
    values: string[];
}

const VIPBenefitsTable = () => {
    const t = useTranslations("vip.VIPBenefitsTable");

    const headers = t.raw("headers");

    const rows : Row[] = t.raw("rows");

    return (
        <section id="benefits" className="bg-[#0b2134] py-8 md:py-16 px-4">
            <div className="max-w-[1400px] mx-auto">
                <div className="overflow-x-auto">
                    {/* Table Header */}
                    <div className="grid grid-cols-6 items-center text-center font-semibold text-gray-500 bg-[#0d1f2c] py-4 border-b border-yellow-600 min-w-[600px]">
                        <div className="text-left pl-4 text-yellow-500 whitespace-nowrap">{t("title")}</div>
                        {headers.map((header: string, index: number) => (
                            <div key={index}>
                                {header}
                            </div>
                        ))}
                    </div>

                    {/* Table Rows */}
                    <div className="bg-gradient-to-r from-[#0d1f2c80] to-[#0b1b27] shadow-md text-gray-300 min-w-[600px]">
                        {rows.map((row, index) => (
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
                    {t("lastUpdated")}
                </div>
            </div>
        </section>
    );
};

export default VIPBenefitsTable;
