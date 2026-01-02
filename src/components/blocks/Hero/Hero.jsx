import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../../ui/Buttons/Button";
import landing from "../../../assets/images/landing.png";

export default function Hero() {
  const [config, setConfig] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/data/config.json")
      .then((res) => res.json())
      .then(setConfig)
      .catch(console.error);
  }, []);

  const links = [
    { title: "Главная", href: "" },
    { title: "О нас", href: "#about" },
    { title: "Тарифы", href: "#plans" },
    { title: "Работы", href: "#works" },
    { title: "Отзывы", href: "#reviews" },
    { title: "Контакты", href: "#contacts" },
  ];

  if (!config) return null;

  return (
    <section className="w-full hero-section min-h-[90vh] flex flex-col">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col">

        {/* Header */}
        <div className="w-full flex items-center justify-between py-6 relative">
          <h1 className="text-3xl sm:text-4xl text-[#6153fc] font-bold">
            WiFi<span className="text-[#ff5541]">INK</span>.
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center font-semibold">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[#5c596f] hover:text-[#6153fc] duration-200 mx-3"
              >
                {link.title}
              </a>
            ))}

            <div className="h-6 flex items-center border-l border-l-gray-300 pl-4 ml-4">
              <a
                href={`tel:${config.tel}`}
                className="text-[#5c596f] font-bold text-lg mr-4"
              >
                {config.phone}
              </a>
              <Button bold>Консультация</Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#6153fc]"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-6 z-50"
              >
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#5c596f] hover:text-[#6153fc] duration-200 py-2 text-lg"
                  >
                    {link.title}
                  </a>
                ))}
                <a
                  href={`tel:${config.tel}`}
                  className="text-[#5c596f] font-bold text-lg mt-2 mb-4 mr-5"
                >
                  {config.phone}
                </a>
                <Button bold onClick={() => setMenuOpen(false)}>
                  Консультация
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hero */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-10 gap-10 lg:gap-0">

          {/* Text */}
          <div className="w-full max-md:flex max-md:flex-col max-md:items-center lg:w-1/2 pr-0 lg:pr-5 text-center lg:text-left">
            <h1 className="text-[#424242] text-3xl sm:text-4xl lg:text-5xl font-bold">
              Подключим высокоскоростной интернет{" "}
              <span className="text-[#ff5541]">
                в загородный дом за 1 день {config.city_where}.
              </span>
            </h1>

            <br />

            <p className="text-[#454546] font-medium mt-4 mb-2">
              Позвоните по номеру{" "}
              <span className="font-bold text-[#ff5541]">
                {config.phone}
              </span>
            </p>

            <p className="text-[#454546] mb-4">
              и мы подключим беспроводной надежный интернет в вашем частном доме.
              Вы сможете смотреть фильмы онлайн и играть в игры, не переживая о
              стабильности соединения.
            </p>

            <br />

            <Button className="mx-auto lg:mx-0">Консультация</Button>
          </div>

          {/* Image with gentle rotation animation */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <motion.img
              width={450}
              src={landing}
              alt="Landing"
              className="max-w-full h-auto"
              animate={{
                rotate: [0, 3, -3, 3, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              whileHover={{
                scale: 1.03,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
