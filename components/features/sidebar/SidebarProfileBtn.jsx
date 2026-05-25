import UserIcon from "@/components/icons/sidebar/UserIcon";

function SidebarProfileBtn() {
  return (
    <button className="flex items-center gap-5 mx-5 py-8" aria-label="Profile">
      <UserIcon />

      <div className="flex flex-col items-start is-drawer-close:hidden">
        <p className="text-sm">Kaito Watanabe</p>
        <p className="text-xs opacity-80">kaito24mako</p>
      </div>

      {/* <Image
        src="/icons/chevron-down.svg"
        width={10}
        height={10}
        alt=""
        className="is-drawer-close:hidden"
      /> */}
    </button>
  );
}

export default SidebarProfileBtn;
