import React from "react";
import Button from "../../ui/Buttons/Button";
import { Check } from "lucide-react";

import HomeTypeCard from "./HomeTypeCard";

import cottege from "../../../assets/images/home-types/cottege.png";
import private_home from "../../../assets/images/home-types/private.png";
import tanhouse from "../../../assets/images/home-types/tanhouse.png";
import house from "../../../assets/images/home-types/house.png";

export default function Types() {
  return (
    <section className="w-full mx-auto py-20 md:py-32 lg:py-40">
      <div className="w-full md:w-3/4 flex flex-col lg:flex-row items-stretch mx-auto px-4 md:px-6 lg:px-0 gap-8 lg:gap-0">

        {/* left side */}
        <div className="w-full lg:w-2/5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#2d3748] font-bold">
            Подключаем все виды домов
          </h2>

          <br />

          <p className="text-sm md:text-base text-[#454546]">
            Мы осуществляем установку высокоскоростного беспроводного интернета в частных домах внутри городов и в загородной местности уже более 10 лет. В процессе оказания услуг наши специалисты используют современные виды оборудования.
          </p>

          <br />

          <p className="text-sm md:text-base text-[#454546]">
            Мы являемся официальными партнерами крупнейших федеральных мобильных операторов (Мегафон, Билайн, МТС, Tele2).
          </p>

          <br />

          <div className="flex items-start">
            <div className="flex shrink-0 items-center justify-center w-10 h-10 bg-[#ff5541] text-white rounded-full">
              <Check />
            </div>

            <div className="flex flex-col ml-4">
              <span className="text-base md:text-lg lg:text-xl text-[#3b3663] font-bold">
                Круглосуточная поддержка
              </span>
              <p className="text-xs md:text-sm text-[#454546] mt-1">
                Наши специалисты помогут решить вопрос с интернетом в любое время суток!
              </p>
            </div>
          </div>

          <br /><br />

          <Button>Подключить интернет</Button>
        </div>

        {/* right side */}
        <div className="w-full lg:w-3/5 flex flex-col md:flex-row lg:items-start lg:justify-between gap-6 md:gap-8 lg:gap-10 lg:pl-12">

          <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 lg:-mt-5">
            <HomeTypeCard
              image={cottege}
              title="Коттеджи"
              description="Обеспечим интернет в Вашем коттедже, установим Wi-Fi, усилители интернета для комфортного использования."
            />
            <HomeTypeCard
              image={tanhouse}
              title="Таунхаусы"
              description="Дом на два хозяина? Подключите интернет вместе и платите вместе! установим Wi-Fi, для комфортного использования."
            />
          </div>

          <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10 lg:-mb-5">
            <HomeTypeCard
              image={private_home}
              title="Частные дома"
              description="Настроим интернет в Вашем доме, установим Wi-Fi, усилители интернета для комфортного использования."
            />
            <HomeTypeCard
              image={house}
              title="Загородные дома"
              description="Найдем решение для установки интернета на Вашей даче, подключим Wi-Fi и усилители интернета."
            />
          </div>

        </div>
      </div>
    </section>
  );
}
