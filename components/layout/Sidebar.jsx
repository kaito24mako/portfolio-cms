import Image from "next/image";

import Header from "./Header";
import SidebarItems from "@/components/features/layout/SidebarItems";
import SidebarProfileBtn from "@/components/features/layout/SidebarProfileBtn";
import AboutIcon from "@/components/icons/sidebar/AboutIcon";
import ActivityIcon from "@/components/icons/sidebar/ActivityIcon";
import ContactIcon from "@/components/icons/sidebar/ContactIcon";
import DashboardIcon from "@/components/icons/sidebar/DashboardIcon";
import ProjectsIcon from "@/components/icons/sidebar/ProjectsIcon";
import TagsIcon from "@/components/icons/sidebar/TagsIcon";
import Button from "@/components/ui/button/Button";

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
                    label: "API Guide",
                    icon: AboutIcon,
                    href: "/guide",
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
