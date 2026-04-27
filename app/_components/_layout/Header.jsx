import React from "react";
import DarkMode from "../_features/_layout/DarkMode";

function Header() {
  return (
    <nav className="Header w-full flex justify-between">
      <label
        htmlFor="my-drawer-4"
        aria-label="open sidebar"
        className="cursor-pointer px-4 py-3"
      >
        {/* Sidebar toggle icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
          className="my-1.5 inline-block size-6"
        >
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
          <path d="M9 4v16"></path>
          <path d="M14 10l2 2l-2 2"></path>
        </svg>
      </label>
      <DarkMode />
    </nav>
  );
}

export default Header;
