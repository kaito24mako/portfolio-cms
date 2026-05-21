"use client";

import SidebarItems from "./SidebarItems";
import AboutIcon from "@/components/icons/sidebar/AboutIcon";
import DataIcon from "@/components/icons/sidebar/DataIcon";
import ActivityIcon from "@/components/icons/sidebar/ActivityIcon";
import ContactIcon from "@/components/icons/sidebar/ContactIcon";
import DashboardIcon from "@/components/icons/sidebar/DashboardIcon";
import ProjectsIcon from "@/components/icons/sidebar/ProjectsIcon";
import TagsIcon from "@/components/icons/sidebar/TagsIcon";

function SidebarList() {
  return (
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
              label: "API guide",
              icon: DataIcon,
              href: "/guide",
            },
            {
              label: "About us",
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
  );
}

export default SidebarList;
