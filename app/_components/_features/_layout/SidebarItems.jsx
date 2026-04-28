import Link from "next/link";

function SidebarItems({ items }) {
  return (
    <ul className="menu w-full grow">
      {items.map(({ label, icon: Icon, href }) => (
        <li key={label}>
          <Link
            href={href}
            className="py-3 is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-open:tooltip-left"
            data-tip={label}
          >
            <Icon />
            <span className="is-drawer-close:hidden">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SidebarItems;
