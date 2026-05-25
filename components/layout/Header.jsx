import DarkMode from "@/components/features/theme/DarkMode";
import ToggleIcon from "@/components/icons/sidebar/ToggleIcon";

function Header() {
  return (
    <nav className="Header w-full flex justify-between sticky top-0 z-30">
      <label
        htmlFor="my-drawer-4"
        aria-label="open sidebar"
        className="cursor-pointer px-2 py-1 md:px-4 md:py-3"
      >
        <ToggleIcon />
      </label>
      <DarkMode />
    </nav>
  );
}

export default Header;
