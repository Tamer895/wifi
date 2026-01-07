import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



export default function Form({ setOpen }) {
  const [phone, setPhone] = useState('');
  
  const [message, setMessage] = useState('');
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch('/data/config.json')
      .then((res) => res.json())
      .then(setConfig)
      .catch(console.error);
  }, []);

  if (!config) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const clientToken = config.token;

    try {
      const response = await fetch(config.api_route, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          auth: clientToken,
        },
        body: JSON.stringify({
          phone,
          message,
          source: 'ReactApp',
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки');
      }

      alert('Данные успешно отправлены. Спасибо за обращение!');
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось отправить заявку. Попробуйте позже.');
    }
  };

  return (
    <motion.section
  id="form"
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  <div className="w-full max-w-2xl px-4">
    <div className="relative bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-2xl border border-gray-100">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-900">
        Оставьте заявку
      </h1>
      <p className="mt-2 text-center text-gray-500 text-sm">
        Мы свяжемся с вами в ближайшее время
      </p>

      {/* Form */}
      <form
        className="mt-8 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="relative">
  <PhoneInput
    country="ru"
    value={phone}
    onChange={(value) => setPhone(value)}
    placeholder="+7 999 123-45-67"
    disableDropdown
    countryCodeEditable={false}
    containerClass="w-full"
    inputClass="!w-full !rounded-full !py-6 !px-4 !border !border-gray-300 focus:!border-indigo-500 focus:!ring-2 focus:!ring-indigo-500/20 !outline-none !transition"
    buttonClass="
  !hidden
"

  />
</div>



        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Комментарий (необязательно)"
          rows={3}
          className="w-full rounded-2xl p-4 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none resize-none transition text-sm"
        />

        <button className="mt-2 w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold py-4 rounded-full shadow-lg shadow-indigo-300/40 transition-all active:scale-95">
          Отправить заявку
        </button>
      </form>

      {/* Footer */}
      <p className="mt-4 text-center text-xs text-gray-400">
        Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
      </p>

      {/* Close */}
      <button
        onClick={() => setOpen(false)}
        className="absolute cursor-pointer top-5 right-5 text-gray-400 hover:text-gray-700 transition"
      >
        <X />
      </button>
    </div>
  </div>
</motion.section>

  );
}
