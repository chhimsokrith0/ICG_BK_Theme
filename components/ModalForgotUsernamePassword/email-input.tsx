"use client"

import * as React from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface EmailInputProps {
  onClose: () => void
}

const EmailInput: React.FC<EmailInputProps> = ({ onClose }) => {
  const [email, setEmail] = React.useState("")
  const [otp, setOtp] = React.useState("")

  const handleOpenChat = () => {
    window.open(
      "https://vue.livesupportbs.com/chatwindow.aspx?siteId=5000379&chatGroup=1&planId=03040000-0000-0000-0000-008e004c4cbb#",
      "LiveChat",
      "width=400,height=600,resizable=yes,scrollbars=yes,status=yes",
    )
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Enter your email address <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
          placeholder="example@email.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
          Enter the OTP
        </label>
        <div className="flex space-x-2">
          <Input
            id="otp"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="flex-1"
            placeholder="Enter OTP"
          />
          <Button variant="outline">
            <Send className="h-4 w-4 mr-2" />
            Send OTP
          </Button>
        </div>
        <p className="text-sm text-gray-500">
          Did not receive OTP? Contact{" "}
          <button onClick={handleOpenChat} className="text-blue-500 underline hover:text-blue-600">
            Customer Service
          </button>{" "}
          for assistance.
        </p>
      </div>

      <div className="flex space-x-4">
        <Button className="flex-1 bg-orange-500 text-white hover:bg-orange-600" onClick={() => {}}>
          Confirm
        </Button>
        <Button variant="outline" className="flex-1" onClick={onClose}>
          Cancel
        </Button>
      </div>

      <p className="text-sm text-center text-gray-500">
        or return to{" "}
        <a href="/login" className="text-blue-500 underline hover:text-blue-600">
          Log in
        </a>
      </p>
    </div>
  )
}

export default EmailInput

