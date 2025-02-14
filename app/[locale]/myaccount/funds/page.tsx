"use client"
import WalletApplicationsMobile from "@/components/WalletApplicationsMobile/WalletApplicationsMobile"
import HeaderBarWithMenu from "@/components/funds/HeaderBarWithMenu"
import UserProfile from "@/components/funds/UserProfile"
import VerificationSection from "@/components/funds/VerificationSection"
import ActionGrid from "@/components/funds/ActionGrid"

const Page = () => {
  return (
    <div className="block lg:hidden">
      <HeaderBarWithMenu />
      <div className="space-y-4 p-4">
        <UserProfile />
        <WalletApplicationsMobile />
        <VerificationSection />
        <ActionGrid />
      </div>
    </div>
  )
}

export default Page

