import React from "react"
import classes from "./style.module.css"
import { User } from "lucide-react"

export default function Button({ children, bold, ...props }) {

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    e.currentTarget.style.setProperty("--x", `${x}px`)
    e.currentTarget.style.setProperty("--y", `${y}px`)
  }

  return (
    <button
      {...props}
      onMouseEnter={handleMouseEnter}
      className={`${classes.button} shadow-lg ${bold ? classes.bold : ""}`}
    >
      <User size={22} />
      <span className="ml-1">{children}</span>
    </button>
  )
}
