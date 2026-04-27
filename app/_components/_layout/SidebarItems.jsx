function SidebarItems({ items }) {
  return (
    <ul className="menu w-full grow">
      {items.map(({ label, icon: Icon, href }) => (
        <li key={label}>
          <button
            className="py-3 is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip={label}
          >
            <Icon />
            <span className="is-drawer-close:hidden">{label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SidebarItems;
