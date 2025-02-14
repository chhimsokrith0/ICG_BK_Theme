import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import type { RegistrationFormData } from "@/types/RegisterType"
import Link from "next/link"

interface RegistrationFormProps {
  formData: RegistrationFormData
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent) => void
  setFormData: React.Dispatch<React.SetStateAction<RegistrationFormData>>
  isMobile: boolean
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formData,
  handleInputChange,
  handleSubmit,
  setFormData,
  isMobile,
}) => {
  const socialButtons = [
    {
      name: "Telegram",
      src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927711/telegram_2504941_vweah7.png",
    },
    { name: "Google", src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927710/google_2504914_oi4est.png" },
    {
      name: "WhatsApp",
      src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736927711/whatsapp_2504957_aakbdh.png",
    },
  ]

  return (
    <div className={`flex-1 px-4 py-6 ${isMobile ? "w-full" : "lg:px-12 lg:py-16"}`}>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Create Account</h1>

      <p className="text-sm text-gray-600 mb-4">Register with</p>
      <div className="flex gap-4 mb-8">
        {socialButtons.map((button) => (
          <button
            key={button.name}
            className="flex items-center justify-center w-[100px] lg:w-[120px] h-[42px] border border-gray-200 rounded-md hover:bg-gray-50"
          >
            <img src={button.src || "/placeholder.svg"} alt={button.name} className="w-6 h-6" />
          </button>
        ))}
      </div>

      <div className="flex items-center mb-8">
        <div className="flex-grow h-px bg-gray-200"></div>
        <span className="px-4 text-sm text-gray-400">or</span>
        <div className="flex-grow h-px bg-gray-200"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {["username", "password", "email", "fullName"].map((field) => (
          <div key={field}>
            <label className="block text-sm text-gray-600 mb-1">
              {field.charAt(0).toUpperCase() + field.slice(1)} <span className="text-red-500">*</span>
            </label>
            <Input
              type={field === "password" ? "password" : "text"}
              name={field}
              value={formData[field as keyof RegistrationFormData]}
              onChange={handleInputChange}
              className="w-full border-gray-200"
              placeholder={`Enter your ${field}`}
            />
          </div>
        ))}

        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Contact number <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <Select defaultValue="+60">
              <SelectTrigger className="w-[100px] border-gray-200">
                <div className="flex items-center">
                  <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/MY_jrcgpc.png"
                    alt="Malaysia"
                    className="w-4 h-4 mr-2"
                  />
                  +60
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+60">
                  <div className="flex items-center">
                    <img
                      src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/MY_jrcgpc.png"
                      alt="Malaysia"
                      className="w-4 h-4 mr-2"
                    />
                    +60
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="flex-1 border-gray-200"
              placeholder="Contact Number"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Preferred Currency <span className="text-red-500">*</span>
          </label>
          <Select
            value={formData.preferredCurrency}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredCurrency: value }))}
          >
            <SelectTrigger className="w-full border-gray-200">
              <div className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/MY_jrcgpc.png"
                  alt="Malaysia"
                  className="w-4 h-4 mr-2"
                />
                Malaysian Ringgit (MYR)
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MYR">
                <div className="flex items-center">
                  <img
                    src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1736939320/MY_jrcgpc.png"
                    alt="Malaysia"
                    className="w-4 h-4 mr-2"
                  />
                  Malaysian Ringgit (MYR)
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
          Register
        </Button>
      </form>

      <div className="mt-6 text-sm text-gray-500">
        <p>
          By clicking the Register button, I hereby acknowledge that I am above 18 years old and have read and accepted
          your terms & conditions.
        </p>
        <p className="mt-2">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegistrationForm

