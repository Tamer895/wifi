import React from 'react'
import Slider from 'react-slick'
import megogo from '../../../assets/images/brands/megogo.png'
import netflix from '../../../assets/images/brands/netflix.png'
import appletv from '../../../assets/images/brands/appletv.png'
import amediateka from '../../../assets/images/brands/amediateka.jpg'
import steam from '../../../assets/images/brands/steam.jpg'

export default function Brands() {

  const images = [
    {src: megogo, alt: "Megogo"},
    {src: netflix, alt: "Netflix"},
    {src: appletv, alt: "Apple TV"},
    {src: amediateka, alt: "Amediateka"},
    {src: steam, alt: "Steam"},
  ]

  // Настройки слайдера для телефонов
  const sliderSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 641,
        settings: "unslick"
      }
    ]
  }

  return (
    <section className='w-full mx-auto px-4 sm:px-6 lg:px-8 lg:-mt-10'>
      <div 
        className="
          w-full sm:w-[80%] 
          bg-white 
          py-10 sm:py-16 
          rounded-xl 
          mx-auto
          sm:shadow-[0_5px_20px_0_rgba(0,0,0,0.15)]
        "
      >
        <h1 className="text-lg sm:text-xl md:text-2xl text-center px-4">
          Наши клиенты уже используют <span className="text-[#ff5541] font-bold">любимые приложения</span>, присоединяйся и ты!
        </h1>

        <div className="w-full lg:pt-5 mt-6">
          {/* Слайдер на телефонах */}
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="lg:hidden! flex justify-center px-4">
                <img 
                  className="h-10 sm:h-12 md:h-14 lg:h-12 object-contain"
                  src={image.src} 
                  alt={image.alt} 
                />
              </div>
            ))}
          </Slider>

          {/* Для sm и выше показываем обычный ряд */}
          <div className="hidden sm:flex flex-row items-center justify-center gap-6 sm:gap-8">
            {images.map((image, index) => (
              <img 
                className="h-10 sm:h-12 md:h-14 lg:h-12 lg:mx-3 object-contain"
                key={index} 
                src={image.src} 
                alt={image.alt} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
