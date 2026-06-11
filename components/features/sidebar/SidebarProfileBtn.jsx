import UserIcon from "@/components/icons/sidebar/UserIcon";
import { requireCookieAuth } from "@/lib/auth";

async function SidebarProfileBtn() {
  const user = await requireCookieAuth();

  return (
    <button className="flex items-center gap-5 mx-5 py-8" aria-label="Profile">
      <UserIcon />

      <div className="flex flex-col items-start is-drawer-close:hidden">
        <p className="text-sm">
          {user.firstName} {user.lastName}
        </p>
        <p className="text-xs opacity-80">{user.username}</p>
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
