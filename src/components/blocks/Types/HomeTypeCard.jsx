import React from "react";

export default function HomeTypeCard({ image, title, description }) {
  return (
    <div
      className="
      cursor-pointer
        group
        w-full h-full flex flex-col bg-white rounded-xl p-8
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
      {/* icon */}
      <img
        width={70}
        src={image}
        alt={title}
        className="
          transition-transform duration-300
          group-hover:scale-110
        "
      />

      <span
        className="
          text-xl font-bold my-3 text-[#2d3748]
          transition-colors duration-300
          group-hover:text-[#ff5541]
        "
      >
        {title}
      </span>

      <p className="text-sm leading-7 text-[#454546]">
        {description}
      </p>
    </div>
  );
}
