import React from 'react';

import image1 from "../../../assets/images/router/image1.png";
import image2 from "../../../assets/images/router/image2.png";
import image3 from "../../../assets/images/router/image3.png";
import image4 from "../../../assets/images/router/image4.png";
import image5 from "../../../assets/images/router/image5.png";
import image6 from "../../../assets/images/router/image6.png";

const OurWorks = () => {
  // Array of images - replace these placeholders with your actual image paths
  const images = [
    { src: image1, alt: "Our Work 1" },
    { src: image2, alt: "Our Work 2" },
    { src: image3, alt: "Our Work 3" },
    { src: image6, alt: "Our Work 4" },
    { src: image5, alt: "Our Work 5" },
    { src: image4, alt: "Our Work 6" },
  ];

  return (
    <section className="w-9/10 md:w-3/4 xl:w-4/5 2xl:w-3/4 mx-auto py-16 bg-white text-center">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d3436] mb-4">
          Наши работы<span className="text-[#6c5ce7]">.</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Мы подключили более 1000 клиентов за все время нашей работы!
        </p>
      </div>

      {/* Responsive Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        
        {/* Large Image (Top Left) */}
        <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-xl">
          <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Small Image (Top Right 1) */}
        <div className="hidden lg:block overflow-hidden rounded-xl">
          <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Small Image (Top Right 2) */}
        <div className="hidden lg:block overflow-hidden rounded-xl">
          <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Large Image (Bottom Right) */}
        <div className="md:col-span-2 md:row-span-2 lg:col-start-2 lg:row-start-3 overflow-hidden rounded-xl">
          <img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Small Image (Bottom Left 1) */}
        <div className="overflow-hidden rounded-xl">
          <img src={images[4].src} alt={images[4].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Small Image (Bottom Left 2) */}
        <div className="overflow-hidden rounded-xl">
          <img src={images[5].src} alt={images[5].alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>

      </div>
    </section>
  );
};

export default OurWorks;