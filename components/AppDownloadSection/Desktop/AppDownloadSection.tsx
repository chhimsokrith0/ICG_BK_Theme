"use client"
import { useTranslations } from "next-intl"

const AppDownloadSection = () => {
  const t = useTranslations("AppDownloadSection")

  return (
    <section className="mx-auto max-w-[1400px] py-12 px-8">
      <div className="flex flex-wrap md:flex-nowrap gap-8">
        {/* Left Container */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-xl font-medium mb-8">App Download</h2>

          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold leading-tight mb-2">The future of gaming is here.</h1>
                <p className="text-4xl font-bold leading-tight mb-2">Great games on all devices.</p>
                <p className="text-4xl font-bold text-blue-600">New BK8 App</p>
              </div>
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507572/bk8-app-icon_n8ubdo.png"
                alt="BK8 App Icon"
                className="w-16 h-16 rounded-2xl"
              />
            </div>
            <p className="text-gray-600">Sign up today for never ending rewards, promotion and lots of freebies.</p>
          </div>

          {/* QR Code Section */}
          <div className="flex gap-8">
            {/* iOS */}
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507990/qrios_dunlep.png"
                alt="iOS QR Code"
                className="w-36 h-36 mb-3 border border-gray-200 rounded-lg"
              />
              <div className="flex items-center justify-center gap-2 mb-1">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507978/apple_qwfbyd.png"
                  alt="Apple Logo"
                  className="w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Apple iOS</span>
              </div>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Instructions
              </a>
            </div>

            {/* Android */}
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507987/qrandroid_bpk5ke.png"
                alt="Android QR Code"
                className="w-36 h-36 mb-3 border border-gray-200 rounded-lg"
              />
              <div className="flex items-center justify-center gap-2 mb-1">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507976/android_u67fvg.png"
                  alt="Android Logo"
                  className="w-5 h-5"
                />
                <span className="text-gray-800 font-medium">Android</span>
              </div>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Instructions
              </a>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="flex-1 relative">
          <div className="relative">
            {/* Phone Mockup */}
            <div className="relative w-[400px] h-[800px]">
              <img
                src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507985/mobile_nvbjep.png"
                alt="BK8 App Interface"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Feature Cards */}
            <div className="absolute top-0 -right-[50px] grid grid-cols-2 gap-4">
              {/* Referral Made Easy */}
              <div className="w-[240px] h-[320px] rounded-2xl overflow-hidden relative group hover:scale-105 transition-transform">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507992/referral-made-easy_mmc59e.jpg"
                  alt="Referral Made Easy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 p-6 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-lg mb-2">Referral Made Easy</h3>
                  <p className="text-white text-sm">Share your referral link and earn money</p>
                </div>
              </div>

              {/* Security Assured */}
              <div className="w-[240px] h-[320px] rounded-2xl overflow-hidden relative group hover:scale-105 transition-transform">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507983/higher-security_i9lujp.jpg"
                  alt="Security Assured"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 p-6 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-lg mb-2">Security Assured</h3>
                  <p className="text-white text-sm">Access account via facial recognition or fingerprint</p>
                </div>
              </div>

              {/* Seamless Wallet Transfer */}
              <div className="w-[240px] h-[320px] rounded-2xl overflow-hidden relative group hover:scale-105 transition-transform">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507995/seamless-wallet-transfer_ysnoga.jpg"
                  alt="Seamless Wallet Transfer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 p-6 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-lg mb-2">Seamless Wallet Transfer</h3>
                  <p className="text-white text-sm">Transfer money in seconds</p>
                </div>
              </div>

              {/* Express Login */}
              <div className="w-[240px] h-[320px] rounded-2xl overflow-hidden relative group hover:scale-105 transition-transform">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736507980/express-login_pmlwbd.jpg"
                  alt="Express Login"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 p-6 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-lg mb-2">Express Login</h3>
                  <p className="text-white text-sm">Fast and secure way to keep you logged in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDownloadSection

