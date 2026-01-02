import React from "react";

export default function HomeTypeCard({ image, title, description }) {
  return (
    <div
      className="
        cursor-pointer
        group
        w-full h-full flex flex-col bg-white rounded-xl p-4 md:p-6 lg:p-8
        transition-all duration-300 ease-out
        hover:-translate-y-2
      "
      style={{
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
      }}
      onMouseEnter={e =>
        (e.currentTarget.style.boxShadow =
          "0 15px 40px rgba(0,0,0,0.18)")
      }
      onMouseLeave={e =>
        (e.currentTarget.style.boxShadow =
          "0 0 20px rgba(0,0,0,0.1)")
      }
    >
      <img
        width={50}
        className="
          w-12 md:w-14 lg:w-[70px]
          transition-transform duration-300
          group-hover:scale-110
        "
        src={image}
        alt={title}
      />

      <span
        className="
          text-base md:text-lg lg:text-xl font-bold my-2 md:my-3 text-[#2d3748]
          transition-colors duration-300
          group-hover:text-[#ff5541]
        "
      >
        {title}
      </span>

      <p className="text-xs md:text-sm leading-6 md:leading-7 text-[#454546]">
        {description}
      </p>
    </div>
  );
}
