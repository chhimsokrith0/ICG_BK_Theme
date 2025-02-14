"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { type RegistrationFormData, slides } from "@/types/RegisterType"
import { handleSubmit } from "@/lib/Registerutils"
import RegistrationForm from "@/components/Register/RegistrationForm"
import PromotionalSection from "@/components/Register/PromotionalSection"

const Page: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    username: "",
    password: "",
    contactNumber: "",
    email: "",
    fullName: "",
    preferredCurrency: "MYR",
  })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit(formData)
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-4 lg:p-10 bg-gray-100 min-h-screen">
      <div className="flex flex-col lg:flex-row w-full lg:max-w-[1500px] rounded-lg overflow-hidden shadow-lg bg-white">
        <RegistrationForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={onSubmit}
          setFormData={setFormData}
          isMobile={isMobile}
        />
        <PromotionalSection currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} isMobile={isMobile} />
      </div>
    </div>
  )
}

export default Page

