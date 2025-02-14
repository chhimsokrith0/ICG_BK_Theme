"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Link from "next/link"
import Image from "next/image"

import GetUsernameModal from "@/components/ModalForgotUsernamePassword/GetUsernameModal"
import LoginForm from "@/components/Login/LoginForm"
import SocialButtons from "@/components/Login/SocialButtons"
import { handleLogin } from "@/lib/Loginutils"
import type { SocialButton, LoginFormData } from "@/types/Logintypes"

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({ username: "", password: "" })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleLogin(formData.username, formData.password, setErrorMessage, router)
  }

  const socialButtons: SocialButton[] = [
    {
      name: "Telegram",
      icon: (
        <Image
          src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927711/telegram_2504941_vweah7.png"
          alt="Telegram"
          width={20}
          height={20}
          className="mr-2"
        />
      ),
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "Google",
      icon: (
        <Image
          src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927710/google_2504914_oi4est.png"
          alt="Google"
          width={20}
          height={20}
          className="mr-2"
        />
      ),
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "WhatsApp",
      icon: (
        <Image
          src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927711/whatsapp_2504957_aakbdh.png"
          alt="WhatsApp"
          width={20}
          height={20}
          className="mr-2"
        />
      ),
      color: "bg-green-500 hover:bg-green-600",
    },
  ]

  return (
    <div className={`flex ${isMobile ? "flex-col" : "justify-center items-center"} mt-8 px-4`}>
      <ToastContainer />
      <div
        className={`flex ${isMobile ? "flex-col" : "flex-row"} w-full max-w-[1500px] rounded-lg overflow-hidden shadow-lg bg-white`}
      >
        {/* Left Section */}
        <div className={`flex-1 px-6 py-8 ${isMobile ? "" : "lg:max-w-lg"}`}>
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left">Log in</h1>

          <SocialButtons buttons={socialButtons} />

          <div className="flex items-center mb-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <LoginForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            errorMessage={errorMessage}
          />

          <div className="mt-6 text-sm text-gray-500 text-center lg:text-left">
            <p>
              Forgot{" "}
              <button onClick={() => setIsModalOpen(true)} className="text-blue-500 underline">
                username
              </button>{" "}
              or{" "}
              <button onClick={() => setIsModalOpen(true)} className="text-blue-500 underline">
                password
              </button>
              ?
            </p>
            <p>
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-500 underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>

        {/* Right Section */}
        {!isMobile && (
          <div className="hidden lg:flex flex-1 bg-gray-50 justify-center items-center">
            <div className="text-center">
              <div className="overflow-hidden rounded-lg mx-auto">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736925743/bfc_fmuppp.jpg"
                  alt="Burnley F.C. Partner"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                OFFICIAL PARTNER OF <br /> BURNLEY F.C.
              </h3>
            </div>
          </div>
        )}
      </div>
      <GetUsernameModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default LoginPage

