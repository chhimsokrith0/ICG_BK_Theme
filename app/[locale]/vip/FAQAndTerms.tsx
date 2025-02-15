import { useTranslations } from "next-intl"

interface FAQQuestion {
  question: string
  answer: string
}

const FAQAndTerms = () => {
  const t = useTranslations("vip.FAQAndTerms")

  const faqs: FAQQuestion[] = t.raw("FAQ.questions")

  const terms: string[] = t.raw("TermsAndConditions.content")

  return (
    <section id="faq" className="bg-[#0b2134] py-8 md:py-16">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8 px-4 md:px-6">
        {/* FAQ Section */}
        <div className="w-full lg:w-1/2 bg-[#162b36] p-4 md:p-6 rounded-md text-gray-300 opacity-90">
          <h2 className="text-base md:text-lg font-semibold text-yellow-500 mb-4">{t("FAQ.title")}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-bold text-white text-sm md:text-base">{faq.question}</h3>
                <p className="text-sm md:text-base whitespace-pre-line mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions Section with Image */}
        <div className="w-full lg:w-1/2 bg-[#162b36] p-4 md:p-6 rounded-md text-gray-300 opacity-90 relative flex flex-col">
          <div className="lg:flex-1">
            <h2 className="text-base md:text-lg font-semibold text-yellow-500 mb-4">{t("TermsAndConditions.title")}</h2>
            {terms.map((term, index) => (
              <p
                key={index}
                className={`text-sm md:text-base ${index === terms.length - 1 ? "text-white mt-6" : "mt-4"}`}
              >
                {term}
              </p>
            ))}
          </div>
          <div className="mt-8 lg:mt-0 lg:absolute lg:bottom-[-20px] lg:right-[-40px] hidden lg:block">
            <img
              src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737196199/faq-img_meudwy.png"
              alt="VIP Model"
              className="w-[150px] md:w-[180px] lg:w-[250px] h-auto mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQAndTerms

