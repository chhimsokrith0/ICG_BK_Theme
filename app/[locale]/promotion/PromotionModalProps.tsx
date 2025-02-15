"use client"

import type React from "react"
import { useEffect } from "react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import Countdown from "./Countdown"
import { useTranslations } from "next-intl"

interface PromotionModalProps {
    isOpen: boolean
    onClose: () => void
}

const PromotionModal: React.FC<PromotionModalProps> = ({ isOpen, onClose }) => {
    const t = useTranslations("promotion.promotionModal")

    const eventDetailsheaders = t.raw("eventDetails.table.headers")
    const eventDetailsrows = t.raw("eventDetails.table.rows")

    const howToApply = t.raw("howToApply.steps")

    const applicableProvidersheaders = t.raw("applicableProviders.table.headers")
    const applicableProvidersrows = t.raw("applicableProviders.table.rows")

    const termsAndConditionspoints = t.raw("termsAndConditions.points")

    const promotionDetailsexampleheaders = t.raw("promotionDetails.example.table.headers")
    const promotionDetailsexamplerows = t.raw("promotionDetails.example.table.rows")

    const additionalTermsPoints = t.raw("additionalTerms.points")

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    if (!isOpen) return null

    return createPortal(
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
                            {t("joinNow")}
                        </button>

                        {/* Countdown */}
                        <Countdown />
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-gray-900 mt-4 text-left">{t("title")}</h2>

                    {/* Promotion Period */}
                    <p className="text-sm text-gray-600 mt-2 text-left">{t("promotionPeriod")}</p>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-4">{t("eventDetails.title")}</h3>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-200 text-sm">
                            <thead>
                                <tr>
                                    {eventDetailsheaders.map((header: string, index: number) => (
                                        <th key={index} className="bg-orange-500 text-white px-4 py-2">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {eventDetailsrows.map((row: string[], rowIndex: number) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell: string, cellIndex: number) => (
                                            <td key={cellIndex} className="border px-4 py-2 text-center">
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-bold mb-4">{t("howToApply.title")}</h3>
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
                        {howToApply.map((step: string, index: number) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: step }}></li>
                        ))}
                    </ol>
                </div>

                <div className="mt-6">
                    {/* Applicable Providers */}
                    <h3 className="text-lg font-bold mb-4">{t("applicableProviders.title")}</h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-orange-500 text-white">
                                {applicableProvidersheaders.map((header: string, index: number) => (
                                    <th key={index} className="py-2 px-4 text-left">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {applicableProvidersrows.map((row: string[], rowIndex: number) => (
                                <tr key={rowIndex}>
                                    {row.map((cell: string, cellIndex: number) => (
                                        <td key={cellIndex} className="border border-gray-300 py-2 px-4">
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Terms & Conditions */}
                    <div className="mt-8">
                        <h3 className="text-lg font-bold mb-4">{t("termsAndConditions.title")}</h3>
                        {termsAndConditionspoints.map((point: string, index: number) => (
                            <p key={index} className="text-sm text-gray-700 mb-4">
                                {point}
                            </p>
                        ))}

                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-orange-500 text-white">
                                    {promotionDetailsexampleheaders.map((header: string, index: number) => (
                                        <th key={index} className="py-2 px-4 text-left">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {promotionDetailsexamplerows.map((row: string[], rowIndex: number) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell: string, cellIndex: number) => (
                                            <td key={cellIndex} className="border border-gray-300 py-2 px-4">
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4">{t("additionalTerms.title")}</h3>
                    <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
                        {additionalTermsPoints.map((term: string, index: number) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: term }}></li>
                        ))}
                    </ol>
                </div>
            </motion.div>
        </div>,
        document.body,
    )
}

export default PromotionModal

