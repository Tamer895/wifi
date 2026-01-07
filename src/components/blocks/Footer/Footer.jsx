import React, { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch("/data/config.json")
      .then((res) => res.json())
      .then(setConfig)
      .catch(console.error);
  }, []);

  if (!config) return null;

  return (
    <footer className="bg-[#6366f1] text-white py-8 px-4 mt-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Левая часть: Логотип и Кнопка вверх */}
        <div className="flex items-center gap-8">
          <a href="/">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black tracking-tighter italic">
              Nova
            </span>
            <span className="text-3xl font-black tracking-tighter italic text-[#ff7a50]">
              Link
            </span>
            <span className="w-2 h-2 bg-white rounded-full mb-1 ml-0.5"></span>
          </div>
          </a>
        </div>

        {/* Центральная часть: Данные ИП */}
        <div className="flex flex-col gap-1 text-center md:text-left border-l-0 md:border-l border-white/30 md:pl-8">
          <p className="text-sm md:text-base font-medium opacity-90">
            {config.ip}
          </p>
          <p className="text-sm md:text-base font-medium opacity-90">
            ИНН {config.inn}
          </p>
        </div>

        {/* Правая часть: Копирайт */}
        <div className="text-sm md:text-base opacity-80 text-center md:text-right md:border-l border-white/30 md:pl-8">
          Copyright {currentYear} NovaLink. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
