import Sidebar from "../_components/_layout/Sidebar";
import bgWaves from "@/public/bg/waves.svg";
import Image from "next/image";

export default function AppLayout({ children }) {
  return (
    <Sidebar>
      <div className="relative flex-1 p-4">
        <Image
          src={bgWaves}
          fill
          alt=""
          className="object-cover object-top pointer-events-none"
        />
        <main className="relative z-5 px-4 lg:px-10 xl:px-16 2xl:px-36">
          {children}
        </main>
      </div>
    </Sidebar>
  );
}
