import Sidebar from "../_components/_layout/Sidebar";

export default function AppLayout({ children }) {
  return (
    <Sidebar>
      <div className="flex-1 p-4">
        <main>{children}</main>
      </div>
    </Sidebar>
  );
}
