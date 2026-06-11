import bgWaves from "@/public/bg/spotlight.svg";
import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <div className="flex-1 p-4 pb-10">
      <Image
        src={bgWaves}
        fill
        alt=""
        className="object-cover object-top pointer-events-none"
      />
      <main className="relative z-5 px-4 lg:px-10 xl:px-16 2xl:px-36 flex-1 w-full">
        {children}
      </main>
    </div>
  );
}
