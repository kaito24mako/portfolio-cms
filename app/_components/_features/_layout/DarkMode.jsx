"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";

function DarkMode() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  return (
    <button
      className={`transition-transform duration-600 ease-in-out cursor-pointer px-4 py-3 
        ${theme === "light" ? "rotate-0" : "rotate-180"}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
    </button>
  );
}

export default DarkMode;
