import React from "react";

const advantagesData = [
  {
    id: 1,
    title: "Высокая скорость передачи",
    description: "Смотрите качественные фильмы, программы и музику. Скачивайте фото и видео за считанные секунды."
  },
  {
    id: 2,
    title: "Высокая скорость загрузки",
    description: "Отправляйте презентацию по почте, публикуйте ролики в социальных сетях без лишнего ожидания."
  },
  {
    id: 3,
    title: "Стабильная передача online",
    description: "Общайтесь в режиме реального времени без задержек, ведь общение или проверка с периодической модификацией."
  },
  {
    id: 4,
    title: "Высокое качество",
    description: "Наслаждайтесь фильмами в отличном качестве, видите мельчайшие детали и услышьте звук со всеми возможностями."
  },
  {
    id: 5,
    title: "Просмотр цифровых каналов",
    description: "Смотрите любимые передачи с удовольствием; все каналы с высоким качеством изображения."
  },
  {
    id: 6,
    title: "Удаленное наблюдение",
    description: "Смотрите видео с любой точки земного шара в безопасности; жизнь всегда под контролем."
  }
];

const AdvantageCard = ({ title, description }) => {
  return (
    <div
      className="
        w-full bg-white rounded-lg p-6 md:p-8
        transition-all duration-300 ease-out
        hover:shadow-lg
      "
      style={{
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={e =>
        (e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)")
      }
      onMouseLeave={e =>
        (e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)")
      }
    >
      <h3 className="text-base md:text-lg font-bold text-[#2d3748] mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-base text-[#454546] leading-6">
        {description}
      </p>
    </div>
  );
};

export default function Advantages() {
  return (
    <section className="w-9/10 md:w-3/4 xl:w-4/5 2xl:w-3/4 mx-auto py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d3748] mb-4">
            Наши преимущества.
          </h2>
          <p className="text-sm md:text-base text-[#454546] max-w-2xl mx-auto leading-6">
            Смотрю фильмы, YouTube, играйте в игры без ограничений с новым интернетом от компании "WiFiINK"
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantagesData.map((advantage) => (
            <AdvantageCard
              key={advantage.id}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
