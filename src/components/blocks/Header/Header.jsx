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
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto flex items-center justify-between py-3 md:py-4">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#6153fc] font-bold whitespace-nowrap">
          WiFi<span className="text-[#ff5541]">INK</span>.
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center font-semibold gap-1 lg:gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-[#5c596f] hover:text-[#6153fc] duration-200 text-sm lg:text-base px-2 lg:px-3"
            >
              {link.title}
            </a>
          ))}
          <div className="h-6 flex items-center border-l border-l-gray-300 pl-3 lg:pl-4 ml-2 lg:ml-4">
            <a
              href={`tel:${config.tel}`}
              className="text-[#5c596f] font-bold text-sm lg:text-base mr-2 lg:mr-4"
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
            className="text-[#6153fc] flex-shrink-0"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
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
              className="text-[#5c596f] font-bold text-lg mt-2 mb-4"
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
