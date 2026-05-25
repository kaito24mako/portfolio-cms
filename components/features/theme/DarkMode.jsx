"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";

function DarkMode() {
  const [theme, setTheme] = useState("nord");

  function toggleTheme() {
    const newTheme = theme === "nord" ? "dark" : "nord";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  return (
    <button
      className={`transition-transform duration-600 ease-in-out cursor-pointer px-2 py-1 md:px-4 md:py-3 
        ${theme === "nord" ? "rotate-0" : "rotate-180"}`}
      onClick={toggleTheme}
      aria-label="Dark/light mode"
    >
      {theme === "nord" ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
    </button>
  );
}

export default DarkMode;
