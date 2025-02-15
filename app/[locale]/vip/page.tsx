import VIPSection from "./VIPSection"
import VIPTierSection from "./VIPTierSection"
import HowItWorksSection from "./HowItWorksSection"
import VIPBenefitsTable from "./VIPBenefitsTable"
import FAQAndTerms from "./FAQAndTerms"
import ReferralSection from "./ReferralSection"
import Testimonials from "./Testimonials"
import BackgroundImageSection from "./BackgroundImageSection"

const VIPPage = () => {
  return (
    <div className="relative bg-[#0b2134]">
      {/* Background Image */}
      <BackgroundImageSection />

      {/* VIP Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
        <VIPSection />

        {/* VIP Tier Section */}
        <div className="mt-8">
          <VIPTierSection />
        </div>

        {/* How It Works Section */}
        <div className="mt-8">
          <HowItWorksSection />
        </div>

        {/* VIP Benefits Table */}
        <div className="mt-8">
          <VIPBenefitsTable />
        </div>

        {/* FAQ and Terms */}
        <div className="mt-8">
          <FAQAndTerms />
        </div>

        {/* Referral Section */}
        <div className="mt-8">
          <ReferralSection />
        </div>

        {/* Testimonials */}
        <div className="mt-8">
          <Testimonials />
        </div>
      </div>
    </div>
  )
}

export default VIPPage

