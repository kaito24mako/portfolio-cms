import Image from "next/image";

import Header from "./Header";
import SidebarProfileBtn from "@/components/features/sidebar/SidebarProfileBtn";
import Button from "@/components/ui/button/Button";
import SidebarList from "../features/sidebar/SidebarList";

function Sidebar({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        defaultChecked
      />
      <div className="drawer-content">
        <Header />
        {/* page content */}
        {children}
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* sidebar content */}
        <div className="flex min-h-full flex-col gap-2 bg-base-200 is-drawer-close:w-16 is-drawer-open:w-60">
          {/* title */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              width={70}
              height={70}
              loading="eager"
              alt="Logo of Mako"
            />
            <h1 className="is-drawer-close:hidden text-3xl font-heading font-semibold">
              Mako
            </h1>
          </div>

          {/* new project button */}
          <Button
            className="btn-accent mx-5 is-drawer-close:hidden"
            icon={"/icons/plus.svg"}
            href="/projects/new"
          >
            New Project
          </Button>

          {/* sidebar links */}
          <SidebarList />

          {/* profile */}
          <div>
            <span className="divider w-[80%] mx-auto my-0"></span>
            <SidebarProfileBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
