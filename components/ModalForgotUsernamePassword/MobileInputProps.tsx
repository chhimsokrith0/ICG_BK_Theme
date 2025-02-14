"use client"

import * as React from "react"
import { Send, Flag, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MobileInputProps {
  onClose: () => void
}

const countries = [
  { code: "+60", flag: "MY", name: "Malaysia" },
  { code: "+66", flag: "TH", name: "Thailand" },
  { code: "+62", flag: "ID", name: "Indonesia" },
  { code: "+65", flag: "SG", name: "Singapore" },
  { code: "+91", flag: "IN", name: "India" },
  { code: "+63", flag: "PH", name: "Philippines" },
]

const MobileInput: React.FC<MobileInputProps> = ({ onClose }) => {
  const [contactNumber, setContactNumber] = React.useState("")
  const [otp, setOtp] = React.useState("")
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0])

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
        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
          Enter your mobile number <span className="text-red-500">*</span>
        </label>
        <div className="flex">
          <Select
            value={selectedCountry.code}
            onValueChange={(value) => setSelectedCountry(countries.find((c) => c.code === value) || countries[0])}
          >
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Country">
                {selectedCountry && (
                  <div className="flex items-center">
                    {selectedCountry.flag === "MY" && <Flag className="h-4 w-4 mr-2" />}
                    {selectedCountry.flag === "TH" && <MapPin className="h-4 w-4 mr-2" />}
                    {selectedCountry.flag === "ID" && <Flag className="h-4 w-4 mr-2" />}
                    {selectedCountry.flag === "SG" && <MapPin className="h-4 w-4 mr-2" />}
                    {selectedCountry.flag === "IN" && <Flag className="h-4 w-4 mr-2" />}
                    {selectedCountry.flag === "PH" && <MapPin className="h-4 w-4 mr-2" />}
                    <span>{selectedCountry.code}</span>
                  </div>
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  <div className="flex items-center">
                    {country.flag === "MY" && <Flag className="h-4 w-4 mr-2" />}
                    {country.flag === "TH" && <MapPin className="h-4 w-4 mr-2" />}
                    {country.flag === "ID" && <Flag className="h-4 w-4 mr-2" />}
                    {country.flag === "SG" && <MapPin className="h-4 w-4 mr-2" />}
                    {country.flag === "IN" && <Flag className="h-4 w-4 mr-2" />}
                    {country.flag === "PH" && <MapPin className="h-4 w-4 mr-2" />}
                    <span>{country.code}</span>
                    <span className="ml-2 text-sm text-gray-500">{country.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            id="contactNumber"
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="flex-1 ml-2"
            placeholder="Contact Number"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="sendTo" className="block text-sm font-medium text-gray-700">
          Send to
        </label>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Please Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="phone">Phone</SelectItem>
            <SelectItem value="whatsapp">WhatsApp</SelectItem>
          </SelectContent>
        </Select>
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
          <Button variant="outline" disabled>
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

export default MobileInput

