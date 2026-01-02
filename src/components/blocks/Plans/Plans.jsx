import React, { useState } from "react";
import Button from "../../ui/Buttons/Button";

export default function Plans() {
  const plans = [
    {
      id: "megafon",
      name: "Мегафон",
      label: "Интернет тариф",
      provider: "Мегафон",
      title: "Интернет-тариф Мегафон",
      description: "Наш технический специалист установит и настроит оборудование в течение одного часа. Оставьте заявку на выезд мастера и на собственном опите убедитесь во всех этих преимуществах.",
      features: [
        "Размер абонентской платы: 790 Р /месяц",
        "- Стоимость подключения 1000 Р",
        "- Безлимит в сетях 3G/4G",
        "- Wi-Fi Оборудование",
        "- Скорость соединения до 100 Мбит/с"
      ]
    },
    {
      id: "beeline",
      name: "Билайн",
      label: "Интернет тариф",
      provider: "Билайн",
      title: "Интернет-тариф Билайн",
      description: "Высокоскоростной интернет от Билайн для дома. Надежное соединение и стабильная скорость для всей семьи.",
      features: [
        "Размер абонентской платы: 890 Р /месяц",
        "- Стоимость подключения 500 Р",
        "- Безлимит в сетях 3G/4G",
        "- Wi-Fi Оборудование",
        "- Скорость соединения до 150 Мбит/с"
      ]
    },
    {
      id: "mts",
      name: "МТС",
      label: "Интернет тариф",
      provider: "МТС",
      title: "Интернет-тариф МТС",
      description: "Качественный интернет от МТС с гарантированной скоростью и надежной защитой.",
      features: [
        "Размер абонентской платы: 850 Р /месяц",
        "- Стоимость подключения 750 Р",
        "- Безлимит в сетях 3G/4G",
        "- Wi-Fi Оборудование",
        "- Скорость соединения до 120 Мбит/с"
      ]
    },
    {
      id: "tele2",
      name: "Tele2",
      label: "Интернет тариф",
      provider: "Tele2",
      title: "Интернет-тариф Tele2",
      description: "Доступный интернет от Tele2 для всех категорий пользователей.",
      features: [
        "Размер абонентской платы: 650 Р /месяц",
        "- Стоимость подключения 300 Р",
        "- Безлимит в сетях 3G/4G",
        "- Wi-Fi Оборудование",
        "- Скорость соединения до 80 Мбит/с"
      ]
    },
    {
      id: "wifire",
      name: "WiFire",
      label: "Интернет тариф",
      provider: "WiFire",
      title: "Интернет-тариф WiFire",
      description: "Специализированный сервис WiFire для высокоскоростного интернета.",
      features: [
        "Размер абонентской платы: 950 Р /месяц",
        "- Стоимость подключения 1200 Р",
        "- Безлимит в сетях 3G/4G",
        "- Wi-Fi Оборудование",
        "- Скорость соединения до 200 Мбит/с"
      ]
    },
    {
      id: "rostelecom",
      name: "Ростелеком",
      label: "Интернет тариф",
      provider: "Rostelecom",
      title: "Интернет-тариф Ростелеком",
      description: "Универсальное решение от Ростелекома для домашнего интернета.",
      features: [
        "Размер абонентской платы: 799 Р /месяц",
        "- Стоимость подключения 600 Р",
        "- Безлимит в сетях 3G/4G",
        "- Wi-Fi Оборудование",
        "- Скорость соединения до 100 Мбит/с"
      ]
    }
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  return (
    <section className="w-full xl:w-4/5 2xl:w-3/4 mx-auto py-20 md:py-32 lg:py-40">
      <div className="w-full px-4 md:px-6 lg:px-8 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d3748] mb-4">
            Безлимитные тарифы на интернет в частном доме.
          </h2>
          <p className="text-sm md:text-base text-[#454546]">
            Звоните по номеру <span className="text-[#ff5541] font-bold">+7 (934) 660-57-14</span> и мы подберём выгодный тариф для Вас или используйте готовые стартовые пакеты интернета.
          </p>
        </div>

        {/* Plans Grid and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Plans Cards Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan)}
                  className={`
                    flex flex-col items-center justify-center p-4 md:p-6 rounded-xl
                    transition-all duration-300 cursor-pointer
                    ${selectedPlan.id === plan.id
                      ? "border-2 border-[#6153fc] bg-blue-50"
                      : "border-2 border-[#e5e5e5] bg-white hover:border-[#6153fc]"
                    }
                  `}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gradient-to-br from-[#6153fc] to-[#ff5541] rounded-lg mb-2 md:mb-3">
                    <span className="text-white font-bold text-xs md:text-sm text-center px-1">
                      {plan.name.substring(0, 3)}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-[#2d3748] text-center">
                    {plan.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[#454546] text-center mt-1">
                    {plan.label}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-1 lg:row-span-1">
            <div className="bg-white rounded-xl p-4 md:p-6 lg:p-8 border-2 border-[#6153fc]" style={{ boxShadow: "0 5px 20px rgba(0,0,0,0.1)" }}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2d3748] mb-3">
                {selectedPlan.title}
              </h3>
              <p className="text-sm md:text-base text-[#454546] mb-4 md:mb-6">
                {selectedPlan.description}
              </p>

              {/* Features List */}
              <div className="mb-6 md:mb-8">
                <ul className="space-y-2 md:space-y-3">
                  {selectedPlan.features.map((feature, index) => (
                    <li key={index} className="text-xs md:text-sm text-[#454546] flex items-start">
                      <span className="text-[#ff5541] font-bold mr-2 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <Button>Подключить интернет</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
