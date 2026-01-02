import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Импорт стилей Swiper
import "swiper/css";
import "swiper/css/navigation";

import avatar1 from "../../../assets/images/reviews/avatar1.png";
import avatar2 from "../../../assets/images/reviews/avatar2.png";
import avatar3 from "../../../assets/images/reviews/avatar3.png";
import avatar4 from "../../../assets/images/reviews/avatar4.png";
import avatar5 from "../../../assets/images/reviews/avatar5.png";

const reviews = [
  {
    id: 1,
    name: "Кристина Юрьева",
    text: "В нашем селе невозможно подключить вообще никакой интернет. Так нам сказали три провайдера, которым мы позвонили. Мы долго искали надежную компанию и нашли вас. Оказывается, все наши соседи уже давно пользуются вашими услугами. После монтажа и настройки все проверили при нас. Очень понравился сервис обслуживания.",
    image: avatar1,
  },
  {
    id: 2,
    name: "Алексей Иванов",
    text: "Нужен был стабильный интернет для работы на удаленке в частном доме. Ребята приехали в день обращения, замерили сигнал и подобрали антенну. Скорость теперь как в городе, стабильные 80-90 Мбит/с. Огромное спасибо за оперативность!",
    image: avatar2,
  },
  {
    id: 3,
    name: "Дмитрий Волков",
    text: "Переехали с семьей за город, и главной проблемой стало отсутствие нормальной связи. Дети не могли учиться дистанционно, а я — проводить видеовстречи. Мастера из этой компании решили вопрос за пару часов: установили мощный роутер и антенну. Теперь Wi-Fi ловит даже в беседке на участке, а скорость позволяет смотреть фильмы в 4K без задержек. Настоящие профессионалы!",
    image: avatar3,
  },
];

const TestimonialSlider = () => {
  return (
    <section className="relative pt-10 lg:py-20 px-4 bg-white overflow-hidden">
      {/* Декоративные аватары (скрыты на мобильных) */}
      <div className="hidden lg:block absolute left-[10%] top-1/2 -translate-y-1/2 opacity-40">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src={avatar4} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="hidden lg:block absolute right-[10%] top-1/3 opacity-40">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src={avatar5} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-4">
            Отзывы наших клиентов<span className="text-[#6c5ce7]">.</span>
          </h2>
          <p className="text-gray-500">
            Мы собрали последние отзывы о нашей компании за 2020-2021 год!
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          className="testimonial-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 pb-10">
                {/* Фото с Blob-маской */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
                  {/* Размытый фон */}
                  <div className="absolute inset-0 w-full h-full bg-[#6c5ce7] opacity-10 blur-3xl rounded-full"></div>

                  {/* SVG с чуть увеличенной неровной формой */}
                  <svg
                    viewBox="0 0 200 200"
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <clipPath id="blobMask">
                        <path
                          d="M100,5
             C135,15,170,55,160,95
             C150,135,100,170,50,160
             C10,150,5,100,25,55
             C50,15,80,0,100,5Z"
                        />
                      </clipPath>
                    </defs>

                    <image
                      href={review.image}
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath="url(#blobMask)"
                    />
                  </svg>
                </div>

                {/* Текст отзыва */}
                <div className="max-w-lg text-left">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
                    «{review.text}»
                  </p>
                  <h4 className="text-xl font-bold text-[#2d3436] mb-8">
                    {review.name}
                  </h4>

                  {/* Кнопки навигации */}
                  <div className="flex gap-4">
                    <button className="prev-btn p-2 border border-gray-200 rounded-full hover:bg-[#6c5ce7] hover:text-white transition-all disabled:opacity-30">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="next-btn p-2 border border-gray-200 rounded-full hover:bg-[#6c5ce7] hover:text-white transition-all disabled:opacity-30">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
