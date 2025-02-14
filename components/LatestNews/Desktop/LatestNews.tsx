"use client"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTranslations } from "next-intl"
import Image from "next/image"

type NewsItem = {
  title: string
  description: string
  date: string
  image: string
}

const LatestNews = () => {
  const t = useTranslations("LatestNews")
  const news: NewsItem[] = t.raw("news")

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="mx-auto max-w-[1400px] py-8 px-4 md:px-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">{t("latestNewsTitle")}</h2>
      <Slider {...settings}>
        {news.map((item, index) => (
          <NewsBox key={index} {...item} />
        ))}
      </Slider>
    </section>
  )
}

const NewsBox = ({ title, description, date, image }: NewsItem) => (
  <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
    <div className="mb-4 relative h-[180px] md:h-[220px] lg:h-[250px]">
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-md" />
    </div>
    <div className="flex-grow">
      <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">{title}</h3>
      <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">{description}</p>
    </div>
    <div className="text-xs text-gray-400">{date}</div>
  </div>
)

export default LatestNews

