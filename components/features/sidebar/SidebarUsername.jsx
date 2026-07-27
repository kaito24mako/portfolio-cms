import { requireCookieAuth } from "@/lib/auth";

async function SidebarUsername() {
  const user = await requireCookieAuth();

  return (
    <div className="mx-5 py-5 is-drawer-close:hidden">
      <p className="text-sm">
        {user.firstName} {user.lastName}
      </p>
      <p className="text-xs opacity-80">{user.username}</p>
    </div>
  );
}

export default SidebarUsername;
