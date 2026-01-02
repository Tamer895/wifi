import React from 'react';
import { Check } from 'lucide-react'; // Using lucide-react for the icons
import img from "../../../assets/images/installation/image.png"

const InternetInstallation = () => {
  const steps = [
    {
      title: "Тестирование сигнала",
      description: "Специалист нашей компании приезжает к Вам, тестирует качество сигнала и замеряет скорость интернет соединения."
    },
    {
      title: "Выбор оборудования",
      description: "На основании результатов тестирования подбирается наиболее подходящий комплект оборудования и оператор."
    },
    {
      title: "Монтаж и настройка оборудования",
      description: "Специалист производит монтаж интернет оборудования, затем производится настройка и подключение интернет устройств (смартфон, ноутбук, смарт-ТВ)."
    },
    {
      title: "Сдача объекта",
      description: "Сдаем вам объект и обучаем работе с системой. Утверждение заказа и подготовка закрывающих документов."
    }
  ];

  return (
    <section className="w-full mx-auto py-12 bg-[#f8f9ff]">
      <div className="w-9/10 md:w-3/4 xl:w-4/5 2xl:w-3/4 mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative bg-white rounded-3xl p-8 shadow-sm w-full max-w-md lg:max-w-xl">
             {/* Replace with your actual SVG or Image path */}
            <img 
              src={img}
              alt="Installation Illustration" 
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d3436] mb-10">
            Процесс установки <span className="text-[#6c5ce7]">Интернета</span>
          </h2>

          <div className="space-y-8 relative">
            {/* Vertical Line Connector (Desktop only) */}
            <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gray-200 hidden md:block"></div>

            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 relative z-10">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6c5ce7] flex items-center justify-center shadow-lg shadow-indigo-200">
                  <Check className="text-white w-5 h-5" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-[#2d3436] mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InternetInstallation;