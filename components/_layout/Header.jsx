import React from "react";
import DarkMode from "../_features/_layout/DarkMode";
import ToggleIcon from "../_images/_sidebar/ToggleIcon";

function Header() {
  return (
    <nav className="Header w-full flex justify-between">
      <label
        htmlFor="my-drawer-4"
        aria-label="open sidebar"
        className="cursor-pointer px-4 py-3"
      >
        <ToggleIcon />
      </label>
      <DarkMode />
    </nav>
  );
}

export default Header;
