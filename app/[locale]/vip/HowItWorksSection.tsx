import { useTranslations } from "next-intl"

const HowItWorksSection = () => {
  const t = useTranslations("vip.HowItWorksSection")

  const steps = t.raw("steps")

  const firstTimeUpgrade = t.raw("firstTimeUpgrade.description")
  return (
    <section className="bg-[#0b2134] py-8 md:py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-white">
        <h2 className="text-lg sm:text-xl font-bold text-yellow-500 mb-4">{t("title")}</h2>
        <h3 className="text-base sm:text-lg font-semibold text-yellow-400 mb-6">{t("subtitle")}</h3>

        <ol className="list-decimal list-inside space-y-4 text-gray-300 text-sm sm:text-base leading-6 sm:leading-7">
          {steps.map((step: string, index: number) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <h3 className="text-base sm:text-lg font-semibold text-white mt-8">{t("firstTimeUpgrade.title")}</h3>
        {firstTimeUpgrade.map((step: string, index: number) => (
          <p key={index} className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-7 mt-2">
            {step}
          </p>
        ))}
      </div>
    </section>
  )
}

export default HowItWorksSection

