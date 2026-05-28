"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

function SidebarItems({ items }) {
  // pathname used to change color of sidebar item depending on if its active
  const pathname = usePathname();

  return (
    <ul className="menu w-full grow">
      {items.map(({ label, icon: Icon, href }) => {
        const isActive = pathname === href;

        return (
          <li key={label}>
            <Link
              href={href}
              className={`py-3 is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-open:tooltip-left ${
                isActive && "bg-gray-400/35"
              }`}
              data-tip={label}
              aria-label={label}
            >
              <Icon />
              <span className="is-drawer-close:hidden">{label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SidebarItems;
