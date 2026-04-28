import Image from "next/image";

import Header from "./Header";
import SidebarItems from "../_features/_layout/SidebarItems";
import Button from "../_ui/Button";
import SidebarProfileBtn from "../_features/_layout/SidebarProfileBtn";

import DashboardIcon from "../_images/_sidebar/DashboardIcon";
import ProjectsIcon from "../_images/_sidebar/ProjectsIcon";
import TagsIcon from "../_images/_sidebar/TagsIcon";
import ActivityIcon from "../_images/_sidebar/ActivityIcon";
import AboutIcon from "../_images/_sidebar/AboutIcon";
import ContactIcon from "../_images/_sidebar/ContactIcon";

function Sidebar({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
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
            icon="/icons/plus.svg"
            alt=""
          >
            New Project
          </Button>

          {/* sidebar links */}
          <div className="flex flex-col flex-1">
            <SidebarItems
              items={[
                {
                  label: "Dashboard",
                  icon: DashboardIcon,
                  href: "/",
                },
                {
                  label: "Projects",
                  icon: ProjectsIcon,
                  href: "/projects",
                },
                {
                  label: "Tags",
                  icon: TagsIcon,
                  href: "/tags",
                },
                {
                  label: "Activity",
                  icon: ActivityIcon,
                  href: "/activity",
                },
              ]}
            />
            <div className="mt-auto">
              <SidebarItems
                items={[
                  {
                    label: "About",
                    icon: AboutIcon,
                    href: "/about",
                  },
                  {
                    label: "Contact",
                    icon: ContactIcon,
                    href: "/contact",
                  },
                ]}
              />
            </div>
          </div>

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
