"use client"
import { useTranslations } from "next-intl"
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function CMD368Page() {
    const t = useTranslations("Games.cmd368")
    const { data: session } = useSession()

    return (
        <div className="text-center py-16 px-6 max-w-[1400px] mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("header.title")}</h1>
            <p className="text-gray-700 text-lg mb-4">{t("header.subtitle")}</p>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">{t("header.description")}</p>
            <div className="mt-8">
                <Link
                    href={session ? "" : "/login"}
                    className="bg-orange-500 text-white font-semibold text-lg py-3 px-10 rounded-full hover:bg-orange-600 transition duration-300"
                >
                    {t("button.text")}
                </Link>
            </div>
            <img src={t("image.src")} className="mx-auto w-full h-full mt-8" alt={t("image.alt")} />
        </div>
    )
}

