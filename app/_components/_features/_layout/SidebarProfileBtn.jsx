import Image from "next/image";

function SidebarProfileBtn() {
  return (
    <button className="flex items-center gap-5 mx-5 py-8">
      <span>😆</span>
      <div className="flex flex-col items-start is-drawer-close:hidden">
        <p className="text-base">Kaito Watanabe</p>
        <p className="text-xs opacity-80">kaito24mako</p>
      </div>
      <Image
        src="./icons/chevron-down.svg"
        width={10}
        height={10}
        alt="Down arrow"
        className="is-drawer-close:hidden"
      />
    </button>
  );
}

export default SidebarProfileBtn;
