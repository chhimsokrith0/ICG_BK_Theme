"use client"

import { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTranslations } from "next-intl"
import { ChevronLeft, ChevronRight } from "lucide-react"

const OurPartners = () => {
  const t = useTranslations("OurPartners")
  const sliderRef = useRef<Slider>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  const partners = [
    {
      src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510531/tf_nh9t3h.svg",
      alt: "Evolution",
    },
    {
      src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510528/spb_hv4w5h.svg",
      alt: "WM Casino",
    },
    {
      src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510525/sg_cntiif.svg",
      alt: "Microgaming",
    },
    {
      src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510521/sa_tzjxz2.svg",
      alt: "Pragmatic Play",
    },
    {
      src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510519/redtiger_xqyoyw.svg",
      alt: "IM Exsports",
    },
    {
      src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510537/ygr_j5ghhs.svg",
      alt: "NextSpin",
    },
    {
      src: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1736510534/wm_xnal81.svg",
      alt: "BK8 Sports",
    },
  ]

  const CustomArrow = ({ direction }: { direction: "prev" | "next" }) => (
    <button
      onClick={() => (direction === "prev" ? sliderRef.current?.slickPrev() : sliderRef.current?.slickNext())}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === "prev" ? "-left-5" : "-right-5"
      } z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500`}
      aria-label={direction === "prev" ? "Previous" : "Next"}
    >
      {direction === "prev" ? (
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      ) : (
        <ChevronRight className="w-6 h-6 text-gray-600" />
      )}
    </button>
  )

  return (
    <section className="our-partner-section mx-auto max-w-[1400px] py-12 px-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">{t("ourPartners")}</h2>
        <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
          {t("seeAll")}
        </a>
      </div>
      <div className="relative bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg p-8">
        <Slider ref={sliderRef} {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="px-2">
              <div className="partner-logo w-full h-28 bg-white rounded-lg shadow-md flex items-center justify-center transition-transform transform hover:scale-105">
                <img
                  src={partner.src || "/placeholder.svg"}
                  alt={partner.alt}
                  className="w-auto max-h-16 max-w-[90%] object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
        <CustomArrow direction="prev" />
        <CustomArrow direction="next" />
      </div>
    </section>
  )
}

export default OurPartners

