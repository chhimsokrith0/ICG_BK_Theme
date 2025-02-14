import type React from "react"
import { slides } from "@/types/RegisterType"

interface PromotionalSectionProps {
  currentSlide: number
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
  isMobile: boolean
}

const PromotionalSection: React.FC<PromotionalSectionProps> = ({ currentSlide, setCurrentSlide, isMobile }) => {
  return (
    <div className={`${isMobile ? "w-full" : "hidden lg:flex flex-1"} bg-gray-50`}>
      <div className="w-full">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide || "/placeholder.svg"}
                  alt={`BWF World Tour Finals Slide ${index + 1}`}
                  className="w-full h-auto flex-shrink-0"
                />
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-orange-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="px-4 lg:px-8 py-8 lg:py-12">
          <h2 className="text-xl lg:text-2xl font-bold text-center mb-2">Official Sponsor of the</h2>
          <p className="text-lg lg:text-xl text-center mb-8 lg:mb-12">HSBC BWF World Tour Finals 2024</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Enjoy MYR 6,888",
                description: "Weekly Rescue Bonus",
                image: "svgviewer-png-output_hmqh7n.png",
              },
              { title: "1% Unlimited", description: "Daily Cash Rebate", image: "svgviewer-png-output_1_ijgnqq.png" },
              { title: "Make your deposit now!", description: "", image: "svgviewer-png-output_2_pyfmwo.png" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={`https://res.cloudinary.com/dfxqagrkk/image/upload/v1739510968/${item.image}`}
                    alt={item.title}
                    className="w-10 h-10 lg:w-12 lg:h-12"
                  />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 lg:mt-12 flex items-center justify-center gap-4">
            <img
              src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1739511085/svgviewer-png-output_3_gzcat4.png"
              alt="GCB"
              className="h-6 lg:h-8"
            />
            <p className="text-xs lg:text-sm text-gray-500">
              Regulated & Licensed
              <br />
              by the Government of Curacao
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionalSection

