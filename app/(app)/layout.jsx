import Sidebar from "@/components/layout/Sidebar";
import bgWaves from "@/public/bg/spotlight.svg";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

import { ToastContainer, Slide } from "react-toastify";

export default function AppLayout({ children }) {
  return (
    // note: Header is nested inside Sidebar because I'm using the DaisyUI sidebar
    <Sidebar>
      <div className="flex-1 p-4 pb-10">
        <Image
          src={bgWaves}
          fill
          alt=""
          className="object-cover object-top pointer-events-none"
        />

        <main className="relative z-5 px-4 lg:px-10 xl:px-16 2xl:px-36 flex-1 w-full">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            closeOnClick
            pauseOnFocusLoss={false}
            theme="dark"
            limit={3}
            closeButton={false}
            transition={Slide}
          />
          {children}
        </main>
      </div>
      <Footer />
    </Sidebar>
  );
}
