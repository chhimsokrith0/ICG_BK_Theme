"use client"

import { useState } from "react"
import PromotionModal from "../PromotionModalProps"
import Link from "next/link"
import { useTranslations } from "next-intl"

interface Promotion {
  title: string
  description: string
  img: string
  time: string
}

const NewMemberTab = () => {
  const t = useTranslations("promotion.NewMemberTab")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const promotions: Promotion[] = t.raw("promotions")

  return (
    <div className="space-y-4 mt-8">
      {promotions.map((promo, index) => (
        <div
          key={index}
          className="bg-white rounded-lg flex flex-col md:flex-row items-center overflow-hidden shadow-md"
        >
          <div className="md:w-1/3 p-4">
            <div className="overflow-hidden rounded-lg">
              <img src={promo.img || "/placeholder.svg"} alt={promo.title} className="w-full object-cover" />
            </div>
          </div>

          <div className="md:w-2/3 flex justify-between items-center px-6 py-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800">{promo.title}</h3>
              <p className="text-gray-600 mt-2">{promo.description}</p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-500 text-white whitespace-nowrap py-2 px-4 rounded hover:bg-blue-400 transition"
                >
                  {t("buttons.moreInfo")}
                </button>
                <Link
                  href="/register"
                  className="bg-orange-500 whitespace-nowrap text-white py-2 px-4 rounded hover:bg-orange-400 transition"
                >
                  {t("buttons.joinNow")}
                </Link>
              </div>
            </div>
            <div className="text-center bg-gray-100 p-4 rounded-lg ml-4 hidden md:block">
              <p className="text-sm text-gray-500">{t("countdown.label")}</p>
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
  )
}

export default NewMemberTab

