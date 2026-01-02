import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../../ui/Buttons/Button";

export default function Header() {
  const [config, setConfig] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch("/data/config.json")
      .then((res) => res.json())
      .then(setConfig)
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > 20;
      if (visible !== shouldBeVisible) setVisible(shouldBeVisible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

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
    <motion.header
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
      <div className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-between py-4">
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
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center px-4 py-4 sm:py-6 z-50"
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#5c596f] hover:text-[#6153fc] duration-200 py-2 text-sm sm:text-base w-full text-center"
              >
                {link.title}
              </a>
            ))}
            <div className="border-t border-gray-200 w-full my-3 sm:my-4"></div>
            <a
              href={`tel:${config.tel}`}
              className="text-[#5c596f] font-bold text-sm sm:text-base mb-3 sm:mb-4"
            >
              {config.phone}
            </a>
            <Button bold onClick={() => setMenuOpen(false)}>
              Консультация
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
