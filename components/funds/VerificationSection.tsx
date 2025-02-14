import Image from "next/image"

const verificationItems = [
  {
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554111/Personal_lpq7zb.gif",
    label: "Profile",
  },
  {
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554069/email-file_zpdjcv.gif",
    label: "Email",
  },
  {
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737722266/mobile-verification_tk5kpz.gif",
    label: "Phone",
  },
  {
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737722266/documents-verification_tk5kpz.gif",
    label: "Documents",
  },
]

const VerificationSection = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md flex items-center space-x-4">
      <p className="text-gray-800 font-semibold text-sm">User Verification</p>
      <div className="flex items-center space-x-3">
        {verificationItems.map((item, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            title={item.label}
          >
            <Image src={item.icon || "/placeholder.svg"} alt={item.label} width={24} height={24} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default VerificationSection

