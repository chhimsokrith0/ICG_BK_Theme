import type React from "react"
import { Button } from "@/components/ui/button"
import type { SocialButton } from "@/types/Logintypes"

interface SocialButtonsProps {
  buttons: SocialButton[]
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ buttons }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant="outline"
          className={`flex items-center justify-center px-5 py-3 ${button.color} text-white transition duration-300`}
        >
          {button.icon}
          <span>{button.name}</span>
        </Button>
      ))}
    </div>
  )
}

export default SocialButtons

