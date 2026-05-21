"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function SidebarItems({ items }) {
  const pathname = usePathname();
  console.log(pathname);

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
