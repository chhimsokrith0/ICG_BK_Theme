"use client"
import Slider from "react-slick"
import { useTranslations } from "next-intl"
import { Star } from "lucide-react"

type Testimonial = {
  title: string
  description: string
  rating: number
}

const Testimonials = () => {
  const t = useTranslations("Testimonials")
  const testimonials: Testimonial[] = t.raw("reviews")

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
    <section className="mx-auto max-w-[1400px] py-12 px-4 md:px-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">{t("testimonialsTitle")}</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialBox key={index} {...testimonial} />
        ))}
      </Slider>
    </section>
  )
}

const TestimonialBox = ({ title, description, rating }: Testimonial) => (
  <div className="p-6 md:p-8 mx-2 flex flex-col items-center text-center">
    <p className="text-lg md:text-xl font-bold mb-4 text-gray-800">{title}</p>
    <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">{description}</p>
    <div className="flex justify-center">
      {Array.from({ length: rating }, (_, i) => (
        <Star key={i} className="text-yellow-500 mx-1 fill-current" size={24} />
      ))}
    </div>
  </div>
)

export default Testimonials

