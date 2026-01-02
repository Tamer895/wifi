import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const [config, setConfig] = useState(null);
  
    useEffect(() => {
      fetch("/data/config.json")
        .then((res) => res.json())
        .then(setConfig)
        .catch(console.error);
    }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Данные формы:', formData);
    // Здесь логика отправки данных
  };


  if (!config) return null;

  return (
    <section className="bg-white w-9/10 md:w-3/4 xl:w-4/5 2xl:w-3/4 mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Левая часть: Форма */}
        <div className="flex-1">
          <h4 className="text-xl text-gray-600 mb-2">Наши контакты</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8 leading-tight">
            Мы всегда на связи<span className="text-[#6c5ce7]">.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-md">
            Оставьте ваши контакты и наш консультант свяжется с Вами
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
            <input
              type="text"
              placeholder="Ваше Имя"
              className="w-full p-5 bg-[#f0f2f9] rounded-xl outline-none focus:ring-2 focus:ring-[#6c5ce7] transition-all text-gray-700 placeholder:text-gray-400"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="tel"
              placeholder="Введите номер телефона"
              className="w-full p-5 bg-[#f0f2f9] rounded-xl outline-none focus:ring-2 focus:ring-[#6c5ce7] transition-all text-gray-700 placeholder:text-gray-400"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            
            <p className="text-sm text-gray-500 py-4">
              Нажимая "Получить консультацию" вы соглашаетесь на обработку ваших персональных данных.
            </p>

            <button 
              type="submit"
              className="flex items-center gap-3 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold py-4 px-8 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95"
            >
              <User className="w-5 h-5" />
              Получить консультацию
            </button>
          </form>
        </div>

        {/* Правая часть: Информация */}
        <div className="flex-1 flex items-center">
          <div className="bg-[#f0f2f9] w-full p-8 md:p-12 rounded-3xl space-y-8">
            {/* Адрес */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#6c5ce7]">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-lg text-gray-700 font-medium">Москва, Тверская 14</span>
            </div>

            {/* Телефон */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#6c5ce7]">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-lg text-gray-700 font-medium">{config.phone}</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#6c5ce7]">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-lg text-gray-700 font-medium">web-dacha@mail.ru</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contacts;