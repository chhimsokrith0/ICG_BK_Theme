"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function BK8Sports() {
  const t = useTranslations("Games.sports.BK8Sports");
  return (
    <div className="bg-white text-center py-16 px-6">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("header.title")}</h1>
      <p className="text-gray-700 text-lg mb-4">
        {t("header.subtitle")}
      </p>
      <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
        {t("header.description")}
      </p>

      {/* Button Section */}
      <div className="mt-8">
        <button className="bg-orange-500 text-white font-semibold text-lg py-3 px-10 rounded-full hover:bg-orange-600 transition duration-300">
          {t("button.text")}
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-12">
        <img
          src={t("image.url")}
          alt={t("image.alt")}
          className="mx-auto w-full"
        />
      </div>
    </div>
  );
}
