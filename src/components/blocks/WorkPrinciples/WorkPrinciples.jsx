import React from 'react';
import { Antenna, Usb, Wifi } from 'lucide-react'; // Example icons

const WorkPrinciples = () => {
  return (
    <section className="bg-[#f8f9ff] py-16">
      <div className="w-9/10 md:w-3/4 xl:w-4/5 2xl:w-3/4 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2d3436] mb-4">
            Принцип работы<span className="text-[#6c5ce7]">.</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Расскажем немного об оборудование как и что работает.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Top Left: Antenna */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <div className="flex items-start gap-5 mb-6">
                <div className="bg-[#eeebff] p-4 rounded-xl">
                  <Antenna className="w-8 h-8 text-[#6c5ce7]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2d3436] leading-tight">
                  Антенна усиливает полученный сигнал от базовой станции
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Подбирается антенный блок необходимой мощности (в зависимости от уровня сигнала). 
                Монтируется на крышу либо фасад здания и направляется на вышку оператора, 
                получая стабильный сигнал без помех.
              </p>
            </div>

            {/* Top Right: Modem */}
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-5 mb-6">
                <div className="bg-[#eeebff] p-4 rounded-xl">
                  <Usb className="w-8 h-8 text-[#6c5ce7]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2d3436] leading-tight">
                  LTE-модем принимает сигнал от антенного блока
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Безлимитная сим карта находится внутри модема который устанавливается в роутер 
                или монтируется внутри антенны. С технологией LTE-Advanced скорость интернета 
                достигает 100 Мбит/сек.
              </p>
            </div>

            {/* Bottom Full Width: Router */}
            <div className="col-span-1 lg:col-span-2 p-8 md:p-12 border-t border-gray-100">
              <div className="flex items-start gap-5 mb-6">
                <div className="bg-[#eeebff] p-4 rounded-xl">
                  <Wifi className="w-8 h-8 text-[#6c5ce7]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2d3436] leading-tight">
                  Wi-fi роутер обеспечивает интернетом все устройства
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Роутер обеспечивает доступом к интернету все устройства: ноутбук, телефон, планшет, 
                компьютер. Трафик - без ограничения. <br className="hidden md:block" />
                Мы являемся официальными партнерами крупнейших федеральных мобильных операторов 
                (Мегафон, Билайн, МТС). Этот факт дает нам возможность гарантировать 
                бесперебойную работу установленного оборудования и предложить оптимальные тарифы 
                на интернет в частных домах.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPrinciples;